import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import { companyProfile } from "./data.js";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail, createUser, saveOrder, getOrdersByUserId, getAllOrders, updateOrderStatus } from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

// Email Transporter Configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

let transporter = createTransporter();

// Verify transporter on startup
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.error("Email Transporter Verification Error:", error.message);
      console.error("Make sure you are using an App Password if using Gmail/Outlook.");
    } else {
      console.log("Email Transporter is ready to send notifications.");
    }
  });
} else {
  console.warn("Email credentials missing in .env. Email notifications will be disabled.");
}

const sendNotificationEmail = async (lead) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("Email credentials not set. Skipping email notification.");
    return;
  }

  const mailOptions = {
    from: `"SHNOOR Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    cc: process.env.EMAIL_USER, // Send a copy to the sender for verification
    subject: `🔔 NEW ENQUIRY: ${lead.name} - SHNOOR International`,
    text: `
      --- SHNOOR INTERNATIONAL LLC ---
      NEW PROJECT ENQUIRY RECEIVED
      
      Details:
      - Name: ${lead.name}
      - Email: ${lead.email}
      - Phone: ${lead.phone}
      - Company: ${lead.company || "N/A"}
      - Message: ${lead.message}

      Sent on: ${new Date().toLocaleString()}
    `,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a202c; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B1121; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">SHNOOR INTERNATIONAL</h2>
          <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.8;">New Project Enquiry Received</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td><td style="padding: 8px 0;">${lead.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${lead.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td style="padding: 8px 0;">${lead.phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td style="padding: 8px 0;">${lead.company || "N/A"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f7fafc; border-radius: 6px; border-left: 4px solid #d1a454;">
            <p style="margin: 0 0 10px; font-weight: bold; color: #4a5568;">Message:</p>
            <p style="margin: 0; color: #2d3748;">${lead.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        <div style="background-color: #edf2f7; padding: 15px; text-align: center; font-size: 12px; color: #718096;">
          This message was sent automatically from the SHNOOR International website.
          <br/>Date: ${new Date().toLocaleString()}
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Notification email sent to ${mailOptions.to}`);
  } catch (error) {
    console.error("Error sending notification email:", error);
  }
};

app.get("/api/health", async (_request, response) => {
  response.json({
    status: "ok",
    emailReady: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)
  });
});

app.get("/api/ping", (req, res) => res.send("pong"));

app.get("/api/company", (_request, response) => {
  response.json(companyProfile);
});

app.get("/api/services/:slug", (request, response) => {
  const service = companyProfile.services.find((item) => item.slug === request.params.slug);

  if (!service) {
    response.status(404).json({
      message: "Service not found."
    });
    return;
  }

  response.json(service);
});

app.post("/api/contact", async (request, response) => {
  console.log("Incoming contact request:", request.body);
  const { name, phone, email, company, message } = request.body ?? {};

  if (!name || !phone || !email || !message) {
    console.warn("Missing required fields:", { name, phone, email, message });
    response.status(400).json({
      message: "Name, phone, email, and message are required."
    });
    return;
  }

  // Send the email notification
  await sendNotificationEmail({ name, phone, email, company, message });

  response.status(201).json({
    message: "Enquiry processed successfully."
  });
});

app.get("/api/admin/leads", async (request, response) => {
  response.json({
    message: "Lead storage is disabled. Enquiries are sent via email only."
  });
});

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_local_dev_12345";

// Auth routes
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }
  
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await createUser(name, email, passwordHash);
    
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });
    
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email === "admin@shnoor.com" && password === "admin 123") {
    const token = jwt.sign({ id: 'admin', email: 'admin@shnoor.com', role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({
      message: "Admin login successful",
      token,
      user: { id: 'admin', name: 'Admin', email: 'admin@shnoor.com', role: 'admin' }
    });
  }
  
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Middleware for auth
const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Orders routes
app.post("/api/orders", requireAuth, async (req, res) => {
  const { items, total } = req.body;
  if (!items || !items.length || total === undefined) {
    return res.status(400).json({ message: "Items and total are required" });
  }
  
  try {
    const order = await saveOrder(req.user.id, items, total);
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ message: "Server error while placing order" });
  }
});

app.get("/api/orders", requireAuth, async (req, res) => {
  try {
    const orders = await getOrdersByUserId(req.user.id);
    res.json(orders);
  } catch (error) {
    console.error("Fetch orders error:", error);
    res.status(500).json({ message: "Server error while fetching orders" });
  }
});

app.put("/api/orders/:id/pay", requireAuth, async (req, res) => {
  try {
    const order = await updateOrderStatus(req.params.id, 'Paid');
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order marked as paid successfully", order });
  } catch (error) {
    console.error("Payment update error:", error);
    res.status(500).json({ message: "Server error while updating payment status" });
  }
});

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.get("/api/admin/orders", requireAdmin, async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (error) {
    console.error("Fetch all orders error:", error);
    res.status(500).json({ message: "Server error while fetching all orders" });
  }
});

app.put("/api/admin/orders/:id/status", requireAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await updateOrderStatus(req.params.id, status);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order updated successfully", order });
  } catch (error) {
    console.error("Update order status error:", error);
    res.status(500).json({ message: "Server error while updating order status" });
  }
});

const server = app.listen(port, () => {
  console.log(`SHNOOR backend running on http://localhost:${port}`);

  // Start Python Chatbot Backend Gracefully
  const pythonBackendPath = path.resolve(__dirname, "../../SHNOOR-CHATBOT/backend");
  console.log(`Attempting to start Python Chatbot Backend at ${pythonBackendPath}...`);

  const pythonExe = process.platform === "win32" 
    ? path.resolve(pythonBackendPath, "venv", "Scripts", "python.exe")
    : path.resolve(pythonBackendPath, "venv", "bin", "python");

  try {
    const pythonProcess = spawn(pythonExe, ['main.py'], {
      cwd: pythonBackendPath
    });

    pythonProcess.stdout.on('data', (data) => {
      process.stdout.write(`[Chatbot]: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      process.stderr.write(`[Chatbot]: ${data}`);
    });

    pythonProcess.on('error', (error) => {
      console.warn(`[Chatbot] Warning: Failed to start Python backend. The e-commerce site will continue running without it. Error: ${error.message}`);
    });

    pythonProcess.on('close', (code) => {
      console.log(`Chatbot backend exited with code ${code}`);
    });

    app.set('pythonProcess', pythonProcess);
  } catch (error) {
    console.warn(`[Chatbot] Warning: Could not spawn python process. Continuing without Chatbot. Error: ${error.message}`);
  }
});

process.on('SIGINT', () => {
  const pythonProcess = app.get('pythonProcess');
  if (pythonProcess) pythonProcess.kill();
  server.close(() => process.exit(0));
});

process.on('SIGTERM', () => {
  const pythonProcess = app.get('pythonProcess');
  if (pythonProcess) pythonProcess.kill();
  server.close(() => process.exit(0));
});

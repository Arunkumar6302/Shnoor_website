import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import { companyProfile } from "./data.js";

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

const server = app.listen(port, () => {
  console.log(`SHNOOR backend running on http://localhost:${port}`);
});

process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});

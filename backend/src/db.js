import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;
const memoryLeads = [];
const memoryUsers = [];
const memoryOrders = [];

const connectionString = process.env.DATABASE_URL;

const pool = connectionString
  ? new Pool({
      connectionString
    })
  : null;

export async function saveLead(lead) {
  if (!pool) {
    const savedLead = {
      id: memoryLeads.length + 1,
      createdAt: new Date().toISOString(),
      ...lead
    };

    memoryLeads.push(savedLead);
    return savedLead;
  }

  const query = `
    insert into contact_leads (name, phone, email, company, message)
    values ($1, $2, $3, $4, $5)
    returning id, name, phone, email, company, message, created_at
  `;

  const values = [lead.name, lead.phone, lead.email, lead.company || null, lead.message];
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getLeadCount() {
  if (!pool) {
    return memoryLeads.length;
  }

  const result = await pool.query("select count(*)::int as count from contact_leads");
  return result.rows[0].count;
}

export async function listLeads() {
  if (!pool) {
    return [...memoryLeads].reverse();
  }

  const result = await pool.query(`
    select id, name, phone, email, company, message, created_at
    from contact_leads
    order by created_at desc
  `);

  return result.rows;
}

export async function getUserByEmail(email) {
  if (!pool) {
    return memoryUsers.find(u => u.email === email);
  }
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
}

export async function createUser(name, email, password_hash) {
  if (!pool) {
    const newUser = {
      id: memoryUsers.length + 1,
      name,
      email,
      password_hash,
      created_at: new Date().toISOString()
    };
    memoryUsers.push(newUser);
    return newUser;
  }
  const query = `
    INSERT INTO users (name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, created_at
  `;
  const result = await pool.query(query, [name, email, password_hash]);
  return result.rows[0];
}

export async function saveOrder(userId, items, total) {
  if (!pool) {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      order_number: `ORD-${Date.now()}`,
      user_id: userId,
      items: items,
      total,
      status: 'Pending',
      created_at: new Date().toISOString()
    };
    memoryOrders.push(newOrder);
    return newOrder;
  }
  const query = `
    INSERT INTO orders (order_number, user_id, items, total, status)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  const orderNumber = `ORD-${Date.now()}`;
  const result = await pool.query(query, [orderNumber, userId, JSON.stringify(items), total, 'Pending']);
  return result.rows[0];
}

export async function getOrdersByUserId(userId) {
  if (!pool) {
    return memoryOrders.filter(o => o.user_id === userId).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }
  const result = await pool.query("SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC", [userId]);
  return result.rows;
}

export async function getAllOrders() {
  if (!pool) {
    return memoryOrders.map(o => {
      const user = memoryUsers.find(u => u.id === o.user_id);
      return { ...o, user_email: user ? user.email : 'Unknown', user_name: user ? user.name : 'Unknown' };
    }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }
  const result = await pool.query(`
    SELECT o.*, u.email as user_email, u.name as user_name 
    FROM orders o 
    JOIN users u ON o.user_id = u.id 
    ORDER BY o.created_at DESC
  `);
  return result.rows;
}

export async function updateOrderStatus(orderId, status) {
  if (!pool) {
    const order = memoryOrders.find(o => o.id === orderId || o.order_number === orderId);
    if (order) {
      order.status = status;
      return order;
    }
    return null;
  }
  const query = `
    UPDATE orders 
    SET status = $1 
    WHERE id::text = $2::text OR order_number = $2::text 
    RETURNING *
  `;
  const result = await pool.query(query, [status, orderId]);
  return result.rows[0];
}


import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;
const memoryLeads = [];

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

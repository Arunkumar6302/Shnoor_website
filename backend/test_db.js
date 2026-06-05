import pg from 'pg';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

async function setupDatabase() {
  try {
    console.log("Connecting to database:", connectionString.replace(/:[^:@]+@/, ':***@'));
    
    // Read the schema file
    const schemaPath = path.join(__dirname, 'src', 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema to create tables
    console.log("Running schema to create tables...");
    await pool.query(schemaSql);
    
    console.log("Database connected successfully and tables are ready!");
    
    // Test a simple query to ensure everything works
    const res = await pool.query('SELECT NOW() as current_time');
    console.log("Test Query Result (Server Time):", res.rows[0].current_time);
    
  } catch (error) {
    console.error("Database connection/setup failed:", error.message);
  } finally {
    await pool.end();
  }
}

setupDatabase();

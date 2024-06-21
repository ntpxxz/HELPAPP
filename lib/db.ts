import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'rith_it',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345',
});

export async function query({ query = "string", values = [] }) {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.execute(query, values);
    connection.release(); // Release connection back to the pool
    return results;
  } catch (error) {
    // Handle errors
  }
}

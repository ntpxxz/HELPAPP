import mysql from "mysql2/promise";

export default async function handler(req, res) {
  let connection;

  try {
    // Read database credentials from environment variables
    const dbConfig = {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", // Optional
    };

    connection = await mysql.createConnection(dbConfig);

    const query = "SELECT job_id, job_date FROM jobscase";
    const values: never[] = []; // No parameters in this query

    const [data] = await connection.execute(query, values);

    res.status(200).json({ jobscase: data });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" }); // Generic error message for user
  } finally {
    if (connection) await connection.end(); // Ensure connection is closed
  }
}

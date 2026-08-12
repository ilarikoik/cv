import pool from "./db";

export async function getComments() {
  const result = await pool.query(
    "SELECT * FROM comments ORDER BY created_at DESC"
  );
  return result.rows;
}

export async function createComment(message: string) {
    const result = await pool.query(
        "INSERT INTO comments (message) VALUES ($1) RETURNING *",
        [message]
    );
    return result.rows[0];
    }
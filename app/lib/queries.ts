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

export async function updateClicks(name: string) {
    const result = await pool.query(
        `INSERT INTO project_clicks (name, clicks)
         VALUES ($1, 1)
         ON CONFLICT (name)
         DO UPDATE SET clicks = project_clicks.clicks + 1
         RETURNING *`,
        [name]
    );
    return result.rows;
}
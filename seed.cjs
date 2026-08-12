require("dotenv").config();
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

async function run() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const hash = await bcrypt.hash("daixo", 10);

  await pool.query(
    "INSERT INTO admin_user (name, password_hash) VALUES ($1, $2)",
    ["Ilari", hash]
  );

  console.log("Käyttäjä luotu, hash:", hash);
  await pool.end();
}

run();
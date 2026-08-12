import bcrypt from "bcryptjs";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import pool from "./app/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        // username: {},
        password: {},
      },

      async authorize(credentials) {
      
        const result = await pool.query(
          "SELECT * FROM admin_user LIMIT 1"
        );
        const user = result.rows[0];

        if (!user) return null;

        const valid = await bcrypt.compare(
          credentials.password as string,
          user.password_hash
        );

        if (!valid) return null;

        return { id: String(user.id), name: user.name };
      },
    }),
  ],
});
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminPageLogin() {
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", password);
    const result = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      setPassword('');
      return;
    }

    window.location.href = "/admin/dashboard";
  };

  return (
    <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-4">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-xl border border-black/10 bg-white/50 px-4 py-3 outline-none focus:border-accent-500 dark:border-white/10 dark:bg-white/5"
      />

      <button
        type="submit"
        className="rounded-xl bg-accent-500 px-4 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Login
      </button>
    </form>
  );
}
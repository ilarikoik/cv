'use client'
import { signOut } from "next-auth/react";

export default function AdminPageLogOut() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/admin" })}
      className="mb-5 rounded-full bg-red-300 px-4 py-2 font-mono text-sm"
    >
      Log Out
    </button>
  );
}
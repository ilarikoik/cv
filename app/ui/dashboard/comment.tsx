"use client";

import { useState } from "react";
import PopUp from "./popUp";

export default function CommentForm() {
  const [message, setMessage] = useState("");

  
  return (
    <form className="flex h-fit flex-col gap-4 focus:outline-none focus:ring-0">
      <textarea
        name="message"
        rows={10}
        placeholder="Whats on your mind?"
        className="w-full resize-none bg-black/10 dark:bg-white/15 rounded-xl border-ink-950/10  p-4 outline-none transition dark:border-paper-50/10 dark:bg-ink-900/50 "
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />

      <PopUp message={message} setMessage={setMessage} className="cursor-pointer self-end px-6 py-3 text-sm font-semibold transition  hover:bg-black/10 dark:hover:bg-white/15 rounded-2xl" />
    </form>
  );
}

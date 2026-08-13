"use client";
import { Mail, Check } from "lucide-react";
import { useState } from "react";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ilari.koik@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={copyEmail}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 transition hover:-translate-y-1 hover:bg-accent-500 hover:text-white dark:border-white/10 dark:bg-white/5"
        aria-label="Copy email"
      >
        {copied ? <Check size={17} /> : <Mail size={17} />}
      </button>

      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 -top-9 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white transition-all duration-200 dark:bg-white dark:text-black ${
          copied ? "opacity-100" : "opacity-0 translate-y-1"
        }`}
      >
        Copied!
      </span>
    </div>
  );
}
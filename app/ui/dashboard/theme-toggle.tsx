"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-16 rounded-full bg-ink-800/10 dark:bg-paper-50/10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Vaihda vaaleaan teemaan" : "Vaihda tummaan teemaan"}
      className="group relative flex h-9 w-16 items-center rounded-full border border-ink-950/10 bg-paper-100 px-1 transition-colors dark:border-paper-50/10 dark:bg-ink-800"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 shadow-sm transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}

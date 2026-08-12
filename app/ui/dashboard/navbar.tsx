
"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "PROFILE", href: "/#hero" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "SKILLS", href: "/#skills" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/30 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-black/70 dark:text-white/80"
        >
          IK<span className="text-accent-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-mono text-xs tracking-wide text-black/50 transition hover:text-black dark:text-white/50 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/10 px-3 py-2 text-sm dark:border-white/10"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-white/40 px-6 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-black/30 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-black/60 dark:text-white/60"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

// "use client";

// import { useState } from "react";
// import ThemeToggle from "./theme-toggle";
// import Link from "next/link";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-white/20 backdrop-blur-md dark:border-white/10 dark:bg-black/20 shadow-md">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ">
        
//         <a
//           href="#"
//           className="text-2xl font-semibold text-gray-900 dark:text-white"
//         >
//           IK
//         </a>

//         <div className="hidden w-4/5 justify-end gap-6 md:flex">
//           <ul className="flex items-center gap-6">
//             <li>
//               <Link
//                 href="/#hero"
//                 className="text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
//               >
//                 PROFILE
//               </Link>
//             </li>

//             <li>
//               <a
//                 href="/#projects"
//                 className="text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
//               >
//                 PROJECTS
//               </a>
//             </li>

//             <li>
//               <a
//                 href="/#skills"
//                 className="text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
//               >
//                 SKILLS
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="hidden md:flex">
//           <ThemeToggle />
//         </div>

//         <div className="flex items-center gap-2 md:hidden">
//           <ThemeToggle />

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="rounded-md p-2 text-gray-800 hover:bg-black/10 dark:text-white dark:hover:bg-white/10"
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="border-t border-black/10 px-4 py-4 dark:border-white/10 md:hidden">
//           <ul className="flex flex-col gap-4">
//             <li>
//               <a
//                 href="#"
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-gray-700 dark:text-gray-300"
//               >
//                 Home
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-gray-700 dark:text-gray-300"
//               >
//                 Profile
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-gray-700 dark:text-gray-300"
//               >
//                 Settings
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


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

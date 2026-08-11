// import Link from "next/link";

// const PROJECTS = [
//     {
//       title: "Chrome extension for autofilling forms",
//       description: "Autofills forms with labels and values from a database using React, Spring Boot, and SQL.",
//       tags: ["React", "Spring Boot", "SQL"],
//       href: "/projects/chrome-extension",
//     },
//     {
//       title: "Stock Portfolio Tracker",
//       description: "Dashboard for tracking stock portfolios with real-time data and analytics, like profit/loss, win rate, and more.",
//       tags: ["TypeScript", "React", "Java Spring Boot", "SQL"],
//       href: "/projects/stocks",
//     },
//     {
//       title: "Inventory Management System Prototype for Real Company",
//       description: "Automates order sorting and optimizes material usage in the cutting process",
//       tags: ["Python"],
//       href: "/projects/prototype",
//     }
//   ];
  
//   export function Projects() {
//     return (
//       <section
//         id="projects"
//         className="border-t  py-24 "
//       >
//         <div className="mx-auto max-w-6xl px-6">
//           <p className="font-mono text-accent-500 text-2xl">Projects</p>
       
  
//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             {PROJECTS.map((project) => (
//               <Link 
//               key={project.title}
//               href={project.href}
//               className="text-lg group rounded-2xl p-6 bg-black/10 hover:bg-black/15 dark:bg-white/10 hover:shadow-lg hover:dark:bg-white/20 transition-shadow"
//               >
//                 <div className="mb-4 h-32 rounded-xl from-accent-500/20 to-accent-300/10 bg-red-300" />
//                 <p className="hover:underline">
//                   {project.title}
//                 </p>
//                 <p className="mt-2 text-sm">
//                   {project.description}
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                     key={tag}
//                     className="rounded-full px-3 py-1 font-mono text-xs "
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                   </Link>
//               // </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
  



import Link from "next/link";

const PROJECTS = [
  {
    number: "01",
    title: "Smart Job Application Autofill",
    description:
      "Chrome extension prototype that automatically fills job application forms using saved profile data.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    href: "/projects/chrome-extension",
  },
  {
    number: "02",
    title: "Stock Portfolio Tracker",
    description:
      "Dashboard for tracking stock portfolios with performance metrics, profit/loss and analytics.",
    tags: ["React", "TypeScript", "Spring Boot", "SQL"],
    href: "/projects/stocks",
  },
  {
    number: "03",
    title: "Production Order Processing",
    description:
      "Backend system developed for a real manufacturing company to process and manage production orders.",
    tags: ["Python", "Flask", "PostgreSQL", "Docker"],
    href: "/projects/prototype",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-black/10 py-24 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-sm text-accent-500">
              02 / PROJECTS
            </p>

            <h2 className="mt-3 text-3xl font-bold text-black/70 dark:text-white/80">
              Selected work
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-black/10 bg-black/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:bg-black/10 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent-500">
                  {project.number}
                </span>

                <span className="text-black/30 transition group-hover:translate-x-1 group-hover:text-accent-500 dark:text-white/30">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-black/70 transition group-hover:text-accent-500 dark:text-white/80">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/40 dark:text-white/50">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/5 px-3 py-1 font-mono text-[11px] text-black/50 dark:bg-white/5 dark:text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

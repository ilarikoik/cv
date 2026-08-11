// const SKILLS = [
//     {
//       group: "Frontend",
//       items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
//     },
//     {
//       group: "Backend",
//       items: ["Java", "Spring Boot", "REST API:t", "SQL"],
//     },
//     {
//       group: "Tools",
//       items: ["Git", "Docker (Basics)", "Postman", "VS Code"],
//     },
//   ];
  
//   export function Skills() {
//     return (
//       <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
//         <p className="font-mono text-accent-500 text-2xl">Skills</p>
       
  
//         <div className="mt-12 grid gap-6 md:grid-cols-3 w-full bg-black/10 rounded-xl dark:bg-white/10">
//           {SKILLS.map((group) => (
//             <div
//               key={group.group}
//               className=" p-6 "
//             >
//               <h3 className="font-display text-lg ">
//                 {group.group}
//               </h3>
//               <ul className="font-mono mt-4 space-y-2 text-sm text-ink-950/70 dark:text-paper-50/70">
//                 {group.items.map((item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <span className="" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  

const SKILLS = [
  {
    number: "01",
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    group: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "SQL", "PostgreSQL"],
  },
  {
    number: "03",
    group: "Tools",
    items: ["Git", "Docker", "Postman", "VS Code"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-black/10 px-6 py-24 dark:border-white/10"
    >
      <p className="font-mono text-sm text-accent-500">
        03 / SKILLS
      </p>

      <h2 className="mt-3 text-3xl font-bold text-black/70 dark:text-white/80">
        Technologies I work with
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {SKILLS.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-black/10 bg-black/5 p-6 transition hover:-translate-y-1 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-accent-500">
                {group.number}
              </span>

              <span className="h-px w-12 bg-black/10 dark:bg-white/10" />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-black/70 dark:text-white/80">
              {group.group}
            </h3>

            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-mono text-sm text-black/50 dark:text-white/50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

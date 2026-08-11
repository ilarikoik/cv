const SKILLS = [
    {
      group: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      group: "Backend",
      items: ["Java", "Spring Boot", "REST API:t", "SQL"],
    },
    {
      group: "Tools",
      items: ["Git", "Docker (Basics)", "Postman", "VS Code"],
    },
  ];
  
  export function Skills() {
    return (
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-accent-500 text-2xl">Skills</p>
       
  
        <div className="mt-12 grid gap-6 md:grid-cols-3 w-full bg-black/10 rounded-xl dark:bg-white/10">
          {SKILLS.map((group) => (
            <div
              key={group.group}
              className=" p-6 "
            >
              <h3 className="font-display text-lg ">
                {group.group}
              </h3>
              <ul className="font-mono mt-4 space-y-2 text-sm text-ink-950/70 dark:text-paper-50/70">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="" />
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
  
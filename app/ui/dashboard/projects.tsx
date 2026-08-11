import Link from "next/link";

const PROJECTS = [
    {
      title: "Chrome extension for autofilling forms",
      description: "Autofills forms with labels and values from a database using React, Spring Boot, and SQL.",
      tags: ["React", "Spring Boot", "SQL"],
      href: "/projects/chrome-extension",
    },
    {
      title: "Stock Portfolio Tracker",
      description: "Dashboard for tracking stock portfolios with real-time data and analytics, like profit/loss, win rate, and more.",
      tags: ["TypeScript", "React", "Java Spring Boot", "SQL"],
      href: "/projects/stocks",
    },
    {
      title: "Inventory Management System Prototype for Real Company",
      description: "Automates order sorting and optimizes material usage in the cutting process",
      tags: ["Python"],
      href: "/projects/prototype",
    }
  ];
  
  export function Projects() {
    return (
      <section
        id="projects"
        className="border-t  py-24 "
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-accent-500 text-2xl">Projects</p>
       
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <Link 
              key={project.title}
              href={project.href}
              className="text-lg group rounded-2xl p-6 bg-black/10 hover:bg-black/15 dark:bg-white/10 hover:shadow-lg hover:dark:bg-white/20 transition-shadow"
              >
                <div className="mb-4 h-32 rounded-xl from-accent-500/20 to-accent-300/10 bg-red-300" />
                <p className="hover:underline">
                  {project.title}
                </p>
                <p className="mt-2 text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                    key={tag}
                    className="rounded-full px-3 py-1 font-mono text-xs "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  </Link>
              // </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
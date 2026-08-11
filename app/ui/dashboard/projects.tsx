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
              <article
                key={project.title}
                className="group rounded-2xl border border-ink-950/10 bg-paper-50 p-6 transition-all hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg dark:border-paper-50/10 dark:bg-ink-950"
              >
                <div className="mb-4 h-32 rounded-xl from-accent-500/20 to-accent-300/10" />
                <Link 
                href={project.href}
                className="text-lg">
                  {project.title}
                </Link>
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
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
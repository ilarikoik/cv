"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PROJECTS = [
    {
      number: "01",
      status: "yellow",
      title: "Smart Job Application Autofill",
      description:
        "Chrome extension prototype that automatically fills job application forms using saved profile data.",
      tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
      href: "/projects/chrome-extension",
    },
    {
      number: "02",
      status: "green",
      title: "Stock Portfolio Tracker",
      description:
        "Dashboard for tracking stock portfolios with performance metrics, profit/loss and analytics.",
      tags: ["React", "TypeScript", "Spring Boot", "SQL"],
      href: "/projects/stocks",
    },
    {
      number: "03",
      status: "green",
      title: "Production Order Processing",
      description:
        "Backend system developed for a real manufacturing company to process and manage production orders.",
      tags: ["Python", "Flask", "PostgreSQL", "Docker"],
      href: "/projects/prototype",
    },
  ];
  
export default function ProjectButton() {
    const [projectsClicks, setProjectsClicks] = useState<{ [key: string]: number }>({});
   

    const handleClick = async (projectTitle: string) => {
        try {
            await fetch('/api/projectClicks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: projectTitle }),
            });
        } catch (error) {
            console.error('Error updating project clicks:', error);
        }
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projectClicks');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects_clicks');
                }
                const data = await response.json();
                console.log('Fetched projects:', data);
                setProjectsClicks(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    },[]);

    return (
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
            key={project.title}
            href={project.href}
            className="group rounded-2xl border border-black/10 bg-black/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:bg-black/10 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            onClick={() => handleClick(project.title)}
            >
              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-accent-500 mr-3">
                  {project.number}
                </span>
            <span className={`h-3 w-3 rounded-full bg-${project.status}-400/70` }/>
                </div>
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
    );
}
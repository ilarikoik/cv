"use client";

import { useEffect, useState } from "react";
import Card from "./card";

interface ProjectClick {
  name: string;
  clicks: number;
}

export default function ProjectClicks() {
  const [projectsClicks, setProjectsClicks] = useState<ProjectClick[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projectClicks");
        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }
        const data = await response.json();
        setProjectsClicks(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  if (projectsClicks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-sm text-gray-500">Project Clicks</p>
        <p className="mt-1 text-sm text-gray-400">
          No project clicks data available.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        Clicks
      </h1>
      {projectsClicks.map((project) => (
        <Card key={project.name} name={project.name} clicks={project.clicks} />
      ))}
    </div>
  );
}
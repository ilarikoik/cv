"use client";

import { useEffect, useState } from "react";
import Card from "./card";

export default function ProjectClicks() {
  const [projectsClicks, setProjectsClicks] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projectClicks");
        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }
        const data = await response.json();
        console.log("Fetched projects:", data);
        setProjectsClicks(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  if (Object.keys(projectsClicks).length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500">Project Clicks</p>
        <p className="text-sm text-gray-500">
          No project clicks data available.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-gray-500">Project Clicks</p>
      {projectsClicks.map((projectClicks :any ) => (
        <Card
          key={projectClicks.name}
          name={projectClicks.name}
          clicks={projectClicks.clicks}
        />
      ))}
    </div>
  );
}

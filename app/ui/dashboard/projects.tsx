import ProjectButton from "@/app/projects/components/projectButton";


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
<ProjectButton/>
      </div>
    </section>
  );
}

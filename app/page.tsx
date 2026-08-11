import { Footer } from "./ui/dashboard/footer";
import { Hero } from "./ui/dashboard/hero";
import { Projects } from "./ui/dashboard/projects";
import { Skills } from "./ui/dashboard/skills";

export default function Page() {
  return (
    <>
    <main className="min-h-screen bg-background text-foreground">
      <Hero/>
      <Projects/>
      <Skills/>
      <Footer/>
    </main>
    </>
  );
}
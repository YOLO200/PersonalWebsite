import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Navigation } from "@/components/navigation";
import SeasonParticles from "@/components/seasons/SeasonParticles";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <Projects />
        <Skills />
      </main>
      <SeasonParticles pageWide />
    </div>
  );
}

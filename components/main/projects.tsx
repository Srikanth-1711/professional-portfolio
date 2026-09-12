import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => (
  <section id="work" className="section-shell">
    <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Systems built around real engineering problems.</h2><p>Internal work is intentionally described at a high level. Project status is shown exactly as it stands today.</p></div>
    <div className="project-grid">{PROJECTS.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
  </section>
);

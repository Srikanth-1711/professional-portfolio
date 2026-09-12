import { ArrowTopRightOnSquareIcon, LockClosedIcon } from "@heroicons/react/24/outline";

import type { Project } from "@/constants";

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const content = <>
    <div className="project-meta"><span>0{index + 1}</span><span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status === "Internal" && <LockClosedIcon aria-hidden="true" />}{project.status}</span></div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    {project.link && <span className="project-link">View source <ArrowTopRightOnSquareIcon aria-hidden="true" /></span>}
  </>;
  return project.link ? <a className="project-card" href={project.link} target="_blank" rel="noreferrer">{content}</a> : <article className="project-card">{content}</article>;
};

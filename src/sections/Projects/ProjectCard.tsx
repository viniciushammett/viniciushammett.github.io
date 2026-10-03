import { Tag } from "../../components/Tag/Tag"
import type { Project } from "../../types/portfolio"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card ${
        project.featured
          ? "project-card--featured"
          : ""
      }`}
    >
      <div className="project-card__header">
        <span className="project-card__number">
          {project.id}
        </span>

        <span className="project-card__category">
          {project.category}
        </span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <span>
          {project.highlights.join(" • ")}
        </span>
      </div>
    </article>
  )
}

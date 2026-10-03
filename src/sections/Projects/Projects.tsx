import { SectionHeader } from "../../components/SectionHeader/SectionHeader"
import { projects } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"
import "./Projects.css"

export function Projects() {
  return (
    <section
      id="projects"
      className="section section--bordered"
    >
      <div className="container">
        <SectionHeader
          label="SELECTED ENGINEERING WORK"
          title="Production engineering"
          secondLine="across cloud, data and platform systems."
        />

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

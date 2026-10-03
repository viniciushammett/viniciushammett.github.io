import { SectionHeader } from "../../components/SectionHeader/SectionHeader"
import { Tag } from "../../components/Tag/Tag"
import { experience } from "../../data/experience"
import "./Experience.css"

export function Experience() {
  return (
    <section
      id="experience"
      className="experience-section section--bordered"
    >
      <div className="container">
        <SectionHeader
          label="EXPERIENCE"
          title="Operating critical systems"
          secondLine="across cloud environments."
        />

        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-item"
              key={item.id}
            >
              <div className="experience-item__meta">
                <span>{item.category}</span>
                <span>{item.id}</span>
              </div>

              <div className="experience-item__content">
                <h3>{item.role}</h3>

                <p>{item.description}</p>

                <div className="experience-item__tags">
                  {item.highlights.map((highlight) => (
                    <Tag key={highlight}>
                      {highlight}
                    </Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { SectionHeader } from "../../components/SectionHeader/SectionHeader"
import { principles } from "../../data/principles"
import "./Principles.css"

export function Principles() {
  return (
    <section className="section section--bordered">
      <div className="container">
        <SectionHeader
          label="ENGINEERING PRINCIPLES"
          title="How I approach"
          secondLine="reliability and platform work."
        />

        <div className="principles">
          {principles.map((principle) => (
            <article
              className="principle"
              key={principle.id}
            >
              <span>{principle.id}</span>

              <h3>{principle.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

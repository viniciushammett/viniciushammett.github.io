import { SectionHeader } from "../../components/SectionHeader/SectionHeader"
import "./About.css"

export function About() {
  return (
    <section
      id="about"
      className="section section--bordered"
    >
      <div className="container">
        <SectionHeader
          label="ABOUT"
          title="Engineering platforms"
          secondLine="built for real-world operations."
        />

        <div className="about">
          <p className="about__lead">
            I work at the intersection of Site Reliability, Platform
            Engineering and Cloud Infrastructure, helping teams operate
            production systems with greater confidence.
          </p>

          <div className="about__copy">
            <p>
              My background spans infrastructure engineering, cloud
              operations, observability, incident response, automation
              and technical leadership across critical environments.
            </p>

            <p>
              I focus on reducing operational complexity, improving
              reliability and building platforms that give engineering
              teams clearer, safer and more repeatable paths to
              production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

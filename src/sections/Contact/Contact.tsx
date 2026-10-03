import { Button } from "../../components/Button/Button"
import { links } from "../../config/links"
import "./Contact.css"

const opportunityAreas = [
  "Site Reliability Engineering",
  "Platform Engineering",
  "Cloud Infrastructure",
  "DevOps Engineering",
]

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section--bordered"
    >
      <div className="container contact">
        <div className="contact__main">
          <span className="contact__label">
            CONTACT
          </span>

          <h2>
            Let&apos;s build systems
            <br />
            <span>that teams can trust.</span>
          </h2>

          <p>
            Open to opportunities in Site Reliability, Platform
            Engineering, Cloud Infrastructure and DevOps, with a focus
            on production systems, automation and operational
            excellence.
          </p>

          <div className="contact__actions">
            <Button
              href={links.linkedin}
              external
            >
              LinkedIn
            </Button>

            <Button
              href={links.github}
              variant="secondary"
              external
            >
              GitHub
            </Button>
          </div>
        </div>

        <aside className="contact__aside">
          <span className="contact__aside-label">
            OPEN TO
          </span>

          <ul>
            {opportunityAreas.map((area) => (
              <li key={area}>
                {area}
              </li>
            ))}
          </ul>

          <p>
            São Paulo, Brazil
            <br />
            Remote &amp; hybrid opportunities
          </p>
        </aside>
      </div>
    </section>
  )
}

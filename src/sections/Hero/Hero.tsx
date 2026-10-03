import { ArchitecturePanel } from "../../components/ArchitecturePanel/ArchitecturePanel"
import { Button } from "../../components/Button/Button"
import { links } from "../../config/links"
import "./Hero.css"

export function Hero() {
  return (
    <section
      id="top"
      className="hero container"
      aria-labelledby="hero-title"
    >
      <div className="hero__copy">
        <span className="hero__eyebrow">
          SITE RELIABILITY / PLATFORM ENGINEER
        </span>

        <h1 id="hero-title">
          Building reliable
          <br />
          platforms for
          <br />
          <span>production at scale.</span>
        </h1>

        <p className="hero__description">
          I design and operate cloud-native platforms with a focus on
          reliability, observability, automation and developer experience.
        </p>

        <div className="hero__actions">
          <Button href="#projects">
            View Engineering Work
          </Button>

          <Button
            href={links.github}
            variant="secondary"
            external
          >
            GitHub
          </Button>
        </div>

        <div className="hero__availability">
          <span
            className="hero__status-dot"
            aria-hidden="true"
          />

          Available for new opportunities
        </div>
      </div>

      <ArchitecturePanel />
    </section>
  )
}

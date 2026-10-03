import { SectionHeader } from "../../components/SectionHeader/SectionHeader"
import { capabilities } from "../../data/capabilities"
import "./Capabilities.css"

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section section--bordered"
    >
      <div className="container">
        <SectionHeader
          label="CAPABILITIES"
          title="What I help"
          secondLine="engineering teams solve."
        />

        <div className="capabilities">
          {capabilities.map((capability) => (
            <article
              className="capability"
              key={capability.id}
            >
              <div className="capability__number">
                {capability.id}
              </div>

              <div>
                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </div>

              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

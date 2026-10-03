import "./ArchitecturePanel.css"

const platform = [
  "Kubernetes",
  "Terraform",
  "GitOps",
]

const reliability = [
  "SLI / SLO",
  "Incident Response",
  "Observability",
]

const cloud = [
  "Azure",
  "GCP",
  "AWS",
]

export function ArchitecturePanel() {
  return (
    <aside
      className="architecture-panel"
      aria-label="Engineering focus"
    >
      <div className="architecture-panel__header">
        <span>ENGINEERING SYSTEM</span>

        <div className="architecture-panel__status">
          <span aria-hidden="true" />
          Operational
        </div>
      </div>

      <div className="architecture-panel__flow">
        <div className="architecture-node">
          Developer
        </div>

        <span className="architecture-arrow">
          ↓
        </span>

        <div className="architecture-node architecture-node--primary">
          Platform
        </div>

        <span className="architecture-arrow">
          ↓
        </span>

        <div className="architecture-node">
          Production
        </div>
      </div>

      <div className="architecture-panel__grid">
        <div>
          <span className="architecture-panel__label">
            PLATFORM
          </span>

          {platform.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div>
          <span className="architecture-panel__label">
            RELIABILITY
          </span>

          {reliability.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div>
          <span className="architecture-panel__label">
            CLOUD
          </span>

          {cloud.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </aside>
  )
}

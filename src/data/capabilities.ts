export interface Capability {
  id: string
  title: string
  description: string
  items: string[]
}

export const capabilities: Capability[] = [
  {
    id: "01",
    title: "Platform Engineering",
    description:
      "Designing platforms and delivery patterns that reduce operational friction and give engineering teams consistent paths to production.",
    items: [
      "Internal Platforms",
      "Golden Paths",
      "Self-Service",
      "GitOps",
      "Infrastructure Automation",
    ],
  },
  {
    id: "02",
    title: "Site Reliability Engineering",
    description:
      "Improving the reliability and operability of production systems through measurable objectives, automation and disciplined incident practices.",
    items: [
      "SLIs & SLOs",
      "Error Budgets",
      "Incident Response",
      "Operational Readiness",
      "Reliability Engineering",
    ],
  },
  {
    id: "03",
    title: "Cloud Infrastructure",
    description:
      "Designing and operating cloud-native infrastructure with an emphasis on scalability, security, networking and production resilience.",
    items: [
      "Google Cloud",
      "Azure",
      "AWS",
      "Kubernetes",
      "Cloud Networking",
    ],
  },
  {
    id: "04",
    title: "Observability",
    description:
      "Building observability practices that help teams understand system behavior, identify risk and respond to production issues with useful context.",
    items: [
      "Datadog",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Alerting Strategy",
    ],
  },
]

import type { Project } from "../types/portfolio"

export const projects: Project[] = [
  {
    id: "01",
    title: "Cloud-Native Data Platform Modernization",
    category: "PLATFORM ENGINEERING",
    description:
      "Modernized a legacy data integration platform into a secure and production-ready environment on Google Kubernetes Engine, introducing GitOps, cloud-native infrastructure, controlled access and stronger operational visibility.",
    tags: [
      "GKE",
      "Kubernetes",
      "Helm",
      "GitOps",
      "Datadog",
      "OAuth2",
    ],
    highlights: [
      "Platform Modernization",
      "Reliability",
      "Cloud Native",
    ],
    url: "",
    featured: true,
  },
  {
    id: "02",
    title: "Production Airflow Platform Migration",
    category: "DATA PLATFORM / CLOUD",
    description:
      "Migrated and modernized a production Apache Airflow environment on GKE, including a major platform upgrade, workload compatibility changes, custom container images and GitOps-based delivery workflows.",
    tags: [
      "Airflow",
      "GKE",
      "Python",
      "Docker",
      "Helm",
      "GitOps",
    ],
    highlights: [
      "Production Migration",
      "Platform Upgrade",
      "Operational Continuity",
    ],
    url: "",
  },
  {
    id: "03",
    title: "AI Infrastructure Automation on Google Cloud",
    category: "CLOUD AUTOMATION / AI",
    description:
      "Built reusable Terraform automation for conversational AI and enterprise search infrastructure on Google Cloud, enabling consistent and reproducible deployments across multiple environments.",
    tags: [
      "Terraform",
      "GCP",
      "BigQuery",
      "Dialogflow CX",
      "Discovery Engine",
      "AI Infrastructure",
    ],
    highlights: [
      "Infrastructure as Code",
      "Automation",
      "Reusable Architecture",
    ],
    url: "",
  },
]

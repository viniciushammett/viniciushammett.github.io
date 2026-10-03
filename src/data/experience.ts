import type { ExperienceItem } from "../types/portfolio"

export const experience: ExperienceItem[] = [
  {
    id: "01",
    category: "RECENT EXPERIENCE",
    role: "Senior SRE / Cloud Engineer",
    description:
      "Designed, operated and modernized cloud-native production environments with a strong focus on Kubernetes, reliability, observability, automation and secure infrastructure.",
    highlights: [
      "Kubernetes Production Operations",
      "Cloud Infrastructure",
      "Observability",
      "GitOps & Automation",
      "Incident Response",
    ],
  },
  {
    id: "02",
    category: "LEADERSHIP",
    role: "DevOps Coordinator",
    description:
      "Led CloudOps and DevOps operations supporting critical environments, combining technical ownership with incident management, team coordination, hiring and continuous operational improvement.",
    highlights: [
      "Technical Leadership",
      "24/7 Operations",
      "Incident Management",
      "Hiring & Mentoring",
      "Cloud Operations",
    ],
  },
  {
    id: "03",
    category: "ENGINEERING FOUNDATION",
    role: "Infrastructure & Systems Engineering",
    description:
      "Built a broad infrastructure foundation across Linux, Windows, networking, databases and enterprise operations before moving deeper into cloud and reliability engineering.",
    highlights: [
      "Linux",
      "Windows",
      "Networking",
      "SQL",
      "Enterprise Infrastructure",
    ],
  },
]

export interface Principle {
  id: string
  title: string
}

export const principles: Principle[] = [
  {
    id: "01",
    title: "Reliability should be designed into the system, not added after failure.",
  },
  {
    id: "02",
    title: "Observability should provide context and answers, not simply generate more alerts.",
  },
  {
    id: "03",
    title: "Platforms should reduce cognitive load and make the right path the easiest path.",
  },
  {
    id: "04",
    title: "Automation should eliminate repetitive operational work and improve consistency.",
  },
  {
    id: "05",
    title: "Every incident should leave the system better understood and more resilient.",
  },
]

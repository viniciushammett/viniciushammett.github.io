export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  highlights: string[]
  url: string
  featured?: boolean
}

export interface ExperienceItem {
  id: string
  category: string
  role: string
  description: string
  highlights: string[]
}

export interface Metric {
  value: string
  label: string
}

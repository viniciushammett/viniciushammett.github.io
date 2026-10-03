import type { ReactNode } from "react"
import "./Button.css"

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
  external?: boolean
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`button button--${variant}`}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
    >
      {children}
    </a>
  )
}

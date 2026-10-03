import "./SectionHeader.css"

interface SectionHeaderProps {
  label: string
  title: string
  secondLine?: string
}

export function SectionHeader({
  label,
  title,
  secondLine,
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-header__label">{label}</span>

      <h2>
        {title}

        {secondLine && (
          <>
            <br />
            {secondLine}
          </>
        )}
      </h2>
    </header>
  )
}

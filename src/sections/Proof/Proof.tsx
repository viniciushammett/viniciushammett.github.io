import "./Proof.css"

const proof = [
  {
    value: "10+",
    label: "Years in Technology",
  },
  {
    value: "5+",
    label: "Years in SRE",
  },
  {
    value: "3",
    label: "Cloud Platforms",
  },
  {
    value: "24/7",
    label: "Production Operations",
  },
]

export function Proof() {
  return (
    <section
      className="proof section--bordered"
      aria-label="Professional experience summary"
    >
      <div className="container proof__grid">
        {proof.map((item) => (
          <div
            className="proof__item"
            key={item.label}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

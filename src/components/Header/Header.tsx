import { useState } from "react"
import "./Header.css"

const navigation = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header-wrapper">
      <div className="site-header container">
        <a
          className="site-header__logo"
          href="#top"
          aria-label="Vinicius Teixeira - Home"
        >
          VT<span>.</span>
        </a>

        <nav
          className="site-header__nav"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu--open" : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

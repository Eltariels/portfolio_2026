import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/competences', label: 'Compétences' },
  { to: '/experience', label: 'Expérience' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/15 bg-forest-900/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-lg tracking-wide text-gold-400">
          Théo Borella
        </NavLink>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-parchment-200/80 hover:text-gold-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

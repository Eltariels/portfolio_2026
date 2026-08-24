import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', code: '00', end: true },
  { to: '/a-propos', label: 'À propos', code: '01' },
  { to: '/competences', label: 'Compétences', code: '02' },
  { to: '/experience', label: 'Expérience', code: '03' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/15 bg-void-950/85 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="group flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink-100">
          <span className="text-cyan-400 group-hover:text-glow-cyan">T.</span>
          <span>Borella</span>
        </NavLink>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `group flex items-center gap-1.5 border-b-2 px-3 py-2 font-ui text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? 'border-cyan-400 text-cyan-300'
                      : 'border-transparent text-ink-300 hover:border-cyan-400/40 hover:text-cyan-200'
                  }`
                }
              >
                <span className="hidden font-mono text-[0.65rem] text-magenta-400/80 sm:inline">{link.code}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

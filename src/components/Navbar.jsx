import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', code: '00', end: true },
  { to: '/a-propos', label: 'À propos', code: '01' },
  { to: '/competences', label: 'Compétences', code: '02' },
  { to: '/experience', label: 'Expérience', code: '03' },
  { to: '/contact', label: 'Contact', code: '04' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/15 bg-void-950/85 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-ink-100"
        >
          <span className="text-cyan-400 group-hover:text-glow-cyan">T.</span>
          <span>Borella</span>
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex lg:gap-2">
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
                <span className="font-mono text-[0.65rem] text-magenta-400/80">{link.code}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-cyan-400/40 bg-cyan-500/5 lg:hidden"
        >
          <span className={`h-px w-5 bg-cyan-300 transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-cyan-300 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-5 bg-cyan-300 transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* ===== MOBILE / TABLET MENU ===== */}
      <div
        className={`overflow-hidden border-t border-cyan-400/15 bg-void-950/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-2 sm:px-6">
          {links.map((link) => (
            <li key={link.to} className="border-b border-cyan-400/10 last:border-b-0">
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 font-ui text-base font-semibold uppercase tracking-wide transition-colors ${
                    isActive ? 'text-cyan-300' : 'text-ink-200 hover:text-cyan-200'
                  }`
                }
              >
                <span className="font-mono text-xs text-magenta-400/80">{link.code}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-400/15 bg-void-900/60 py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-glow-cyan" />
          Système opérationnel — {profile.name} © {new Date().getFullYear()}
        </p>
        <div className="flex gap-5 font-ui text-sm font-semibold uppercase tracking-wide">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink-300 transition-colors hover:text-cyan-300">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-ink-300 transition-colors hover:text-cyan-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

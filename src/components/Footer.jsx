import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 bg-forest-950/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center text-sm text-parchment-200/70 sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} {profile.name} — Développeur Web Full Stack</p>
        <div className="flex gap-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold-400">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-gold-400">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

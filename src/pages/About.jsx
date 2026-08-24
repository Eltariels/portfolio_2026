import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import CvButtons from '../components/CvButtons'
import { profile, formations } from '../data/profile'

export default function About() {
  return (
    <>
      <Seo
        title="À propos"
        description="Le parcours de Théo Borella : de la découverte du code au collège au Mastère Développement Full Stack, en passant par un BUT MMI à Chambéry."
        path="/a-propos"
      />

      {/* ===== INTRO ===== */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-hud-glow" />
        <div className="mx-auto max-w-3xl">
          <p className="hud-tag mb-4">Dossier 01 — Profil</p>
          <h1 className="font-display text-3xl font-black uppercase text-ink-100 text-glow-cyan sm:text-4xl">
            Mon parcours
          </h1>
          <p className="mt-6 max-w-2xl font-ui text-lg leading-relaxed text-ink-200">
            {profile.bioLong}
          </p>
        </div>
      </section>

      {/* ===== FACTS ===== */}
      <section className="border-y border-cyan-400/10 bg-void-900/40 px-6 py-10">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="stat-tile">
            <p className="stat-label">Localisation</p>
            <p className="stat-value">{profile.location}</p>
          </div>
          <div className="stat-tile">
            <p className="stat-label">Centres d'intérêt</p>
            <p className="stat-value">{profile.hobbies}</p>
          </div>
        </div>
      </section>

      {/* ===== FORMATIONS ===== */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="hud-tag mb-3">Dossier 02 — Cursus</p>
        <div className="hud-divider mb-12">
          <h2 className="font-display text-2xl uppercase text-ink-100">Formations</h2>
        </div>

        <ol className="space-y-10 border-l border-cyan-400/20 pl-8">
          {formations.map((formation) => (
            <li key={formation.degree} className="relative">
              <span className="timeline-node" />
              <p className="font-display text-lg uppercase text-cyan-300">{formation.degree}</p>
              {formation.spec && (
                <p className="mt-1 text-sm text-ink-300">{formation.spec}</p>
              )}
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-magenta-300">
                {formation.period} · {formation.school}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-4">
          <CvButtons primary />
          <Link to="/contact" className="hud-btn-ghost">
            Me contacter
          </Link>
        </div>
      </section>
    </>
  )
}

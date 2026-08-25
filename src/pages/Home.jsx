import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import CvButtons from '../components/CvButtons'
import Scene3D from '../components/hud3d/Scene3D'
import HoloCore from '../components/hud3d/HoloCore'
import { profile } from '../data/profile'

const supportingStats = [
  { label: 'Base', value: profile.base },
  { label: 'Rayon', value: 'Chambéry · Lyon · Grenoble · Annecy' },
  { label: 'Spécialité', value: profile.specialty },
]

const teasers = [
  {
    code: '01',
    to: '/a-propos',
    title: 'À propos',
    text: "Mon parcours, de la 5ème à aujourd'hui, et ce qui m'anime dans le développement web.",
  },
  {
    code: '02',
    to: '/competences',
    title: 'Compétences',
    text: 'Code (React, JS, PHP...) et no-code (WordPress, Elementor, Drupal) — les deux facettes de mon métier.',
  },
  {
    code: '03',
    to: '/experience',
    title: 'Expérience',
    text: 'Trois alternances, des sites vitrines aux plateformes sur-mesure, en agence comme en télétravail.',
  },
  {
    code: '04',
    to: '/contact',
    title: 'Contact',
    text: 'Email, téléphone, LinkedIn — tous les canaux pour me joindre rapidement.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Accueil"
        description="Théo Borella, développeur web full stack & no-code en alternance, basé à Ambérieu-en-Bugey (Ain). Découvrez mon parcours, mes compétences et mes projets."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.name,
          jobTitle: profile.title,
          email: profile.email,
          url: profile.site,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ambérieu-en-Bugey',
            addressRegion: 'Ain',
            addressCountry: 'FR',
          },
          sameAs: [profile.linkedin],
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 text-center sm:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-hud-glow" />
        <Scene3D
          className="absolute inset-y-0 left-1/2 -z-10 w-[520px] max-w-[90vw] -translate-x-1/2 opacity-70"
          camera={{ position: [0, 0, 4], fov: 45 }}
          lights={
            <>
              <ambientLight intensity={0.5} />
              <pointLight position={[3, 3, 3]} intensity={1.5} color="#3fd4ff" />
            </>
          }
        >
          <HoloCore />
        </Scene3D>
        <p className="hud-tag hero-in hero-in-delay-1 mx-auto mb-6 w-fit">Terminal d'identification</p>
        <h1 className="hero-in hero-in-delay-2 mx-auto max-w-4xl font-display text-4xl font-black uppercase leading-tight text-ink-100 text-glow-cyan sm:text-6xl">
          {profile.name}
        </h1>
        <p className="hero-in hero-in-delay-3 mx-auto mt-5 max-w-xl font-ui text-xl font-semibold uppercase tracking-wide text-magenta-300 sm:text-2xl">
          {profile.title}
        </p>
        <p className="hero-in hero-in-delay-4 mx-auto mt-6 max-w-2xl font-ui text-lg text-ink-300">
          {profile.bio}
        </p>
        <div className="hero-in hero-in-delay-5 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/a-propos" className="hud-btn-primary">
            Découvrir mon parcours
          </Link>
          <CvButtons />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-cyan-400/10 bg-void-900/40 px-6 py-12">
        <div className="mx-auto max-w-6xl stat-strip">
          <div className="stat-featured">
            <p className="stat-label">Statut</p>
            <p className="stat-value">{profile.status}</p>
          </div>
          <div className="stat-cols">
            {supportingStats.map((stat) => (
              <div key={stat.label} className="stat-col">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NAVIGATION PANELS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="hud-tag mb-3">Modules</p>
        <div className="hud-divider mb-10">
          <h2 className="font-display text-2xl uppercase text-ink-100">Explorer le dossier</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teasers.map((teaser) => (
            <Link
              key={teaser.to}
              to={teaser.to}
              className="hud-panel hud-corners group flex flex-col gap-3 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-glow-cyan"
            >
              <span className="ghost-index" aria-hidden="true">{teaser.code}</span>
              <span className="relative font-mono text-xs text-magenta-400">{teaser.code}</span>
              <h3 className="relative font-display text-lg uppercase text-cyan-300">{teaser.title}</h3>
              <p className="relative text-sm text-ink-300">{teaser.text}</p>
              <span className="relative mt-auto font-mono text-xs uppercase tracking-widest text-cyan-400 group-hover:text-glow-cyan">
                Accéder →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

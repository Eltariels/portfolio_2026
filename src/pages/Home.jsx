import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { profile } from '../data/profile'

const teasers = [
  {
    to: '/a-propos',
    title: 'À propos',
    text: "Mon parcours, de la 5ème à aujourd'hui, et ce qui m'anime dans le développement web.",
  },
  {
    to: '/competences',
    title: 'Compétences',
    text: 'Code (React, JS, PHP...) et no-code (WordPress, Elementor, Drupal) — les deux facettes de mon métier.',
  },
  {
    to: '/experience',
    title: 'Expérience',
    text: 'Trois alternances, des sites vitrines aux plateformes sur-mesure, en agence comme en télétravail.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Accueil"
        description="Théo Borella, développeur web full stack & no-code en alternance, basé en Savoie. Découvrez mon parcours, mes compétences et mes projets."
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
            addressRegion: 'Savoie',
            addressCountry: 'FR',
          },
          sameAs: [profile.linkedin],
        }}
      />

      <section className="relative overflow-hidden bg-rune-glow px-6 py-28 text-center">
        <p className="rune-divider mx-auto mb-6 max-w-xs font-display text-xs uppercase tracking-[0.3em] text-gold-500">
          {profile.status}
        </p>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-parchment-100 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-display text-lg text-gold-400 sm:text-xl">
          {profile.title}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-parchment-200/80">
          {profile.bio}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/a-propos"
            className="rounded border border-gold-500/50 bg-gold-500/10 px-6 py-3 font-display text-sm uppercase tracking-wide text-gold-300 transition-colors hover:bg-gold-500/20"
          >
            Découvrir mon parcours
          </Link>
          <a
            href={profile.cvUrl}
            download
            className="rounded border border-parchment-200/20 px-6 py-3 font-display text-sm uppercase tracking-wide text-parchment-200 transition-colors hover:border-gold-500/40 hover:text-gold-300"
          >
            Télécharger mon CV
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {teasers.map((teaser) => (
            <Link
              key={teaser.to}
              to={teaser.to}
              className="seal-card group flex flex-col gap-3 p-6 transition-transform hover:-translate-y-1"
            >
              <h2 className="font-display text-xl text-gold-400">{teaser.title}</h2>
              <p className="text-sm text-parchment-200/75">{teaser.text}</p>
              <span className="mt-auto text-sm font-medium text-gold-500 group-hover:underline">
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

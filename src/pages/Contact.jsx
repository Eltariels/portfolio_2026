import Seo from '../components/Seo'
import ContactLink from '../components/ContactLink'
import CvButtons from '../components/CvButtons'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contacter Théo Borella, développeur web full stack & no-code en recherche d'alternance : email, téléphone, LinkedIn."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact — Théo Borella',
          about: {
            '@type': 'Person',
            name: profile.name,
            email: profile.email,
            telephone: profile.phone,
            url: profile.site,
          },
        }}
      />

      {/* ===== INTRO ===== */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-hud-glow" />
        <div className="mx-auto max-w-3xl">
          <p className="hud-tag mb-4">Dossier 04 — Communication</p>
          <h1 className="font-display text-3xl font-black uppercase text-ink-100 text-glow-cyan sm:text-4xl">
            Contact
          </h1>
          <p className="mt-6 max-w-2xl font-ui text-lg text-ink-300">
            Une opportunité d'alternance, une question ? Ouvrez un canal, je réponds vite.
          </p>
        </div>
      </section>

      {/* ===== CANAUX ===== */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="hud-panel hud-corners relative p-6">
            <span className="ghost-index" aria-hidden="true">01</span>
            <p className="relative font-mono text-xs text-magenta-400">01</p>
            <h2 className="relative mt-1 font-display text-lg uppercase text-cyan-300">Email</h2>
            <ContactLink className="relative mt-3 inline-block break-all font-ui text-ink-200 transition-colors hover:text-cyan-300">
              {profile.email}
            </ContactLink>
            <p className="relative mt-2 font-mono text-[0.65rem] uppercase tracking-wide text-ink-400">
              Clic = ouvre ta messagerie + copie l'adresse
            </p>
          </div>

          <div className="hud-panel hud-corners relative p-6">
            <span className="ghost-index" aria-hidden="true">02</span>
            <p className="relative font-mono text-xs text-magenta-400">02</p>
            <h2 className="relative mt-1 font-display text-lg uppercase text-cyan-300">Téléphone</h2>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="relative mt-3 inline-block font-ui text-ink-200 transition-colors hover:text-cyan-300"
            >
              {profile.phone}
            </a>
          </div>

          <div className="hud-panel hud-corners relative p-6">
            <span className="ghost-index" aria-hidden="true">03</span>
            <p className="relative font-mono text-xs text-magenta-400">03</p>
            <h2 className="relative mt-1 font-display text-lg uppercase text-cyan-300">LinkedIn</h2>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-3 inline-block break-all font-ui text-ink-200 transition-colors hover:text-cyan-300"
            >
              linkedin.com/in/theo-borella-developer-web
            </a>
          </div>

          <div className="hud-panel hud-corners relative p-6">
            <span className="ghost-index" aria-hidden="true">04</span>
            <p className="relative font-mono text-xs text-magenta-400">04</p>
            <h2 className="relative mt-1 font-display text-lg uppercase text-cyan-300">Base &amp; rayon</h2>
            <p className="relative mt-3 font-ui text-ink-200">{profile.base}</p>
            <p className="relative mt-1 font-mono text-[0.65rem] uppercase tracking-wide text-ink-400">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <CvButtons primary />
        </div>
      </section>
    </>
  )
}

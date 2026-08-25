import Seo from '../components/Seo'
import ContactLink from '../components/ContactLink'
import CvButtons from '../components/CvButtons'
import { profile } from '../data/profile'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function MailIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function NetworkIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M10.5 6.8 6.5 16M13.5 6.8l4 9.2M7.2 18h9.6" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const cardClass =
  'hud-panel hud-corners group relative flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-glow-cyan'

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
          <ContactLink className={cardClass}>
            {(copied) => (
              <>
                <span className="ghost-index" aria-hidden="true">01</span>
                <div className="relative flex items-center justify-between">
                  <MailIcon className="h-6 w-6 text-cyan-400 transition-colors group-hover:text-cyan-300" />
                  <span className="font-mono text-xs text-magenta-400">01</span>
                </div>
                <h2 className="relative mt-3 font-display text-lg uppercase text-cyan-300">Email</h2>
                <p className="relative mt-2 break-all font-ui text-ink-200 transition-colors group-hover:text-cyan-300">
                  {profile.email}
                </p>
                <p className="relative mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-cyan-400 group-hover:text-glow-cyan">
                  {copied ? 'Adresse copiée ✓' : "Copier l'adresse →"}
                </p>
              </>
            )}
          </ContactLink>

          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className={cardClass}>
            <span className="ghost-index" aria-hidden="true">02</span>
            <div className="relative flex items-center justify-between">
              <PhoneIcon className="h-6 w-6 text-cyan-400 transition-colors group-hover:text-cyan-300" />
              <span className="font-mono text-xs text-magenta-400">02</span>
            </div>
            <h2 className="relative mt-3 font-display text-lg uppercase text-cyan-300">Téléphone</h2>
            <p className="relative mt-2 font-ui text-ink-200 transition-colors group-hover:text-cyan-300">
              {profile.phone}
            </p>
            <p className="relative mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-cyan-400 group-hover:text-glow-cyan">
              Appeler →
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <span className="ghost-index" aria-hidden="true">03</span>
            <div className="relative flex items-center justify-between">
              <NetworkIcon className="h-6 w-6 text-cyan-400 transition-colors group-hover:text-cyan-300" />
              <span className="font-mono text-xs text-magenta-400">03</span>
            </div>
            <h2 className="relative mt-3 font-display text-lg uppercase text-cyan-300">LinkedIn</h2>
            <p className="relative mt-2 break-all font-ui text-ink-200 transition-colors group-hover:text-cyan-300">
              linkedin.com/in/theo-borella-developer-web
            </p>
            <p className="relative mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-cyan-400 group-hover:text-glow-cyan">
              Voir le profil ↗
            </p>
          </a>

          <div className="hud-panel hud-corners relative flex flex-col p-6">
            <span className="ghost-index" aria-hidden="true">04</span>
            <div className="relative flex items-center justify-between">
              <MapPinIcon className="h-6 w-6 text-cyan-400" />
              <span className="font-mono text-xs text-magenta-400">04</span>
            </div>
            <h2 className="relative mt-3 font-display text-lg uppercase text-cyan-300">Base &amp; rayon</h2>
            <p className="relative mt-2 font-ui text-ink-200">{profile.base}</p>
            <p className="relative mt-auto pt-6 font-mono text-[0.65rem] uppercase tracking-wide text-ink-400">
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

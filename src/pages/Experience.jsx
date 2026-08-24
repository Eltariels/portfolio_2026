import Seo from '../components/Seo'
import { experiences, profile } from '../data/profile'

export default function Experience() {
  return (
    <>
      <Seo
        title="Expérience"
        description="Expériences professionnelles de Théo Borella : alternances chez Digital Jouss, Liongency et La Bonne Agence — sites WordPress, e-commerce, plateformes sur-mesure."
        path="/experience"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.name,
          hasOccupation: experiences.map((exp) => ({
            '@type': 'Occupation',
            name: exp.title,
            occupationLocation: exp.place,
          })),
        }}
      />

      {/* ===== INTRO ===== */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-hud-glow" />
        <div className="mx-auto max-w-3xl">
          <p className="hud-tag mb-4">Dossier 03 — Journal de bord</p>
          <h1 className="font-display text-3xl font-black uppercase text-ink-100 text-glow-cyan sm:text-4xl">
            Expérience
          </h1>
          <p className="mt-6 max-w-2xl font-ui text-lg text-ink-300">
            Trois alternances, un fil conducteur.
          </p>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <ol className="space-y-12 border-l border-cyan-400/20 pl-8">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span className="timeline-node" />
              <div className="hud-panel hud-corners p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-lg uppercase text-cyan-300">{exp.title}</h2>
                  <span className="font-mono text-xs uppercase tracking-wide text-magenta-300">{exp.period}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-400">
                  <span className="text-cyan-400">{exp.company}</span> — {exp.place}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {exp.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-200">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-cyan-400/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.sites && exp.sites.length > 0 && (
                  <div className="mt-5 border-t border-cyan-400/10 pt-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan-400/80">
                      Sites réalisés
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.sites.map((site) => (
                        <a
                          key={site.url}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip inline-flex items-center gap-1.5 transition-colors hover:border-cyan-400/70 hover:text-cyan-300"
                        >
                          {site.label}
                          <span aria-hidden="true" className="text-cyan-400">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <a href={profile.cvUrl} download className="hud-btn-primary">
            Télécharger mon CV
          </a>
        </div>
      </section>
    </>
  )
}

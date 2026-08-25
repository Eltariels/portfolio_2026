import Seo from '../components/Seo'
import CvButtons from '../components/CvButtons'
import Scene3D from '../components/hud3d/Scene3D'
import StarfieldParallax from '../components/hud3d/StarfieldParallax'
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
        <Scene3D
          className="absolute inset-0 -z-10"
          camera={{ position: [0, 0, 1], fov: 60 }}
        >
          <StarfieldParallax />
        </Scene3D>
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
      {/* Each entry leads with its period as a large, dedicated column
          instead of a small inline tag sharing the header row with the
          title — the period is what a recruiter's eye scans a timeline
          for first, so it gets real visual weight. */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <ol className="space-y-12 border-l border-cyan-400/20 pl-8">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span className="timeline-node" />
              <div className="hud-panel hud-corners flex flex-col gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
                <div className="flex flex-row items-baseline gap-3 sm:w-40 sm:flex-shrink-0 sm:flex-col sm:items-start sm:gap-2 sm:border-r sm:border-cyan-400/15 sm:pr-6">
                  <p className="font-display text-xl uppercase leading-none text-cyan-300 sm:text-2xl">
                    {exp.period}
                  </p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wide text-magenta-300 sm:tracking-[0.15em]">
                    {exp.company}
                  </p>
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-lg uppercase text-ink-100">{exp.title}</h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-400">{exp.place}</p>
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
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {exp.sites.map((site) => (
                        <a
                          key={site.url}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group overflow-hidden border border-cyan-400/20 bg-void-900/60 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-glow-cyan"
                        >
                          <div className="aspect-[16/10] overflow-hidden bg-void-800">
                            <img
                              src={site.image}
                              alt={`Aperçu du site ${site.label}`}
                              loading="lazy"
                              width={720}
                              height={450}
                              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex items-center justify-between gap-1.5 px-2.5 py-2">
                            <span className="truncate font-mono text-[0.65rem] text-ink-200 group-hover:text-cyan-300">
                              {site.label}
                            </span>
                            <span aria-hidden="true" className="flex-shrink-0 text-cyan-400">↗</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-4">
          <CvButtons primary />
        </div>
      </section>
    </>
  )
}

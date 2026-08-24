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

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="rune-divider mb-4 font-display text-xs uppercase tracking-[0.3em] text-gold-500">
          Expérience
        </p>
        <h1 className="font-display text-3xl font-semibold text-parchment-100 sm:text-4xl">
          Trois alternances, un fil conducteur
        </h1>

        <ol className="mt-12 space-y-10 border-l border-gold-500/25 pl-6">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-gold-500" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-xl text-parchment-100">{exp.title}</h2>
                <span className="text-sm text-gold-400">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-parchment-200/70">
                <span className="font-semibold text-gold-500">{exp.company}</span> — {exp.place}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-parchment-200/85">
                    <span className="mt-1 text-gold-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <a
            href={profile.cvUrl}
            download
            className="rounded border border-gold-500/50 bg-gold-500/10 px-6 py-3 font-display text-sm uppercase tracking-wide text-gold-300 transition-colors hover:bg-gold-500/20"
          >
            Télécharger mon CV
          </a>
        </div>
      </section>
    </>
  )
}

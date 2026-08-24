import Seo from '../components/Seo'
import { skillGroups, tools } from '../data/profile'

export default function Skills() {
  return (
    <>
      <Seo
        title="Compétences"
        description="Compétences techniques de Théo Borella : développement web (React, JS, PHP, MongoDB), no-code & CMS (WordPress, Elementor, Drupal), design & intégration."
        path="/competences"
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="rune-divider mb-4 font-display text-xs uppercase tracking-[0.3em] text-gold-500">
          Compétences
        </p>
        <h1 className="font-display text-3xl font-semibold text-parchment-100 sm:text-4xl">
          Code et no-code, deux facettes d'un même métier
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="seal-card p-6">
              <h2 className="font-display text-lg text-gold-400">{group.label}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 seal-card p-6">
          <h2 className="font-display text-lg text-gold-400">Outils</h2>
          <ul className="mt-4 space-y-2 text-parchment-200/85">
            {tools.map((tool) => (
              <li key={tool} className="flex items-start gap-2">
                <span className="mt-1 text-gold-500">▸</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

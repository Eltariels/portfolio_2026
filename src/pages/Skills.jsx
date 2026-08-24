import Seo from '../components/Seo'
import { skillGroups, tools } from '../data/profile'

function LevelBars({ level, max = 4 }) {
  return (
    <span className="flex items-end gap-[2px]" aria-hidden="true">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-[1px] ${i < level ? 'bg-cyan-400 shadow-glow-cyan' : 'bg-ink-400/25'}`}
          style={{ height: `${5 + i * 2.5}px` }}
        />
      ))}
    </span>
  )
}

export default function Skills() {
  return (
    <>
      <Seo
        title="Compétences"
        description="Compétences techniques de Théo Borella : développement web (React, JS, PHP, MongoDB), no-code & CMS (WordPress, Elementor, Drupal), design & intégration."
        path="/competences"
      />

      {/* ===== INTRO ===== */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-hud-glow" />
        <div className="mx-auto max-w-4xl">
          <p className="hud-tag mb-4">Dossier 02 — Chargement</p>
          <h1 className="font-display text-3xl font-black uppercase text-ink-100 text-glow-cyan sm:text-4xl">
            Compétences
          </h1>
          <p className="mt-6 max-w-2xl font-ui text-lg text-ink-300">
            Code et no-code, deux facettes d'un même métier.
          </p>
          <div className="mt-5 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wide text-ink-400">
            <LevelBars level={4} />
            <span>Usage quotidien</span>
            <span className="mx-1 text-ink-400/50">·</span>
            <LevelBars level={1} />
            <span>Premières bases</span>
          </div>
        </div>
      </section>

      {/* ===== SKILL GROUPS ===== */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div key={group.label} className="hud-panel hud-corners p-6">
              <span className="font-mono text-xs text-magenta-400">0{i + 1}</span>
              <h2 className="mt-1 font-display text-lg uppercase text-cyan-300">{group.label}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="chip inline-flex items-center gap-2"
                    aria-label={`${skill.name} — niveau ${skill.level} sur 4`}
                  >
                    {skill.name}
                    <LevelBars level={skill.level} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="border-y border-cyan-400/10 bg-void-900/40 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="hud-tag mb-3">Dossier 03 — Équipement</p>
          <div className="hud-divider mb-8">
            <h2 className="font-display text-2xl uppercase text-ink-100">Outils</h2>
          </div>
          <ul className="space-y-2.5">
            {tools.map((tool) => (
              <li key={tool} className="flex items-start gap-3 font-ui text-ink-200">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-cyan-400 shadow-glow-cyan" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

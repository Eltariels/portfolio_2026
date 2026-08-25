import Seo from '../components/Seo'
import Scene3D from '../components/hud3d/Scene3D'
import GyroRing from '../components/hud3d/GyroRing'
import { skillGroups, tools } from '../data/profile'

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
        <Scene3D
          className="absolute inset-y-0 right-0 -z-10 w-[420px] max-w-[80vw] opacity-70"
          camera={{ position: [0, 0, 4], fov: 45 }}
          lights={
            <>
              <ambientLight intensity={0.5} />
              <pointLight position={[3, 2, 3]} intensity={1.4} color="#3fd4ff" />
            </>
          }
        >
          <GyroRing />
        </Scene3D>
        <div className="mx-auto max-w-4xl">
          <p className="hud-tag mb-4">Dossier 02 — Chargement</p>
          <h1 className="font-display text-3xl font-black uppercase text-ink-100 text-glow-cyan sm:text-4xl">
            Compétences
          </h1>
          <p className="mt-6 max-w-2xl font-ui text-lg text-ink-300">
            Code et no-code, deux facettes d'un même métier.
          </p>
        </div>
      </section>

      {/* ===== SKILL GROUPS ===== */}
      {/* Asymmetric bento instead of a uniform grid: the group with the most
          skills (dev web) leads as a wide featured card, the two smaller
          groups stack alongside it — the layout follows the real data
          instead of forcing every group into an identical box. */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          {skillGroups[0] && (
            <div className="hud-panel hud-corners relative p-6 sm:p-8">
              <span className="ghost-index" aria-hidden="true">01</span>
              <span className="relative font-mono text-xs text-magenta-400">01</span>
              <h2 className="relative mt-1 font-display text-xl uppercase text-cyan-300">
                {skillGroups[0].label}
              </h2>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {skillGroups[0].skills.map((skill) => (
                  <span key={skill.name} className="chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {skillGroups.slice(1).map((group, i) => (
              <div key={group.label} className="hud-panel hud-corners relative flex-1 p-6">
                <span className="ghost-index" aria-hidden="true">0{i + 2}</span>
                <span className="relative font-mono text-xs text-magenta-400">0{i + 2}</span>
                <h2 className="relative mt-1 font-display text-lg uppercase text-cyan-300">
                  {group.label}
                </h2>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="chip">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

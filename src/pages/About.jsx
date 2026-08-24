import Seo from '../components/Seo'
import { profile, formations } from '../data/profile'

export default function About() {
  return (
    <>
      <Seo
        title="À propos"
        description="Le parcours de Théo Borella : de la découverte du code au collège au Mastère Développement Full Stack, en passant par un BUT MMI à Chambéry."
        path="/a-propos"
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="rune-divider mb-4 font-display text-xs uppercase tracking-[0.3em] text-gold-500">
          À propos
        </p>
        <h1 className="font-display text-3xl font-semibold text-parchment-100 sm:text-4xl">
          Mon parcours
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-parchment-200/85">
          {profile.bioLong}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="seal-card p-4">
            <p className="text-xs uppercase tracking-wide text-gold-500">Localisation</p>
            <p className="mt-1 text-parchment-200">{profile.location}</p>
          </div>
          <div className="seal-card p-4">
            <p className="text-xs uppercase tracking-wide text-gold-500">Centres d'intérêt</p>
            <p className="mt-1 text-parchment-200">{profile.hobbies}</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="rune-divider mb-8 font-display text-2xl text-parchment-100">
            Formations
          </h2>
          <ol className="space-y-6 border-l border-gold-500/25 pl-6">
            {formations.map((formation) => (
              <li key={formation.degree} className="relative">
                <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-gold-500" />
                <p className="font-display text-lg text-parchment-100">{formation.degree}</p>
                {formation.spec && (
                  <p className="text-sm text-parchment-200/70">{formation.spec}</p>
                )}
                <p className="mt-1 text-sm text-gold-400">
                  {formation.period} · {formation.school}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a
            href={profile.cvUrl}
            download
            className="rounded border border-gold-500/50 bg-gold-500/10 px-6 py-3 font-display text-sm uppercase tracking-wide text-gold-300 transition-colors hover:bg-gold-500/20"
          >
            Télécharger mon CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded border border-parchment-200/20 px-6 py-3 font-display text-sm uppercase tracking-wide text-parchment-200 transition-colors hover:border-gold-500/40 hover:text-gold-300"
          >
            Me contacter
          </a>
        </div>
      </section>
    </>
  )
}

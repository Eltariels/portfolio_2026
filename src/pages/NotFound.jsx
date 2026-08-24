import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable"
        description="Cette page n'existe pas."
        path="/404"
      />
      <section className="relative flex flex-col items-center overflow-hidden px-6 py-32 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-hud-glow" />
        <p className="hud-tag mb-6">Erreur système</p>
        <p className="font-display text-7xl font-black text-magenta-400 text-glow-magenta">404</p>
        <h1 className="mt-4 font-display text-2xl uppercase text-ink-100">
          Signal perdu
        </h1>
        <p className="mt-3 max-w-md font-ui text-ink-300">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="hud-btn-primary mt-10">
          Retour à l'accueil
        </Link>
      </section>
    </>
  )
}

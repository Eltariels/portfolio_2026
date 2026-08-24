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
      <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
        <p className="font-display text-6xl text-gold-500">404</p>
        <h1 className="mt-4 font-display text-2xl text-parchment-100">
          Cette voie ne mène nulle part
        </h1>
        <p className="mt-3 text-parchment-200/75">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-8 rounded border border-gold-500/50 bg-gold-500/10 px-6 py-3 font-display text-sm uppercase tracking-wide text-gold-300 transition-colors hover:bg-gold-500/20"
        >
          Retour à l'accueil
        </Link>
      </section>
    </>
  )
}

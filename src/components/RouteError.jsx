import { useEffect, useState } from 'react'
import { useRouteError } from 'react-router-dom'

export const RELOAD_FLAG_KEY = 'route-error-reload-attempted'

function isStaleDeploymentError(error) {
  const message = error?.message || String(error || '')
  return message.includes('is not valid JSON') || message.includes('Unexpected token')
}

export default function RouteError() {
  const error = useRouteError()
  const [autoReloading, setAutoReloading] = useState(false)

  useEffect(() => {
    const alreadyTried = sessionStorage.getItem(RELOAD_FLAG_KEY)
    if (!alreadyTried && isStaleDeploymentError(error)) {
      sessionStorage.setItem(RELOAD_FLAG_KEY, '1')
      setAutoReloading(true)
      window.location.reload()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (autoReloading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
          Mise à jour du site — rechargement...
        </p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="font-display text-2xl uppercase text-ink-100">Un problème est survenu</p>
      <p className="max-w-md text-ink-300">
        Une nouvelle version du site vient probablement d'être publiée. Recharge la page pour la récupérer.
      </p>
      <button onClick={() => window.location.reload()} className="hud-btn-primary">
        Recharger la page
      </button>
    </div>
  )
}

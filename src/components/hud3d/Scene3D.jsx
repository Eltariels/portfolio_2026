import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'

// Shared shell for every hand-built 3D piece on the site: client-only (so
// vite-react-ssg's Node prerender never touches WebGL) and skipped entirely
// under prefers-reduced-motion rather than just freezing in place, since
// these are pure decoration with a real render cost.
export default function Scene3D({ className = '', camera, lights, children }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduceMotion) setEnabled(true)
  }, [])

  if (!enabled) return null

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <Canvas camera={camera} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        {lights}
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}

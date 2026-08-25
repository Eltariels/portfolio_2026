import { useEffect, useRef } from 'react'

// Every hud3d scene wrapper is pointer-events-none (so it never blocks
// clicks on the buttons/links sitting on top of it) — which also means the
// <canvas> never receives real mouse events, so react-three-fiber's own
// state.pointer stays frozen. Tracking mousemove on window instead gives
// each scene live cursor coordinates without needing to be a hit target.
export default function usePointer() {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(event) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return pointer
}

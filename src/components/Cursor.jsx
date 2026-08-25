import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], .hud-panel'
const RING_EASE = 0.2

export default function Cursor() {
  const dotRef = useRef(null)
  const ringWrapRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    const dot = dotRef.current
    const ringWrap = ringWrapRef.current
    const ring = ringRef.current

    document.documentElement.classList.add('has-custom-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId = null
    let visible = false

    function show() {
      if (visible) return
      visible = true
      dot.style.opacity = '1'
      ringWrap.style.opacity = '1'
    }

    function hide() {
      visible = false
      dot.style.opacity = '0'
      ringWrap.style.opacity = '0'
    }

    function onMouseMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      show()
    }

    function onMouseOver(e) {
      const isHover = Boolean(e.target.closest?.(HOVER_SELECTOR))
      ring.classList.toggle('cursor-ring--active', isHover)
    }

    function onMouseDown() {
      ring.classList.add('cursor-ring--press')
    }

    function onMouseUp() {
      ring.classList.remove('cursor-ring--press')
    }

    function frame() {
      ringX += (mouseX - ringX) * RING_EASE
      ringY += (mouseY - ringY) * RING_EASE
      ringWrap.style.transform = `translate(${ringX}px, ${ringY}px)`
      rafId = requestAnimationFrame(frame)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', hide)
    rafId = requestAnimationFrame(frame)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', hide)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringWrapRef} className="cursor-ring-wrap" aria-hidden="true">
        <div ref={ringRef} className="cursor-ring hud-corners" />
      </div>
    </>
  )
}

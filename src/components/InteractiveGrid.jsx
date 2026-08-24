import { useEffect, useRef } from 'react'

const SPACING = 44
const INFLUENCE = 150
const PUSH = 18
const EASE = 0.12
const DOT_COLOR = '227, 33, 214' // magenta-500
const DOT_COLOR_NEAR = '63, 212, 255' // cyan-400

export default function InteractiveGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canHover = window.matchMedia('(pointer: fine)').matches

    const ctx = canvas.getContext('2d')
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let dots = []
    let mouse = { x: -9999, y: -9999, active: false }
    let rafId = null
    let visible = true

    function buildDots() {
      dots = []
      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * SPACING
          const baseY = j * SPACING
          dots.push({ baseX, baseY, x: baseX, y: baseY })
        }
      }
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildDots()
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = `rgba(${DOT_COLOR}, 0.18)`
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.baseX, d.baseY, 1.3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function frame() {
      ctx.clearRect(0, 0, width, height)

      for (const d of dots) {
        let targetX = d.baseX
        let targetY = d.baseY
        let t = 0

        if (mouse.active) {
          const dx = d.baseX - mouse.x
          const dy = d.baseY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < INFLUENCE) {
            t = 1 - dist / INFLUENCE
            const angle = Math.atan2(dy, dx)
            targetX = d.baseX + Math.cos(angle) * PUSH * t
            targetY = d.baseY + Math.sin(angle) * PUSH * t
          }
        }

        d.x += (targetX - d.x) * EASE
        d.y += (targetY - d.y) * EASE

        const alpha = 0.16 + t * 0.55
        const radius = 1.3 + t * 2.2
        const color = t > 0.05 ? DOT_COLOR_NEAR : DOT_COLOR

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color}, ${alpha})`
        if (t > 0.3) {
          ctx.shadowColor = `rgba(${DOT_COLOR_NEAR}, 0.8)`
          ctx.shadowBlur = 6 * t
        } else {
          ctx.shadowBlur = 0
        }
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(frame)
    }

    function onMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    function onMouseLeave() {
      mouse.active = false
    }

    function onVisibilityChange() {
      visible = document.visibilityState === 'visible'
      if (visible && !reduceMotion && canHover && !rafId) {
        rafId = requestAnimationFrame(frame)
      } else if (!visible && rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    resize()

    if (reduceMotion || !canHover) {
      drawStatic()
    } else {
      frame()
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      window.addEventListener('mouseleave', onMouseLeave)
      document.addEventListener('visibilitychange', onVisibilityChange)
    }

    window.addEventListener('resize', resize)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}

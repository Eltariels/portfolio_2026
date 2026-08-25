import { useLocation } from 'react-router-dom'

export default function PageStinger() {
  const location = useLocation()

  return (
    <div
      key={location.pathname}
      aria-hidden="true"
      className="tb-stinger-layer pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center"
    >
      <span className="tb-stinger-glow absolute h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl sm:h-96 sm:w-96" />
      <span className="tb-stinger-mark relative font-display text-7xl font-black uppercase tracking-[0.2em] text-cyan-200 sm:text-9xl">
        <span className="tb-stinger-corners absolute -inset-5 sm:-inset-8">
          <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-cyan-300" />
          <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-cyan-300" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-300" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-300" />
        </span>
        TB
      </span>
    </div>
  )
}

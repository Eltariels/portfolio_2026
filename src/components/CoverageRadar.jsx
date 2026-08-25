// Stylised HUD radar showing the mobility zone around the home base.
// Node positions are hand-placed to roughly match real relative bearings
// (Lyon SW, Chambéry/Grenoble S, Annecy E) — decorative, not to scale.
const NODES = [
  { name: 'Lyon', x: 95, y: 205, anchor: 'end', dx: -10, dy: 4 },
  { name: 'Chambéry', x: 215, y: 235, anchor: 'start', dx: 10, dy: 4 },
  { name: 'Grenoble', x: 180, y: 272, anchor: 'middle', dx: 0, dy: 20 },
  { name: 'Annecy', x: 245, y: 130, anchor: 'start', dx: 10, dy: 4 },
]

const CENTER = { x: 160, y: 160 }
const RINGS = [60, 100, 140]

export default function CoverageRadar() {
  return (
    <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-sm" aria-hidden="true">
      <defs>
        <radialGradient id="radar-sweep-fill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(63, 212, 255, 0.55)" />
          <stop offset="100%" stopColor="rgba(63, 212, 255, 0)" />
        </radialGradient>
      </defs>

      {RINGS.map((r) => (
        <circle
          key={r}
          cx={CENTER.x}
          cy={CENTER.y}
          r={r}
          fill="none"
          stroke="rgba(63, 212, 255, 0.18)"
        />
      ))}
      <line x1={CENTER.x} y1={20} x2={CENTER.x} y2={300} stroke="rgba(63, 212, 255, 0.1)" />
      <line x1={20} y1={CENTER.y} x2={300} y2={CENTER.y} stroke="rgba(63, 212, 255, 0.1)" />

      <g className="radar-sweep">
        <path
          d="M160,160 L123.77,24.77 A140,140 0 0,1 196.23,24.77 Z"
          fill="url(#radar-sweep-fill)"
        />
      </g>

      {NODES.map((node, index) => (
        <g key={node.name}>
          <line
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke="rgba(63, 212, 255, 0.25)"
            strokeDasharray="3 4"
          />
          <circle
            className="radar-ping"
            cx={node.x}
            cy={node.y}
            r={4}
            fill="rgba(255, 92, 232, 0.6)"
            style={{ animationDelay: `${index * 0.5}s` }}
          />
          <circle cx={node.x} cy={node.y} r={3} fill="rgb(255, 157, 242)" />
          <text
            x={node.x + node.dx}
            y={node.y + node.dy}
            textAnchor={node.anchor}
            className="font-mono text-[9px] uppercase tracking-wide"
            fill="rgb(200, 220, 235)"
          >
            {node.name}
          </text>
        </g>
      ))}

      <circle className="radar-ping" cx={CENTER.x} cy={CENTER.y} r={6} fill="rgba(63, 212, 255, 0.55)" />
      <circle cx={CENTER.x} cy={CENTER.y} r={5} fill="rgb(168, 245, 255)" />
      <text
        x={CENTER.x}
        y={CENTER.y - 14}
        textAnchor="middle"
        className="font-mono text-[9px] uppercase tracking-widest"
        fill="rgb(168, 245, 255)"
      >
        Base
      </text>
    </svg>
  )
}

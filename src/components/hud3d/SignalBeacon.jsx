import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import { DoubleSide } from 'three'
import usePointer from './usePointer'

const RING_COUNT = 3
const CYCLE = 2.4

function Pulse({ offset }) {
  const ring = useRef(null)
  const material = useRef(null)

  useFrame((state) => {
    const t = ((state.clock.elapsedTime + offset) % CYCLE) / CYCLE
    if (ring.current) ring.current.scale.setScalar(0.35 + t * 1.2)
    if (material.current) material.current.opacity = 0.85 * (1 - t)
  })

  // Facing the camera (no rotation) so it reads as an expanding ring rather
  // than a near edge-on sliver — the earlier version tipped this flat into
  // the ground plane, which is why it barely showed up.
  return (
    <mesh ref={ring} rotation={[0.15, 0, 0]}>
      <ringGeometry args={[0.94, 1, 64]} />
      <meshBasicMaterial ref={material} color="#3fd4ff" transparent opacity={0.85} side={DoubleSide} />
    </mesh>
  )
}

// A transmitting beacon: a faceted core inside a wireframe shell (same
// two-layer build as the home hero's hologram) with sonar rings expanding
// outward from it — the 3D echo of the pulse animation on the Contact
// radar panel below.
export default function SignalBeacon() {
  const group = useRef(null)
  const core = useRef(null)
  const shell = useRef(null)
  const pointer = usePointer()

  useFrame((_, delta) => {
    if (group.current) {
      const targetX = pointer.current.y * 0.3
      const targetY = pointer.current.x * 0.35
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
    }
    if (core.current) core.current.rotation.y += delta * 0.5
    if (shell.current) shell.current.rotation.y -= delta * 0.15
  })

  return (
    <group ref={group}>
      <mesh ref={shell}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial color="#3fd4ff" transparent opacity={0.04} />
        <Edges color="#3fd4ff" />
      </mesh>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.34, 1]} />
        <meshStandardMaterial
          color="#0b111f"
          emissive="#ff5ce8"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.4}
        />
        <Edges color="#ff9df2" />
      </mesh>
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <Pulse key={i} offset={(i / RING_COUNT) * CYCLE} />
      ))}
    </group>
  )
}

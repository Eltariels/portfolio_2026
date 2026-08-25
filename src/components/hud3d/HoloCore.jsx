import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'

// Wireframe hologram: a low-poly icosahedron shell that tilts toward the
// cursor while spinning slowly, plus a smaller counter-rotating core.
export default function HoloCore() {
  const group = useRef(null)
  const core = useRef(null)

  useFrame((state, delta) => {
    if (group.current) {
      const targetX = state.pointer.y * 0.4
      const targetY = state.pointer.x * 0.5
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
      group.current.rotation.y += delta * 0.2 + (targetY - group.current.rotation.y) * 0.02
    }
    if (core.current) {
      core.current.rotation.y -= delta * 0.5
      core.current.rotation.x -= delta * 0.3
    }
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#3fd4ff" transparent opacity={0.05} />
        <Edges color="#3fd4ff" />
      </mesh>
      <mesh ref={core} scale={0.45}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#ff5ce8" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

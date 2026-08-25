import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'

// Faceted octahedron with a pulsing emissive glow and a bright edge outline
// standing in for a "crystallised data core" — no environment map needed
// since it leans on emissive glow rather than real glass transmission.
export default function DataCrystal() {
  const mesh = useRef(null)
  const material = useRef(null)

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.25
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
    }
    if (material.current) {
      material.current.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 1.6) * 0.25
    }
  })

  return (
    <mesh ref={mesh}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        ref={material}
        color="#0b111f"
        emissive="#3fd4ff"
        emissiveIntensity={0.5}
        roughness={0.25}
        metalness={0.4}
      />
      <Edges color="#ff5ce8" />
    </mesh>
  )
}

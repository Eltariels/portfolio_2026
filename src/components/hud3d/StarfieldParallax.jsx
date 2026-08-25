import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

// drei's <Stars> generates its point cloud from math, no texture/asset —
// the group just drifts slowly and tilts toward the cursor for parallax.
export default function StarfieldParallax() {
  const group = useRef(null)

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.015
      const targetX = state.pointer.y * 0.1
      const targetZ = -state.pointer.x * 0.1
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.02
      group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.02
    }
  })

  return (
    <group ref={group}>
      <Stars radius={6} depth={25} count={1800} factor={2} saturation={0} fade speed={0.4} />
    </group>
  )
}

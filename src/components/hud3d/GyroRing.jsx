import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Ring({ radius, tube, speed, axis, color }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation[axis] += delta * speed
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 8, 64]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.65} />
    </mesh>
  )
}

// Three nested rings, each spinning on its own axis at its own speed —
// a navigation-instrument gyroscope rather than a literal planet/moon.
export default function GyroRing() {
  const group = useRef(null)

  useFrame((state) => {
    if (group.current) {
      const targetX = 0.35 + state.pointer.y * 0.25
      const targetZ = state.pointer.x * 0.25
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.03
      group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.03
    }
  })

  return (
    <group ref={group} rotation={[0.35, 0.3, 0]}>
      <Ring radius={1.4} tube={0.012} speed={0.3} axis="y" color="#3fd4ff" />
      <Ring radius={1.1} tube={0.01} speed={-0.45} axis="x" color="#ff5ce8" />
      <Ring radius={0.8} tube={0.008} speed={0.6} axis="z" color="#3fd4ff" />
    </group>
  )
}

import { motion } from 'framer-motion'
import { useMemo } from 'react'

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

type ParticlesProps = {
  count?: number
}

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

export function Particles({ count = 30 }: ParticlesProps) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, id) => {
        const seed = id + 1

        return {
          id,
          x: pseudoRandom(seed) * 100,
          y: pseudoRandom(seed + 11) * 100,
          size: pseudoRandom(seed + 23) * 2.5 + 1,
          duration: pseudoRandom(seed + 37) * 18 + 14,
          delay: pseudoRandom(seed + 41) * 5,
          opacity: pseudoRandom(seed + 53) * 0.5 + 0.15,
        }
      }),
    [count],
  )

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          className="particle-dot"
          key={particle.id}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, 15, 0],
            y: [0, -30, 0],
            opacity: [particle.opacity, particle.opacity * 1.6, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

import { motion } from 'motion/react'

const particles = Array.from({ length: 35 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
  opacity: 0.2 + Math.random() * 0.5,
  drift: (Math.random() - 0.5) * 80,
}))

export default function GoldenParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: '-2%',
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, #F5D782, #D4A017)',
            boxShadow: `0 0 ${p.size * 2}px rgba(212,160,23,0.4)`,
          }}
          animate={{
            y: [0, -1200],
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, p.drift],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

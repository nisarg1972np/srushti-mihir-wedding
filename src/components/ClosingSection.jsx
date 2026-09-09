import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function HeartSVG() {
  return (
    <svg width="32" height="30" viewBox="0 0 32 30" className="inline-block mx-2" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16,28 C12,24 2,18 2,10 C2,5 6,2 10,2 C13,2 15,4 16,6 C17,4 19,2 22,2 C26,2 30,5 30,10 C30,18 20,24 16,28Z"
        fill="none"
        stroke="#C0392B"
        strokeWidth="1.8"
      />
      <path
        d="M16,24 C13,21 6,16 6,11 C6,8 8,6 10,6 C12,6 14,7 16,10 C18,7 20,6 22,6 C24,6 26,8 26,11 C26,16 19,21 16,24Z"
        fill="#C0392B"
        opacity="0.2"
      />
    </svg>
  )
}

export default function ClosingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 px-6 flex flex-col items-center text-center">
      {/* Tagline */}
      <motion.h3
        className="font-display text-vermillion text-4xl sm:text-5xl md:text-6xl mb-4 flex items-center justify-center flex-wrap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
      >
        Small gathering.
        <HeartSVG />
        Big love.
      </motion.h3>

      {/* Decorative line */}
      <motion.div
        className="w-24 h-px my-8"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      />

      {/* Family name */}
      <motion.p
        className="font-heading text-warm-brown text-xl sm:text-2xl tracking-wide italic"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        With love, The Patel Family
      </motion.p>

      {/* Footer */}
      <motion.p
        className="font-body text-warm-brown text-xs tracking-widest mt-16 opacity-40"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Made with love
      </motion.p>
    </section>
  )
}

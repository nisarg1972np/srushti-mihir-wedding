import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function Flourish({ flip = false }) {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      className={`${flip ? 'scale-x-[-1]' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,20 Q30,5 50,18 Q65,28 80,15 Q95,3 110,20"
        fill="none"
        stroke="#D4A017"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M15,25 Q35,35 55,22 Q70,12 85,25 Q100,35 110,25"
        fill="none"
        stroke="#D4A017"
        strokeWidth="1"
        opacity="0.35"
      />
      <circle cx="10" cy="20" r="2.5" fill="#D4A017" opacity="0.5" />
      <circle cx="60" cy="20" r="2" fill="#F5D782" opacity="0.4" />
    </svg>
  )
}

export default function NamesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Flourish top */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Flourish />
        <Flourish flip />
      </motion.div>

      {/* Names */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        {/* Srushti */}
        <motion.h2
          className="font-display text-5xl sm:text-6xl md:text-7xl text-vermillion"
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.2 }}
        >
          Srushti
        </motion.h2>

        {/* Ampersand */}
        <motion.span
          className="font-display gold-shimmer text-4xl sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
        >
          &amp;
        </motion.span>

        {/* Mihir */}
        <motion.h2
          className="font-display text-5xl sm:text-6xl md:text-7xl text-vermillion"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.2 }}
        >
          Mihir
        </motion.h2>
      </div>

      {/* Subtitle */}
      <motion.p
        className="font-heading text-warm-brown text-lg sm:text-xl tracking-[0.15em] mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        are getting married
      </motion.p>

      {/* Flourish bottom */}
      <motion.div
        className="flex items-center gap-4 mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Flourish />
        <Flourish flip />
      </motion.div>
    </section>
  )
}

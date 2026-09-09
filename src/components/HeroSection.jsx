import { motion } from 'motion/react'
import Mandala from './Mandala'
import OrnateGanesha from './OrnateGanesha'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Radial glow behind Ganesha */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #F5D782 0%, #D4A017 30%, transparent 70%)',
        }}
      />

      {/* Rotating mandala ring behind Ganesha */}
      <div className="absolute w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] opacity-[0.08]">
        <Mandala className="mandala-rotate" color="#D4A017" />
      </div>

      {/* Hindi invocation text */}
      <motion.p
        className="font-hindi gold-shimmer text-2xl sm:text-3xl tracking-wide mb-6 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        || श्री गणेशाय नमः ||
      </motion.p>

      {/* Ornate Ganesha */}
      <motion.div
        className="w-56 h-56 sm:w-72 sm:h-72 relative z-10 diya-glow"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.4 }}
      >
        <OrnateGanesha className="w-full h-full" />
      </motion.div>

      {/* Decorative text below */}
      <motion.p
        className="font-heading text-warm-brown text-lg sm:text-xl mt-8 tracking-[0.25em] uppercase relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Wedding Invitation
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-body text-warm-brown text-xs tracking-widest uppercase mb-2 opacity-60">
          Scroll
        </span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-saffron"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <path d="M7 10L12 15L17 10" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  )
}

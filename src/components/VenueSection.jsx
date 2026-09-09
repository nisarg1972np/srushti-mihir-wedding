import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function MapPin() {
  return (
    <svg width="36" height="48" viewBox="0 0 36 48" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18,2 C9.2,2 2,9.2 2,18 C2,30 18,46 18,46 C18,46 34,30 34,18 C34,9.2 26.8,2 18,2Z"
        fill="none"
        stroke="#D4A017"
        strokeWidth="2"
      />
      <circle cx="18" cy="18" r="7" fill="none" stroke="#D4A017" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" fill="#D4A017" opacity="0.5" />
    </svg>
  )
}

function CornerOrnament({ className = '' }) {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5,5 Q25,5 25,25 Q5,25 5,5Z" fill="none" stroke="#D4A017" strokeWidth="1.2" opacity="0.4" />
      <path d="M8,8 Q22,8 22,22 Q8,22 8,8Z" fill="none" stroke="#D4A017" strokeWidth="0.8" opacity="0.25" />
      <circle cx="10" cy="10" r="2" fill="#D4A017" opacity="0.3" />
    </svg>
  )
}

export default function VenueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 flex flex-col items-center">
      <motion.div
        className="relative max-w-lg w-full text-center py-12 px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Corner ornaments */}
        <CornerOrnament className="absolute top-0 left-0" />
        <CornerOrnament className="absolute top-0 right-0 scale-x-[-1]" />
        <CornerOrnament className="absolute bottom-0 left-0 scale-y-[-1]" />
        <CornerOrnament className="absolute bottom-0 right-0 scale-[-1]" />

        {/* Map pin icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <MapPin />
        </motion.div>

        {/* Venue name */}
        <motion.h3
          className="font-heading text-maroon text-3xl sm:text-4xl font-semibold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Sunnidale Park
        </motion.h3>

        {/* Address */}
        <motion.p
          className="font-body text-warm-brown text-base sm:text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          265 Sunnidale Rd, Barrie, ON L4M 3B9
        </motion.p>

        {/* Google Maps link */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Sunnidale+Park+265+Sunnidale+Rd+Barrie+ON+L4M+3B9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full font-heading text-base tracking-widest uppercase"
          style={{
            background: 'linear-gradient(135deg, #D4A017, #F5D782, #D4A017)',
            color: '#5E1914',
            border: '1.5px solid #D4A017',
            boxShadow: '0 4px 20px rgba(212,160,23,0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 30px rgba(212,160,23,0.35)' }}
          whileTap={{ scale: 0.97 }}
        >
          View on Google Maps
        </motion.a>
      </motion.div>
    </section>
  )
}

import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

const WEDDING_DATE = new Date('2026-09-12T09:00:00-04:00')

function getTimeLeft() {
  const now = new Date()
  const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeBox({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 100, damping: 14 }}
    >
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center mb-2"
        style={{
          background: 'linear-gradient(145deg, #FFFBF0, #F8E8D6)',
          border: '1.5px solid #D4A017',
          boxShadow: '0 4px 20px rgba(212,160,23,0.1)',
        }}
      >
        <motion.span
          key={value}
          className="font-heading text-maroon text-3xl sm:text-4xl font-semibold"
          initial={{ scale: 1.3, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="font-body text-warm-brown text-xs tracking-[0.2em] uppercase">
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-6 flex flex-col items-center">
      {/* Header text */}
      <motion.p
        className="font-heading text-warm-brown text-xl sm:text-2xl tracking-wide mb-10 text-center italic"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        The celebration begins in...
      </motion.p>

      {/* Countdown boxes */}
      {isInView && (
        <div className="flex gap-4 sm:gap-6">
          <TimeBox value={time.days} label="Days" delay={0.1} />
          <TimeBox value={time.hours} label="Hours" delay={0.2} />
          <TimeBox value={time.minutes} label="Minutes" delay={0.3} />
          <TimeBox value={time.seconds} label="Seconds" delay={0.4} />
        </div>
      )}
    </section>
  )
}

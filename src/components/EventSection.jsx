import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

function MarigoldGarland() {
  return (
    <svg width="240" height="30" viewBox="0 0 240 30" className="mx-auto my-6" xmlns="http://www.w3.org/2000/svg">
      {/* Garland string */}
      <path
        d="M0,8 Q60,28 120,8 Q180,28 240,8"
        fill="none"
        stroke="#D4A017"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Marigold flowers along the garland */}
      {[20, 50, 80, 110, 130, 160, 190, 220].map((x, i) => {
        const y = 8 + Math.sin(((x / 240) * Math.PI * 2)) * 10
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="none" stroke="#F5A623" strokeWidth="1.2" opacity="0.7" />
            <circle cx={x} cy={y} r="3" fill="#F5A623" opacity="0.5" />
            {/* Petals */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={angle}
                cx={x + Math.cos((angle * Math.PI) / 180) * 5}
                cy={y + Math.sin((angle * Math.PI) / 180) * 5}
                r="2.5"
                fill="none"
                stroke={i % 2 === 0 ? '#F5A623' : '#E8734A'}
                strokeWidth="0.8"
                opacity="0.5"
              />
            ))}
          </g>
        )
      })}
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="inline-block mr-2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" fill="none" stroke="#D4A017" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1={12 + Math.cos((angle * Math.PI) / 180) * 7}
          y1={12 + Math.sin((angle * Math.PI) / 180) * 7}
          x2={12 + Math.cos((angle * Math.PI) / 180) * 10}
          y2={12 + Math.sin((angle * Math.PI) / 180) * 10}
          stroke="#D4A017"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

export default function EventSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const items = [
    { delay: 0 },
    { delay: 0.15 },
    { delay: 0.3 },
    { delay: 0.45 },
    { delay: 0.6 },
  ]

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 flex justify-center">
      <motion.div
        className="max-w-lg w-full rounded-2xl p-10 sm:p-14 text-center"
        style={{
          background: 'linear-gradient(145deg, #FFFBF0, #F8E8D6)',
          border: '1.5px solid #D4A017',
          boxShadow: '0 8px 40px rgba(212,160,23,0.12), inset 0 1px 0 rgba(245,215,130,0.3)',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Save the Date */}
        <motion.h3
          className="font-heading gold-shimmer text-3xl sm:text-4xl tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: items[0].delay, duration: 0.6 }}
        >
          Save the Date
        </motion.h3>

        {/* Date */}
        <motion.p
          className="font-heading text-maroon text-3xl sm:text-4xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: items[1].delay, duration: 0.6 }}
        >
          12 September 2026
        </motion.p>

        {/* Day */}
        <motion.p
          className="font-body text-warm-brown text-sm tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: items[2].delay, duration: 0.6 }}
        >
          Saturday
        </motion.p>

        {/* Time */}
        <motion.p
          className="font-heading text-maroon text-2xl mb-6 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: items[3].delay, duration: 0.6 }}
        >
          <SunIcon />
          9:00 AM
        </motion.p>

        {/* Marigold garland divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: items[4].delay, duration: 0.6 }}
        >
          <MarigoldGarland />
        </motion.div>
      </motion.div>
    </section>
  )
}

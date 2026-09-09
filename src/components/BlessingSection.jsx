import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const BLESSING_TEXT = 'With full hearts, we invite you to join us for an intimate celebration as we begin our forever together'

function GoldenDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-saffron" />
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-saffron">
        <path
          d="M10,2 Q14,6 14,10 Q14,14 10,18 Q6,14 6,10 Q6,6 10,2Z"
          fill="none"
          stroke="#D4A017"
          strokeWidth="1.5"
        />
        <circle cx="10" cy="10" r="2" fill="#D4A017" opacity="0.6" />
      </svg>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-saffron" />
    </div>
  )
}

export default function BlessingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = BLESSING_TEXT.split(' ')

  return (
    <section className="py-24 sm:py-32 px-6 flex flex-col items-center" ref={ref}>
      <GoldenDivider />

      <div className="max-w-2xl text-center">
        <p className="font-heading italic text-2xl sm:text-3xl md:text-4xl leading-relaxed text-maroon">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>

      <GoldenDivider />
    </section>
  )
}

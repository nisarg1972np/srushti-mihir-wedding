import { motion } from 'motion/react'
import OrnateGanesha from './OrnateGanesha'

export default function OpeningGate({ onOpen }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left gate half */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-end overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #C0392B 0%, #7B2D26 40%, #5E1914 100%)',
        }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Ornate border pattern - right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-8 opacity-30">
          <div className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #F5D782 20px, #F5D782 22px),
                repeating-linear-gradient(0deg, transparent, transparent 40px, #D4A017 40px, #D4A017 41px)`,
            }}
          />
        </div>
        <div className="absolute right-10 top-0 bottom-0 w-px bg-gold-shimmer opacity-20" />

        {/* Decorative corner ornaments */}
        <svg className="absolute top-6 right-6 w-16 h-16 opacity-30" viewBox="0 0 60 60">
          <path d="M60,0 Q30,10 20,30 Q10,20 0,60" fill="none" stroke="#F5D782" strokeWidth="1.5"/>
          <circle cx="40" cy="15" r="3" fill="#F5D782" opacity="0.5"/>
        </svg>
        <svg className="absolute bottom-6 right-6 w-16 h-16 opacity-30" viewBox="0 0 60 60">
          <path d="M60,60 Q30,50 20,30 Q10,40 0,0" fill="none" stroke="#F5D782" strokeWidth="1.5"/>
          <circle cx="40" cy="45" r="3" fill="#F5D782" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Right gate half */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-start overflow-hidden"
        style={{
          background: 'linear-gradient(225deg, #C0392B 0%, #7B2D26 40%, #5E1914 100%)',
        }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Ornate border pattern - left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-8 opacity-30">
          <div className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, #F5D782 20px, #F5D782 22px),
                repeating-linear-gradient(0deg, transparent, transparent 40px, #D4A017 40px, #D4A017 41px)`,
            }}
          />
        </div>
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gold-shimmer opacity-20" />

        {/* Decorative corner ornaments */}
        <svg className="absolute top-6 left-6 w-16 h-16 opacity-30" viewBox="0 0 60 60">
          <path d="M0,0 Q30,10 40,30 Q50,20 60,60" fill="none" stroke="#F5D782" strokeWidth="1.5"/>
          <circle cx="20" cy="15" r="3" fill="#F5D782" opacity="0.5"/>
        </svg>
        <svg className="absolute bottom-6 left-6 w-16 h-16 opacity-30" viewBox="0 0 60 60">
          <path d="M0,60 Q30,50 40,30 Q50,40 60,0" fill="none" stroke="#F5D782" strokeWidth="1.5"/>
          <circle cx="20" cy="45" r="3" fill="#F5D782" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Center content (above both halves) */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Ornate Ganesha */}
        <motion.div
          className="w-48 h-48 sm:w-56 sm:h-56 mb-6 diya-glow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120, damping: 14 }}
        >
          <OrnateGanesha className="w-full h-full" />
        </motion.div>

        {/* Hindi invocation */}
        <motion.p
          className="font-hindi text-xl sm:text-2xl tracking-wide mb-8"
          style={{ color: '#F5D782' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          || श्री गणेशाय नमः ||
        </motion.p>

        {/* Open button */}
        <motion.button
          onClick={onOpen}
          className="relative px-10 py-3 rounded-full font-heading text-lg tracking-widest uppercase overflow-hidden cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #D4A017, #F5D782, #D4A017)',
            color: '#5E1914',
            border: '2px solid #F5D782',
            boxShadow: '0 0 30px rgba(212,160,23,0.3)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212,160,23,0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.3), transparent)' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
          />
          <span className="relative z-10">Open Invitation</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

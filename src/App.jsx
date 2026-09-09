import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import OpeningGate from './components/OpeningGate'
import FloatingLeaves from './components/FloatingLeaves'
import GoldenParticles from './components/GoldenParticles'
import HeroSection from './components/HeroSection'
import BlessingSection from './components/BlessingSection'
import NamesSection from './components/NamesSection'
import EventSection from './components/EventSection'
import CountdownSection from './components/CountdownSection'
import VenueSection from './components/VenueSection'
import ClosingSection from './components/ClosingSection'
import Mandala from './components/Mandala'

export default function App() {
  const [gateOpen, setGateOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (gateOpen) {
      const timer = setTimeout(() => setShowContent(true), 600)
      return () => clearTimeout(timer)
    }
  }, [gateOpen])

  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      <AnimatePresence>
        {!gateOpen && (
          <OpeningGate key="gate" onOpen={() => setGateOpen(true)} />
        )}
      </AnimatePresence>

      {showContent && (
        <>
          <FloatingLeaves />
          <GoldenParticles />

          {/* Background mandalas */}
          <div className="fixed top-[-15%] right-[-15%] w-[600px] h-[600px] opacity-[0.04] pointer-events-none z-0">
            <Mandala className="mandala-rotate" color="#D4A017" />
          </div>
          <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] opacity-[0.04] pointer-events-none z-0">
            <Mandala className="mandala-rotate-reverse" color="#C0392B" />
          </div>

          <main className="relative z-10">
            <HeroSection />
            <BlessingSection />
            <NamesSection />
            <EventSection />
            <CountdownSection />
            <VenueSection />
            <ClosingSection />
          </main>
        </>
      )}
    </div>
  )
}

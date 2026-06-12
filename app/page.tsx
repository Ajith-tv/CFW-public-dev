'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { site } from '@/lib/site'
import ScrollReveal from '@/components/ScrollReveal'
import ChaosSection from '@/components/ChaosSection'
import WhyWeExist from '@/components/WhyWeExist'
import HowItWorks from '@/components/HowItWorks'
import PrivacySection from '@/components/PrivacySection'
import StoreButtons from '@/components/StoreButtons'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function Home() {
  const [splash, setSplash] = useState<'showing' | 'hiding' | 'hidden'>('showing')

  // The splash plays on every load, so always start the page from the top:
  // stop the browser restoring the previous scroll position on refresh.
  useEffect(() => {
    const previous = history.scrollRestoration
    history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => {
      history.scrollRestoration = previous
    }
  }, [])

  // Manage splash screen timer
  useEffect(() => {
    if (splash === 'showing') {
      const timer1 = setTimeout(() => {
        setSplash('hiding')
      }, 4400)
      return () => clearTimeout(timer1)
    } else if (splash === 'hiding') {
      const timer2 = setTimeout(() => {
        setSplash('hidden')
      }, 800)
      return () => clearTimeout(timer2)
    }
  }, [splash])

  // Lock scroll during splash screen
  useEffect(() => {
    if (splash !== 'hidden') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [splash])

  const skipSplash = () => {
    if (splash === 'showing') {
      setSplash('hiding')
    }
  }

  return (
    <div className="relative min-h-screen bg-[#FDFBF7]">
      {/* Splash Screen */}
      {splash !== 'hidden' && (
        <div
          onClick={skipSplash}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-soft cursor-pointer overflow-hidden transition-all duration-700 select-none ${
            splash === 'hiding' ? 'animate-slide-up' : ''
          }`}
        >
          {/* Logo fades in centered, beats once, then glides aside to reveal the name */}
          <div className="relative z-10 flex items-center px-4">
            <Image
              src="/logo.png"
              alt="Coffee After Work pixel heart logo"
              width={88}
              height={88}
              priority
              className="animate-splash-logo"
            />

            <div className="overflow-hidden animate-expand-name">
              <h1 className="ml-4 whitespace-nowrap text-2xl sm:text-3xl font-semibold tracking-tight text-ink leading-tight animate-reveal-name">
                Coffee
                <br />
                After <span className="text-brand">Work</span>
              </h1>
            </div>
          </div>

          {/* Hint to Enter */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-ink/30 text-xs tracking-[0.2em] font-medium uppercase animate-pulse">
            Click anywhere to skip
          </div>
        </div>
      )}

      {/* Hero Section: Full Screen Wide BG Image with Bottom-Left Aligned Hinge Style Heading */}
      <section className="relative h-svh w-full flex items-end justify-start overflow-hidden">
        {/* Full Viewport Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/date_image_wide.png"
            alt="Dating app built for working professionals"
            fill
            priority
            className="object-cover grayscale"
          />
          {/* Bottom-heavy dark gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent z-10" />
        </div>

        {/* Text Overlay: Aligned Bottom-Left */}
        <div className="relative z-20 max-w-4xl px-6 pb-16 sm:px-12 sm:pb-24 md:px-20 md:pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={splash === 'hidden' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.6, ease: easeOut, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-[1.15] max-w-2xl text-left select-text"
          >
            Dating app <br />
            built for{' '}
            <span className="text-brand-light">working professionals</span>
          </motion.h1>
        </div>
      </section>

      {/* Dating, without the chaos — pinned scroll-scrubbed statement */}
      <ChaosSection />

      {/* Why we exist — heading + values with app phone mockup */}
      <WhyWeExist />

      {/* How it works — pinned, scroll-scrubbed deep red editorial panel */}
      <HowItWorks />

      {/* Built with privacy in mind — scroll-scrubbed statement */}
      <PrivacySection />

      {/* Footer CTA */}
      <section
        id="download"
        className="mx-auto flex min-h-svh max-w-5xl items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20"
      >
        <ScrollReveal
          direction="up"
          className="relative w-full overflow-hidden rounded-3xl bg-ink py-12 px-6 text-cream shadow-xl sm:py-16 sm:px-12"
        >
          {/* Abstract blobs */}
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-light/15 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-md border border-cream/15">
              <div className="relative h-11 w-11">
                <Image src="/logo.png" alt="" fill className="object-contain" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl text-cream-soft">
              Ready for better conversations?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/80 text-sm sm:text-base leading-relaxed">
              We are finalizing {site.name} for our upcoming metropolitan launch. Subscribe to get early beta access.
            </p>
            
            <StoreButtons />
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

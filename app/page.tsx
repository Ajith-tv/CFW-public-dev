'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, easeInOut } from 'motion/react'
import { site } from '@/lib/site'
import ChaosSection from '@/components/ChaosSection'
import WhyWeExist from '@/components/WhyWeExist'
import HowItWorks from '@/components/HowItWorks'
import PrivacySection from '@/components/PrivacySection'
import StoreButtons from '@/components/StoreButtons'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function Home() {
  const [splash, setSplash] = useState<'showing' | 'hiding' | 'hidden'>(() =>
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('splashSeen')
      ? 'hidden'
      : 'showing'
  )

  // Only reset scroll and lock when splash is actually playing
  useEffect(() => {
    if (splash !== 'showing') return
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
        sessionStorage.setItem('splashSeen', '1')
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

  const footerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start 65%', 'start 0%'],
  })
  const cardRadius = useTransform(scrollYProgress, [0, 1], [28, 0], { ease: easeInOut })
  const cardWidth = useTransform(scrollYProgress, [0, 1], ['86%', '100%'], { ease: easeInOut })
  const cardHeight = useTransform(scrollYProgress, [0, 1], ['70vh', '100vh'], { ease: easeInOut })

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
            src="/date_image_hero.png"
            alt="Dating app built for working professionals"
            fill
            priority
            className="object-cover object-[67%_center] sm:object-center"
          />
          {/* Bottom-to-top dark gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
        </div>

        {/* Text Overlay: Aligned Bottom-Left */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 md:pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={splash === 'hidden' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.6, ease: easeOut, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-2xl text-left select-text"
          >
            Dating app <br />
            built for{' '}
            <span className="text-brand">working professionals</span>
          </motion.h1>
        </div>
      </section>

      {/* Dating, without the chaos — pinned scroll-scrubbed statement */}
      <ChaosSection />

      {/* Why we exist — heading + values, scroll-scrubbed */}
      <WhyWeExist />

      {/* How it works — pinned, scroll-scrubbed deep red editorial panel */}
      <HowItWorks />

      {/* Built with privacy in mind — scroll-scrubbed statement */}
      <PrivacySection />

      {/* Footer CTA — scroll-driven expand */}
      <section ref={footerRef} id="download" className="relative h-[200svh] bg-[#FDFBF7]">
        <div className="sticky top-0 h-svh flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ borderRadius: cardRadius, width: cardWidth, height: cardHeight }}
            className="bg-ink relative overflow-hidden flex flex-col items-center justify-center gap-6 px-6 py-10 text-center text-cream sm:px-8 sm:py-14"
          >
            {/* Abstract blobs */}
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-light/15 blur-3xl" />

            <div className="relative z-10 flex w-full flex-col items-center gap-6 px-4 sm:px-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-md border border-cream/15">
                <div className="relative h-11 w-11">
                  <Image src="/logo.png" alt="" fill className="object-contain" />
                </div>
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl text-cream-soft">
                Built for meaningful connections.
              </h2>
              <p className="mx-auto max-w-xl text-cream/80 text-sm sm:text-base leading-relaxed">
                Connect with professionals who are looking for something real. Join a community of professionals who value authenticity, meaningful conversations, and relationships built on mutual respect and shared aspirations.
              </p>
              <StoreButtons />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

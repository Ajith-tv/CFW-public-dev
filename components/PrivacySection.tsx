'use client'

/*
 * "Built with privacy in mind." — image-left, copy-right statement after
 * the three steps. The image slides in from the left while the heading
 * and lines slide/fade in from the right, all scroll-scrubbed (GSAP
 * ScrollTrigger style) so the motion rewinds on the way back up.
 */

import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useHydrated } from '@/lib/useHydrated'
import { Word, Reveal } from '@/components/ScrollScrub'

const WORDS: ReactNode[] = [
  'Built',
  'with',
  <span key="privacy" className="italic text-brand">
    privacy
  </span>,
  'in',
  <span key="mind">
    mind<span className="text-brand">.</span>
  </span>,
]

const LINES = [
  'Your information stays secure and is never shared without your consent. You decide who sees your profile, your visibility, and your preferences. Because meaningful connections start with trust, not exposure.',
]

export default function PrivacySection() {
  const ref = useRef<HTMLElement>(null)
  const hydrated = useHydrated()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.25'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  // Image slides in from the left
  const imgX = useTransform(progress, [0, 0.55], [-90, 0])
  const imgOpacity = useTransform(progress, [0, 0.55], [0, 1])

  const wordSpan = 0.4 / WORDS.length

  return (
    <section
      ref={ref}
      className="flex min-h-svh items-center bg-[#FDFBF7] py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Image — slides in from the left */}
        <motion.div
          style={hydrated ? { x: imgX, opacity: imgOpacity } : undefined}
          className="relative order-1"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/date_images.png"
              alt="Two people connecting over coffee"
              width={720}
              height={820}
              className="h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />
          </div>
          {/* Soft brand glow behind the frame */}
          <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />
        </motion.div>

        {/* Copy — heading + lines on the right */}
        <div className="order-2">
          <h2 className="flex flex-wrap text-3xl font-bold tracking-tight text-ink leading-[1.05] sm:text-5xl md:text-6xl">
            {WORDS.map((word, i) => (
              <Word
                key={i}
                progress={progress}
                start={0.05 + i * wordSpan}
                end={0.05 + (i + 1.6) * wordSpan}
              >
                {word}
              </Word>
            ))}
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            {LINES.map((line, i) => (
              <Reveal
                key={line}
                progress={progress}
                start={0.4 + i * 0.14}
                end={0.6 + i * 0.14}
              >
                <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

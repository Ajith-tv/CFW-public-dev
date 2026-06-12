'use client'

/*
 * "Why we exist" — full-screen two-column statement section.
 * Left: heading + three value props as a quiet divided list.
 * Right: phone mockup of the actual app UI.
 *
 * Entrance is scroll-scrubbed (GSAP ScrollTrigger style): as the section
 * scrolls into view the copy slides in from the left and the phone from
 * the right, mapped directly to scroll progress so it rewinds when you
 * scroll back up. The phone also keeps a gentle counter-scroll drift.
 */

import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useHydrated } from '@/lib/useHydrated'

type Progress = ReturnType<typeof useSpring>

// A block sliding in horizontally over its slice of the section's progress
function SlideIn({
  progress,
  start,
  end,
  from,
  children,
  className,
}: {
  progress: Progress
  start: number
  end: number
  /** px offset to slide in from (negative = from left, positive = from right) */
  from: number
  children: ReactNode
  className?: string
}) {
  const hydrated = useHydrated()
  const x = useTransform(progress, [start, end], [from, 0])
  const opacity = useTransform(progress, [start, end], [0, 1])
  return (
    <motion.div style={hydrated ? { x, opacity } : undefined} className={className}>
      {children}
    </motion.div>
  )
}

const values = [
  {
    title: 'Meaningful connections',
    body: 'Focus on genuine conversations rather than endless matches.',
  },
  {
    title: 'Professional community',
    body: 'A platform built with working professionals in mind.',
  },
  {
    title: 'Quality over quantity',
    body: 'Fewer distractions. Better conversations.',
  },
]

export default function WhyWeExist() {
  const ref = useRef<HTMLElement>(null)
  const hydrated = useHydrated()

  // Entrance scrub: 0 when the section's top enters the viewport bottom,
  // 1 once it has risen to ~the upper third of the screen.
  const { scrollYProgress: enterProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'start 0.3'],
  })
  const progress = useSpring(enterProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  // Gentle counter-scroll drift on the phone while the section passes through
  const { scrollYProgress: throughProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const smooth = useSpring(throughProgress, { stiffness: 120, damping: 24, mass: 0.4 })
  const phoneY = useTransform(smooth, [0, 1], [60, -60])
  const phoneX = useTransform(progress, [0.1, 0.7], [120, 0])
  const phoneOpacity = useTransform(progress, [0.1, 0.7], [0, 1])

  return (
    <section
      ref={ref}
      className="flex min-h-svh items-center bg-[#FDFBF7] py-20 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Copy — slides in from the left */}
        <div>
          <SlideIn progress={progress} start={0} end={0.5} from={-90}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Why we exist
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15]">
              Modern professionals deserve{' '}
              <span className="italic text-brand">better</span> ways to connect.
            </h2>
          </SlideIn>

          <div className="mt-10 divide-y divide-stone-200/80 border-t border-stone-200/80">
            {values.map((v, i) => (
              <SlideIn
                key={v.title}
                progress={progress}
                start={0.15 + i * 0.12}
                end={0.65 + i * 0.12}
                from={-70}
                className="py-6"
              >
                <div className="flex items-baseline gap-5">
                  <span className="text-xs font-mono font-semibold text-brand/60">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-1 text-sm sm:text-base text-stone-600 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>

        {/* Phone mockup — slides in from the right, then drifts with scroll */}
        <motion.div
          style={hydrated ? { x: phoneX, y: phoneY, opacity: phoneOpacity } : undefined}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/phonemockup.png"
            alt="Coffee After Work app showing a profile card"
            width={460}
            height={715}
            className="w-65 sm:w-80 h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

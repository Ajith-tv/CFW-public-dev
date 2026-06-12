'use client'

/*
 * Why we exist — one pinned, scroll-scrubbed section (GSAP ScrollTrigger
 * pin+scrub style) in three phases:
 *   1. The bold heading is visible (dim) the moment the section enters;
 *      scrolling lights its words up one by one to full strength.
 *   2. Continued scrolling lifts the lit heading up and fades it away.
 *   3. The three value lines scrub in one by one in its place.
 * Scrolling back up rewinds everything.
 */

import { useRef, type ReactNode } from 'react'
import { useScroll, useSpring, useTransform, motion } from 'motion/react'
import { LitWord, Reveal } from '@/components/ScrollScrub'
import { useHydrated } from '@/lib/useHydrated'

// Heading split into lines of words so each word can light up on its
// own slice of scroll progress.
const LINES: ReactNode[][] = [
  ['Modern', 'professionals'],
  [
    'deserve',
    <span key="better" className="italic text-brand">
      better
    </span>,
    'ways',
  ],
  [
    'to',
    <span key="connect">
      connect<span className="text-brand">.</span>
    </span>,
  ],
]

const WORD_COUNT = LINES.reduce((n, line) => n + line.length, 0)

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

// Progress phases: words light up, heading exits, values arrive. The
// values finish by VALUES_END so they sit pinned, centered on screen,
// before the next section's red panel starts sliding over (~0.7 of
// progress, given its -100svh pull-up).
const LIGHT_START = 0.04
const LIGHT_END = 0.34
const EXIT_START = 0.36
const EXIT_END = 0.46
const VALUES_START = 0.48
const VALUES_END = 0.68

export default function WhyWeExist() {
  const ref = useRef<HTMLElement>(null)
  const hydrated = useHydrated()

  // Starts counting as the section enters the viewport (heading already
  // dimly visible) and reaches 1 when the section unpins.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end end'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 26,
    mass: 0.4,
  })

  const wordSpan = (LIGHT_END - LIGHT_START) / WORD_COUNT

  // Phase 2 — the lit heading drifts up and fades away
  const headingY = useTransform(progress, [EXIT_START, EXIT_END], [0, -120])
  const headingOpacity = useTransform(progress, [EXIT_START, EXIT_END], [1, 0])

  // Phase 3 — values reveal one by one as the heading clears, the last
  // one landing exactly at VALUES_END
  const valueStagger = (VALUES_END - VALUES_START) / (values.length + 0.4)

  let wordIndex = 0

  return (
    <section ref={ref} className="relative h-[340vh] w-full bg-[#FDFBF7]">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          {/* Phase 1 + 2: heading lights up, then lifts away */}
          <motion.div
            style={hydrated ? { y: headingY, opacity: headingOpacity } : undefined}
            className="text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Why we exist
            </span>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold tracking-tight text-ink leading-[1.2] sm:mt-6 sm:text-5xl md:text-6xl">
              {LINES.map((line, i) => (
                <span key={i} className="block">
                  {line.map((word, j) => {
                    const start = LIGHT_START + wordIndex * wordSpan
                    wordIndex += 1
                    return (
                      <LitWord
                        key={j}
                        progress={progress}
                        start={start}
                        end={start + wordSpan * 1.6}
                      >
                        {word}
                      </LitWord>
                    )
                  })}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Phase 3: value lines arrive one by one where the heading was */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 sm:px-6">
            <div className="grid w-full gap-5 sm:grid-cols-3 sm:gap-10">
              {values.map((v, i) => (
                <Reveal
                  key={v.title}
                  progress={progress}
                  start={VALUES_START + i * valueStagger}
                  end={VALUES_START + (i + 1.4) * valueStagger}
                  className="border-t border-stone-200/80 pt-4 sm:pt-8"
                >
                  <span className="text-xs font-mono font-semibold text-brand/60 sm:text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink sm:mt-5 sm:text-2xl">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed sm:mt-3 sm:text-base">
                    {v.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

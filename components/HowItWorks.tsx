'use client'

/*
 * "Three simple steps." — pinned, scroll-scrubbed like ChaosSection.
 * The section pins full-screen on the deep red panel while scrolling
 * scrubs the reveal: eyebrow, then the heading word by word, then the
 * three steps one after another. Scrolling back up rewinds everything.
 */

import { useRef, type ReactNode } from 'react'
import { useScroll, useSpring } from 'motion/react'
import { Word, Reveal } from '@/components/ScrollScrub'

const WORDS: ReactNode[] = [
  'Three',
  'simple',
  <span key="steps">
    <em>steps</em>.
  </span>,
]

const STEPS = [
  {
    title: 'Domain verification',
    body: 'Register using your company email. This confirms you work in a professional capacity.',
  },
  {
    title: 'Profile prompts',
    body: 'Fill out your cards with hobbies, work-life balance goals, and dating preferences.',
  },
  {
    title: 'Coffee date',
    body: 'Select date suggestions near transit lines or key offices to coordinate meetings easily.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end end'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 26,
    mass: 0.4,
  })

  // Heading words occupy the first ~40% of the pinned scroll, the three
  // steps share the rest, each starting slightly after the previous one.
  const wordSpan = 0.4 / WORDS.length
  const stepSpan = 0.5 / STEPS.length

  return (
    // Pulled up one viewport (mt-[-100svh]) so it slides over the pinned
    // "Why we exist" section, covering it before pinning itself.
    <section
      id="how-it-works"
      ref={ref}
      className="relative z-10 mt-[-100svh] h-[220vh] w-full rounded-t-[2.5rem] bg-brand sm:rounded-t-[3rem]"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <Reveal progress={progress} start={0} end={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/60">
              Our Matchmaking Flow
            </p>
          </Reveal>

          <h2 className="mt-4 flex flex-wrap text-3xl font-bold tracking-tight text-cream-soft sm:mt-6 sm:text-5xl md:text-6xl">
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

          <div className="mt-8 grid gap-5 sm:mt-20 sm:grid-cols-3 sm:gap-10">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.title}
                progress={progress}
                start={0.45 + i * stepSpan}
                end={0.45 + (i + 1.4) * stepSpan}
                className="border-t border-cream/30 pt-4 sm:pt-10"
              >
                <span className="font-mono text-xs text-cream/70 sm:text-sm">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-cream-soft sm:mt-8 sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm text-cream/75 leading-relaxed sm:mt-5 sm:text-base">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

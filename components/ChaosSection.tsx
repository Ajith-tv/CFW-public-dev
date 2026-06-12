'use client'

/*
 * Pinned, scroll-scrubbed statement section (GSAP ScrollTrigger pin+scrub
 * style). The outer section is taller than the screen; the inner screen
 * stays stuck (sticky, full screen, content centered) while the user's
 * scrolling drives the reveal: words rise one by one, then the paragraph
 * fades in. Only once the whole reveal completes does the section unpin
 * and scroll out. Scrolling back up rewinds everything.
 */

import { useRef, type ReactNode } from 'react'
import { useScroll, useSpring } from 'motion/react'
import { Word, Reveal } from '@/components/ScrollScrub'

const WORDS: ReactNode[] = [
  <span key="dating" className="text-brand">
    Dating,
  </span>,
  'without',
  'the',
  <span key="chaos" className="italic">
    chaos<span className="text-brand">.</span>
  </span>,
]

export default function ChaosSection() {
  const ref = useRef<HTMLElement>(null)

  // Starts counting as soon as the section enters the viewport (so the
  // heading is already revealing during the entrance, before it pins)
  // and reaches 1 when the section unpins.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end end'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 26,
    mass: 0.4,
  })

  // Words occupy ~the first half of the pinned scroll, paragraph follows
  const wordSpan = 0.45 / WORDS.length

  return (
    <section ref={ref} className="relative h-[170vh] w-full bg-white">
      <div className="sticky top-0 flex h-svh items-center">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <h2 className="flex flex-wrap text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-ink">
            {WORDS.map((word, i) => (
              <Word
                key={i}
                progress={progress}
                start={0.02 + i * wordSpan}
                end={0.02 + (i + 1.6) * wordSpan}
              >
                {word}
              </Word>
            ))}
          </h2>

          <div className="flex flex-col gap-8 lg:pt-4">
            {/* Reveals on the same slice as the last word ("chaos.") */}
            <Reveal
              progress={progress}
              start={0.02 + 3 * wordSpan}
              end={0.02 + 4.6 * wordSpan}
              className="text-base sm:text-lg md:text-xl text-ink/80 leading-relaxed"
            >
              Most dating apps are built around endless swiping. Coffee After
              Work is designed for professionals who value meaningful
              conversations, shared ambitions, and authentic connections.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

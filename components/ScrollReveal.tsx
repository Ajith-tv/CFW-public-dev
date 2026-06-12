'use client'

/*
 * Scroll-scrubbed reveal — GSAP ScrollTrigger style.
 *
 * Unlike a trigger-on-enter animation, the element's opacity / position
 * are mapped DIRECTLY to its scroll progress through the viewport, so the
 * motion scrubs forward as you scroll down and rewinds as you scroll up.
 * A spring smooths the raw scroll value so it feels fluid, not jumpy.
 */

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'motion/react'
import { useHydrated } from '@/lib/useHydrated'

type Direction = 'up' | 'down' | 'left' | 'right'

const AXIS: Record<Direction, { axis: 'x' | 'y'; from: number }> = {
  up: { axis: 'y', from: 80 },
  down: { axis: 'y', from: -80 },
  left: { axis: 'x', from: 80 },
  right: { axis: 'x', from: -80 },
}

export default function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  /** 0–1 shift of where this element finishes revealing (for staggering siblings) */
  delay?: number
  as?: 'div' | 'p' | 'h2' | 'section'
}) {
  const ref = useRef<HTMLElement>(null)
  const hydrated = useHydrated()

  // Progress from when the element's top enters the bottom of the viewport
  // (0) to when it has risen to ~60% up the screen (1).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', `start ${0.4 - delay}`],
  })

  // Smooth the raw scroll progress so the scrub feels weighted
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  const opacity = useTransform(progress, [0, 1], [0, 1])
  const { axis, from } = AXIS[direction]
  const offset = useTransform(progress, [0, 1], [from, 0])

  const style =
    axis === 'y'
      ? { opacity, y: offset as MotionValue<number> }
      : { opacity, x: offset as MotionValue<number> }

  const MotionTag = motion[as]

  return (
    // Scroll-driven styles attach only after hydration so the server HTML
    // and the hydration render match (content is visible in plain SSR).
    // @ts-expect-error — ref type widens across the union of tags
    <MotionTag ref={ref} style={hydrated ? style : undefined} className={className}>
      {children}
    </MotionTag>
  )
}

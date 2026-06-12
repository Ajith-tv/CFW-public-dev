'use client'

/*
 * Shared building blocks for pinned, scroll-scrubbed sections (GSAP
 * ScrollTrigger pin+scrub style). A parent section maps its scroll
 * progress to a spring and hands each piece a [start, end] slice of
 * that progress to animate over. Scrolling back up rewinds everything.
 */

import { type ReactNode } from 'react'
import { motion, useTransform, useSpring } from 'motion/react'
import { useHydrated } from '@/lib/useHydrated'

export type Progress = ReturnType<typeof useSpring>

// One word of a heading, masked and rising over its slice of progress
export function Word({
  progress,
  start,
  end,
  children,
}: {
  progress: Progress
  start: number
  end: number
  children: ReactNode
}) {
  const hydrated = useHydrated()
  const y = useTransform(progress, [start, end], ['110%', '0%'])
  const opacity = useTransform(progress, [start, end], [0, 1])
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden py-1 align-bottom">
      <motion.span style={hydrated ? { y, opacity } : undefined} className="inline-block">
        {children}
      </motion.span>
    </span>
  )
}

// A block fading up over its slice of progress
export function Reveal({
  progress,
  start,
  end,
  children,
  className,
}: {
  progress: Progress
  start: number
  end: number
  children: ReactNode
  className?: string
}) {
  const hydrated = useHydrated()
  const y = useTransform(progress, [start, end], [48, 0])
  const opacity = useTransform(progress, [start, end], [0, 1])
  return (
    <motion.div style={hydrated ? { y, opacity } : undefined} className={className}>
      {children}
    </motion.div>
  )
}

'use client'

/*
 * App Store / Google Play buttons for the footer CTA. The apps are not
 * live yet, so instead of linking out, clicking a button pops a small
 * "Coming soon" tooltip above it. Clicking elsewhere dismisses it.
 */

import { useEffect, useRef, useState } from 'react'

type Store = 'ios' | 'android'

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#34A853" d="M3.6 21.4 14 12 3.6 2.6c-.36.27-.6.7-.6 1.22v16.36c0 .52.24.95.6 1.22z" />
      <path fill="#EA4335" d="M3.6 2.6 14 12l3.06-2.77-11.7-6.6A1.4 1.4 0 0 0 3.6 2.6z" />
      <path fill="#FBBC04" d="M17.06 14.77 14 12l3.06-2.77 3.5 1.97c.94.53.94 1.07 0 1.6z" />
      <path fill="#4285F4" d="M3.6 21.4 14 12l3.06 2.77-11.7 6.6c-.55.31-1.18.27-1.76.03z" />
    </svg>
  )
}

function StoreButton({
  store,
  label,
  open,
  onToggle,
  children,
}: {
  store: Store
  label: string
  open: boolean
  onToggle: (s: Store) => void
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      {open && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-cream px-3 py-1.5 text-xs font-semibold text-ink shadow-lg">
          Coming soon
          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-cream" />
        </span>
      )}
      <button
        type="button"
        onClick={() => onToggle(store)}
        className="flex items-center gap-3 rounded-xl border border-cream/10 bg-white/5 px-5 py-3 text-left transition-colors hover:bg-white/10"
      >
        {children}
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-cream/60">
            {label}
          </span>
          <span className="text-sm font-semibold text-cream-soft">Coming soon</span>
        </span>
      </button>
    </div>
  )
}

export default function StoreButtons() {
  const [open, setOpen] = useState<Store | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  // Dismiss the tooltip when clicking anywhere outside the buttons.
  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  const toggle = (s: Store) => setOpen((cur) => (cur === s ? null : s))

  return (
    <div ref={ref} className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <StoreButton store="ios" label="Download on the" open={open === 'ios'} onToggle={toggle}>
        <AppleIcon />
      </StoreButton>
      <StoreButton store="android" label="Get it on" open={open === 'android'} onToggle={toggle}>
        <PlayIcon />
      </StoreButton>
    </div>
  )
}

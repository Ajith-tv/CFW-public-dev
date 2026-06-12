'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/site'

const links = [
  { href: '/', label: 'Home' },
  { href: '/support', label: 'Support' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
]

type HeaderTheme = 'transparent' | 'light' | 'red'

export default function Header() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<HeaderTheme>('light')
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu when navigating to another page
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      // Transparent until the bottom of the hero (100vh) scrolls past the navbar
      if (pathname === '/' && window.scrollY < window.innerHeight - 65) {
        setTheme('transparent')
        return
      }
      // Red while the bar overlaps the red "how it works" section
      const redSection = document.getElementById('how-it-works')
      if (redSection) {
        const rect = redSection.getBoundingClientRect()
        if (rect.top <= 65 && rect.bottom >= 65) {
          setTheme('red')
          return
        }
      }
      setTheme('light')
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  // Transparent and red both sit on dark backgrounds — light text
  const onDark = theme !== 'light'

  return (
    <>
      {/* Always fixed at top — out of document flow */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          theme === 'transparent'
            ? 'bg-transparent border-b border-transparent'
            : theme === 'red'
            ? 'bg-brand/95 border-b border-transparent backdrop-blur-md'
            : 'bg-white/90 border-b border-transparent backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className={`h-9 w-9 shrink-0 rounded-full transition-all duration-500 ${
                theme === 'red' ? 'brightness-0 invert' : ''
              }`}
            />
            <span
              className={`truncate text-base font-bold sm:text-lg transition-colors duration-500 ${
                onDark ? 'text-white' : 'text-ink'
              }`}
            >
              {site.name}
            </span>
          </Link>

          {/* Desktop: pill nav */}
          <nav
            className={`hidden shrink-0 items-center gap-2 rounded-full border p-1 sm:flex transition-all duration-500 ${
              onDark
                ? 'border-white/20 bg-white/10 backdrop-blur-md'
                : 'border-stone-200 bg-white/70'
            }`}
          >
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    active
                      ? theme === 'red'
                        ? 'bg-cream text-brand shadow-sm'
                        : 'bg-brand text-cream shadow-sm'
                      : onDark
                      ? 'text-white/90 hover:bg-white/15 hover:text-white'
                      : 'text-stone-600 hover:bg-cream-soft hover:text-brand'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile: hamburger toggling a popover */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border sm:hidden transition-all duration-500 ${
              onDark
                ? 'border-white/20 bg-white/10 text-white backdrop-blur-md'
                : 'border-stone-200 bg-white/70 text-ink'
            }`}
          >
            <span className="relative block h-3.5 w-4.5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile popover */}
        <div
          className={`absolute right-4 top-full mt-2 w-48 origin-top-right rounded-2xl border border-stone-200 bg-white p-2 shadow-xl transition-all duration-200 sm:hidden ${
            menuOpen
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-95 opacity-0'
          }`}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-brand text-cream'
                    : 'text-stone-600 hover:bg-cream-soft hover:text-brand'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </header>

      {/* Mobile: tap anywhere outside the popover to close it */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 sm:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      {/* Spacer: only on non-home pages so content isn't hidden behind the fixed bar */}
      {pathname !== '/' && (
        <div className="h-[61px]" aria-hidden="true" />
      )}
    </>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/site'

export default function Footer() {
  const pathname = usePathname()
  const dark = pathname === '/'

  return (
    <footer className={dark ? 'bg-ink' : 'border-t border-stone-200 bg-cream-soft/60'}>
      <div className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm sm:flex-row sm:px-6 sm:text-left ${dark ? 'text-cream/50' : 'text-stone-500'}`}>
        <p>
          © {new Date().getFullYear()} {site.legalEntity}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/support" className={dark ? 'hover:text-cream' : 'hover:text-brand'}>
            Support
          </Link>
          <Link href="/terms" className={dark ? 'hover:text-cream' : 'hover:text-brand'}>
            Terms &amp; Conditions
          </Link>
          <Link href="/privacy" className={dark ? 'hover:text-cream' : 'hover:text-brand'}>
            Privacy Policy
          </Link>
          <a href={`mailto:${site.contactEmail}`} className={dark ? 'hover:text-cream' : 'hover:text-brand'}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

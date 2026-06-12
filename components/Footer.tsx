import Link from 'next/link'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream-soft/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-stone-500 sm:flex-row sm:px-6 sm:text-left">
        <p>
          © {new Date().getFullYear()} {site.legalEntity}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/support" className="hover:text-brand">
            Support
          </Link>
          <Link href="/terms" className="hover:text-brand">
            Terms &amp; Conditions
          </Link>
          <Link href="/privacy" className="hover:text-brand">
            Privacy Policy
          </Link>
          <a href={`mailto:${site.contactEmail}`} className="hover:text-brand">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

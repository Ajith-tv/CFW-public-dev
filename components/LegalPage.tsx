import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'

type Props = {
  title: string
  lastUpdated: string
  children: ReactNode
}

// Shared shell + typography for legal documents (Terms, Privacy, etc.).
export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="mb-8 flex items-start justify-between gap-4 rounded-3xl border border-stone-200 bg-cream-soft/60 p-6 sm:mb-10 sm:p-8">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs text-stone-500 sm:text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={48}
            height={48}
            className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
          />
        </Link>
      </header>
      <div className="space-y-6 break-words text-[15px] leading-relaxed text-stone-700">
        {children}
      </div>
    </article>
  )
}

// Small helpers for consistent section formatting.
export function Section({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-stone-900">{heading}</h2>
      {children}
    </section>
  )
}

export function SubSection({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <section className="space-y-2">
      <h3 className="text-base font-semibold text-ink">{heading}</h3>
      {children}
    </section>
  )
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-brand">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

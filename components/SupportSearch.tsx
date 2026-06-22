'use client'

import { useMemo, useState, type ReactNode } from 'react'
import Link from 'next/link'

export interface SearchItem {
  slug: string
  title: string
  summary: string
  category: string
  keywords?: string[]
}

/**
 * Search box for the Help Center hub. Renders its server-supplied `children`
 * (the category sections) until the user types, then swaps in filtered results.
 */
export default function SupportSearch({
  items,
  children,
}: {
  items: SearchItem[]
  children: ReactNode
}) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!q) return []
    return items.filter((item) => {
      const haystack = [item.title, item.summary, item.category, ...(item.keywords ?? [])]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [q, items])

  return (
    <div>
      <div className="relative mx-auto max-w-2xl">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search help articles…"
          aria-label="Search help articles"
          className="w-full rounded-2xl border border-stone-200 bg-white py-4 pl-12 pr-4 text-base text-ink shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-brand/60 focus:ring-2 focus:ring-brand/15"
        />
      </div>

      {q ? (
        <div className="mx-auto mt-8 max-w-3xl">
          {results.length > 0 ? (
            <>
              <p className="text-sm text-stone-500">
                {results.length} {results.length === 1 ? 'result' : 'results'} for “{query}”
              </p>
              <ul className="mt-4 divide-y divide-stone-200/80 border-y border-stone-200/80">
                {results.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/support/${a.slug}`}
                      className="group flex items-start justify-between gap-4 py-4"
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-ink transition-colors group-hover:text-brand">
                          {a.title}
                        </span>
                        <span className="mt-1 block text-sm text-stone-500">
                          {a.summary}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 h-4 w-4 shrink-0 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-sm text-stone-500">
              No articles match “{query}”. Try different words, or contact support below.
            </p>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  )
}

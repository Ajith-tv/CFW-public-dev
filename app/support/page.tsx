import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import {
  categories,
  articles,
  articlesByCategory,
  categoryHref,
  articleHref,
  popularArticles,
} from '@/lib/support'
import SupportSearch, { type SearchItem } from '@/components/SupportSearch'

export const metadata: Metadata = {
  title: 'Help Center',
  description: `Get help with ${site.name} — guides, account questions, safety, privacy, and how to contact us.`,
}

const searchItems: SearchItem[] = articles.map((a) => ({
  slug: a.slug,
  title: a.title,
  summary: a.summary,
  category: a.category,
  keywords: a.keywords,
}))

export default function Support() {
  const popular = popularArticles()

  return (
    <div className="bg-[#FDFBF7]">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pt-24 pb-8 text-center sm:px-10 sm:pt-32 sm:pb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          Help Center
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink leading-[1.05] sm:text-5xl md:text-6xl">
          How can we help?
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
          Browse the topics below, search for an answer, or reach our team directly.
        </p>
      </section>

      {/* Search + categories + popular */}
      <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-8 sm:pb-16">
        <SupportSearch items={searchItems}>
          {/* Category tiles */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {categories.map((category) => {
              const count = articlesByCategory(category.id).length
              return (
                <Link
                  key={category.id}
                  href={categoryHref(category.id)}
                  className="group flex flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-xl font-bold text-ink transition-colors group-hover:text-brand">
                      {category.title}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-5 w-5 shrink-0 text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                      aria-hidden
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">
                    {category.blurb}
                  </span>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-stone-400">
                    {count} {count === 1 ? 'article' : 'articles'}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Popular articles */}
          {popular.length > 0 && (
            <div className="mt-14">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                  Popular articles
                </h2>
                <ul className="mt-4 divide-y divide-stone-200/80 border-y border-stone-200/80">
                  {popular.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={articleHref(a.slug)}
                        className="group flex items-center justify-between gap-4 py-4"
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
              </div>
            )}
          </SupportSearch>
      </section>

      {/* Contact card */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-cream shadow-xl sm:px-12 sm:py-16">
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-light/15 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight text-cream-soft sm:text-4xl">
              Still need help?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
              Can’t find what you’re looking for? Our team usually responds within 1–2 business
              days.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${site.contactEmail}`}
                className="rounded-xl bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream-soft"
              >
                Contact support
              </a>
              <Link
                href="/privacy"
                className="rounded-xl border border-cream/15 px-6 py-3 text-sm font-medium text-cream/80 transition-colors hover:border-cream/40 hover:text-cream"
              >
                Privacy questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

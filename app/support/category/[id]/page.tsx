import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { site } from '@/lib/site'
import {
  categories,
  getCategory,
  articlesByCategory,
  articleHref,
  categoryHref,
  type CategoryId,
} from '@/lib/support'

// Statically prerender one page per known category; 404 anything else.
export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const category = getCategory(id as CategoryId)
  if (!category) return { title: 'Help Center' }
  return {
    title: category.title,
    description: `${category.blurb} — ${site.name} Help Center.`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const category = getCategory(id as CategoryId)
  if (!category) notFound()

  const items = articlesByCategory(category.id)

  return (
    <div className="bg-[#FDFBF7]">
      <div className="mx-auto max-w-5xl px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500"
        >
          <Link href="/support" className="transition-colors hover:text-brand">
            Support
          </Link>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 text-stone-400"
            aria-hidden
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span>{category.title}</span>
        </nav>

        {/* Header */}
        <header className="mt-6 border-b border-stone-200/80 pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-ink leading-[1.1] sm:text-4xl">
            {category.title}
          </h1>
          <p className="mt-2 text-base text-stone-600">{category.blurb}</p>
        </header>

        <div className="mt-8 lg:grid lg:grid-cols-[230px_1fr] lg:gap-12">
          {/* Category nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Topics
              </p>
              <ul className="mt-3 space-y-1">
                {categories.map((c) => {
                  const active = c.id === category.id
                  return (
                    <li key={c.id}>
                      <Link
                        href={categoryHref(c.id)}
                        aria-current={active ? 'page' : undefined}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          active
                            ? 'bg-brand/10 font-semibold text-brand'
                            : 'text-stone-600 hover:bg-cream-soft hover:text-ink'
                        }`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Article list */}
          <div className="min-w-0">
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={articleHref(a.slug)}
                    className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-ink transition-colors group-hover:text-brand">
                        {a.title}
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
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-stone-500">
                      {a.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact prompt */}
            <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 text-center">
              <p className="text-sm text-stone-600">
                Can’t find what you need?{' '}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="font-semibold text-brand underline"
                >
                  Contact support
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

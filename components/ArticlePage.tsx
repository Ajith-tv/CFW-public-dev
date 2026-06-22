import type { ReactNode } from 'react'
import Link from 'next/link'
import { site, formatDate } from '@/lib/site'
import {
  getArticle,
  getCategory,
  articlesByCategory,
  articleHref,
  categoryHref,
  type CategoryId,
} from '@/lib/support'

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

/** The in-section navigation: every article in the current category. */
function SectionNav({
  slug,
  categoryTitle,
  categoryId,
}: {
  slug: string
  categoryTitle: string
  categoryId: CategoryId
}) {
  const siblings = articlesByCategory(categoryId)
  return (
    <nav aria-label={`${categoryTitle} articles`}>
      <Link
        href={categoryHref(categoryId)}
        className="text-xs font-semibold uppercase tracking-wide text-stone-500 transition-colors hover:text-brand"
      >
        {categoryTitle}
      </Link>
      <ul className="mt-3 space-y-1">
        {siblings.map((a) => {
          const active = a.slug === slug
          return (
            <li key={a.slug}>
              <Link
                href={articleHref(a.slug)}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'bg-brand/10 font-semibold text-brand'
                    : 'text-stone-600 hover:bg-cream-soft hover:text-ink'
                }`}
              >
                {a.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/**
 * Shared shell for a Help Center article. Pulls the title, category, and
 * "last updated" date from the support registry (lib/support.ts) so the page
 * body only owns its content. Renders a Bumble-style sibling-article sidebar
 * and always ends with a contact card.
 */
export default function ArticlePage({
  slug,
  children,
}: {
  slug: string
  children: ReactNode
}) {
  const article = getArticle(slug)
  const category = article ? getCategory(article.category) : undefined

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
          {category && (
            <>
              <Chevron className="h-3.5 w-3.5 text-stone-400" />
              <Link
                href={categoryHref(category.id)}
                className="transition-colors hover:text-brand"
              >
                {category.title}
              </Link>
            </>
          )}
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-[230px_1fr] lg:gap-12">
          {/* Desktop sidebar */}
          {category && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <SectionNav
                  slug={slug}
                  categoryId={category.id}
                  categoryTitle={category.title}
                />
              </div>
            </aside>
          )}

          {/* Article column */}
          <article className="min-w-0">
            <header className="border-b border-stone-200/80 pb-7">
              <h1 className="text-3xl font-bold tracking-tight text-ink leading-[1.1] sm:text-4xl">
                {article?.title ?? 'Help'}
              </h1>
              {article && (
                <p className="mt-3 text-sm text-stone-500">
                  Last updated: {formatDate(article.lastUpdated)}
                </p>
              )}
            </header>

            {/* Mobile in-section nav */}
            {category && (
              <details className="group mt-6 rounded-2xl border border-stone-200 bg-white p-4 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink">
                  More in {category.title}
                  <span className="text-lg font-normal text-brand transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 border-t border-stone-200/80 pt-2">
                  <SectionNav
                    slug={slug}
                    categoryId={category.id}
                    categoryTitle={category.title}
                  />
                </div>
              </details>
            )}

            {/* Body */}
            <div className="mt-8 space-y-7 break-words text-[15px] leading-relaxed text-stone-700">
              {children}
            </div>

            {/* Contact card */}
            <section className="mt-14">
              <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 text-center text-cream shadow-xl sm:px-10 sm:py-12">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
                <div className="absolute -bottom-14 -left-14 h-48 w-48 rounded-full bg-brand-light/15 blur-3xl" />
                <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-2xl font-bold tracking-tight text-cream-soft sm:text-3xl">
                    Still need help?
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/80">
                    Our team usually responds within 1–2 business days.
                  </p>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="mt-7 rounded-xl bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream-soft"
                  >
                    Contact support
                  </a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

/** Numbered, step-by-step instructions (e.g. an in-app flow). */
export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-cream">
            {i + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  )
}

/** Highlighted aside — used for off-ramps (deactivate instead) and notes. */
export function Callout({
  icon,
  title,
  children,
}: {
  icon?: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <aside className="flex gap-3.5 rounded-2xl border border-brand/15 bg-cream-soft/70 p-5">
      {icon && (
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <div className="mt-1.5 space-y-2 text-sm leading-relaxed text-stone-600">
          {children}
        </div>
      </div>
    </aside>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support',
  description: `Get help with ${site.name} — FAQs, account questions, and contact options.`,
}

export default function Support() {
  return (
    <div className="bg-[#FDFBF7]">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pt-24 pb-12 sm:px-10 sm:pt-32 sm:pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-ink leading-[1.05] sm:text-5xl md:text-6xl">
          We are here to help.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
          Questions about your account, verification, or privacy? Start with the
          FAQs below, or reach out to us directly.
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark sm:text-base"
        >
          {site.contactEmail}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-10 sm:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-stone-200/80 border-t border-stone-200/80">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5 sm:py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink sm:text-lg">
                {f.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center text-lg font-normal text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact card — matches homepage footer CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-cream shadow-xl sm:px-12 sm:py-16">
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-light/15 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight text-cream-soft sm:text-4xl">
              Still need help?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
              Our team usually responds within 1–2 business days.
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

const faqs = [
  {
    q: 'Why do I need a corporate email to sign up?',
    a: `${site.name} is built for working professionals. Corporate email verification keeps the community genuine and trusted. Personal email providers such as Gmail or Yahoo are not permitted.`,
  },
  {
    q: 'My company domain is not supported. What can I do?',
    a: 'You can request access for your company by contacting support. We approve new domains based on user demand, company credibility, and platform safety.',
  },
  {
    q: 'How do I delete my account?',
    a: 'You can delete your account at any time from the settings screen in the app. Some information may be retained temporarily as described in our Privacy Policy.',
  },
  {
    q: 'How is my data protected?',
    a: 'We use reasonable technical and organizational measures, including encrypted storage of credentials, and we never sell your personal information. See our Privacy Policy for details.',
  },
  {
    q: 'How do I cancel a subscription?',
    a: 'Subscriptions are managed through the App Store or Google Play. Note that deleting the app does not cancel an active subscription.',
  },
  {
    q: 'How do I report another user?',
    a: `Open the profile, tap the three-dot menu in the top corner, and select Report. You can also email ${site.contactEmail} with details. We review all reports and take action to keep the community safe.`,
  },
]

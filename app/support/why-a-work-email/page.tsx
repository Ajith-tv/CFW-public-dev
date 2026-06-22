import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Callout } from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'why-a-work-email'

export const metadata: Metadata = {
  title: 'Why you need a work email to sign up',
  description: `Why ${site.name} verifies a corporate email at sign-up, and what to do if your company domain isn't supported.`,
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
    </svg>
  )
}

export default function WhyAWorkEmail() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        When you sign up for {site.name}, we ask for your work email rather than a personal one.
        Here&apos;s why that matters.
      </p>

      <Section heading="Built for working professionals">
        <p>
          {site.name} is built for working professionals who want to meet other professionals.
          Verifying a corporate email keeps the community genuine and trusted, and helps confirm
          that the people you meet really are who they say they are.
        </p>
      </Section>

      <Section heading="Personal email providers aren't accepted">
        <p>
          Because a personal inbox can&apos;t confirm where you work, providers such as Gmail,
          Yahoo, and other personal email services are not permitted for sign-up. You&apos;ll need
          an email at your company&apos;s domain.
        </p>
      </Section>

      <Callout icon={<BuildingIcon />} title="My company domain isn't supported">
        <p>
          You can request access for your company by{' '}
          <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
            contacting support
          </a>
          . We approve new domains based on user demand, company credibility, and platform
          safety.
        </p>
      </Callout>

      <Section heading="What about my privacy?">
        <p>
          We use your email to verify eligibility and manage your account — not to contact your
          employer or share where you work with other members. See our{' '}
          <Link className="text-brand underline" href="/privacy">
            Privacy Policy
          </Link>{' '}
          for how we handle your information.
        </p>
      </Section>
    </ArticlePage>
  )
}

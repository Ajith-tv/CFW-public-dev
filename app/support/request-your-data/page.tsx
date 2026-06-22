import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps, Callout } from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'request-your-data'

export const metadata: Metadata = {
  title: 'Requesting a copy of your data',
  description: `How to request a copy of the personal data ${site.name} holds about you, including your matches and messages.`,
}

function MailIcon() {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function RequestYourData() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        You have the right to ask for a copy of the personal data we hold about you. Whether
        it&apos;s for your own records or a legal reason, you can request it any time — it&apos;s
        free.
      </p>

      <Section heading="What you can request">
        <p>A copy of your data can include:</p>
        <List
          items={[
            'Your account and profile details — name, email, date of birth, and the information on your profile.',
            'Your photos and preferences.',
            'Your matches and likes.',
            'Your conversations and messages (chat history).',
          ]}
        />
        <p>
          For privacy and safety reasons, we may remove information that would identify other
          people from anything we share with you.
        </p>
      </Section>

      <Section heading="How to request your data">
        <Steps
          items={[
            <>
              Email us at{' '}
              <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>{' '}
              from the email address registered to your account.
            </>,
            'Use the subject “Data request” and tell us what you’d like a copy of.',
            'We may ask a question or two to confirm the account is yours before we send anything.',
          ]}
        />
        <p>
          We&apos;ll respond within a reasonable period, and within any timeframe required by
          applicable law.
        </p>
      </Section>

      <Callout icon={<MailIcon />} title="One email for any privacy request">
        <p>
          The same address handles all privacy requests — access, correction, or deletion. To
          remove your data instead, see{' '}
          <Link className="text-brand underline" href="/support/delete-account">
            Delete your account
          </Link>
          . For the bigger picture, read{' '}
          <Link className="text-brand underline" href="/support/your-privacy-and-data">
            Your privacy and your data
          </Link>
          .
        </p>
      </Callout>
    </ArticlePage>
  )
}

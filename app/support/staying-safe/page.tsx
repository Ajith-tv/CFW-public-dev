import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps, Callout } from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'staying-safe'

export const metadata: Metadata = {
  title: 'Staying safe & reporting',
  description: `How to report, block, or unmatch someone on ${site.name}, plus tips for dating safely.`,
}

function ShieldIcon() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default function StayingSafe() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Your safety comes first. If someone makes you uncomfortable or breaks our{' '}
        <Link className="text-brand underline" href="/support/community-guidelines">
          guidelines
        </Link>
        , you can report, block, or remove them in a couple of taps — and we review every report.
      </p>

      <Section heading="Report or block someone">
        <Steps
          items={[
            'Open the person’s profile or your chat with them.',
            'Tap the menu in the top corner.',
            <>
              Choose <strong>Report</strong> or <strong>Block</strong> and tell us what happened.
            </>,
          ]}
        />
        <p>
          Reports are confidential and reviewed by our safety team. Blocking someone removes them
          from your experience — you can review blocked people under{' '}
          <Link className="text-brand underline" href="/support/privacy-and-visibility">
            Hidden Profiles
          </Link>
          . You can also email{' '}
          <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>{' '}
          with details.
        </p>
      </Section>

      <Section heading="Unmatch someone">
        <p>
          To simply stop talking to a match, open the chat, tap the menu, and choose{' '}
          <strong>Unmatch</strong>. They&apos;ll no longer appear in your conversations.
        </p>
      </Section>

      <Section heading="Tips for dating safely">
        <List
          items={[
            <>
              <strong>Never send money</strong> or share financial details with anyone, whatever
              their story — this is the most common scam on dating apps.
            </>,
            <>
              <strong>Keep chats in the app</strong> until you fully trust someone; avoid sharing
              your number or socials too soon.
            </>,
            <>
              <strong>Meet in public</strong>, tell a friend where you&apos;re going, and arrange
              your own transport so you can leave whenever you want.
            </>,
            <>
              <strong>Trust your instincts</strong> — if something feels wrong, it&apos;s okay to
              leave, and report anyone who makes you uncomfortable.
            </>,
          ]}
        />
      </Section>

      <Section heading="How we help keep you safe">
        <List
          items={[
            <>
              <strong>Verified profiles</strong>: every member completes photo verification, which
              keeps fake and impersonated accounts out. See{' '}
              <Link className="text-brand underline" href="/support/photo-verification">
                Photo verification explained
              </Link>
              .
            </>,
            'We review reports and remove people who break our rules.',
            'Banned accounts are prevented from simply signing up again.',
          ]}
        />
      </Section>

      <Callout icon={<ShieldIcon />} title="If you're ever in danger">
        <p>
          Trust your instincts. If you feel unsafe or someone threatens you, contact your local
          emergency services first, then report the person to us so we can take action.
        </p>
      </Callout>
    </ArticlePage>
  )
}

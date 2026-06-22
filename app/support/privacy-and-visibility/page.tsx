import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'privacy-and-visibility'

export const metadata: Metadata = {
  title: 'Privacy & visibility controls',
  description: `Control how you appear on ${site.name} — Discovery visibility, online status, read receipts, and hidden profiles.`,
}

export default function PrivacyAndVisibility() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        You decide how visible you are. Most of these controls live under{' '}
        <strong>Profile → Privacy &amp; Safety</strong>.
      </p>

      <Section heading="Privacy & Safety toggles">
        <List
          items={[
            <>
              <strong>Show me on Discovery</strong> — turn this off to hide your profile from new
              people. Your existing matches and chats stay exactly as they are.
            </>,
            <>
              <strong>Show online status</strong> — choose whether matches can see when you were
              last active.
            </>,
            <>
              <strong>Read receipts</strong> — choose whether others can see when you&apos;ve read
              their messages.
            </>,
          ]}
        />
      </Section>

      <Section heading="Hidden Profiles">
        <p>
          People you&apos;ve blocked or hidden are kept in <strong>Profile → Hidden Profiles</strong>.
          You can review that list there. To block or report someone in the first place, see{' '}
          <Link className="text-brand underline" href="/support/staying-safe">
            Staying safe &amp; reporting
          </Link>
          .
        </p>
      </Section>

      <Section heading="Your data">
        <p>
          For how we handle your information overall, see{' '}
          <Link className="text-brand underline" href="/support/your-privacy-and-data">
            Your privacy and your data
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

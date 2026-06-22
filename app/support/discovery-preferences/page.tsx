import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps } from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'discovery-preferences'

export const metadata: Metadata = {
  title: 'Setting your Discovery Preferences',
  description: `Choose who you see on ${site.name} — age range, distance, and what you're looking for.`,
}

export default function DiscoveryPreferences() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Discovery Preferences decide who shows up for you in{' '}
        <Link className="text-brand underline" href="/support/finding-people">
          Spark and Discover
        </Link>
        . Adjust them any time to widen or narrow your matches.
      </p>

      <Section heading="Set your preferences">
        <Steps
          items={[
            <>
              Go to the <strong>Profile</strong> tab.
            </>,
            <>
              Tap <strong>Discovery Preferences</strong>.
            </>,
            'Set your age range, maximum distance, and who you’re looking for, then save.',
          ]}
        />
      </Section>

      <Section heading="Tips for more matches">
        <p>
          If you&apos;re not seeing many people, try widening your age range or increasing the
          distance. Your preferences only affect who you see — they don&apos;t change who you
          appear to beyond their own settings.
        </p>
      </Section>
    </ArticlePage>
  )
}

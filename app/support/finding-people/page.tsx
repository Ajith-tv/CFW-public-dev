import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'finding-people'

export const metadata: Metadata = {
  title: 'Finding people: Spark & Discover',
  description: `How to browse and like people on ${site.name} using the Spark and Discover tabs.`,
}

export default function FindingPeople() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        There are two ways to find people on {site.name}: <strong>Spark</strong> and{' '}
        <strong>Discover</strong>. Both show you profiles you can like or pass on.
      </p>

      <Section heading="Spark">
        <p>
          Spark is your home tab. It shows you people one at a time — take a look at each profile,
          then like them if you&apos;re interested or pass to see the next person.
        </p>
      </Section>

      <Section heading="Discover">
        <p>
          The Discover tab lets you browse more profiles at once. Tap any profile to open it,
          read through their photos and details, and like them from there.
        </p>
      </Section>

      <Section heading="Liking and sending a note">
        <p>
          When you like someone you can also send a short note to stand out and start things off.
          Free accounts get a set number of likes and notes; with{' '}
          <Link className="text-brand underline" href="/support/coffee-after-work-premium">
            Premium
          </Link>{' '}
          you get unlimited likes and more notes.
        </p>
      </Section>

      <Section heading="Who you see">
        <p>
          The people you&apos;re shown are based on your{' '}
          <Link className="text-brand underline" href="/support/discovery-preferences">
            Discovery Preferences
          </Link>{' '}
          — things like age range, distance, and who you&apos;re looking for. When you and someone
          like each other, it&apos;s a match: see{' '}
          <Link className="text-brand underline" href="/support/how-matches-work">
            How matches and likes work
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'how-matches-work'

export const metadata: Metadata = {
  title: 'How matches and likes work',
  description: `How matching works on ${site.name} — mutual likes become matches, and how to see who liked you.`,
}

export default function HowMatchesWork() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        A match is how two people connect on {site.name}. It&apos;s simple: when you both like
        each other, you match — and only then can you start a conversation.
      </p>

      <Section heading="Making a match">
        <p>
          Like someone in{' '}
          <Link className="text-brand underline" href="/support/finding-people">
            Spark or Discover
          </Link>
          . If they like you back, it&apos;s a match and a new conversation opens in your Chat
          tab so you can say hello. If they don&apos;t, nothing happens and they aren&apos;t told
          you liked them.
        </p>
      </Section>

      <Section heading="Seeing who liked you">
        <p>
          People who have already liked you appear in your Likes. Liking one of them back is an
          instant match. Seeing exactly who liked you is a{' '}
          <Link className="text-brand underline" href="/support/coffee-after-work-premium">
            Premium
          </Link>{' '}
          feature.
        </p>
      </Section>

      <Section heading="Why am I not getting matches?">
        <p>
          Add several clear photos and complete your profile — a fuller, verified profile is
          shown to more people and gets more likes. It also helps to widen your{' '}
          <Link className="text-brand underline" href="/support/discovery-preferences">
            Discovery Preferences
          </Link>{' '}
          (age range and distance). Once you match, here&apos;s{' '}
          <Link className="text-brand underline" href="/support/messaging-your-matches">
            how messaging works
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

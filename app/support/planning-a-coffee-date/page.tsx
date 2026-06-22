import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'planning-a-coffee-date'

export const metadata: Metadata = {
  title: 'Planning a coffee date',
  description: `Use Date Places to find where to meet, and meet safely when you take your ${site.name} match offline.`,
}

export default function PlanningACoffeeDate() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        {site.name} is about moving from a screen to a real coffee date. When you&apos;re both
        comfortable, here&apos;s how to plan to meet.
      </p>

      <Section heading="Date Places">
        <p>
          Stuck on where to go? The <strong>Date Places</strong> section gives you ideas for good
          spots to meet for a relaxed first coffee, so you can suggest somewhere without the
          back-and-forth.
        </p>
      </Section>

      <Section heading="Take it at your own pace">
        <p>
          There&apos;s no rush. Get to know someone in chat first, reveal photos when you&apos;re
          both ready, and only meet up when you feel comfortable. See{' '}
          <Link className="text-brand underline" href="/support/messaging-your-matches">
            Messaging your matches
          </Link>
          .
        </p>
      </Section>

      <Section heading="Meet safely">
        <p>
          For your first meeting, choose a public place, tell a friend where you&apos;re going,
          and arrange your own transport so you can leave whenever you want. Read our full{' '}
          <Link className="text-brand underline" href="/support/staying-safe">
            safety tips
          </Link>{' '}
          before you go.
        </p>
      </Section>
    </ArticlePage>
  )
}

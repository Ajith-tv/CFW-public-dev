import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'how-coffee-after-work-works'

export const metadata: Metadata = {
  title: 'How Coffee After Work works',
  description: `A quick tour of ${site.name} — from signing up with your work email to your first match.`,
}

export default function HowItWorks() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        {site.name} is a dating app built for working professionals who are looking for
        something real. Here&apos;s how it works, from sign-up to your first conversation.
      </p>

      <Section heading="1. Sign up with your work email">
        <p>
          You join with your corporate email rather than a personal one. Verifying a work email
          keeps the community made up of genuine working professionals. Curious why?{' '}
          <Link className="text-brand underline" href="/support/why-a-work-email">
            Read more about the work-email requirement
          </Link>
          .
        </p>
      </Section>

      <Section heading="2. Verify it's really you">
        <p>
          During sign-up you take a quick verification selfie that we match against your profile
          photos. This confirms you are a real person and the same person shown in your photos,
          which keeps fake and impersonated profiles off the app. Your selfie is never shown to
          anyone. See{' '}
          <Link className="text-brand underline" href="/support/photo-verification">
            Photo verification explained
          </Link>
          .
        </p>
      </Section>

      <Section heading="3. Build your profile">
        <p>
          Add a few clear photos and fill out your details and what you&apos;re looking for. A
          fuller, verified profile is shown to more people and gets more likes. See{' '}
          <Link className="text-brand underline" href="/support/creating-your-profile">
            Creating your profile
          </Link>
          .
        </p>
      </Section>

      <Section heading="4. Like and match">
        <p>
          Like the profiles you&apos;re interested in from{' '}
          <Link className="text-brand underline" href="/support/finding-people">
            Spark and Discover
          </Link>
          . When you and someone else both like each other, it&apos;s a match — and only then can
          the two of you start a conversation. More on{' '}
          <Link className="text-brand underline" href="/support/how-matches-work">
            how matches work
          </Link>
          .
        </p>
      </Section>

      <Section heading="5. Start chatting">
        <p>
          Once you match, you can message right away — send GIFs, reveal photos when you&apos;re
          both ready, and more. See{' '}
          <Link className="text-brand underline" href="/support/messaging-your-matches">
            Messaging your matches
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

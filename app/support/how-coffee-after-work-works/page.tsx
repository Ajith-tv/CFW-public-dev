import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'how-coffee-after-work-works'

export const metadata: Metadata = {
  title: 'How it works',
  description: `A quick tour of ${site.name} — from signing up with your work email to your first conversation.`,
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
          {site.name} is exclusively for working professionals. To join, you&apos;ll need to
          register using your corporate email address. This helps us build a trusted community
          where every member is connected to a verified workplace. Curious why?{' '}
          <Link className="text-brand underline" href="/support/why-a-work-email">
            Read more about the work-email requirement
          </Link>
          .
        </p>
      </Section>

      <Section heading="2. Verify your identity">
        <p>
          Complete a mandatory selfie verification during sign-up to confirm your identity and help
          keep the community authentic. Your account will only be activated once verification is
          successfully completed. Your verification selfie is reviewed privately, never shared with
          other members, and automatically deleted after the verification process is complete. See{' '}
          <Link className="text-brand underline" href="/support/photo-verification">
            Photo verification explained
          </Link>
          .
        </p>
      </Section>

      <Section heading="3. Build your profile">
        <p>
          Add your photos, complete your profile details, and tell us what you&apos;re looking for.
          Every profile is reviewed and verified by our team before it becomes visible. Once
          approved, your profile will be shown to a wider pool of compatible professionals based on
          your preferences and profile completeness. See{' '}
          <Link className="text-brand underline" href="/support/creating-your-profile">
            Creating your profile
          </Link>
          .
        </p>
      </Section>

      <Section heading="4. Start chatting">
        <p>
          Every connection begins with conversation, not photos. Chat freely, share GIFs, and get
          to know the person behind the profile. Once you&apos;ve had a meaningful conversation,
          you&apos;ll unlock the ability to send a Photo Reveal request. When accepted by both
          members, your profile photos become visible to each other, creating a more intentional
          way to connect. See{' '}
          <Link className="text-brand underline" href="/support/messaging-your-matches">
            Messaging your matches
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

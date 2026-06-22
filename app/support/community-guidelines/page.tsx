import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'community-guidelines'

export const metadata: Metadata = {
  title: 'Community guidelines',
  description: `The behaviour ${site.name} expects from everyone, and what gets people removed.`,
}

export default function CommunityGuidelines() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        {site.name} is a space for real people looking for genuine connections. These guidelines
        keep it safe, honest, and welcoming. Breaking them can lead to a warning, a suspension, or
        a permanent ban.
      </p>

      <Section heading="Be real">
        <p>
          You must be {site.minimumAge} or older. Use your real name, recent photos of yourself,
          and honest details. We verify every profile with a selfie check, so fake, stolen,
          AI-generated, or impersonated profiles are removed.
        </p>
      </Section>

      <Section heading="Be respectful">
        <p>
          Treat everyone the way you&apos;d want to be treated. Harassment, hate speech, threats,
          bullying, and unsolicited explicit content are never allowed and lead to an immediate
          ban.
        </p>
      </Section>

      <Section heading="Respect consent">
        <p>
          Features like Photo Reveal and Exclusive Chat work both ways on purpose. Never pressure
          anyone to reveal their photos, meet up, or share personal details before they&apos;re
          ready — and never share private chats or images without permission.
        </p>
      </Section>

      <Section heading="Keep it safe">
        <p>
          No scams, soliciting, selling, advertising, or asking for money. Don&apos;t share
          another person&apos;s contact details, and keep conversations in the app until you trust
          someone.
        </p>
      </Section>

      <Section heading="Date with intention">
        <p>
          {site.name} is for meeting people, not spamming them. Use it to find a real connection
          and plan real coffee dates — not to promote yourself, recruit, or collect followers.
        </p>
      </Section>

      <Section heading="Report and we act">
        <p>
          If someone breaks these rules, unmatch, block, or report them. Reports are confidential
          and reviewed by our safety team, and we act on every one. See{' '}
          <Link className="text-brand underline" href="/support/staying-safe">
            Staying safe &amp; reporting
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

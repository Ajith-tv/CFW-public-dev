import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'photo-verification'

export const metadata: Metadata = {
  title: 'Photo verification explained',
  description: `What the verification selfie is, why ${site.name} asks for it, and why it is never shown to anyone.`,
}

export default function PhotoVerification() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        To keep {site.name} genuine, every new profile is verified before it goes live. During
        sign-up you take a quick selfie that we compare against your profile photos. Here&apos;s
        what that means.
      </p>

      <Section heading="Why we verify">
        <p>
          Verification confirms that the person creating the account is real, and is the same
          person shown in the photos. This keeps fake, impersonated, and AI-generated profiles
          off the app, which is what keeps everyone safe and the community trustworthy.
        </p>
      </Section>

      <Section heading="How it works">
        <List
          items={[
            <>
              <strong>Automated check</strong>: facial-comparison technology compares your selfie
              against your profile photos.
            </>,
            <>
              <strong>Manual review</strong>: if the automated check flags a possible mismatch, a
              member of our trained team reviews it to confirm a real person.
            </>,
          ]}
        />
      </Section>

      <Section heading="Your selfie is private">
        <p>
          Your verification selfie is <strong>never shown to other members</strong>, never used
          for advertising, and never sold. It is used only to confirm your identity and to detect
          fraud.
        </p>
        <p>
          We also don&apos;t keep it. Your selfie is stored only while your profile is being
          verified and is deleted once verification is complete. For the full detail on how this
          biometric information is handled and retained, see{' '}
          <Link className="text-brand underline" href="/privacy">
            our Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Section heading="Why you verify before using the app">
        <p>
          {site.name} only opens after your profile is verified. We review every new account
          first so the community stays free of fake and fraudulent profiles from day one.
        </p>
      </Section>
    </ArticlePage>
  )
}

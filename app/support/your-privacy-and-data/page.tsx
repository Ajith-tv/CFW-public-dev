import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'your-privacy-and-data'

export const metadata: Metadata = {
  title: 'Your privacy and your data',
  description: `What ${site.name} collects, how we use it, and the choices and rights you have.`,
}

export default function YourPrivacyAndData() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        We collect only what we need to run {site.name}, and we never sell your personal
        information. This is a short summary — our{' '}
        <Link className="text-brand underline" href="/privacy">
          Privacy Policy
        </Link>{' '}
        has the full detail.
      </p>

      <Section heading="What we collect">
        <List
          items={[
            'Account and profile details you provide, like your name, email, date of birth, photos, and preferences.',
            'Your verification selfie, used only to confirm your identity (see below).',
            'How you use the app — matches, likes, and messages.',
            'Device information and your approximate location, if you allow it, to show people nearby.',
          ]}
        />
      </Section>

      <Section heading="Your verification selfie">
        <p>
          Your selfie is used only to verify your identity and prevent fraud. It is{' '}
          <strong>never shown to other members</strong>, never used for advertising, and never
          sold. We delete it once your profile is verified. More in{' '}
          <Link className="text-brand underline" href="/support/photo-verification">
            Photo verification explained
          </Link>
          .
        </p>
      </Section>

      <Section heading="Your choices and rights">
        <p>Subject to applicable law, you can:</p>
        <List
          items={[
            <>
              Access or correct the information we hold about you — see{' '}
              <Link className="text-brand underline" href="/support/request-your-data">
                Requesting a copy of your data
              </Link>
              .
            </>,
            <>
              Delete your account and data — see{' '}
              <Link className="text-brand underline" href="/support/delete-account">
                Delete your account
              </Link>
              .
            </>,
            'Withdraw permissions such as location or notifications at any time in your device settings.',
            'Control your visibility, online status, and read receipts in the app.',
          ]}
        />
        <p>
          To make a privacy request, email{' '}
          <a className="text-brand underline" href={`mailto:${site.privacyEmail}`}>
            {site.privacyEmail}
          </a>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

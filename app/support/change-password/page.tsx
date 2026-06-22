import type { Metadata } from 'next'
import { site } from '@/lib/site'
import ArticlePage, { Steps, Callout } from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'change-password'

export const metadata: Metadata = {
  title: 'Changing your password',
  description: `How to change your password on ${site.name}, or reset it if you've forgotten it.`,
}

function KeyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
    </svg>
  )
}

export default function ChangePassword() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Keeping a strong password helps protect your account. You can change it any time from
        inside the app.
      </p>

      <Section heading="Change your password">
        <Steps
          items={[
            <>
              Go to the <strong>Profile</strong> tab and open{' '}
              <strong>Privacy &amp; Safety</strong>.
            </>,
            <>
              Tap <strong>Change password</strong>.
            </>,
            'Enter your current password, choose a new one, and save.',
          ]}
        />
      </Section>

      <Callout icon={<KeyIcon />} title="Forgot your password?">
        <p>
          On the login screen, tap <strong>Forgot password</strong> and follow the steps to
          verify your email and set a new one — you don&apos;t need to be signed in.
        </p>
      </Callout>
    </ArticlePage>
  )
}

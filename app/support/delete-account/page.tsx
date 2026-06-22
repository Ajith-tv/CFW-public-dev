import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps, Callout } from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'delete-account'

export const metadata: Metadata = {
  title: 'Delete your account',
  description: `How to permanently delete your ${site.name} account, and exactly what data is removed and retained.`,
}

function MailIcon() {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PauseIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="10" y1="15" x2="10" y2="9" />
      <line x1="14" y1="15" x2="14" y2="9" />
    </svg>
  )
}

export default function DeleteAccount() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        You can permanently delete your {site.name} account at any time, directly from the
        app. Deleting is <strong>permanent and cannot be undone</strong> — once it&apos;s done,
        your profile and data are gone and you would need to start over from scratch.
      </p>

      <Section heading="Delete your account in the app">
        <Steps
          items={[
            'Open the Coffee After Work app and sign in.',
            <>
              Go to the <strong>Profile</strong> tab and open the settings menu.
            </>,
            <>
              Open <strong>Privacy &amp; Safety</strong>.
            </>,
            <>
              Tap <strong>Delete account</strong>.
            </>,
            'Review the summary of what will be removed, then tick the box to confirm you understand it cannot be undone.',
            <>
              Tap <strong>Delete my account</strong>. You&apos;ll be signed out and your
              account will be deleted.
            </>,
          ]}
        />
      </Section>

      <Callout icon={<MailIcon />} title="Can't sign in to the app?">
        <p>
          If you can no longer access your account, email us at{' '}
          <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>{' '}
          from the email address registered to your account and ask us to delete it. We may
          ask a question or two to confirm the account is yours before we proceed.
        </p>
      </Callout>

      <Section heading="What gets deleted">
        <p>When you delete your account, we remove:</p>
        <List
          items={[
            'Your profile, photos, and preferences — permanently removed.',
            'All of your matches and conversations.',
            'Every like you have sent and received.',
            'Your verification, activity history, and account details.',
          ]}
        />
        <p>
          This action is <strong>irreversible</strong>. We cannot restore a deleted account or
          recover any of its data afterwards.
        </p>
      </Section>

      <Section heading="What we keep, and for how long">
        <p>
          After you delete your account we delete or anonymize your personal information within
          a reasonable period. A few limited exceptions apply:
        </p>
        <List
          items={[
            <>
              <strong>Banned or removed accounts</strong>: if an account was banned for
              breaking our rules, we keep a single non-reversible facial signature derived from
              the profile photos, used only to stop that person creating a new account.
            </>,
            <>
              <strong>Legal, security, and fraud prevention</strong>: we may retain limited
              information where the law requires it or to protect our users.
            </>,
          ]}
        />
        <p>
          For how data erasure works (and how to request it without deleting your account), see{' '}
          <Link className="text-brand underline" href="/support/delete-your-data">
            Deleting your data
          </Link>
          , or read our{' '}
          <Link className="text-brand underline" href="/privacy">
            Privacy Policy
          </Link>{' '}
          for the full picture.
        </p>
      </Section>

      <Callout icon={<PauseIcon />} title="Just need a break?">
        <p>
          You don&apos;t have to delete to step away. <strong>Deactivating</strong> hides your
          profile and is fully reversible — everything comes back when you log in again. See{' '}
          <Link className="text-brand underline" href="/support/deactivate-vs-delete">
            Deactivate vs. delete your account
          </Link>
          .
        </p>
      </Callout>
    </ArticlePage>
  )
}

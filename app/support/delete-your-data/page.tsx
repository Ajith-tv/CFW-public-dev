import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Callout } from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'delete-your-data'

export const metadata: Metadata = {
  title: 'Deleting your data',
  description: `How ${site.name} deletes your data when you delete your account, and how to request that all of your data is erased.`,
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

export default function DeleteYourData() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Your data and your account go together. In most cases the simplest way to remove your
        data is to delete your account — but you can also ask us to erase it directly.
      </p>

      <Section heading="When you delete your account, your data goes with it">
        <p>
          When you{' '}
          <Link className="text-brand underline" href="/support/delete-account">
            delete your account
          </Link>
          , your data is deleted at the same time — your profile, photos, preferences, matches,
          conversations, and likes are all removed. There&apos;s no separate step to delete your
          data afterwards.
        </p>
      </Section>

      <Section heading="What we may keep (and why)">
        <p>A few limited exceptions apply even after deletion:</p>
        <List
          items={[
            <>
              <strong>Banned or reported accounts</strong>: if an account was removed for breaking
              our rules, we keep a single non-reversible facial signature, used only to stop that
              person creating a new account.
            </>,
            <>
              <strong>Legal and security</strong>: we may retain limited information for as long as
              the law requires or to protect our users from fraud.
            </>,
          ]}
        />
      </Section>

      <Section heading="Ask us to erase all your data">
        <p>
          If you&apos;d rather have all of your personal data erased — for example, for a legal
          reason, or because you can no longer access your account — just contact us and we&apos;ll
          handle it. We aim to complete erasure requests <strong>within 30 days</strong>.
        </p>
      </Section>

      <Callout icon={<MailIcon />} title="Request data erasure">
        <p>
          Email{' '}
          <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>{' '}
          from your registered email with the subject “Delete my data”. We may ask a question or
          two to confirm the account is yours before we proceed.
        </p>
      </Callout>

      <Section heading="Your right to erasure">
        <p>
          We honour data-deletion requests in line with applicable law, including India&apos;s
          Digital Personal Data Protection Act, 2023 and the GDPR. To understand what we collect
          and how we use it, see{' '}
          <Link className="text-brand underline" href="/support/your-privacy-and-data">
            Your privacy and your data
          </Link>{' '}
          and our{' '}
          <Link className="text-brand underline" href="/privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

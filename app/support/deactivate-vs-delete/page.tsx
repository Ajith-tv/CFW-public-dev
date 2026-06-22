import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps } from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'deactivate-vs-delete'

export const metadata: Metadata = {
  title: 'Deactivate vs. delete your account',
  description: `The difference between deactivating (a reversible break) and deleting (permanent) your ${site.name} account.`,
}

export default function DeactivateVsDelete() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Need to step away? You have two options, and they are very different.{' '}
        <strong>Deactivating</strong> is a reversible pause. <strong>Deleting</strong> is
        permanent. Here&apos;s how to choose.
      </p>

      <Section heading="Deactivate — a reversible break">
        <p>
          Deactivating hides your profile from everyone and signs you out, but keeps your
          account, matches, and conversations intact. Nothing is lost — log back in any time to
          reactivate exactly where you left off.
        </p>
        <Steps
          items={[
            <>
              Go to the <strong>Profile</strong> tab and open the settings menu.
            </>,
            <>
              Open <strong>Privacy &amp; Safety</strong>.
            </>,
            <>
              Tap <strong>Deactivate account</strong> and confirm.
            </>,
            'Your profile is hidden and you are signed out. Log in again whenever you are ready to come back.',
          ]}
        />
      </Section>

      <Section heading="Delete — permanent">
        <p>
          Deleting permanently removes your profile, photos, preferences, matches,
          conversations, and likes. It <strong>cannot be undone</strong>, and we cannot restore
          anything afterwards. See{' '}
          <Link className="text-brand underline" href="/support/delete-account">
            Delete your account
          </Link>{' '}
          for the full steps and exactly what is removed.
        </p>
      </Section>

      <Section heading="At a glance">
        <List
          items={[
            <>
              <strong>Profile visibility</strong>: deactivate hides it; delete removes it.
            </>,
            <>
              <strong>Your matches &amp; chats</strong>: deactivate keeps them; delete erases
              them.
            </>,
            <>
              <strong>Reversible?</strong> Deactivate, yes — just log in. Delete, no.
            </>,
          ]}
        />
      </Section>
    </ArticlePage>
  )
}

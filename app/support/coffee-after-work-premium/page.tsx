import type { Metadata } from 'next'
import { site } from '@/lib/site'
import ArticlePage, { Callout } from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'coffee-after-work-premium'

export const metadata: Metadata = {
  title: 'Coffee After Work Premium',
  description: `What ${site.name} Premium includes — Unlimited Likes, See Who Liked You, and More Notes.`,
}

function InfoIcon() {
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
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  )
}

export default function Premium() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Premium unlocks a few extra features to help you get more out of {site.name}. It&apos;s
        completely optional — the core app is free to use.
      </p>

      <Section heading="What Premium includes">
        <List
          items={[
            <>
              <strong>Unlimited Likes</strong> — like as many profiles as you want.
            </>,
            <>
              <strong>See Who Liked You</strong> — see the people who&apos;ve already liked you and
              match instantly.
            </>,
            <>
              <strong>More Notes</strong> — send more personalised notes when you like someone.
            </>,
          ]}
        />
      </Section>

      <Section heading="Plans and billing">
        <p>
          Premium is a <strong>one-time purchase, not a recurring subscription</strong> — there
          are no automatic renewals. You can choose a 1-month or 3-month pass, and the current
          prices are shown in the app before you buy. Payments are handled securely through your
          app store.
        </p>
      </Section>

      <Section heading="How to upgrade">
        <p>
          Open the Premium screen in the app (for example from your Likes), choose a plan, and
          complete the purchase. Your features unlock straight away.
        </p>
      </Section>

      <Callout icon={<InfoIcon />} title="Managing your purchase">
        <p>
          Because billing is handled by your app store (Google Play or the App Store), any
          purchase questions or refunds are managed there. If you need help, you can always{' '}
          <a className="text-brand underline" href={`mailto:${site.contactEmail}`}>
            contact support
          </a>
          .
        </p>
      </Callout>
    </ArticlePage>
  )
}

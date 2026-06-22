import type { Metadata } from 'next'
import { site } from '@/lib/site'
import ArticlePage, { Steps } from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'notifications'

export const metadata: Metadata = {
  title: 'Managing notifications',
  description: `How to turn push notifications on or off on ${site.name}.`,
}

export default function Notifications() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Push notifications let you know about new matches, messages, and likes so you don&apos;t
        miss anything. You can turn them on or off whenever you like.
      </p>

      <Section heading="Turn notifications on or off">
        <Steps
          items={[
            <>
              Go to the <strong>Profile</strong> tab.
            </>,
            <>
              Find <strong>Notifications</strong> under Activity.
            </>,
            'Use the switch to turn push notifications on or off.',
          ]}
        />
        <p>
          The first time you turn them on, your phone may ask for permission to send
          notifications — allow it to receive them.
        </p>
      </Section>

      <Section heading="Not receiving notifications?">
        <p>
          If the switch is on but nothing comes through, check that notifications for {site.name}{' '}
          are also allowed in your phone&apos;s system settings, and that you have an internet
          connection.
        </p>
      </Section>
    </ArticlePage>
  )
}

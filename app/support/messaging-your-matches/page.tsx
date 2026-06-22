import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps } from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'messaging-your-matches'

export const metadata: Metadata = {
  title: 'Messaging your matches',
  description: `How chat works on ${site.name} — GIFs, photo reveal, exclusive chat, read receipts, and unmatching.`,
}

export default function MessagingYourMatches() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Once you have a{' '}
        <Link className="text-brand underline" href="/support/how-matches-work">
          match
        </Link>
        , you can message each other from the Chat tab. Here&apos;s what you can do in a
        conversation.
      </p>

      <Section heading="Chatting and GIFs">
        <p>
          Open a conversation from the Chat tab and start typing. As well as text, you can send
          GIFs to keep things fun and break the ice.
        </p>
      </Section>

      <Section heading="Photo Reveal">
        <p>
          To protect everyone&apos;s privacy, a new match&apos;s photos start blurred and their
          name is hidden until you&apos;re both ready. <strong>Photo Reveal works both ways</strong>{' '}
          — photos and names only unblur once both of you choose to reveal. That way you get to
          know each other through conversation first, with no pressure.
        </p>
      </Section>

      <Section heading="Exclusive Chat">
        <p>
          When two people want to focus on each other, they can move into{' '}
          <strong>Exclusive Chat</strong>. Like Photo Reveal, it&apos;s a shared choice that only
          happens when both of you opt in — no one is ever pushed into it.
        </p>
      </Section>

      <Section heading="Read receipts & online status">
        <p>
          You can see when a match was last active and whether they&apos;ve read your message,
          depending on each person&apos;s settings. You control your own visibility under{' '}
          <Link className="text-brand underline" href="/support/privacy-and-visibility">
            Privacy &amp; visibility controls
          </Link>
          .
        </p>
      </Section>

      <Section heading="Unmatching">
        <p>If a conversation isn&apos;t right for you, you can end it any time:</p>
        <Steps
          items={[
            'Open the chat with that person.',
            'Tap the menu in the top corner.',
            <>
              Choose <strong>Unmatch</strong>. They&apos;ll no longer appear in your
              conversations.
            </>,
          ]}
        />
        <p>
          If someone breaks our rules, please also{' '}
          <Link className="text-brand underline" href="/support/staying-safe">
            report them
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

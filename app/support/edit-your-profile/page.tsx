import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage, { Steps } from '@/components/ArticlePage'
import { Section } from '@/components/LegalPage'

const SLUG = 'edit-your-profile'

export const metadata: Metadata = {
  title: 'Editing your profile',
  description: `How to update your photos, bio, and details on ${site.name} at any time.`,
}

export default function EditYourProfile() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        You can update your profile whenever you like — swap photos, rewrite your bio, or change
        your details.
      </p>

      <Section heading="Edit your profile">
        <Steps
          items={[
            <>
              Go to the <strong>Profile</strong> tab.
            </>,
            <>
              Tap your photo, or open <strong>Profile</strong> under Account, to open the editor.
            </>,
            'Update your photos, bio, and details, then save.',
          ]}
        />
        <p>
          You can also tap the camera icon on your profile photo to jump straight to managing your
          photos.
        </p>
      </Section>

      <Section heading="Changing your photos">
        <p>
          When you replace your photos, we confirm it&apos;s still you by comparing your new photos
          against your existing verified ones — there&apos;s no need to take another selfie. More on
          this in{' '}
          <Link className="text-brand underline" href="/support/photo-verification">
            Photo verification explained
          </Link>
          .
        </p>
      </Section>

      <Section heading="Keep your profile complete">
        <p>
          Your Profile tab shows how complete your profile is. Filling it out fully means
          you&apos;re shown to more people and tend to get better matches.
        </p>
      </Section>
    </ArticlePage>
  )
}

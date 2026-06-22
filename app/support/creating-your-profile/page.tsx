import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import ArticlePage from '@/components/ArticlePage'
import { Section, List } from '@/components/LegalPage'

const SLUG = 'creating-your-profile'

export const metadata: Metadata = {
  title: 'Creating your profile',
  description: `How to set up your ${site.name} profile — photos, details, and the steps that get you better matches.`,
}

export default function CreatingYourProfile() {
  return (
    <ArticlePage slug={SLUG}>
      <p>
        Setting up your profile takes a few minutes. A complete, genuine profile is shown to
        more people and gets more likes, so it&apos;s worth doing properly. You must be{' '}
        {site.minimumAge} or older to join.
      </p>

      <Section heading="What you'll add during sign-up">
        <p>The setup walks you through a few quick steps:</p>
        <List
          items={[
            'Your name and date of birth.',
            'Your gender and who you’re looking for.',
            'Your age and distance preferences for matches.',
            'A few details like your height, your work, and your life values.',
            'Your lifestyle answers and interests.',
            'Your photos — add several clear, recent photos of yourself.',
            'A quick verification selfie to confirm it’s really you.',
          ]}
        />
      </Section>

      <Section heading="Getting verified">
        <p>
          After your photos, you take a verification selfie that we match against them. Your
          profile opens once it&apos;s verified, which keeps fake and impersonated accounts off
          the app. Your selfie is never shown to anyone — see{' '}
          <Link className="text-brand underline" href="/support/photo-verification">
            Photo verification explained
          </Link>
          .
        </p>
      </Section>

      <Section heading="Your profile completion">
        <p>
          Your Profile tab shows a completion percentage. The closer you are to 100%, the more
          complete your profile looks to others — and the better your matches tend to be. You can
          keep editing any time; see{' '}
          <Link className="text-brand underline" href="/support/edit-your-profile">
            Editing your profile
          </Link>
          .
        </p>
      </Section>
    </ArticlePage>
  )
}

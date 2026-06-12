import type { Metadata } from 'next'
import LegalPage, { Section, List } from '@/components/LegalPage'
import { site, formatDate } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${site.name}.`,
}

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={formatDate(site.privacyLastUpdated)}
    >
      <p>
        This Privacy Policy explains how {site.legalEntity} (&quot;we&quot;,
        &quot;us&quot;) collects, uses, and shares information about you when
        you use the Coffee After Work mobile application, website, and related
        services (the &quot;Service&quot;). By using the Service, you agree to
        the practices described here.
      </p>

      <Section heading="1. Information We Collect">
        <p>We collect the following categories of information:</p>
        <List
          items={[
            <>
              <strong>Account information</strong>: name, email address, phone
              number, password, and date of birth.
            </>,
            <>
              <strong>Profile information</strong>: photos, gender, height,
              preferences, lifestyle answers, and anything else you choose to
              add to your profile.
            </>,
            <>
              <strong>Usage data</strong>: matches, likes, messages, and how
              you interact with the Service.
            </>,
            <>
              <strong>Device and technical data</strong>: device type,
              operating system, app version, IP address, and push notification
              tokens.
            </>,
            <>
              <strong>Location data</strong>: approximate location (if you
              grant permission) to show you nearby matches.
            </>,
          ]}
        />
      </Section>

      <Section heading="2. How We Use Your Information">
        <p>We use your information to:</p>
        <List
          items={[
            'Create and manage your account and profile.',
            'Show you potential matches and power our recommendation features.',
            'Enable messaging and other interactions between users.',
            'Send you push notifications and service-related communications.',
            'Keep the Service safe, detect fraud, and enforce our Terms.',
            'Improve and develop new features.',
            'Comply with legal obligations.',
          ]}
        />
      </Section>

      <Section heading="3. How We Share Information">
        <p>We do not sell your personal information. We may share it with:</p>
        <List
          items={[
            <>
              <strong>Other users</strong>: your profile and content are
              visible to other users as part of normal use of the Service.
            </>,
            <>
              <strong>Service providers</strong>: vendors who help us operate
              the Service (for example, hosting, analytics, and
              push-notification providers such as Firebase Cloud Messaging).
            </>,
            <>
              <strong>Legal and safety</strong>: when required by law or to
              protect the rights, property, or safety of our users or the
              public.
            </>,
            <>
              <strong>Business transfers</strong>: in connection with a merger,
              acquisition, or sale of assets.
            </>,
          ]}
        />
      </Section>

      <Section heading="4. Data Retention">
        <p>
          We keep your information for as long as your account is active. When
          you delete your account, we delete or anonymize your personal
          information within a reasonable period, except where we are required
          to retain it for legal, security, or fraud-prevention purposes.
        </p>
      </Section>

      <Section heading="5. Your Rights and Choices">
        <p>Depending on where you live, you may have the right to:</p>
        <List
          items={[
            'Access the personal information we hold about you.',
            'Correct inaccurate or incomplete information.',
            'Delete your account and associated data.',
            'Object to or restrict certain processing of your data.',
            'Withdraw permissions such as location or push notifications at any time in your device settings.',
          ]}
        />
        <p>
          To exercise any of these rights, contact us at{' '}
          <a
            className="text-brand underline"
            href={`mailto:${site.privacyEmail}`}
          >
            {site.privacyEmail}
          </a>
          .
        </p>
      </Section>

      <Section heading="6. Security">
        <p>
          We use reasonable technical and organizational measures to protect
          your information, including encrypted storage of credentials. No
          method of transmission or storage is completely secure, however, so
          we cannot guarantee absolute security.
        </p>
      </Section>

      <Section heading="7. Children’s Privacy">
        <p>
          The Service is intended only for people aged {site.minimumAge} and
          older. We do not knowingly collect personal information from anyone
          under {site.minimumAge}. If we learn that we have, we will delete it.
        </p>
      </Section>

      <Section heading="8. International Users">
        <p>
          Your information may be processed and stored in countries other than
          your own, where data protection laws may differ. By using the
          Service, you consent to such transfers.
        </p>
      </Section>

      <Section heading="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will notify you through the app or by email. The
          &quot;Last updated&quot; date above reflects the most recent
          revision.
        </p>
      </Section>

      <Section heading="10. Contact Us">
        <p>
          For privacy questions or requests, email us at{' '}
          <a
            className="text-brand underline"
            href={`mailto:${site.privacyEmail}`}
          >
            {site.privacyEmail}
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  )
}

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
              <strong>Verification selfie and biometric information</strong>: a
              selfie you take during identity verification, and facial-geometry
              data derived from it. Your selfie is stored only until your profile
              is verified and is then deleted. See Section 3 for how this is
              processed and retained.
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
            'Verify your identity using a verification selfie (see Section 3).',
            'Send you push notifications and service-related communications.',
            'Keep the Service safe, detect fraud, and enforce our Terms.',
            'Improve and develop new features.',
            'Comply with legal obligations.',
          ]}
        />
      </Section>

      <Section heading="3. Photo and Identity Verification (Biometric Information)">
        <p>
          To confirm you are a real person and that your profile photos are
          genuinely you, we ask you to take a verification selfie. We process it
          in two ways:
        </p>
        <List
          items={[
            <>
              <strong>Automated facial comparison</strong>: facial-comparison
              technology (DeepFace) compares your selfie against your profile
              photos. This may generate facial-geometry data, which may be
              considered biometric information.
            </>,
            <>
              <strong>Manual review</strong>: where the automated check flags a
              possible mismatch, a member of our trained verification team
              reviews the selfie to confirm a real person.
            </>,
          ]}
        />
        <p>
          We use your verification selfie and the data derived from it{' '}
          <strong>only</strong> for identity verification and anti-fraud
          purposes, and to detect fake, impersonated, or AI-generated profiles.
          Your verification selfie is{' '}
          <strong>never shown to other members</strong>, never used for
          advertising, and never sold.
        </p>
        <p>
          <strong>We do not keep your selfie after verification.</strong> Your
          selfie is stored only while your profile is being verified. As soon as
          verification is complete, we delete the selfie from our systems. Up
          until that point it exists in our records solely so our automated
          check and, if needed, our verification team can confirm it&apos;s
          really you.
        </p>
        <p>
          <strong>If you later change your photos</strong>: because we no longer
          hold your original selfie, when you replace your photos or upload a new
          set we confirm it&apos;s still you by comparing your{' '}
          <strong>new photos against your existing verified profile photos</strong>{' '}
          (not against a stored selfie). This keeps profiles trustworthy without
          us retaining your biometric selfie longer than needed.
        </p>
        <p>
          By completing verification, you consent to this processing of your
          biometric information. Verification is part of keeping the community
          safe; if you choose not to complete it, some features may be
          unavailable.
        </p>
      </Section>

      <Section heading="4. How We Share Information">
        <p>We do not sell your personal information. We may share it with:</p>
        <List
          items={[
            <>
              <strong>Other users</strong>: your profile and content are
              visible to other users as part of normal use of the Service. Your
              verification selfie is never shared with other users.
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

      <Section heading="5. Data Retention">
        <p>
          We keep your information for as long as your account is active. Our
          specific retention practices are:
        </p>
        <List
          items={[
            <>
              <strong>Verification selfie and biometric data</strong>: we keep
              your selfie and any facial-geometry data (such as a facial
              signature) only during verification. Both are created solely for
              that check and deleted once your profile is verified. We do not
              store your selfie or biometric data for the life of your account,
              and we do not retain it after verification.
            </>,
            <>
              <strong>Banned or removed accounts</strong>: if your account is
              banned or removed for violating our Terms, we generate and retain
              a single non-reversible facial signature from your profile photos
              at that time. We keep this solely to prevent a banned user from
              creating a new account, use it only for that safety and
              fraud-prevention purpose, and do not use it to identify you for
              anything else.
            </>,
            <>
              <strong>When you delete your account</strong>: we delete or
              anonymize your personal information within a reasonable period.
            </>,
            <>
              <strong>Inactive accounts</strong>: if your account remains
              inactive for about one year, we reduce the data we hold to basic
              account details only and remove the rest.
            </>,
          ]}
        />
        <p>
          We may also retain information where required for legal, security, or
          fraud-prevention purposes.
        </p>
      </Section>

      <Section heading="6. Your Rights and Choices">
        <p>
          Subject to applicable law, including India&apos;s Digital Personal
          Data Protection Act, 2023, you may have the right to:
        </p>
        <List
          items={[
            'Access the personal information we hold about you.',
            'Correct inaccurate or incomplete information.',
            'Delete your account and associated data.',
            'Withdraw your consent to biometric processing, by contacting us (this will end verification-based features).',
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

      <Section heading="7. Security">
        <p>
          We use reasonable technical and organizational measures to protect
          your information, including encrypted storage of credentials. No
          method of transmission or storage is completely secure, however, so
          we cannot guarantee absolute security.
        </p>
      </Section>

      <Section heading="8. Children’s Privacy">
        <p>
          The Service is intended only for people aged {site.minimumAge} and
          older. We do not knowingly collect personal information from anyone
          under {site.minimumAge}. If we learn that we have, we will delete it.
        </p>
      </Section>

      <Section heading="9. International Users">
        <p>
          Your information may be processed and stored in countries other than
          your own, where data protection laws may differ. By using the
          Service, you consent to such transfers.
        </p>
      </Section>

      <Section heading="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will notify you through the app or by email. The
          &quot;Last updated&quot; date above reflects the most recent
          revision.
        </p>
      </Section>

      <Section heading="11. Contact Us">
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

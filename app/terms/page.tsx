import type { Metadata } from 'next'
import LegalPage, { Section, SubSection, List } from '@/components/LegalPage'
import { site, formatDate } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and Conditions of Use for ${site.name}.`,
}

export default function Terms() {
  return (
    <LegalPage
      title="Terms &amp; Conditions of Use"
      lastUpdated={formatDate(site.termsLastUpdated)}
    >
      <p>
        Welcome to {site.name}&rsquo;s Terms and Conditions of Use (these
        &quot;Terms&quot;). This is a contract between you and {site.name}{' '}
        (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Please read these
        Terms carefully before using the {site.name} application (the
        &quot;App&quot;).
      </p>
      <p>
        By accessing or using the App, you agree to be bound by these Terms, our
        Privacy Policy, and our Community Guidelines.
      </p>

      <Section heading="1. Coffee After Work Rules">
        <p>
          Before you can use the App, you must register for an account
          (&quot;Account&quot;).
        </p>
        <p>To create an Account, you must:</p>
        <List
          items={[
            'Be at least 18 years old or the age of majority in your jurisdiction;',
            'Be legally permitted to use the App; and',
            <>
              Use a <strong>valid, approved corporate email address</strong> for
              verification.
            </>,
          ]}
        />
        <p>
          We monitor for compliance and reserve the right to suspend, restrict,
          or terminate any Account that violates these Terms.
        </p>
        <p>You may not:</p>
        <List
          items={[
            'Use another person’s account;',
            'Share your account.',
            'Create accounts using false or unauthorized credentials;',
            'Attempt to bypass the corporate verification process.',
          ]}
        />
        <p>You are responsible for all activity under your Account.</p>
        <p>
          You may delete your Account at any time via the App. Some information
          may be retained temporarily as described in our Privacy Policy.
        </p>
      </Section>

      <Section heading="2. Corporate Email Verification">
        <p>
          {site.name} is designed as a professional and trusted platform, and
          access is restricted to users with approved corporate email domains.
        </p>

        <SubSection heading="2.1 Eligibility via Corporate Email">
          <p>To access the App, you must:</p>
          <List
            items={[
              <>
                Register using a{' '}
                <strong>corporate email address issued by your employer</strong>
                ; and
              </>,
              'Complete domain-based verification.',
            ]}
          />
          <p>
            Personal email providers (e.g., Gmail, Yahoo) are not permitted.
          </p>
        </SubSection>

        <SubSection heading="2.2 Approved Domains">
          <p>
            Only users from <strong>approved company domains</strong> may access
            the App.
          </p>
          <p>If your company domain is not supported:</p>
          <List
            items={[
              'You will not be able to register.',
              'You may request access for your company.',
            ]}
          />
          <p>We may approve new domains based on:</p>
          <List
            items={[
              'User demand',
              'Company credibility',
              'Platform safety and integrity',
            ]}
          />
          <p>We reserve full discretion over which domains are accepted.</p>
        </SubSection>

        <SubSection heading="2.3 Verification Rights">
          <p>We reserve the right to:</p>
          <List
            items={[
              'Verify your email domain and associated employment',
              'Request additional verification at any time',
              <>
                Restrict or terminate accounts using:
                <List
                  items={[
                    'False credentials',
                    'Unauthorized access',
                    'Manipulation of verification systems',
                  ]}
                />
              </>,
            ]}
          />
        </SubSection>

        <SubSection heading="2.4 Loss of Access">
          <p>If you lose access to your corporate email:</p>
          <List
            items={[
              'You may be required to re-verify your account.',
              'We may limit or suspend your access to the App.',
            ]}
          />
        </SubSection>
      </Section>

      <Section heading="3. Types of Content">
        <p>There are three types of content on the App:</p>
        <List
          items={[
            <>Content you upload (&quot;Your Content&quot;)</>,
            <>Content provided by other users (&quot;Member Content&quot;)</>,
            <>Content provided by {site.name} (&quot;Our Content&quot;)</>,
          ]}
        />
        <h3 className="pt-2 text-base font-semibold text-ink">Your Content</h3>
        <p>
          You are responsible for Your Content and must ensure it complies with
          our Community Guidelines.
        </p>
        <p>You must not post content that:</p>
        <List
          items={[
            'Is illegal or promotes illegal activity',
            'Is abusive, offensive, or discriminatory',
            'Infringes third-party rights',
            'Contains spam or commercial promotion',
            'Misrepresents identity or intent',
          ]}
        />
        <p>
          By uploading content, you grant {site.name} a{' '}
          <strong>non-exclusive, worldwide, royalty-free license</strong> to
          use, display, and distribute such content in connection with the App.
        </p>
        <p>
          We reserve the right to remove or restrict any content at our
          discretion.
        </p>
      </Section>

      <Section heading="4. Restrictions on Use">
        <p>You agree to:</p>
        <List
          items={[
            'Comply with applicable laws',
            'Use accurate and truthful information',
            'Engage respectfully with other users',
          ]}
        />
        <p>You agree that you will not:</p>
        <List
          items={[
            'Harass, abuse, or harm other users',
            'Misrepresent identity, employment, or intentions',
            'Use the App for scams, spam, or commercial purposes',
            'Attempt to access or interfere with our systems',
          ]}
        />
        <p>
          We may investigate violations and take appropriate action, including
          termination.
        </p>
      </Section>

      <Section heading="5. Purpose of the Platform">
        <p>{site.name} is intended to facilitate:</p>
        <List
          items={[
            'Meaningful, long-term relationships',
            'Value-driven connections among working professionals',
          ]}
        />
        <p>
          Use of the App for casual, deceptive, or non-genuine purposes is
          prohibited.
        </p>
      </Section>

      <Section heading="6. Safety and User Interactions">
        <p>We aim to provide a safe environment but do not guarantee:</p>
        <List
          items={[
            'The conduct of users',
            'The accuracy of user-provided information',
          ]}
        />
        <p>You are solely responsible for your interactions with other users.</p>
        <p>
          We may review profiles, content, and communications to enforce these
          Terms.
        </p>
      </Section>

      <Section heading="7. Privacy">
        <p>
          We collect and process personal data in accordance with our Privacy
          Policy.
        </p>
        <p>By using the App, you consent to:</p>
        <List
          items={[
            'Data collection and processing',
            'Use of matching algorithms',
          ]}
        />
      </Section>

      <Section heading="8. Payments and Subscriptions">
        <p>We may offer paid features (&quot;Premium Services&quot;).</p>
        <p>By purchasing:</p>
        <List
          items={[
            'You agree to applicable fees',
            'Subscriptions may auto-renew unless canceled',
            'Payments may be processed via third parties',
          ]}
        />
        <p>Deleting the App does not cancel subscriptions.</p>
      </Section>

      <Section heading="9. Virtual Features">
        <p>Virtual features may be offered and:</p>
        <List
          items={[
            'Have no real-world value',
            'Are non-transferable',
            'Are non-refundable (unless required by law)',
          ]}
        />
        <p>We may modify or discontinue them at any time.</p>
      </Section>

      <Section heading="10. Disclaimer">
        <p>
          The App is provided &quot;as is&quot; and &quot;as available.&quot;
        </p>
        <p>We do not guarantee:</p>
        <List
          items={[
            'Successful matches',
            'Continuous service',
            'Accuracy of content',
          ]}
        />
        <p>Use is at your own risk.</p>
      </Section>

      <Section heading="11. Limitation of Liability">
        <p>To the extent permitted by law, we are not liable for:</p>
        <List
          items={[
            'Indirect or consequential damages',
            'Loss of data or profits',
            'User interactions or offline conduct',
          ]}
        />
      </Section>

      <Section heading="12. Indemnity">
        <p>You agree to indemnify {site.name} against claims arising from:</p>
        <List
          items={[
            'Your use of the App',
            'Your Content',
            'Your violation of these Terms',
          ]}
        />
      </Section>

      <Section heading="13. Termination">
        <p>You may delete your Account at any time.</p>
        <p>We may suspend or terminate your Account if:</p>
        <List
          items={[
            'You violate these Terms',
            'Your conduct is harmful to the platform or users',
          ]}
        />
        <p>Certain provisions will survive termination.</p>
      </Section>

      <Section heading="14. Dispute Resolution">
        <p>
          Disputes will be resolved through arbitration or applicable legal
          processes.
        </p>
        <p>
          You agree to resolve disputes individually where permitted by law.
        </p>
      </Section>

      <Section heading="15. Changes to Terms">
        <p>We may update these Terms from time to time.</p>
        <p>
          Continued use of the App constitutes acceptance of updated Terms.
        </p>
      </Section>

      <Section heading="16. Governing Law">
        <p>
          These Terms are governed by applicable laws based on your
          jurisdiction.
        </p>
      </Section>

      <Section heading="17. Contact">
        <p>For questions or concerns:</p>
        <p>
          <a
            className="text-brand underline"
            href={`mailto:${site.contactEmail}`}
          >
            {site.contactEmail}
          </a>
        </p>
      </Section>
    </LegalPage>
  )
}

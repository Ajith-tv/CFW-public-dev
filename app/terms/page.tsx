import type { Metadata } from 'next'
import LegalPage, { Section, List } from '@/components/LegalPage'
import { site, formatDate } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms and Conditions of Use for ${site.name}.`,
}

export default function Terms() {
  return (
    <LegalPage
      title="Terms &amp; Conditions"
      lastUpdated={formatDate(site.termsLastUpdated)}
    >
      <p>
        Welcome to {site.name} (&quot;Coffee After Work&quot;, &quot;CAW&quot;,
        &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms &amp;
        Conditions govern your use of the Coffee After Work website, mobile
        applications, and related services (collectively, the
        &quot;Platform&quot;).
      </p>
      <p>
        By accessing or using {site.name}, you agree to be bound by these
        Terms. If you do not agree with any part of these Terms, please
        discontinue use of the Platform immediately.
      </p>

      <Section heading="1. Acceptance of Terms">
        <p>
          {site.name} reserves the right to update, modify, or revise these
          Terms at any time. Changes may be made to:
        </p>
        <List
          items={[
            'Reflect new features or services',
            'Improve user safety',
            'Comply with applicable laws',
            'Improve business operations',
          ]}
        />
        <p>
          The latest version will always be available on our website and mobile
          applications. Continued use of the Platform after changes are
          published constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section heading="2. About Coffee After Work">
        <p>
          {site.name} is a professional social and relationship platform
          designed to help working professionals build meaningful connections
          outside of work.
        </p>
        <p>
          {site.name} is not a matrimonial service and does not guarantee
          romantic matches, friendships, relationships, or successful outcomes
          between users.
        </p>
      </Section>

      <Section heading="3. Eligibility">
        <p>
          To create and maintain an account on {site.name}, you represent and
          warrant that:
        </p>
        <List
          items={[
            'You are at least 21 years old.',
            'You are legally capable of entering into binding agreements.',
            'You are employed, self-employed, or otherwise professionally engaged.',
            'You provide accurate and truthful information.',
            'You are not prohibited from using our services under applicable laws.',
            `You have not been previously removed or banned from ${site.name}.`,
            'You do not have any convictions related to sexual offenses, violent crimes, harassment, stalking, or similar serious offenses.',
            'You will comply with all applicable local, state, national, and international laws.',
          ]}
        />
        <p>
          {site.name} reserves the right to suspend, verify, restrict, or
          permanently terminate any account that does not meet these
          requirements.
        </p>
      </Section>

      <Section heading="4. Corporate Email Verification">
        <p>
          To maintain the integrity of the platform, {site.name} may require
          verification using a valid corporate or company-issued email address.
        </p>
        <p>By providing a corporate email address, you acknowledge that:</p>
        <List
          items={[
            'The corporate email is used solely for verification purposes.',
            'Verification does not imply endorsement by your employer.',
            `Your employer has no affiliation with ${site.name} unless explicitly stated.`,
            `${site.name} will never publicly display your corporate email address.`,
          ]}
        />
        <p>
          Failure to successfully complete verification may limit access to
          certain features.
        </p>
      </Section>

      <Section heading="5. Registration &amp; Account">
        <p>When creating an account, you may be asked to provide:</p>
        <List
          items={[
            'Full name',
            'Date of birth',
            'Gender',
            'Profile photographs',
            'Occupation',
            'Company name',
            'City',
            'Personal email address',
            'Corporate email address for verification',
            'Other profile information',
          ]}
        />
        <p>You agree that:</p>
        <List
          items={[
            'All information provided is accurate and current.',
            'You will maintain only one active account unless otherwise approved.',
            'You are solely responsible for maintaining the confidentiality of your login credentials.',
            'You accept responsibility for all activity conducted through your account.',
          ]}
        />
      </Section>

      <Section heading="6. Community Standards">
        <p>
          All users are expected to behave respectfully and professionally.
        </p>
        <p>You agree that you will NOT:</p>
        <List
          items={[
            'Harass, threaten, intimidate, stalk, or abuse others.',
            'Share hateful, discriminatory, or offensive content.',
            'Use the Platform for escorting, solicitation, or adult services.',
            'Impersonate another person.',
            'Use fake photographs or misleading information.',
            'Promote businesses, products, MLM schemes, or commercial services.',
            'Send spam messages.',
            'Request money or financial assistance from other users.',
            'Share malware, viruses, or harmful code.',
            'Publish content that violates intellectual property rights.',
            'Attempt to scrape, copy, reverse engineer, or exploit the Platform.',
          ]}
        />
        <p>
          Repeated violations may result in immediate suspension or permanent
          account removal.
        </p>
      </Section>

      <Section heading="7. User Safety">
        <p>
          {site.name} encourages users to exercise caution when interacting
          with others.
        </p>
        <p>You acknowledge that:</p>
        <List
          items={[
            'We do not perform criminal background checks on all users.',
            'We do not guarantee the identity, honesty, or intentions of any user.',
            'Any meeting with another user is undertaken at your own risk.',
            'You are responsible for your personal safety during online and offline interactions.',
          ]}
        />
        <p>We strongly recommend:</p>
        <List
          items={[
            'Meeting in public locations.',
            'Informing friends or family before meeting someone.',
            'Avoiding sharing financial information.',
            'Reporting suspicious behavior immediately.',
          ]}
        />
      </Section>

      <Section heading="8. Content &amp; Profile Photos">
        <p>
          By uploading content to {site.name}, you grant us a worldwide,
          non-exclusive, royalty-free license to:
        </p>
        <List
          items={[
            'Display your content within the Platform.',
            'Promote the Platform through marketing materials.',
            'Improve and operate our services.',
          ]}
        />
        <p>You retain ownership of your content.</p>
        <p>We reserve the right to remove content that:</p>
        <List
          items={[
            'Violates these Terms.',
            'Is misleading or fraudulent.',
            'Contains nudity or explicit material.',
            'Contains hate speech.',
            'Promotes illegal activities.',
          ]}
        />
      </Section>

      <Section heading="9. Messaging &amp; Communications">
        <p>You consent to receiving:</p>
        <List
          items={[
            'Account notifications',
            'Verification updates',
            'Security alerts',
            'Service announcements',
            'Product updates',
            'Promotional communications (where permitted by law)',
          ]}
        />
        <p>You may opt out of marketing communications at any time.</p>
      </Section>

      <Section heading="10. Premium Membership &amp; Payments">
        <p>{site.name} may offer premium subscriptions and paid features.</p>
        <p>By purchasing a subscription:</p>
        <List
          items={[
            'You authorize recurring billing where applicable.',
            'Subscription fees are charged through the selected payment method.',
            'Pricing may change with prior notice.',
            'Taxes may apply depending on your location.',
          ]}
        />
        <p>Unless required by law:</p>
        <List
          items={[
            'Payments are non-refundable.',
            'Partially used subscriptions are non-refundable.',
            'Account removal does not automatically cancel subscriptions.',
          ]}
        />
        <p>
          Users must manage subscription cancellation through the relevant app
          store or payment provider.
        </p>
      </Section>

      <Section heading="11. Refund Policy">
        <p>Generally, all purchases are final.</p>
        <p>Refund requests may be considered only when:</p>
        <List
          items={[
            'Required under applicable law.',
            'Duplicate billing occurred.',
            'A technical issue prevented delivery of a purchased feature.',
          ]}
        />
        <p>
          {site.name} reserves sole discretion in determining refund
          eligibility.
        </p>
      </Section>

      <Section heading="12. Account Suspension &amp; Termination">
        <p>
          We reserve the right to suspend, restrict, or permanently terminate
          accounts that:
        </p>
        <List
          items={[
            'Violate these Terms.',
            'Misrepresent identity or employment.',
            'Engage in abusive conduct.',
            'Create safety concerns.',
            'Attempt to circumvent platform rules.',
          ]}
        />
        <p>Termination may occur without prior notice.</p>
      </Section>

      <Section heading="13. Intellectual Property">
        <p>
          All rights, titles, and interests in {site.name}, including:
        </p>
        <List
          items={[
            'Branding',
            'Logos',
            'Software',
            'Design',
            'Features',
            'Content',
          ]}
        />
        <p>
          remain the exclusive property of {site.name} and its licensors.
        </p>
        <p>
          Users may not copy, distribute, modify, reproduce, or exploit any
          part of the Platform without written permission.
        </p>
      </Section>

      <Section heading="14. Disclaimer of Warranties">
        <p>
          The Platform is provided on an &quot;as-is&quot; and
          &quot;as-available&quot; basis.
        </p>
        <p>{site.name} does not guarantee:</p>
        <List
          items={[
            'Successful matches',
            'Compatibility between users',
            'Continuous service availability',
            'Error-free functionality',
            'Accuracy of user-generated content',
          ]}
        />
        <p>Your use of the Platform is entirely at your own risk.</p>
      </Section>

      <Section heading="15. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, {site.name}, its founders,
          employees, affiliates, and partners shall not be liable for:
        </p>
        <List
          items={[
            'Indirect damages',
            'Consequential damages',
            'Emotional distress',
            'Loss of income',
            'Loss of opportunity',
            'Personal disputes between users',
            'Offline incidents arising from user interactions',
          ]}
        />
        <p>
          Our maximum liability shall not exceed the amount paid by you to{' '}
          {site.name} during the preceding twelve (12) months.
        </p>
      </Section>

      <Section heading="16. Indemnification">
        <p>
          You agree to indemnify and hold harmless {site.name}, its directors,
          employees, affiliates, and partners against any claims, damages,
          liabilities, losses, costs, and legal expenses arising from:
        </p>
        <List
          items={[
            'Your use of the Platform.',
            'Your content.',
            'Your interactions with other users.',
            'Your violation of these Terms.',
          ]}
        />
      </Section>

      <Section heading="17. Third-Party Services">
        <p>
          The Platform may integrate with or link to third-party services.
        </p>
        <p>{site.name} is not responsible for:</p>
        <List
          items={[
            'Third-party content',
            'External websites',
            'Payment providers',
            'Advertisers',
            'Linked services',
          ]}
        />
        <p>
          Your interactions with third parties are governed by their own
          policies and terms.
        </p>
      </Section>

      <Section heading="18. Privacy">
        <p>
          Your use of {site.name} is also governed by our Privacy Policy. By
          using the Platform, you consent to the collection, use, and
          processing of information as described in the Privacy Policy.
        </p>
      </Section>

      <Section heading="19. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India.
        </p>
        <p>
          Any disputes arising from these Terms shall be subject to the
          exclusive jurisdiction of the courts located in Bengaluru, Karnataka,
          India.
        </p>
      </Section>

      <Section heading="20. Contact Us">
        <p>
          For questions, concerns, legal notices, or support requests, contact:
        </p>
        <p>
          <strong>Coffee After Work Support</strong>
          <br />
          Email:{' '}
          <a
            className="text-brand underline"
            href={`mailto:${site.contactEmail}`}
          >
            {site.contactEmail}
          </a>
        </p>
        <p>
          <strong>Important Notice:</strong> {site.name} is designed to
          facilitate introductions and conversations between professionals. We
          do not guarantee relationships, friendships, dates, or any specific
          outcomes from using the Platform. Users remain solely responsible for
          their actions, decisions, and interactions both online and offline.
        </p>
      </Section>
    </LegalPage>
  )
}

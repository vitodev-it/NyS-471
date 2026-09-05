import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | YNot Solutions',
  description:
    'Read the Terms of Service governing your use of YNot Solutions\u2019 website and services.',
};

export default function TermsOfServicePage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero section-light">
        <div className="container">
          <div className="label-tag">Legal</div>
          <h1>Terms of Service</h1>
          <p className="lead">
            Please read these terms carefully before using our website or engaging our services.
            Your continued use constitutes your acceptance.
          </p>
          <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            Last updated: 1 September 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-sm">
          <div className="legal-content">

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website and services provided by YNot Solutions
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound
              by these Terms of Service and our Privacy Policy. If you do not agree to these terms,
              you must not use our website or services.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting. Your continued use of our website or services following any
              such changes constitutes your acceptance of the revised terms.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              YNot Solutions provides technology services including, but not limited to, web
              development, mobile application development, artificial intelligence and machine
              learning solutions, IoT integration, and digital transformation consulting. The
              specific scope, deliverables, and pricing for any engagement are set out in a
              separate written agreement or proposal between you and YNot Solutions.
            </p>

            <h2>3. Use of the Website</h2>
            <p>
              You agree to use our website only for lawful purposes and in a manner that does not
              infringe the rights of others. You must not:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations.</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
              <li>Attempt to gain unauthorized access to any part of the website or its related systems.</li>
              <li>Engage in any conduct that restricts or inhibits anyone else&apos;s use or enjoyment of the website.</li>
              <li>Introduce any malicious code, viruses, or other harmful material to the website.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos,
              images, and software, is the property of YNot Solutions or its content suppliers and
              is protected by applicable intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works of any content without our prior
              written permission.
            </p>
            <p>
              Where we create deliverables for you under a separate service agreement, the
              ownership of intellectual property rights in those deliverables will be governed by
              the terms of that agreement.
            </p>

            <h2>5. Client Responsibilities</h2>
            <p>
              When engaging our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate, complete, and timely information, materials, and access necessary for us to perform the agreed services.</li>
              <li>Obtain all necessary permissions and licenses for any third-party content or materials you provide to us.</li>
              <li>Review and provide feedback on deliverables within the timeframes agreed upon.</li>
              <li>Pay all fees and invoices in accordance with the agreed payment terms.</li>
            </ul>

            <h2>6. Payments and Fees</h2>
            <p>
              Fees for our services are set out in individual proposals or service agreements. All
              fees are exclusive of applicable taxes unless stated otherwise. We reserve the right
              to suspend or terminate service in the event of non-payment. Any disputes regarding
              invoices must be raised in writing within 14 days of the invoice date.
            </p>

            <h2>7. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any non-public information disclosed during
              the course of engagement. This obligation of confidentiality does not apply to
              information that is publicly available, already known to the receiving party, or
              required to be disclosed by law.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, YNot Solutions shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages arising from
              your use of our website or services. Our total aggregate liability to you for any
              claim arising out of or relating to these terms or our services shall not exceed the
              total fees paid by you to us in the three months preceding the claim.
            </p>

            <h2>9. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis without any warranties of any kind, either express or implied,
              including but not limited to implied warranties of merchantability, fitness for a
              particular purpose, or non-infringement. We do not warrant that our website will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2>10. Third-Party Services</h2>
            <p>
              Our services may incorporate or link to third-party tools, platforms, or services.
              We are not responsible for the availability, accuracy, or reliability of any
              third-party services, and your use of those services is subject to their respective
              terms and conditions.
            </p>

            <h2>11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our website or services
              at our sole discretion, without notice, for conduct that we believe violates these
              terms or is harmful to other users, us, third parties, or the public interest.
              Provisions that by their nature should survive termination will remain in effect.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of
              Brunei Darussalam. Any disputes arising under or in connection with these terms shall
              be subject to the exclusive jurisdiction of the courts of Brunei Darussalam.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <address>
              <strong>YNot Solutions</strong><br />
              BSB, Brunei Darussalam<br />
              Email:{' '}
              <a href="mailto:ynotsolutions.brn@gmail.com">ynotsolutions.brn@gmail.com</a><br />
              Phone: <a href="tel:+6737194637">+673 7194637</a>
            </address>

          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | YNot Solutions',
  description:
    'Learn how YNot Solutions collects, uses, and protects your personal information in accordance with applicable privacy laws.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero section-light">
        <div className="container">
          <div className="label-tag">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="lead">
            Your privacy matters to us. This policy explains what information we collect, how we use
            it, and the choices you have.
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

            <h2>1. Introduction</h2>
            <p>
              YNot Solutions (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a
              technology company based in Brunei Darussalam. We are committed to protecting your
              personal information and your right to privacy. This Privacy Policy describes how we
              collect, use, disclose, and safeguard your information when you visit our website or
              engage our services.
            </p>
            <p>
              By using our website or services, you agree to the collection and use of information
              in accordance with this policy. If you do not agree with the terms described here,
              please discontinue use of our website and services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, and company
                name when you fill out a contact or inquiry form.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including pages visited, time spent, browser type, device type, and IP address.
              </li>
              <li>
                <strong>Communications:</strong> The content of messages you send to us via email,
                contact forms, or other channels.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar
                technologies to enhance your experience and analyze website traffic. You may control
                cookie preferences through your browser settings.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To deliver and improve our services and website functionality.</li>
              <li>To send relevant updates, newsletters, or promotional content, where you have
                opted in to receive such communications.</li>
              <li>To analyze usage patterns and improve user experience.</li>
              <li>To comply with applicable legal obligations.</li>
              <li>To prevent fraudulent activity and ensure the security of our systems.</li>
            </ul>

            <h2>4. Sharing of Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may
              share your information only in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Trusted third-party vendors who assist us in
                operating our website or delivering our services (e.g., hosting providers, analytics
                services). These parties are contractually obligated to protect your information.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, regulation, or valid legal
                process, we may disclose your information to the appropriate authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or
                sale of assets, your information may be transferred as part of that transaction.
              </li>
            </ul>

            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text
              files stored on your device that help us recognize you on return visits and understand
              how you interact with our site. You may disable cookies through your browser settings;
              however, doing so may affect the functionality of certain features.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this policy, or as required by applicable law. When your
              information is no longer needed, we will securely delete or anonymize it.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We implement industry-standard technical and organizational measures to protect your
              personal information against unauthorized access, loss, misuse, or alteration. While
              we strive to use commercially acceptable means to protect your data, no method of
              transmission over the Internet or electronic storage is completely secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the following rights regarding your
              personal information:
            </p>
            <ul>
              <li>The right to access the personal information we hold about you.</li>
              <li>The right to request correction of inaccurate or incomplete information.</li>
              <li>The right to request deletion of your personal information.</li>
              <li>The right to withdraw consent where processing is based on consent.</li>
              <li>The right to object to or restrict certain processing activities.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided in
              Section 10.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review the privacy
              policies of any third-party websites you visit.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please
              contact us at:
            </p>
            <address>
              <strong>YNot Solutions</strong><br />
              BSB, Brunei Darussalam<br />
              Email:{' '}
              <a href="mailto:ynotsolutions.brn@gmail.com">ynotsolutions.brn@gmail.com</a><br />
              Phone: <a href="tel:+6737194637">+673 7194637</a>
            </address>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable law. When we do, we will revise the &ldquo;Last
              updated&rdquo; date at the top of this page. We encourage you to review this policy
              periodically to stay informed about how we protect your information.
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}

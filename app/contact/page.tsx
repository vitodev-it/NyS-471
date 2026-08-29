'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

// ─── SVG Icons ───────────────────────────────────────────────────────────────
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.57 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

// ─── Contact Form (client component) ────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [toast, setToast] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setToast('Message sent! We\'ll get back to you soon.');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => { setStatus('idle'); setToast(''); }, 3500);
    }, 1500);
  };

  return (
    <>
      <div className="contact-form">
        <h3 style={{ marginBottom: '0.5rem' }}>Send us a message</h3>
        <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
          We respond to all enquiries within 1 business day.
        </p>
        <form id="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactName">Full Name *</label>
              <input type="text" id="contactName" name="name" placeholder="Your name" required autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail">Email Address *</label>
              <input type="email" id="contactEmail" name="email" placeholder="your@email.com" required autoComplete="email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contactPhone">Phone / WhatsApp</label>
            <input type="tel" id="contactPhone" name="phone" placeholder="+673 XXXXXXX" autoComplete="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="contactService">Service Interest</label>
            <select id="contactService" name="service">
              <option value="">Select a service (optional)</option>
              <option>Web Development</option>
              <option>Mobile Apps</option>
              <option>AI / ML Solutions</option>
              <option>IoT Integration</option>
              <option>Tech Training</option>
              <option>Startup Incubation</option>
              <option>Digital Strategy</option>
              <option>Other / Not Sure</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contactMsg">Message *</label>
            <textarea id="contactMsg" name="message" placeholder="Tell us about your project, goal, or question..." required />
          </div>
          <button
            type="submit"
            className="btn"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast show" style={{ position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%) translateY(0)', zIndex: 9999 }}>
          <span>&#10003;</span> {toast}
        </div>
      )}
    </>
  );
}

// ─── FAQ data ────────────────────────────────────────────────────────────────

const faqs = [
  { q: 'How quickly do you respond?', a: 'We respond to all enquiries within 1 business day. For urgent matters, WhatsApp is fastest.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with solo founders, SMEs, NGOs, and government agencies. No project too small.' },
  { q: 'What information helps for a quote?', a: "A brief description of your goal, target users, and any deadlines. We'll take it from there." },
  { q: 'Do you offer ongoing support?', a: 'Yes, all our projects include post-launch support. We also offer maintenance retainer packages.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero section-light">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Contact</span>
          </div>
          <div className="label-tag">Get in Touch</div>
          <h1>
            Let&apos;s start a <span className="brand-gradient">conversation</span>
          </h1>
          <p className="lead">
            We&apos;re local in Brunei and ready to help with your next project. No jargon, no
            pressure, just a friendly chat.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Info Panel */}
            <Reveal className="contact-info">
              <div
                className="label-tag"
                style={{ color: 'var(--green)', background: 'rgba(34,197,94,0.15)', borderColor: 'rgba(34,197,94,0.3)' }}
              >
                Contact Details
              </div>
              <h3>Reach us directly</h3>

              <div className="info-item">
                <div className="info-icon"><IconPhone /></div>
                <div>
                  <div className="info-label">Phone / WhatsApp</div>
                  <div className="info-value">
                    <a href="tel:+6737194637" style={{ color: 'white', textDecoration: 'none' }}>+673 7194637</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><IconMail /></div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    <a href="mailto:ynotsolutions.brn@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                      ynotsolutions.brn@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><IconMapPin /></div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">Bandar Seri Begawan, Brunei Darussalam</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><IconClock /></div>
                <div>
                  <div className="info-label">Office Hours</div>
                  <div className="info-value">Mon to Fri: 9:00 AM to 6:00 PM</div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href="https://wa.me/6737194637?text=Hello%20YNot%20Solutions!%20I%27d%20like%20to%20discuss%20a%20project."
                  className="btn btn-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%', justifyContent: 'center', color: '#0f172a', gap: '0.6rem' }}
                >
                  <IconWhatsApp /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>

          {/* Map Placeholder */}
          <Reveal
            style={{
              marginTop: '3rem',
              background: 'var(--gradient)',
              borderRadius: 'var(--radius-lg)',
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 600,
              gap: '0.75rem',
            }}
          >
            <IconMapPin />
            YNot Solutions · Bandar Seri Begawan, Brunei Darussalam
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ STRIP ===== */}
      <section className="section-sm section-light">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 560, margin: '0 auto 2.5rem' }}>
            <div className="label-tag">Common Questions</div>
            <h2>Quick answers</h2>
          </Reveal>
          <Reveal className="card-grid-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="card">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

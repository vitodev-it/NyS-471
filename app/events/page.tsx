import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Events and Community',
  description:
    'YNot Solutions events, workshops, hackathons, networking sessions, and tech community events in Brunei.',
};

function IconCalendar() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero section-light">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Events</span>
          </div>
          <div className="label-tag">Community and Learning</div>
          <h1>
            Events and <span className="brand-gradient">Community</span>
          </h1>
          <p className="lead">
            Workshops, hackathons, networking sessions, and tech talks, building Brunei&apos;s
            digital community together.
          </p>
        </div>
      </section>

      {/* ===== EVENTS LIST ===== */}
      <section className="section">
        <div className="container">
          {/* Empty State */}
          <Reveal>
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 2rem',
                background: 'var(--light-bg)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <IconCalendar />
              </div>
              <h2>No events scheduled yet</h2>
              <p style={{ marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
                Check back soon. We run regular workshops, hackathons, and networking events across
                Brunei.
              </p>
              <Link href="/contact" className="btn">
                Get notified about upcoming events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-sm section-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2>Want to host or sponsor an event?</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="lead lead-center">
              Partner with YNot Solutions to run impactful tech events for Brunei&apos;s community.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link href="/contact" className="btn">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

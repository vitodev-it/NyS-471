import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import StatCounter from '@/components/StatCounter';

export const metadata: Metadata = {
  title: 'YNot Solutions · Brunei\'s Digital Transformation Partner',
  description:
    'YNot Solutions drives Brunei\'s digital transformation with AI, IoT, and web technology, aligned with Wawasan 2035. Silicon Valley mindset, local heart.',
};

// ─── SVG Icon Library ────────────────────────────────────────────────────────

function IconGlobe() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconSmartphone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  );
}

function IconCpu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function IconGradCap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconLightbulb() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconLayout() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function IconFlag() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconGlobe />,
    title: 'Web Development',
    desc: 'Custom websites and web apps built with modern frameworks.',
    features: ['Corporate and e-commerce sites', 'Web applications (PWA)', 'CMS and admin dashboards'],
  },
  {
    icon: <IconSmartphone />,
    title: 'Mobile Apps',
    desc: 'Native iOS and Android and cross-platform mobile experiences.',
    features: ['React Native / Flutter', 'App store deployment', 'Push notifications and offline'],
  },
  {
    icon: <IconCpu />,
    title: 'AI / ML Solutions',
    desc: 'Intelligent automation and predictive systems for modern businesses.',
    features: ['Chatbots and virtual assistants', 'Predictive analytics', 'Smart recommendations'],
    featured: true,
    badge: 'Industry 4.0',
  },
  {
    icon: <IconWifi />,
    title: 'IoT Integration',
    desc: 'Connect physical devices to intelligent cloud platforms.',
    features: ['Sensor networks and dashboards', 'Remote monitoring systems', 'Smart facility management'],
    badge: 'Industry 4.0',
    badgeGreen: true,
  },
  {
    icon: <IconGradCap />,
    title: 'Tech Training',
    desc: "Bootcamps and workshops to upskill Bruneians for the digital economy.",
    features: ['Coding bootcamps', 'Digital literacy programs', 'Corporate IT training'],
  },
  {
    icon: <IconLightbulb />,
    title: 'Startup Incubation',
    desc: "Supporting Brunei's next generation of tech entrepreneurs.",
    features: ['Mentorship and guidance', 'Tech scaffolding', 'Funding network access'],
  },
];

const whyYnot = [
  {
    icon: <IconHome />,
    title: 'Locally Rooted',
    desc: "Based in BSB, we understand Brunei's market, culture, and regulatory landscape deeply.",
  },
  {
    icon: <IconZap />,
    title: 'Rapid Delivery',
    desc: 'Agile sprints, fast prototyping, and iterative delivery mean you see results quickly.',
  },
  {
    icon: <IconLock />,
    title: 'Secure by Design',
    desc: 'Security is baked in from day one. OWASP standards, data protection, and hardened infrastructure.',
  },
  {
    icon: <IconTrendingUp />,
    title: 'Scalable Architecture',
    desc: 'API-first, cloud-ready systems designed to grow with your business from day one.',
  },
];

const testimonials = [
  {
    initials: 'AM',
    name: 'Ahmad M.',
    role: 'CEO, BSB Retail Group',
    text: 'YNot Solutions transformed our online presence completely. Our new website is fast, beautiful, and drives real enquiries. Highly recommend to any Brunei business!',
  },
  {
    initials: 'SH',
    name: 'Siti H.',
    role: 'HR Director, Gov-linked Agency',
    text: 'Their tech training bootcamp upskilled our entire team. The content was relevant, hands-on, and perfectly suited for our Brunei context.',
  },
  {
    initials: 'RK',
    name: 'Razif K.',
    role: 'Operations Manager, Industrial SME',
    text: 'The IoT dashboard YNot built for our facility cut monitoring costs by 40%. Their Industry 4.0 expertise is genuinely world-class.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container hero">
          <div className="hero-text">
            <div className="label-tag">Brunei&apos;s #1 Digital Partner</div>
            <h1>
              Where bold ideas
              <br />
              <span className="brand-gradient">meet execution</span>
            </h1>
            <p className="lead">
              YNot Solutions drives Brunei&apos;s digital transformation with AI, IoT, and web technology,
              aligned with Wawasan 2035. Silicon Valley mindset, local heart.
            </p>
            <div className="btn-group">
              <Link href="/services" className="btn btn-lg">
                Explore Our Services
              </Link>
              <Link href="/about" className="btn-outline btn btn-lg">
                Our Mission
              </Link>
            </div>
            <div className="trust-row">
              <div className="trust-label">Trusted by:</div>
              <div className="trust-badge">LOCAL SMEs</div>
              <div className="trust-badge">STARTUPS</div>
              <div className="trust-badge">GOV AGENCIES</div>
              <div className="trust-badge">NONPROFITS</div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-card-stack">
              <div className="hero-stat-card">
                <div className="hero-stat-icon"><IconLayout /></div>
                <div>
                  <div className="hero-stat-label">Websites Launched</div>
                  <div className="hero-stat-value">20+ Projects</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-icon"><IconCpu /></div>
                <div>
                  <div className="hero-stat-label">AI Solutions Deployed</div>
                  <div className="hero-stat-value">Industry 4.0 Ready</div>
                </div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-icon"><IconFlag /></div>
                <div>
                  <div className="hero-stat-label">National Alignment</div>
                  <div className="hero-stat-value">Wawasan 2035</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="section-sm section-light">
        <div className="container">
          <div className="stats-row">
            <Reveal className="stat-item">
              <StatCounter target={10} suffix="+" />
              <div className="stat-label">Local Partnerships</div>
            </Reveal>
            <Reveal className="stat-item" delay={1}>
              <StatCounter target={5} />
              <div className="stat-label">Startups Launched</div>
            </Reveal>
            <Reveal className="stat-item" delay={2}>
              <StatCounter target={8} suffix="+" />
              <div className="stat-label">Community Events</div>
            </Reveal>
            <Reveal className="stat-item" delay={3}>
              <StatCounter target={100} suffix="%" />
              <div className="stat-label">Wawasan 2035 Aligned</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 640, margin: '0 auto 3.5rem' }}>
            <div className="label-tag">What We Do</div>
            <h2>
              End-to-end digital solutions
              <br />
              built for Brunei
            </h2>
            <p className="lead lead-center">
              From simple websites to AI-powered platforms, we design, build, and scale technology
              that creates real business value.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((svc, i) => (
              <Reveal
                key={svc.title}
                delay={(i % 3) as 0 | 1 | 2}
                className={`service-card${svc.featured ? ' featured' : ''}`}
              >
                {svc.badge && (
                  <div
                    className="service-badge"
                    style={
                      svc.badgeGreen
                        ? { background: 'rgba(34,197,94,0.15)', color: 'var(--green-dark)' }
                        : undefined
                    }
                  >
                    {svc.badge}
                  </div>
                )}
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p style={svc.featured ? { color: 'rgba(255,255,255,0.65)' } : undefined}>
                  {svc.desc}
                </p>
                <ul className="service-features">
                  {svc.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY YNOT ===== */}
      <section className="section section-dark">
        <div className="container">
          <Reveal style={{ maxWidth: 640, margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <div
              className="label-tag"
              style={{
                color: 'var(--green)',
                background: 'rgba(34,197,94,0.15)',
                borderColor: 'rgba(34,197,94,0.3)',
              }}
            >
              Why YNot?
            </div>
            <h2 style={{ color: 'white' }}>The YNot difference</h2>
            <p>We don&apos;t just build, we partner, advise, and grow with you.</p>
          </Reveal>

          <Reveal className="card-grid">
            {whyYnot.map((item) => (
              <div
                key={item.title}
                className="card"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="card-icon" style={{ color: 'var(--green)' }}>{item.icon}</div>
                <h3 style={{ color: 'white' }}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 560, margin: '0 auto 3rem' }}>
            <div className="label-tag">Client Stories</div>
            <h2>Trusted by Brunei businesses</h2>
          </Reveal>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) as 0 | 1 | 2} className="testimonial-card">
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <div
              className="label-tag"
              style={{
                color: 'white',
                background: 'rgba(255,255,255,0.15)',
                borderColor: 'rgba(255,255,255,0.25)',
              }}
            >
              Ready to transform?
            </div>
            <h2>Let&apos;s build Brunei&apos;s digital future, together</h2>
            <p>Tell us your challenge. We&apos;ll design the solution. No commitment required.</p>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-white btn-lg">
                Start a Conversation
              </Link>
              <Link href="/services" className="btn btn-ghost btn-lg">
                See Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

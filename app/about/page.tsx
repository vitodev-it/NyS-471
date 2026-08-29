import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import StatCounter from '@/components/StatCounter';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About YNot Solutions, our mission, vision, team, values, and commitment to Wawasan Brunei 2035.',
};

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function IconZap() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

function IconLeaf() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22 16 8" />
      <path d="M16.67 2C10.6 2 5.33 5.55 5.33 12c0 3.68 1.96 6.63 4.67 8.4C10.67 22 22 22 22 8.67 22 4.97 19.71 2 16.67 2z" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const coreValues = [
  {
    icon: <IconZap />,
    title: 'Bold Execution',
    desc: "We don't just plan, we build. Fast, decisive action over endless deliberation.",
  },
  {
    icon: <IconUsers />,
    title: 'Local Partnership',
    desc: 'We grow with Brunei. Every project creates local value, jobs, and capability.',
  },
  {
    icon: <IconStar />,
    title: 'Design Excellence',
    desc: 'Great design is not optional. We obsess over user experience and visual quality.',
  },
  {
    icon: <IconLock />,
    title: 'Trust and Security',
    desc: 'We build systems that are secure by design, protecting our clients and their users.',
  },
  {
    icon: <IconTrendingUp />,
    title: 'Scalable Thinking',
    desc: 'Every solution is designed to grow. API-first, cloud-ready, future-proof.',
  },
  {
    icon: <IconLeaf />,
    title: 'Continuous Growth',
    desc: "We invest in our team's learning so our clients always get cutting-edge expertise.",
  },
];

const wawasanPillars = [
  { icon: <IconBook />, title: 'Education', desc: 'Tech workshops, bootcamps, and mentorship programs for Brunei\'s youth.' },
  { icon: <IconBriefcase />, title: 'Economy', desc: 'Supporting local SMEs, startups, and entrepreneurs with digital tools.' },
  { icon: <IconGlobe />, title: 'Global Reach', desc: 'Building internationally competitive products, made in Brunei.' },
  { icon: <IconCpu />, title: 'Industry 4.0', desc: 'Deploying AI, IoT, and automation to modernise Brunei\'s industries.' },
];

const team = [
  { initials: 'YN', name: 'Founder', role: 'Chief Executive Officer', desc: "Visionary leader driving Brunei's digital transformation agenda." },
  { initials: 'TD', name: 'Tech Lead', role: 'Head of Engineering', desc: 'Full-stack engineer specialising in scalable web and AI systems.' },
  { initials: 'UX', name: 'Design Lead', role: 'Head of UI/UX Design', desc: 'Crafting intuitive, beautiful experiences that users love.' },
  { initials: 'BD', name: 'Growth Lead', role: 'Business Development', desc: 'Building partnerships and driving client success across Brunei.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero section-light">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>About</span>
          </div>
          <div className="label-tag">Our Story</div>
          <h1>
            About <span className="brand-gradient">YNot Solutions</span>
          </h1>
          <p className="lead">
            Brunei&apos;s digital transformation partner, building bold, scalable technology with a
            Silicon Valley mindset and a local heart.
          </p>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <Reveal className="mission-card">
              <div className="label-tag">Mission</div>
              <h2>What drives us</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
                To empower Bruneian businesses and individuals with cutting-edge digital solutions,
                fostering innovation and sustainable growth through technology excellence and local
                talent development.
              </p>
            </Reveal>
            <Reveal className="vision-card" delay={1}>
              <div className="label-tag">Vision</div>
              <h2>Where we&apos;re going</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
                To be Brunei&apos;s leading catalyst for digital innovation, creating a thriving tech
                ecosystem that contributes significantly to Wawasan Brunei 2035 and positions Brunei
                as a Southeast Asian tech hub.
              </p>
            </Reveal>
          </div>

          {/* Wawasan Banner */}
          <Reveal className="wawasan-section">
            <div
              className="label-tag"
              style={{
                color: 'white',
                background: 'rgba(255,255,255,0.15)',
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            >
              National Alignment
            </div>
            <h2>Aligning with Wawasan Brunei 2035</h2>
            <p>
              Wawasan Brunei 2035 envisions a nation of educated, highly skilled people and a
              dynamic, sustainable economy. Every YNot project contributes to this vision.
            </p>
            <div className="values-list" style={{ marginTop: '2rem' }}>
              {wawasanPillars.map((p, i) => (
                <Reveal key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="value-item">
                  <div className="value-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 560, margin: '0 auto 3rem' }}>
            <div className="label-tag">Core Values</div>
            <h2>What we stand for</h2>
            <p className="lead lead-center">
              Our values guide every decision, every line of code, and every client relationship.
            </p>
          </Reveal>
          <Reveal className="card-grid">
            {coreValues.map((v) => (
              <div key={v.title} className="card">
                <div className="card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 560, margin: '0 auto 3rem' }}>
            <div className="label-tag">The Team</div>
            <h2>
              People behind
              <br />
              <span className="brand-gradient">YNot Solutions</span>
            </h2>
            <p className="lead lead-center">
              A passionate, diverse team of engineers, designers, and strategists based in Brunei.
            </p>
          </Reveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <Reveal key={member.initials} delay={(i % 4) as 0 | 1 | 2 | 3} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}>{member.desc}</p>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              We&apos;re hiring! Join the YNot team and help build Brunei&apos;s digital future.
            </p>
            <Link href="/contact" className="btn">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-sm section-dark">
        <div className="container">
          <div className="stats-row">
            <Reveal className="stat-item">
              <StatCounter target={10} suffix="+" />
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Partnerships</div>
            </Reveal>
            <Reveal className="stat-item" delay={1}>
              <StatCounter target={5} />
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Startups Launched</div>
            </Reveal>
            <Reveal className="stat-item" delay={2}>
              <StatCounter target={8} suffix="+" />
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Community Events</div>
            </Reveal>
            <Reveal className="stat-item" delay={3}>
              <StatCounter target={2035} />
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Wawasan Vision</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Ready to transform your business?</h2>
            <p>
              Let&apos;s talk about how YNot Solutions can help you achieve your digital goals.
            </p>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-white btn-lg">
                Get in Touch
              </Link>
              <Link href="/services" className="btn btn-ghost btn-lg">
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

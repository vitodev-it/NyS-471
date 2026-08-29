import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'YNot Solutions services — web development, mobile apps, AI/ML, IoT integration, tech training, startup incubation and digital strategy in Brunei.',
};

// ─── SVG Icons ───────────────────────────────────────────────────────────────

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
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
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

function IconBarChart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconPenTool() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconGlobe />,
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern frameworks and best practices.',
    features: [
      'Corporate and portfolio websites',
      'E-commerce platforms',
      'Progressive Web Apps (PWA)',
      'CMS and admin dashboards',
      'Maintenance and hosting support',
    ],
  },
  {
    icon: <IconSmartphone />,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences for iOS and Android that delight users.',
    features: [
      'React Native and Flutter apps',
      'iOS and Android deployment',
      'Offline-first architecture',
      'Push notifications and analytics',
      'App Store optimisation',
    ],
  },
  {
    icon: <IconCpu />,
    title: 'AI / ML Solutions',
    desc: 'Intelligent, data-driven systems that automate decisions and unlock new business value.',
    features: [
      'Custom chatbots and virtual assistants',
      'Predictive analytics and forecasting',
      'Computer vision systems',
      'NLP document processing',
      'Smart recommendation engines',
    ],
    featured: true,
    badge: 'Industry 4.0',
  },
  {
    icon: <IconWifi />,
    title: 'IoT Integration',
    desc: 'Connect your physical world to intelligent cloud platforms for real-time visibility and control.',
    features: [
      'Sensor networks and edge devices',
      'Real-time monitoring dashboards',
      'Smart facility management',
      'Data pipelines and alerting',
      'MQTT / REST API integration',
    ],
    badge: 'Industry 4.0',
    badgeGreen: true,
  },
  {
    icon: <IconGradCap />,
    title: 'Tech Training',
    desc: "Upskilling Brunei's workforce with practical, hands-on technology programs.",
    features: [
      'Coding bootcamps (Web, Mobile)',
      'Digital literacy workshops',
      'Corporate IT training programs',
      'Youth and school programs',
      'AI and data science courses',
    ],
  },
  {
    icon: <IconLightbulb />,
    title: 'Startup Incubation',
    desc: 'YNot Labs supports Brunei\'s next generation of tech entrepreneurs from idea to launch.',
    features: [
      '1-on-1 mentorship sessions',
      'Technical scaffolding and MVP builds',
      'Investor network access',
      'Pitch deck and go-to-market strategy',
      'Co-working community',
    ],
  },
  {
    icon: <IconBarChart />,
    title: 'Digital Strategy',
    desc: 'Navigate your digital transformation with expert guidance and a clear roadmap.',
    features: [
      'Digital maturity assessment',
      'Technology roadmaps',
      'Process automation consulting',
      'Data and analytics strategy',
      'Digital marketing foundations',
    ],
  },
  {
    icon: <IconCloud />,
    title: 'Cloud and Infrastructure',
    desc: 'Scalable, secure cloud architecture for businesses ready to modernise.',
    features: [
      'AWS / Azure / GCP setup',
      'CI/CD pipeline configuration',
      'Database design and management',
      'Security hardening (OWASP)',
      '99.9% uptime SLA targets',
    ],
  },
];

const processSteps = [
  { icon: <IconSearch />, number: '1', title: 'Discovery', desc: 'We deep-dive into your goals, users, and constraints to define the right solution.' },
  { icon: <IconPenTool />, number: '2', title: 'Design', desc: 'Wireframes, prototypes, and UI mockups — validated with users before building.' },
  { icon: <IconCode />, number: '3', title: 'Build', desc: 'Agile sprints with weekly demos. You see progress at every step.' },
  { icon: <IconRocket />, number: '4', title: 'Launch', desc: 'Rigorous testing, deployment, and post-launch monitoring to ensure smooth performance.' },
  { icon: <IconTrendingUp />, number: '5', title: 'Grow', desc: 'Ongoing support, analytics review, and feature evolution to maximise value.' },
];

const techStack = [
  'React', 'Next.js', 'React Native', 'Flutter', 'Node.js',
  'Python', 'TensorFlow', 'AWS', 'Firebase', 'PostgreSQL', 'MongoDB', 'Docker',
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero section-light">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Services</span>
          </div>
          <div className="label-tag">What We Offer</div>
          <h1>
            Products and <span className="brand-gradient">Services</span>
          </h1>
          <p className="lead">
            End-to-end digital solutions tailored for Brunei&apos;s digital economy, from strategy
            to deployment.
          </p>
        </div>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 600, margin: '0 auto 3rem' }}>
            <div className="label-tag">Core Services</div>
            <h2>Everything you need to go digital</h2>
            <p className="lead lead-center">
              Pick one service or combine them, we design solutions around your specific goals.
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
                        ? { background: 'rgba(34,197,94,0.12)', color: 'var(--green-dark)' }
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
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section section-light">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 560, margin: '0 auto 3rem' }}>
            <div className="label-tag">How We Work</div>
            <h2>Our proven delivery process</h2>
            <p className="lead lead-center">
              From brief to launch in structured, transparent sprints.
            </p>
          </Reveal>
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 560, margin: '0 auto 2rem' }}>
            <div className="label-tag">Tech Stack</div>
            <h2>Modern tools, proven results</h2>
            <p className="lead lead-center">
              We use the best-in-class technologies to build fast, scalable, and maintainable
              systems.
            </p>
          </Reveal>
          <Reveal className="tech-logos-row">
            {techStack.map((tech) => (
              <div key={tech} className="tech-logo-item">{tech}</div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section-light">
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
              Free Consultation
            </div>
            <h2>Not sure which service you need?</h2>
            <p>
              We&apos;ll analyse your situation and recommend the right solution, at no cost, no
              obligation.
            </p>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-white btn-lg">
                Book a Free Discovery Call
              </Link>
              <a
                href="https://wa.me/6737194637?text=Hi%20YNot%2C%20I%27d%20like%20a%20consultation"
                className="btn btn-ghost btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

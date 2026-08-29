'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

function IconCamera() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-modal
      aria-label="Photo viewer"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        <IconX />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Gallery photo" />
    </div>
  );
}

export default function GalleryClient() {
  const [lightboxSrc, setLightboxSrc] = useState('');

  return (
    <>
      <section className="page-hero section-light">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Gallery</span>
          </div>
          <div className="label-tag">Visual Stories</div>
          <h1>
            Photo <span className="brand-gradient">Gallery</span>
          </h1>
          <p className="lead">
            Moments from our events, workshops, hackathons, and community activities, capturing
            Brunei&apos;s digital journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
                <IconCamera />
              </div>
              <h2>Gallery coming soon</h2>
              <p style={{ maxWidth: 440, margin: '0 auto 2rem' }}>
                We&apos;re adding photos from our recent events. Check back shortly!
              </p>
              <Link href="/events" className="btn">
                See our Events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc('')} />
      )}
    </>
  );
}

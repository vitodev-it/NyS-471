'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header ref={headerRef} className={scrolled ? 'scrolled' : ''}>
      <div className="container header-inner">
        <Link href="/" className="logo-area">
          <Image
            src="/images/logo.png"
            alt="YNot Solutions"
            width={120}
            height={42}
            className="logo-img"
            style={{ height: 42, width: 'auto' }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            priority
          />
          <span className="logo-fallback">YNot Solutions</span>
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} role="navigation" aria-label="Main navigation">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            Get in Touch
          </Link>
        </nav>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

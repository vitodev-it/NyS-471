'use client';

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  direction?: 'up' | 'left' | 'right';
  style?: React.CSSProperties;
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up', style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dirClass =
    direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
  const delayClass = delay > 0 ? ` delay-${delay}` : '';

  return (
    <div ref={ref} className={`${dirClass}${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}

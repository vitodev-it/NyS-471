'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
}

export default function StatCounter({ target, suffix = '', prefix = '' }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const duration = 1800;
            const step = 16;
            const increment = target / (duration / step);
            let current = 0;
            const isFloat = target % 1 !== 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }, step);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const isFloat = target % 1 !== 0;
  const display = value === 0 ? `${prefix}${target}${suffix}` : `${prefix}${isFloat ? value.toFixed(1) : value}${suffix}`;

  return (
    <div ref={ref} className="stat-number">
      {display}
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';

interface OptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function OptimizedSection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
}: OptimizedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`opacity-0 transform translate-y-8 transition-all duration-700 ${className}`}
      style={{
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
}

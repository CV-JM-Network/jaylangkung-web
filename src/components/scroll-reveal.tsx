'use client';

import { cn } from '@/lib/utils';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const directionStyles: Record<Direction, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
};

let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, () => void>();

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = observerCallbacks.get(entry.target);
            callback?.();
          }
        });
      },
      { threshold: 0.15 },
    );
  }
  return sharedObserver;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    const handleIntersection = () => {
      setIsVisible(true);
      observer.unobserve(el);
      observerCallbacks.delete(el);
    };

    observerCallbacks.set(el, handleIntersection);
    observer.observe(el);

    return () => {
      observerCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionStyles[direction]}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

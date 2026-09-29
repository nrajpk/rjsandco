import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Marks an element "ready" before first paint (so a drawing animation can start
// from blank) and "in view" once it scrolls into the viewport. With reduced
// motion or no IntersectionObserver, nothing is hidden and nothing animates.
export function useDrawOnView({ threshold = 0.35, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  useLayoutEffect(() => {
    if (!prefersReducedMotion() && 'IntersectionObserver' in window) setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ready, threshold, rootMargin]);

  return [ref, ready, inView];
}

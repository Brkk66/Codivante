'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    if (lenis) return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return lenis;
}

export function scrollTo(target: string | number) {
  if (!lenis) return;
  lenis.scrollTo(target, { duration: 1.5 });
}

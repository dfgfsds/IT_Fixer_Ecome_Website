'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const isPopStateRef = useRef(false);

  useEffect(() => {
    // Listen for browser Back/Forward (PopState) events
    const handlePopState = () => {
      isPopStateRef.current = true;
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // If the navigation was initiated by the Back/Forward button,
    // skip the forced scroll-to-top to allow natural scroll restoration.
    if (isPopStateRef.current) {
      isPopStateRef.current = false;
      return;
    }

    // Standard scroll to top for link clicks
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);

      const smoothContent = document.getElementById('smooth-content');
      if (smoothContent) {
        smoothContent.scrollTo(0, 0);
      }
    }, 100);

    // Immediate scroll
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

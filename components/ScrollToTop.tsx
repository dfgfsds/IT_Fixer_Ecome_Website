'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Standard scroll to top
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

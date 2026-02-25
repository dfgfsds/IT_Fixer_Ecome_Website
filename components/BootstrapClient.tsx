'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('@/public/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

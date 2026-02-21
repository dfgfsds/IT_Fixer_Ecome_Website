import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* TEMPLATE CSS FILES */
import './styles/all.min.css';
import './styles/animate.css';
import './styles/bootstrap.min.css';
import './styles/magnific-popup.css';
import './styles/meanmenu.css';
import './styles/swiper-bundle.min.css';
import './styles/nice-select.css';
import './styles/main.css';
import './styles/style.css';


import Header from '@/components/Header';

import BootstrapClient from '@/components/BootstrapClient';
import Scripts from '@/components/Scripts';
import FooterPage from '@/components/Footer';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'IT Fixer - IT Services & Technology Next.js Template',
  description: 'Professional IT Services and Technology Solutions',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <BootstrapClient />
          <Header />
          <main>{children}</main>
          <FooterPage />
          <Scripts />
        </Providers>
      </body>
    </html>
  );
}
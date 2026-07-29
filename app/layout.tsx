import type { Metadata } from 'next';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";

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
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingCallButton from '@/components/FloatingCallButton';
import ScrollToTop from '@/components/ScrollToTop';
import StickyRepairBar from '@/components/StickyRepairBar';
import GlobalAppPopup from '@/components/GlobalAppPopup';

export const metadata: Metadata = {

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
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J3ZCH2TFTE"
          strategy="beforeInteractive"
        />

        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J3ZCH2TFTE');
          `}
        </Script>
      </head>

      <body>
        <Providers>
          <ScrollToTop />
          <GlobalAppPopup />
          <BootstrapClient />
          <FloatingWhatsApp />
          <FloatingCallButton />
          <Header />
          <main>{children}</main>
          {/* <StickyRepairBar /> */}
          <FooterPage />
          <Scripts />
        </Providers>
      </body>
    </html>
  );
}
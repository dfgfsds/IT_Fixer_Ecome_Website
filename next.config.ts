import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecomapi.ftdigitalsolutions.org',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'test-ecomapi.justvy.in',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  async redirects() {
    return [
      // 1. Numeric shop IDs (e.g. /shop/21024) -> /shop
      {
        source: '/shop/:id(\\d+)',
        destination: '/shop',
        permanent: true,
      },
      // 2. deleteaccount subdomain -> Home
      {
        source: '/:path*',
        has: [
          {
            type: 'host' as const,
            value: 'deleteaccount.itfixer.in',
          },
        ],
        destination: 'https://www.itfixer.in/',
        permanent: true,
      },
      // 3. auth subdomain (except /__/auth) -> Home
      {
        source: '/((?!__/auth).*)',
        has: [
          {
            type: 'host' as const,
            value: 'auth.itfixer.in',
          },
        ],
        destination: 'https://www.itfixer.in/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
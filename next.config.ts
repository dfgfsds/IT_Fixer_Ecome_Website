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
};

export default nextConfig;

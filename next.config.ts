import type { NextConfig } from "next";

const OLD_SHOP_IDS = [
  '21024', '21165', '21094', '21027', '21159', '21036', '21141', '21062',
  '21034', '21088', '21235', '21075', '21017', '21206', '20980', '21136',
  '21257', '21181', '20988', '21010', '21160', '21016', '21219', '20972',
  '21097', '20973', '21143', '21022', '21193', '21129', '21223', '21083',
  '20718', '21227', '21184', '20756', '20301', '20089',
];

const OLD_CHUNKS = [
  'ade17bf0898c3c10.js', 'ff1a16fafef87110.js', '4318deed234a6e25.js',
  'ff794059697f26e2.js', 'd9334c2ddda80207.css', '43b9aaf3de4c8d3b.js',
  'd2be314c3ece3fbe.js', '3a8befc856e436ec.js', 'd43ab978ac5b76ce.css',
  '1298b3b3964e2e42.css', '383f655aa9b6751d.js', 'f3e16f38b140e6c8.js',
  '77b05d7166096fba.js', '079636f4a46c3785.css', 'c9122760476e2b9b.css',
  '31452da097d680bf.js', '28703e4cfc303965.css', '2ea9dc69037568ac.js',
  '7e62287be6ffbcb3.css', 'ace6c6a5f87696cf.css', '993135f31a74fd88.js',
  '6aab79ebbd4c8676.js', '0bd03417962664b7.css', '9022b411cc00422e.js',
  '41538ea294fb8f78.js', '8aca3f3ea559a05a.js', '26436a9ce65921a9.js',
  '38b7735b81a948f1.js', '3baa143acd78cbf7.js', '87355c8a11257913.js',
  'eb4777717689e3c9.js', 'c80e544b946df376.js', '2da683ad7d51dcdd.js',
  'b88f293b0629eba9.js', 'eab2a7343187df04.js', 'bb1616c6d80bf8a1.js',
  '1486c28750e4ee54.js', 'da5bb0cb802fa7be.js', '549945ce8bdd5700.js',
  'c638f8abb228110b.js', 'b1d43d190945c86d.js', 'f2457654c5f036c3.css',
  'c6ac20f9023dc56d.js', '74602c97407491bb.js', '8abaeba327c1a7e3.js',
];

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
      // 1. Any numeric shop ID URL (e.g. /shop/21024) -> /shop
      {
        source: '/shop/:id(\\d+)',
        destination: '/shop',
        permanent: true,
      },
      // Explicit shop IDs
      ...OLD_SHOP_IDS.map((id) => ({
        source: `/shop/${id}`,
        destination: '/shop',
        permanent: true,
      })),
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
      // 4. Old static chunk files from previous builds -> Home
      ...OLD_CHUNKS.map((file) => ({
        source: `/_next/static/chunks/${file}`,
        destination: '/',
        permanent: true,
        basePath: false,
      })),
    ];
  },
};

export default nextConfig;

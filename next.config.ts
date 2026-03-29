import type { NextConfig } from 'next';
import 'dotenv';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // async redirects() {
  //   return [{ source: '/', destination: '/', permanent: false }];
  // },

  allowedDevOrigins: [
    'http://checkhost.local:3000', // add the host shown in your warning
    // "http://localhost:3000",    // add more if necessary (include port)
  ],

  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:8000/some-api',
  },

  //For Docker
  output: 'standalone',
  compress: true,
};

export default nextConfig;

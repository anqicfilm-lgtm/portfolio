import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This portfolio has no server-only routes. Exporting it as static files
  // keeps the existing Vinext build compatible with Vercel's CDN hosting.
  output: 'export',
};

export default nextConfig;

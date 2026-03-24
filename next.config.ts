import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ❌ NE PAS mettre output: 'standalone' ou 'export' avec OpenNext
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // ✅ Recommandé pour Cloudflare Workers
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',              // ← ✅ Export statique pour Cloudflare Pages
  trailingSlash: true,           // ← ✅ Important pour les routes statiques
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,           // ← ✅ Désactiver l'optimisation Next.js (non supportée en static)
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  // ❌ Retirer experimental.serverActions pour l'export statique
};

export default nextConfig;
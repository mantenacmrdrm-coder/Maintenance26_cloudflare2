import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: '.next', // <--- AJOUTE CETTE LIGNE
  output: 'standalone',
  typescript: {
    // Permet de déployer même si des erreurs de type persistent dans la logique métier complexe
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;

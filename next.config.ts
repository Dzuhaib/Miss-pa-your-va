import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'misspasocial.co.uk',
      },
    ],
  },
};

export default nextConfig;

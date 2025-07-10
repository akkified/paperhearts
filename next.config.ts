import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://lh3.googleusercontent.com/a/**')
    ],  
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
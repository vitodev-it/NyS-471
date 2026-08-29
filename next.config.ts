import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment (bundles only required files)
  output: "standalone",
  eslint: {
    // ESLint runs separately in CI; skip during next build to avoid module path issues
    ignoreDuringBuilds: true,
  },
  images: {
    // Allow the local /images/ directory served from public/
    unoptimized: false,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "**.cloud.appwrite.io",
      },
      {
        protocol: "https",
        hostname: "sdmntprnorthcentralus.oaiusercontent.com",
      },
      {
        protocol: "https",
        hostname: "sdmntprwestus2.oaiusercontent.com", // ✅ Added
      },
      {
      protocol: 'https',
        hostname: 'sdmntpreastus.oaiusercontent.com',
      },
    ],
  },
};

export default nextConfig;

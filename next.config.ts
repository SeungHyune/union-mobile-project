import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "angkorchat-bucket.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

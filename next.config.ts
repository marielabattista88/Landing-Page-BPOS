import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only on-screen indicator (route-loading spinner).
  // Build/runtime errors are still surfaced. No effect in production.
  devIndicators: false,
};

export default nextConfig;

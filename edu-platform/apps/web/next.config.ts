import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@edu-platform/core",
    "@edu-platform/infrastructure",
  ],
};

export default config;
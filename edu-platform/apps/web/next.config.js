/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@edu-platform/core",
    "@edu-platform/infrastructure",
  ],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@edu-platform/core": require.resolve("../../packages/core/src/index.ts"),
      "@edu-platform/infrastructure": require.resolve("../../packages/infrastructure/src/index.ts"),
    };
    return config;
  },
};

module.exports = nextConfig;
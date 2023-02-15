/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "api.isocks.ai"],
    loader: "custom",
  },
};

module.exports = nextConfig;

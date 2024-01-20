/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "api.isocks.ai",
      "bscscan.com",
      "www.defitigertoken.com",
    ],
  },
};

module.exports = nextConfig;

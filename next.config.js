/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["robohash.org"],
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["https://robohash.org"],
//   },
// };

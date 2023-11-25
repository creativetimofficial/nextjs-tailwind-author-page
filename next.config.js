/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/nextjs-tailwind-author-page/",
  basePath: "/nextjs-tailwind-author-page",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

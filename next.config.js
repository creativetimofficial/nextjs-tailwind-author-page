/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/nextjs-tailwind-author-page/",
  basePath: "/nextjs-tailwind-author-page",
};

module.exports = nextConfig;

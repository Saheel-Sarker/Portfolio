import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com', 'cdn.shopify.com', 'res.cloudinary.com', 'upload.wikimedia.org','cdn.jsdelivr.net'],
  },
  output: 'export',
  basePath: "/Portfolio",
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add any external domains if you use Cloudinary/S3 etc.
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'github.com', 'raw.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Disable ESLint during builds
  eslint: {
    // Warning: this will completely disable ESLint during builds
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

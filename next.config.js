/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable Tailwind since we're using custom CSS
  trailingSlash: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { serverActions: true },
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ]
  },
};

module.exports = nextConfig;

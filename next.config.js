/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/bookings': { page: '/bookings' },
      '/bookings/coaching': { page: '/bookings/coaching' },
      '/bookings/hosting': { page: '/bookings/hosting' },
      '/bookings/keynotes': { page: '/bookings/keynotes' },
      '/bookings/lecture': { page: '/bookings/lecture' },
      '/bookings/training': { page: '/bookings/training' },
      '/bookings/coaching/checkout': { page: '/bookings/coaching/checkout' },
      '/bookings/coaching/checkout/submit-script': { page: '/bookings/coaching/checkout/submit-script' },
      '/bookings/coaching/checkout/submit-video': { page: '/bookings/coaching/checkout/submit-video' },
    }
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Konfigurasi untuk domain pertama (sudah benar)
        protocol: 'https',
        hostname: 'media.21cineplex.com',
        port: '',
        pathname: '/webcontent/gallery/pictures/**',
      },
      {
        // --- TAMBAHKAN BLOK INI ---
        // Konfigurasi untuk domain baru dari Google
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**', // Izinkan semua path dari domain ini
      },
      {
        // --- TAMBAHKAN BLOK INI ---
        // Konfigurasi untuk domain baru dari Google
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**', // Izinkan semua path dari domain ini
      },
      {
        // --- TAMBAHKAN BLOK INI ---
        // Konfigurasi untuk domain baru dari Google
        protocol: 'https',
        hostname: 'cdn1-production-images-kly.akamaized.net',
        port: '',
        pathname: '/**', // Izinkan semua path dari domain ini
      },
      {
        // --- TAMBAHKAN BLOK INI ---
        // Konfigurasi untuk domain baru dari Google
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**', // Izinkan semua path dari domain ini
      },
      {
        // --- TAMBAHKAN BLOK INI ---
        // Konfigurasi untuk domain baru dari Google
        protocol: 'https',
        hostname: 'gpu.id',
        port: '',
        pathname: '/**', // Izinkan semua path dari domain ini
      },
    ],
  },
};

export default nextConfig;

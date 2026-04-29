/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Aktifkan optimasi gambar bawaan Next.js (lebih baik untuk produksi)
    // Ganti ke 'true' hanya jika deploy ke platform yang tidak support Image Optimization
    unoptimized: false,
  },
}

export default nextConfig

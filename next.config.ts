/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Mengaktifkan Mode Export Statis
  output: 'export',

  // 2. Penting! Karena kita export offline, fitur optimasi gambar bawaan Next.js 
  // (yang butuh server) harus dimatikan agar gambar di folder /public tetap muncul.
  images: {
    unoptimized: true,
  },

  // 3. (Opsional) Jika nanti kamu ingin meletakkannya di sub-folder tertentu 
  // (misal: javawsthu.com/project-bib/), tambahkan basePath di sini.
  // basePath: '/project-bib',
};

export default nextConfig;
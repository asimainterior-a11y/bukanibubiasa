'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/sections/Navbar';

// Menghasilkan 15 data foto secara dinamis dengan format g1.jpg, dst.
const generateGalleryItems = (count: number) => {
  const titles = [
    "Sesi Healing Mental", "Lingkaran Kepercayaan", "Workshop Self-Love", 
    "Praktik Mindfulness", "Perempuan Berdaya", "Refleksi Malam",
    "Diskusi Panel", "Terapi Seni", "Koneksi Hati", 
    "Meditasi Pagi", "Berbagi Cerita", "Harmoni Jiwa",
    "Senyum Kebahagiaan", "Dukungan Komunitas", "Cahaya Aura"
  ];

  const categories = [
    "Wellness", "Community", "Empowerment", "Mental Health", "Networking", "Spiritual"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    // Gunakan judul spesifik jika ada, jika tidak gunakan judul generik
    title: titles[i] || `Event Moment ${i + 1}`,
    // Pilih kategori secara acak agar bervariasi
    category: categories[Math.floor(Math.random() * categories.length)],
    // Source image sesuai format g1.jpg, g2.jpg, dst.
    // Pastikan file-file ini ada di folder public/
    src: `/g${i + 1}.jpg` 
  }));
};

const galleryItems = generateGalleryItems(15);

export default function GalleryPage() {
  return (
    <main className="bg-[#4d0000] min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-modern text-[#bf953f] text-[10px] tracking-[0.5em] uppercase mb-4 block"
            >
              Visual Journey
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-classic text-5xl md:text-7xl text-[#fcf6ba] mb-6 drop-shadow-2xl"
            >
              The <span className="italic opacity-60 text-[#bf953f]">Aura</span> Gallery
            </motion.h1>
            <div className="h-[1px] w-24 bg-[#bf953f] mx-auto mt-8 opacity-40" />
            <p className="font-modern text-stone-300 max-w-xl mx-auto font-normal opacity-80 uppercase tracking-widest text-[10px] mt-6">
              Momen-momen berharga dalam perjalanan Mental Healing dan pemberdayaan perempuan muslimah.
            </p>
          </header>

          {/* Grid Gallery - 15 Foto */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                {/* Frame Luxury */}
                <div className="relative p-3 bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#b38728] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500">
                  <div className="relative overflow-hidden aspect-[4/5] bg-[#3d0000]">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4d0000]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="font-modern text-[#bf953f] text-[9px] tracking-[0.3em] uppercase mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-classic text-[#fcf6ba] text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Corner Accent Decor */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#fcf6ba]/50" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#fcf6ba]/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-[#bf953f]/10 mt-20">
        <p className="font-modern text-[#fcf6ba]/40 text-[10px] tracking-[0.3em] uppercase">
          © 2026 BUKAN IBU BIASA • JAVAWSTHU STUDIO
        </p>
      </footer>
    </main>
  );
}
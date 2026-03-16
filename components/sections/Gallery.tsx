'use client';

import { motion } from 'framer-motion';

// Fungsi untuk menentukan ukuran kotak bento secara dinamis agar variatif
const getBentoSize = (index: number) => {
  const sizes = [
    'md:col-span-2 md:row-span-2', // Besar (Utama)
    'md:col-span-1 md:row-span-1', // Kotak Kecil
    'md:col-span-1 md:row-span-2', // Tinggi
    'md:col-span-2 md:row-span-1', // Lebar
    'md:col-span-1 md:row-span-1', // Kotak Kecil
  ];
  return sizes[index % sizes.length];
};

const images = Array.from({ length: 15 }, (_, i) => ({
  src: `/g${i + 1}.jpg`,
  label: [
    "Sesi Deep Healing", "Ratusan Peserta", "Diskusi Interaktif", 
    "Momentum Kebangkitan", "Umi Oka & Alumni", "Inner Child Journey",
    "Self Love Workshop", "Spiritual Connection", "Harmony in Banjar",
    "Mindfulness Practice", "Women Empowerment", "Circle of Trust",
    "Ciamis Gathering", "Pangandaran Retreat", "Momen Transformasi"
  ][i] || `Dokumentasi ${i + 1}`,
  size: getBentoSize(i)
}));

export default function GallerySection() {
  return (
    <section className="py-24 px-6 bg-[#4d0011]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-modern text-[#bf953f] tracking-[0.4em] uppercase text-xs mb-4"
          >
            Dokumentasi Kegiatan
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-classic text-4xl md:text-5xl text-[#fcf6ba] mb-6"
          >
            Jejak Langkah Pemulihan
          </motion.h2>
          <div className="h-[1px] w-12 bg-[#bf953f] mx-auto mb-8 opacity-50" />
        </div>

        {/* Bento Grid Gallery (15 Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 5) * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative group overflow-hidden border-2 border-[#bf953f]/30 shadow-2xl ${img.size}`}
            >
              {/* Luxury Corner Decor */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#fcf6ba]/40 z-10" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#fcf6ba]/40 z-10" />

              {/* Image with Luxury Filter */}
              <img 
                src={img.src} 
                alt={img.label}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/600x800/660000/fcf6ba?text=Momen+${index + 1}`;
                }}
              />
              
              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4d0011] via-[#4d0011]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="font-modern text-[#bf953f] text-[8px] tracking-[0.3em] uppercase mb-1">
                  Bukan Ibu Biasa
                </span>
                <p className="font-classic text-[#fcf6ba] text-sm md:text-base tracking-widest uppercase">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Tambahan & Location Path */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="flex items-center w-full max-w-4xl opacity-40">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#bf953f]" />
            <p className="mx-6 font-modern text-[9px] text-[#fcf6ba] uppercase tracking-[0.4em] whitespace-nowrap">
              Priangan Timur Journey
            </p>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#bf953f]" />
          </div>
          <p className="font-modern text-stone-400 text-[10px] uppercase tracking-[0.2em]">
            Banjar • Ciamis • Tasikmalaya • Pangandaran • Garut
          </p>
        </div>
      </div>
    </section>
  );
}
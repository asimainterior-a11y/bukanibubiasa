'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Gem, Medal } from 'lucide-react';
import Link from 'next/link'; // Import Link

const packages = [
  {
    name: 'SILVER',
    icon: <Medal className="w-8 h-8 text-stone-300" />,
    features: ['Logo di Backdrop', 'Sertifikat Apresiasi', 'Social Media Shoutout'],
    color: 'border-stone-400'
  },
  {
    name: 'PLATINUM',
    icon: <Crown className="w-12 h-12 text-[#fcf6ba]" />,
    features: [
      'Logo Utama di Semua Media',
      'Booth VIP di Lokasi Event',
      'Slot Presentasi Produk',
      'Branding di Video Recap',
      'Database Peserta (Sesuai GDPR)'
    ],
    color: 'border-[#bf953f]',
    highlight: true
  },
  {
    name: 'GOLD',
    icon: <Gem className="w-8 h-8 text-[#b38728]" />,
    features: ['Logo di Media Cetak', 'Ad-Lips oleh MC', 'Pemasangan Banner', 'Sampling Produk'],
    color: 'border-[#b38728]'
  }
];

export default function Sponsor() {
  return (
    <section className="py-24 px-6 bg-[#4d0011]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="font-classic text-4xl md:text-5xl mb-4 text-[#fcf6ba]">
            Kemitraan Strategis
          </h2>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto mb-6" />
          <p className="font-modern text-stone-200 max-w-xl mx-auto font-normal opacity-80 uppercase tracking-widest text-[10px]">
            Pilih paket yang paling sesuai dengan visi perusahaan Anda dalam mendukung pemberdayaan perempuan muslimah.
          </p>
        </div>

        {/* Paket Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl border ${pkg.color} bg-black/20 backdrop-blur-sm flex flex-col h-full 
                ${pkg.highlight ? 'md:scale-110 z-10 bg-gradient-to-b from-[#4d0011] to-black/40 shadow-2xl' : ''}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] text-[#4d0011] px-4 py-1 rounded-full text-[9px] font-bold font-modern tracking-tighter">
                  PALING REKOMENDASI
                </div>
              )}

              <div className="mb-6 flex justify-center">{pkg.icon}</div>
              
              <h3 className="font-classic text-2xl text-center mb-2 tracking-widest text-[#fcf6ba]">
                {pkg.name}
              </h3>
              
              <div className="gold-line !my-4 opacity-30" />

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-modern text-[11px] text-stone-100/90 leading-relaxed uppercase tracking-wider">
                    <Check className="w-3.5 h-3.5 text-[#bf953f] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Link ke halaman Sponsorship Form */}
              <Link href="/sponsorship" className="block w-full">
                <button className={`w-full py-3.5 rounded-lg font-modern font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300
                  ${pkg.highlight 
                    ? 'bg-gradient-to-r from-[#bf953f] to-[#b38728] text-[#4d0011] hover:shadow-[0_0_25px_rgba(191,149,63,0.4)]' 
                    : 'border border-[#bf953f]/50 text-[#fcf6ba] hover:bg-[#bf953f] hover:text-[#4d0011]'}`}>
                  PILIH PAKET
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
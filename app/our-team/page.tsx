'use client';

import Navbar from '../../components/sections/Navbar';
import TeamSection from '../../components/sections/Team';
import { motion } from 'framer-motion';

export default function OurTeamPage() {
  return (
    <main className="relative bg-[#8b0000] min-h-screen text-white">
      {/* 1. Navigasi Tetap Konsisten */}
      <Navbar />

      {/* 2. Hero Section Khusus Team */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        {/* Aksen Background Emas Tipis */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(191,149,63,0.05)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-classic text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-[#fcf6ba]">Legacy</span>
            </h1>
            <p className="font-modern text-[#fcf6ba]/60 uppercase tracking-[0.5em] text-[10px] md:text-xs">
              Para Penggerak Perubahan di Bukan Ibu Biasa
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="h-[1px] w-12 bg-[#bf953f]/50" />
              <div className="w-2 h-2 rotate-45 border border-[#bf953f]" />
              <div className="h-[1px] w-12 bg-[#bf953f]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Menampilkan Skema Tim Inti */}
      <div className="pb-24">
        <TeamSection />
      </div>

      {/* 4. Footer Eksklusif */}
      <footer className="py-12 text-center border-t border-[#bf953f]/10 mt-20">
        <p className="font-modern text-[#fcf6ba]/40 text-[10px] tracking-[0.3em] uppercase">
          © 2026 BUKAN IBU BIASA • JAVAWSTHU STUDIO
        </p>
      </footer>
    </main>
  );
}
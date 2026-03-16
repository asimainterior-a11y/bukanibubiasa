'use client';

import Navbar from '../../components/sections/Navbar';
import SponsorshipForm from '../../components/sections/SponsorshipForm';
import { motion } from 'framer-motion';

export default function SponsorshipPage() {
    return (
    <main className="relative bg-[#8b0000] min-h-screen text-white">
      {/* 1. Navbar tetap di atas */}
      <Navbar />

      {/* 2. Hero Mini khusus Sponsorship (Opsional untuk memperkuat pesan) */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           <div className="bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] text-[#4d0000] px-5 py-0.5 rounded-none font-bold uppercase tracking-[0.1em] flex items-center gap-1 shadow-xl transition-all duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 3. Load Form Sponsorship Utama */}
      <div className="pb-24">
        <SponsorshipForm />
      </div>

      {/* 4. Footer Sederhana khusus Landing Page ini */}
      <footer className="py-12 text-center border-t border-[#bf953f]/10 mt-20">
        <p className="font-modern text-[#fcf6ba]/40 text-[10px] tracking-[0.3em] uppercase">
          © 2026 BUKAN IBU BIASA • JAVAWSTHU STUDIO
        </p>
      </footer>
    </main>
  );
}
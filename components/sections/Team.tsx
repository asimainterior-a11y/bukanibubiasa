'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';

const teamMembers = [
  { id: '01', name: "Desy Triyanti S.Ds", role: "Visionary Leader", division: "Ketua" },
  { id: '02', name: "Maya Hermayanti", role: "System Architect", division: "Sekretaris" },
  { id: '03', name: "Renti Agus Mawar Rianti", role: "Financial Strategist", division: "Bendahara" },
  { id: '04', name: "Haryati Nuryuliati", role: "Experience Director", division: "Acara" },
  { id: '05', name: "Iis Setiawati", role: "Gercep Movement", division: "Dekorasi" },
  { id: '06', name: "Senny Prasasti", role: "Catering Management", division: "Konsumsi" },
  { id: '07', name: "Siska Permata Indah", role: "Visual Storyteller", division: "Dokumentasi" },
  { id: '08', name: "Tim BIB Pusat", role: "The Backbone", division: "Satgas Dalam" },
];

export default function TeamPage() {
  return (
    <main className="bg-[#4d0000] min-h-screen selection:bg-[#bf953f] selection:text-white">
      <Navbar />

      {/* 1. SINGLE MASSIVE BANNER SECTION */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
{/* Foto Seluruh Panitia */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/team/all3.png" 
            alt="Bukan Ibu Biasa Team"
            className="w-full h-full object-cover"
            // Menggunakan style inline untuk kontrol posisi yang presisi
            style={{ objectPosition: 'center 5%' }} 
          />
          {/* Elegant Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4d0000] via-[#4d0000]/20 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="font-modern text-[#bf953f] text-xs tracking-[0.8em] uppercase block mb-4">
              The Collective Force
            </span>
            <h1 className="font-classic text-7xl md:text-9xl text-[#fcf6ba] leading-none">
              Team <br /> <span className="text-gold italic">Creative.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. LIST PANITIA (MINIMALIST) */}
      <section className="py-24 px-6 relative bg-[#4d0000]">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-2">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group py-6 border-b border-[#bf953f]/10 flex justify-between items-center hover:bg-white/[0.02] transition-all px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="font-modern text-[#bf953f]/30 text-[10px] group-hover:text-[#bf953f] transition-colors">
                    {member.id}
                  </span>
                  <div>
                    <h3 className="font-classic text-xl text-[#fcf6ba] mb-0.5 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="font-modern text-[#bf953f] text-[9px] uppercase tracking-[0.2em] font-bold">
                      {member.division}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="font-modern text-white/20 text-[8px] uppercase tracking-widest italic">
                     {member.role}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-32 text-center max-w-2xl mx-auto">
             <div className="gold-line !my-12 opacity-50" />
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="font-classic italic text-[#fcf6ba]/60 text-lg leading-relaxed"
             >
                "Muslimah bersatu membangun kebahagiaan utuh menjaga kesehatan mental jiwa raga penuh cinta dan keberkahan bersama."
             </motion.p>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center">
        <p className="font-modern text-[#fcf6ba]/10 text-[9px] tracking-[1.5em] uppercase">
          © 2026 BUKAN IBU BIASA
        </p>
      </footer>
    </main>
  );
}
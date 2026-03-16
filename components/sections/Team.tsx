'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  { id: '01', name: "Desy Triyanti S.Ds", role: "Visionary Leader", division: "Ketua", size: "large" },
  { id: '02', name: "Maya Hermayanti", role: "System Architect", division: "Sekretaris", size: "medium" },
  { id: '03', name: "Renti Agus Mawar Rianti", role: "Financial Strategist", division: "Bendahara", size: "medium" },
  { id: '04', name: "Haryati Nuryuliati", role: "Experience Director", division: "Acara", size: "small" },
  { id: '05', name: "Feni Gindasuci", role: "Space & Visual Designer", division: "Dekorasi", size: "small" },
  { id: '06', name: "Senny Prasasti", role: "Catering Management", division: "Konsumsi", size: "small" },
  { id: '07', name: "Siska Permata Indah", role: "Visual Storyteller", division: "Dokumentasi", size: "small" },
  { id: '08', name: "Anih Hidayatul Kamilah", role: "Technical Operator", division: "Operator", size: "small" },
  { id: '09', name: "Tim BIB Pusat", role: "The Backbone", division: "Satgas Dalam", size: "small" },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#4d0000] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header ala Majalah Fashion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="relative">
            <span className="font-modern text-[#bf953f] text-[10px] tracking-[0.5em] uppercase block mb-2">The People Behind</span>
            <h2 className="font-classic text-6xl md:text-8xl text-[#fcf6ba] leading-none">
              Creative <br /> <span className="ml-12 md:ml-24 italic opacity-50 text-white">Minds.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="font-modern text-red-200/50 text-xs leading-relaxed uppercase tracking-widest text-right md:text-left">
              Kolektif perempuan berdaya yang merancang pengalaman, bukan sekadar acara.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 auto-rows-[250px] gap-4">
          
          {teamMembers.map((member, index) => {
            // Logika Nama Depan untuk File Foto: "Desy Triyanti" -> "desy"
            const firstName = member.name.split(' ')[0].toLowerCase();
            const imagePath = `/team/${firstName}.jpg`;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative group overflow-hidden bg-black border border-white/5 
                  ${member.size === 'large' ? 'lg:col-span-6 lg:row-span-2' : 
                    member.size === 'medium' ? 'lg:col-span-3 lg:row-span-2' : 
                    'lg:col-span-3 lg:row-span-1'}`}
              >
                {/* Background Number (Watermark) */}
                <span className="absolute -right-4 -bottom-8 font-classic text-[12rem] text-white/5 pointer-events-none group-hover:text-[#bf953f]/10 transition-colors duration-700 z-20">
                  {member.id}
                </span>

                {/* FOTO TEAM */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={imagePath} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                    onError={(e) => {
                      // Fallback jika foto belum ada
                      e.currentTarget.src = `https://placehold.co/600x800/2a0009/bf953f?text=${firstName}`;
                    }}
                  />
                  {/* Overlay Gradient agar teks terbaca */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a0009] via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-30">
                  <div className="flex justify-between items-start">
                    <span className="text-[#bf953f] font-modern text-[10px] tracking-[0.3em] uppercase bg-[#2a0009]/50 backdrop-blur-md px-2 py-1">
                      {member.division}
                    </span>
                    <div className="w-8 h-[1px] bg-[#bf953f]/50 mt-2" />
                  </div>
                  
                  <div>
                    <h3 className={`font-classic text-[#fcf6ba] leading-tight mb-1 drop-shadow-lg
                      ${member.size === 'large' ? 'text-3xl md:text-5xl' : 'text-xl'}`}>
                      {member.name}
                    </h3>
                    <p className="font-modern text-white/60 text-[9px] uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Hover Line Effect */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#bf953f] group-hover:w-full transition-all duration-700 z-40" />
              </motion.div>
            );
          })}

        </div>

        {/* Decorative Text Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8 flex justify-between items-center">
          <span className="font-modern text-[9px] text-white/20 uppercase tracking-[1em]">Collaboration 2026</span>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#bf953f]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
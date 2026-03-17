'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, UserCheck, GraduationCap } from 'lucide-react';

const expertise = [
  { 
    icon: <GraduationCap className="w-5 h-5" />, 
    title: "Expert Trainer", 
    desc: "Latar belakang S.Pd dengan kemampuan pedagogis yang aplikatif." 
  },
  { 
    icon: <Sparkles className="w-5 h-5" />, 
    title: "Professional Therapist", 
    desc: "Sertifikasi CH & CHt untuk intervensi psikologis & healing." 
  },
  { 
    icon: <Heart className="w-5 h-5" />, 
    title: "Sentuhan Hati", 
    desc: "Mengintegrasikan psikologi terapan dengan nilai spiritual Al-Qur'an." 
  },
  { 
    icon: <UserCheck className="w-5 h-5" />, 
    title: "Experienced Mentor", 
    desc: "Telah membimbing ratusan alumni dari berbagai kota di Indonesia." 
  },
];

export default function Speaker() {
  return (
    <section className="py-24 px-6 bg-[#4d0011] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf953f]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* KOLOM KIRI: FOTO PROFIL */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
          
          {/* Bingkai Emas Dekoratif */}
            <div className="relative z-10 rounded-2xl border-2 border-[#bf953f] p-3 backdrop-blur-sm shadow-[0_0_30px_rgba(191,149,63,0.2)]">
              <div className="aspect-[3/4] bg-stone-800 rounded-lg overflow-hidden relative group">
                
                {/* Foto Pembicara */}
                <img 
                  src="/speaker.png" 
                  alt="Umi Oka Elhijra"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradasi agar teks di bawah terbaca jika foto terang */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0009]/80 via-transparent to-transparent opacity-60" />
                
                {/* Efek Cahaya (Glow) saat Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#bf953f]/20 to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Ornamen Belakang Foto */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#bf953f]/30 rounded-2xl -z-0" />
          </motion.div>

          {/* KOLOM KANAN: BIODATA */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 className="font-modern text-[#bf953f] tracking-[0.3em] uppercase text-sm mb-4">
              Narasumber Utama
            </h4>
            
            <h2 className="font-classic text-4xl md:text-5xl text-[#fcf6ba] mb-2 leading-tight">
              Umi Oka Elhijra
            </h2>
            <p className="font-modern text-stone-300 text-lg mb-8 italic opacity-90">
              (Hj. Siti Aisyah Qomariah, S.Pd., CH., CHt. CEFT.)
            </p>

            <div className="gold-line !my-6 opacity-50" />

            <p className="font-modern text-stone-100 leading-relaxed mb-10 opacity-80">
              Pencetus sekaligus penggerak komunitas <strong>'Bukan Ibu Biasa'</strong>. Beliau mendedikasikan diri pada pemulihan emosional muslimah, menyelaraskan kesehatan mental dengan tuntunan Syariat.
            </p>

{/* Grid Kepakaran */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {expertise.map((item, index) => (
    <div key={index} className="flex gap-4">
      <div className="mt-1 text-[#bf953f] shrink-0">
        {item.icon}
      </div>
      <div>
        <h5 className="font-classic text-[#fcf6ba] text-sm tracking-wide mb-1 uppercase">
          {item.title}
        </h5>
        <p className="font-modern text-xs text-stone-400 leading-snug">
          {item.desc} {/* SEBELUMNYA: item.item.desc */}
        </p>
      </div>
    </div>
  ))}
</div>

            {/* Peran dalam Kegiatan */}
            <div className="mt-12 p-6 bg-black/20 rounded-xl border border-[#bf953f]/20">
              <h5 className="font-classic text-[#fcf6ba] mb-4 text-center tracking-widest text-xs uppercase">
                Peran Dalam Training
              </h5>
              <div className="flex justify-around text-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-modern text-[10px] text-stone-400 uppercase tracking-tighter">Fasilitator</span>
                </div>
                <div className="w-[1px] h-4 bg-[#bf953f]/30 self-center" />
                <div className="flex flex-col items-center">
                  <span className="font-modern text-[10px] text-stone-400 uppercase tracking-tighter">Therapist</span>
                </div>
                <div className="w-[1px] h-4 bg-[#bf953f]/30 self-center" />
                <div className="flex flex-col items-center">
                  <span className="font-modern text-[10px] text-stone-400 uppercase tracking-tighter">Mentor</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
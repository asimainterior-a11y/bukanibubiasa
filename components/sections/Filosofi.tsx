'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const philosophyData = [
  {
    title: "Training Class",
    desc: "Ruang belajar aktif melalui proses simulasi, refleksi, dan terapi (workshop-based) untuk hasil yang transformatif.",
    icon: "◈"
  },
  {
    title: "Spesial Muslimah",
    desc: "Wadah eksklusif yang memahami sensitivitas emosional perempuan, diselaraskan dengan akidah dan nilai Islami.",
    icon: "◈"
  },
  {
    title: "'Bukan Ibu Biasa'",
    desc: "Menjadi sosok yang 'berdamai' dengan diri sendiri demi menggapai kebahagiaan hakiki, untuk semua orang di sekitar.",
    icon: "◈"
  }
];

export default function Filosofi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pastikan elemen terlihat dulu sebelum animasi (safety net)
    gsap.set([".philosophy-header", ".philosophy-card"], { opacity: 1 });

    // Animasi Header Section
    gsap.from(".philosophy-header", {
      scrollTrigger: {
        trigger: ".philosophy-header",
        start: "top 90%", // Muncul lebih awal
        toggleActions: "play pause resume reset"
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    });

    // Animasi Kartu Filosofi
    gsap.from(".philosophy-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out"
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="filosofi" 
      className="relative py-24 lg:py-32 bg-[#4d0011] overflow-hidden"
    >
      {/* Background Ornaments - Z-INDEX 0 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bf953f]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#bf953f]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="philosophy-header text-center mb-24">
          <h4 className="font-modern text-[#bf953f] tracking-[0.4em] uppercase text-xs mb-4">
            FILOSOFI PERGERAKAN
          </h4>
          <h2 className="font-classic text-4xl md:text-6xl text-[#fcf6ba] italic mb-8">
            Saatnya Kita Bertindak
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto mb-8" />
          <p className="font-modern text-stone-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base opacity-90">
            Nama <span className="text-[#fcf6ba] font-bold">"Bukan Ibu Biasa"</span> membawa misi bagi perempuan yang ingin melampaui standar kapasitas mental dan spiritual.
          </p>
        </div>

        {/* PHILOSOPHY CARDS */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20"
        >
          {philosophyData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="philosophy-card group p-10 rounded-3xl border border-[#bf953f]/20 bg-[#5a0b1c]/40 backdrop-blur-xl transition-all duration-500 hover:border-[#bf953f]/60 shadow-xl"
            >
              <div className="text-[#bf953f] text-2xl mb-6 flex justify-center md:justify-start">
                {item.icon}
              </div>
              <h3 className="font-classic text-[#fcf6ba] text-2xl mb-4 italic text-center md:text-left">
                {item.title}
              </h3>
              <p className="font-modern text-stone-300/80 text-sm leading-relaxed text-center md:text-left group-hover:text-stone-100 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* QUOTE BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-[#bf953f]/20 blur-2xl rounded-full opacity-30" />
          <div className="relative bg-[#3d000d] border border-[#bf953f]/30 p-12 rounded-[2rem] text-center shadow-2xl">
            <h4 className="font-classic text-[#fcf6ba] text-2xl md:text-4xl italic mb-6 leading-tight">
              "Selesai dengan Diri Sendiri"
            </h4>
            <p className="font-modern text-[#fcf6ba]/60 italic text-xs md:text-sm tracking-widest uppercase">
              Dasar Utama Madrasatul Ula
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
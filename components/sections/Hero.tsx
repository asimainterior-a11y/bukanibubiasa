'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const line1 = "BUKAN IBU";
  const line2 = "BIASA.";
  const [mounted, setMounted] = useState(false);

  const morphPaths = [
    "M-50,0 C-50,-30 -20,-50 0,-50 C20,-50 50,-30 50,0 C50,30 20,50 0,50 C-20,50 -50,30 -50,0",
    "M-50,0 C-50,-40 -10,-40 10,-50 C30,-60 60,-30 50,10 C40,50 10,60 -20,50 C-50,40 -50,30 -50,0",
    "M-50,0 C-60,-20 -30,-60 0,-50 C30,-40 50,-60 60,-10 C70,40 30,50 0,60 C-30,70 -40,20 -50,0"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted || !titleRef.current) return;

    const chars = titleRef.current.querySelectorAll('.char');
    
    gsap.set(chars, { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      display: 'inline-block'
    });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
    });

    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      opacity: 0,
    });

  }, { scope: container, dependencies: [mounted] });

  if (!mounted) return <div className="min-h-screen bg-[#4d0011]" />;

  return (
    <section 
      ref={container}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#4d0011] overflow-hidden"
    >
      {/* LAYER 1: MORPHING BLOB (Latar Belakang Cahaya) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
        <svg viewBox="-100 -100 200 200" className="w-[100%] h-[100%] blur-[100px]">
          <defs>
            <radialGradient id="goldGradient">
              <stop offset="0%" stopColor="#fcf6ba" />
              <stop offset="100%" stopColor="#bf953f" />
            </radialGradient>
          </defs>
          <motion.path
            d={morphPaths[0]}
            fill="url(#goldGradient)"
            animate={{ d: morphPaths }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* LAYER 2: OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[5] pointer-events-none" />

      {/* LAYER 3: KONTEN UTAMA */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center pt-20">
        
        {/* 1. SUBTITLE */}
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.6, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5 }}
          className="font-classic text-[#fcf6ba] text-[10px] md:text-xs mb-6 uppercase"
        >
          Gerakan Pemulihan & Pemberdayaan
        </motion.p>

        {/* 2. JUDUL UTAMA (Dua Baris) */}
        <h1 
          ref={titleRef}
          className="font-classic flex flex-col items-center select-none leading-[0.85] relative z-20 mb-10"
          style={{
            color: '#fcf6ba',
            textShadow: '0 10px 40px rgba(0,0,0,0.8)',
          }}
        >
          {/* Baris 1: BUKAN IBU */}
          <span className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tight overflow-hidden">
            {line1.split("").map((char, i) => (
              <span key={`l1-${i}`} className="char whitespace-pre inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          {/* Baris 2: BIASA */}
          <span className="text-6xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter overflow-hidden">
            {line2.split("").map((char, i) => (
              <span key={`l2-${i}`} className="char whitespace-pre inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        {/* 3. DESKRIPSI SINGKAT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-modern text-stone-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Mengubah luka masa lalu menjadi kekuatan tak terbatas. Kami merangkul perempuan muslimah untuk pulih, bangkit, dan berdaya dalam bingkai syariah.
        </motion.p>

{/* 4. TOMBOL AKSI */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* LINK KE SPONSORSHIP (DUKUNG) */}
          <Link href="/sponsorship">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(191, 149, 63, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full overflow-hidden shadow-2xl w-full md:w-auto"
            >
              <span className="relative z-10 font-modern text-[#4d0011] font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                Dukung Kemitraan
              </span>
              <div className="absolute top-0 -left-full w-full h-full bg-white/30 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out" />
            </motion.button>
          </Link>

          {/* LINK KE REGISTRASI (GABUNG) */}
          <Link href="/registrasi">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              whileHover={{ backgroundColor: "rgba(252, 246, 186, 0.1)", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-[#bf953f]/50 rounded-full backdrop-blur-sm transition-colors duration-300 w-full md:w-auto"
            >
              <span className="font-modern text-[#fcf6ba] font-medium text-xs md:text-sm uppercase tracking-[0.2em]">
                Gabung Kami
              </span>
            </motion.button>
          </Link>
        </div>


        {/* 5. FOOTER HERO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.2 }}
          className="mt-16 font-modern text-stone-300 text-[10px] md:text-xs italic tracking-widest"
        >
          Bersama Merajut Harapan dalam Bingkai Syariah
        </motion.p>

      </div>
    </section>
  );
}
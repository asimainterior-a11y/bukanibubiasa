'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Helper untuk menampilkan loading sederhana jika komponen masih dimuat
const LoadingSection = () => (
  <div className="h-20 w-full flex items-center justify-center text-[#fcf6ba]/20 animate-pulse">
    Memuat Bagian...
  </div>
);

// Impor semua komponen dengan SSR false untuk keamanan GSAP & Framer Motion
const Navbar = dynamic(() => import('../components/sections/Navbar'), { ssr: false, loading: () => <div className="h-16 bg-[#4d0011]" /> });
const Hero = dynamic(() => import('../components/sections/Hero'), { ssr: false, loading: () => <div className="h-screen bg-[#4d0011]" /> });
const Introduction = dynamic(() => import('../components/sections/Introduction'), { ssr: false, fallback: <LoadingSection /> } as any);
const News = dynamic(() => import('../components/sections/News'), { ssr: false, fallback: <LoadingSection /> } as any);
const Filosofi = dynamic(() => import('../components/sections/Filosofi'), { ssr: false, fallback: <LoadingSection /> } as any);
const Events = dynamic(() => import('../components/sections/Events'), { ssr: false, fallback: <LoadingSection /> } as any);
const Speaker = dynamic(() => import('../components/sections/Speaker'), { ssr: false, fallback: <LoadingSection /> } as any);
const Gallery = dynamic(() => import('../components/sections/Gallery'), { ssr: false, fallback: <LoadingSection /> } as any);
const Sponsor = dynamic(() => import('../components/sections/Sponsor'), { ssr: false, fallback: <LoadingSection /> } as any);

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-[#4d0011] overflow-x-hidden">
      <Navbar /> 
      
      <div id="hero">
        <Hero />
      </div>

      <div id="introduction">
        <Introduction />
      </div>

      <div id="introduction">
        <News />
      </div>

      <div id="filosofi">
        <Filosofi />
      </div>

      <div id="events">
        <Events />
      </div>

      <div id="speaker">
        <Speaker />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="sponsor">
        <Sponsor />
      </div>

      <footer className="py-12 text-center border-t border-[#bf953f]/10 mt-20">
        <p className="font-modern text-[#fcf6ba]/40 text-[10px] tracking-[0.3em] uppercase">
          © 2026 BUKAN IBU BIASA • JAVAWSTHU STUDIO
        </p>
      </footer>
    </main>
  );
}
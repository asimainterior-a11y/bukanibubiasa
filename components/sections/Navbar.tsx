'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
  { id: 'our-team', label: 'Our Team', href: '/our-team' },
  { id: 'registrasi', label: 'Gabung', href: '/registrasi' },
  { id: 'sponsorship', label: 'Dukung', href: '/sponsorship' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Auto-sync kursor emas dengan URL aktif
  useEffect(() => {
    const currentPath = navLinks.find(link => 
      link.href === pathname || (link.href !== '/' && pathname.startsWith(link.href))
    );
    if (currentPath) {
      setActiveTab(currentPath.id);
    } else {
      setActiveTab('home');
    }
  }, [pathname]);

  return (
    <nav className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4">
      {/* --- DESKTOP NAVIGATOR --- */}
      <div className="hidden md:block relative p-[1px] rounded-full bg-gradient-to-r from-transparent via-[#bf953f]/50 to-transparent">
        <div className="bg-[#2a0009]/90 backdrop-blur-xl rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl border border-white/5 relative">
          
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="relative px-6 py-2 transition-all duration-300 group z-10 text-center flex items-center justify-center min-w-[100px]"
            >
              {/* TEKS MENU */}
              <span className={`relative z-20 font-modern text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                activeTab === link.id ? 'text-[#3d000d] font-bold' : 'text-[#fcf6ba]/60 hover:text-[#fcf6ba]'
              }`}>
                {link.label}
              </span>

              {/* KURSOR EMAS DENGAN LAYOUT ID (PRESISI TINGGI) */}
              {activeTab === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] rounded-full z-10 shadow-[0_0_15px_rgba(191,149,63,0.4)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* --- MOBILE NAVIGATOR TRIGGER --- */}
      <div className="md:hidden w-full flex justify-between items-center bg-[#2a0009]/90 backdrop-blur-xl px-6 py-4 rounded-full border border-[#bf953f]/30 shadow-2xl">
        <span className="text-[#bf953f] font-classic italic tracking-widest text-sm uppercase">Bukan Ibu Biasa</span>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-[#fcf6ba] font-modern text-[10px] tracking-widest p-1 focus:outline-none"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 inset-x-4 bg-[#2a0009]/95 backdrop-blur-2xl rounded-3xl border border-[#bf953f]/30 p-8 flex flex-col gap-6 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between group"
              >
                <span className={`font-modern tracking-[0.3em] text-xs uppercase ${
                  activeTab === link.id ? 'text-[#bf953f]' : 'text-[#fcf6ba]/60'
                }`}>
                  {link.label}
                </span>
                <div className={`h-px flex-1 mx-4 transition-all duration-500 ${
                  activeTab === link.id ? 'bg-[#bf953f]' : 'bg-[#bf953f]/10 group-hover:bg-[#bf953f]/40'
                }`} />
                <motion.span 
                  animate={activeTab === link.id ? { x: 5 } : { x: 0 }}
                  className="text-[#bf953f]"
                >
                  →
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
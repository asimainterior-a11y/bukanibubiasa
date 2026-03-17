'use client';

import Navbar from '../../components/sections/Navbar';
import SponsorshipForm from '../../components/sections/SponsorshipForm';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Data Paket Sponsorship berdasarkan persentase anggaran (Rp 19.095.000)
const sponsorshipTiers = [
  {
    name: "Platinum",
    percentage: "100%",
    amount: "Rp 16.195.000",
    desc: "Menjadi mitra utama tunggal yang mendanai seluruh kebutuhan pelaksanaan acara.",
    color: "from-[#e5e4e2] to-[#b4b4b4]", // Platinum Look
    border: "border-[#e5e4e2]/30"
  },
  {
    name: "Gold",
    percentage: "50%",
    amount: "Rp 8.097.500",
    desc: "Menyokong setengah dari kebutuhan operasional dan sarana acara.",
    color: "from-[#bf953f] to-[#fcf6ba]", // Gold Look
    border: "border-[#bf953f]/30"
  },
  {
    name: "Silver",
    percentage: "25%",
    amount: "Rp 4.048.750",
    desc: "Berkontribusi dalam penyediaan fasilitas penunjang untuk peserta.",
    color: "from-[#a8a8a8] to-[#d1d1d1]", // Silver Look
    border: "border-[#a8a8a8]/30"
  }
];

export default function SponsorshipPage() {
  return (
    <main className="relative bg-[#8b0000] min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          
          {/* Judul Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-[#fcf6ba]">
              Paket <span className="italic uppercase">Kemitraan</span>
            </h2>
            <div className="h-0.5 w-24 bg-[#bf953f] mx-auto opacity-50" />
          </motion.div>

          {/* Grid Paket Sponsorship */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-6xl">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl border ${tier.border} bg-black/20 backdrop-blur-sm group hover:bg-black/40 transition-all duration-500`}
              >
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${tier.color} text-[#4d0000] text-[10px] font-bold uppercase tracking-widest mb-4`}>
                  {tier.name} Partner
                </div>
                <h3 className="text-3xl font-serif text-[#fcf6ba] mb-1">{tier.percentage}</h3>
                <p className="text-[#bf953f] font-sans text-xs tracking-widest mb-6 uppercase">Anggaran</p>
                <div className="text-xl font-bold mb-4 text-white/90">{tier.amount}</div>
                <p className="text-white/50 text-[11px] leading-relaxed italic">{tier.desc}</p>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Tombol ke Budget Page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <Link href="/budget">
              <button className="group relative px-8 py-3 overflow-hidden border border-[#fcf6ba]/30 rounded-full transition-all hover:border-[#fcf6ba]">
                <div className="absolute inset-0 bg-[#fcf6ba] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative font-sans text-[10px] uppercase tracking-[0.3em] text-[#fcf6ba] group-hover:text-[#4d0000] flex items-center gap-3">
                  Lihat Detail Anggaran BIB
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </button>
            </Link>
            <p className="mt-4 font-sans text-[9px] uppercase tracking-[0.2em] text-[#fcf6ba]/40">
              Transparansi penuh untuk menjamin akuntabilitas acara
            </p>
          </motion.div>
        </div>
      </section>

      {/* Load Form Sponsorship */}
      <div className="pb-24">
        <SponsorshipForm />
      </div>

      <footer className="py-12 text-center border-t border-[#bf953f]/10 mt-20">
        <p className="font-modern text-[#fcf6ba]/40 text-[10px] tracking-[0.3em] uppercase">
          © 2026 BUKAN IBU BIASA • JAVAWSTHU STUDIO
        </p>
      </footer>
    </main>
  );
}
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const newsImages = [
  { 
    id: 1, 
    title: "Catatan Tahunan Kekerasan Terhadap Perempuan 2025: Angka yang Terus Menjerit.", 
    source: "Komnas Perempuan",
    url: "https://komnasperempuan.go.id/siaran-pers-detail/siaran-pers-komnas-perempuan-peluncuran-catatan-tahunan-kekerasan-terhadap-perempuan-2025" 
  },
  { 
    id: 2, 
    title: "Viral: Istri Diselingkuhi, Malah Dipaksa Meminta Maaf. Dimana Keadilan?", 
    source: "Wolipop Detik",
    url: "https://wolipop.detik.com/wedding-news/d-8316035/viral-kisah-wanita-diselingkuhi-suami-endingnya-malah-dipaksa-minta-maaf" 
  },
  { 
    id: 3, 
    title: "Luka yang Tak Terlihat: Hancurnya Mental Wanita Akibat Dikhianati.", 
    source: "Kumparan",
    url: "https://kumparan.com/shafa-yumna-nurfadila/luka-yang-tak-terlihat-mental-seorang-wanita-yang-diselingkuhi-25WjTlhqCJX" 
  },
  { 
    id: 4, 
    title: "Luka Sunyi Perempuan: Bertahan dalam Kesunyian yang Menyakitkan.", 
    source: "Antara News",
    url: "https://sulteng.antaranews.com/berita/368109/luka-sunyi-perempuan" 
  },
  { 
    id: 5, 
    title: "Poligami & Perselingkuhan: Luka yang Tidak Pernah Benar-benar Sembuh.", 
    source: "Netral News",
    url: "https://www.netralnews.com/poligami-dan-perselingkuhan-luka-yang-tidak-pernah-benar-benar-sembuh/aHNlZFRGMXlCa0tUbmJibTFJbW1WUT09" 
  },
  { 
    id: 6, 
    title: "Dampak Perselingkuhan Orang Tua: Luka Batin yang Menurun ke Anak.", 
    source: "Liputan6",
    url: "https://www.liputan6.com/health/read/5289721/bukan-cuma-sakiti-pasangan-perselingkuhan-orangtua-timbulkan-luka-batin-anak" 
  },
  { 
    id: 7, 
    title: "Realita Pahit: Sudah Dimaafkan, Tapi Tidak Bisa Dilupakan.", 
    source: "Beautynesia",
    url: "https://www.beautynesia.id/life/sudah-dimaafkan-tapi-tidak-bisa-dilupakan-ini-5-realita-pahit-tentang-perselingkuhan/b-313052" 
  }
];

export default function News() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
    if (!marqueeRef.current || !container.current) return;
    
    const marqueeContent = marqueeRef.current;
    // Ambil semua item berita di dalamnya
    const items = marqueeContent.children;
    const totalItems = items.length;
    
    // Timeline utama
    const mainTl = gsap.timeline({
      repeat: -1,
    });

    // Buat animasi per item (Berhenti sebentar - Geser - Berhenti sebentar)
    // Kita asumsikan setiap item tingginya sama
    const itemHeight = items[0].getBoundingClientRect().height;

    for (let i = 1; i <= totalItems; i++) {
      mainTl.to(marqueeContent, {
        y: -itemHeight * i,
        duration: 1.5, // Durasi transisi geser yang smooth
        ease: "power3.inOut",
        delay: 0.5, // WAKTU BERHENTI: Judul akan diam selama 3 detik agar terbaca
      });
    }

    // Reset ke 0 tanpa terlihat saat sampai di akhir (pastikan ada item duplikat di akhir list)
    mainTl.set(marqueeContent, { y: 0 });

    // --- FITUR INTERAKTIF: BERHENTI SAAT HOVER ---
    const onMouseEnter = () => mainTl.pause();
    const onMouseLeave = () => mainTl.play();

    container.current.addEventListener("mouseenter", onMouseEnter);
    container.current.addEventListener("mouseleave", onMouseLeave);

    // Cleanup saat komponen unmount
    return () => {
      container.current?.removeEventListener("mouseenter", onMouseEnter);
      container.current?.removeEventListener("mouseleave", onMouseLeave);
    };

  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative py-24 bg-[#2a0009] overflow-hidden border-y border-[#bf953f]/20"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h2 className="text-[15vw] font-black text-white rotate-90 leading-none">
          SYSTEMIC FAILURE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-[#bf953f] font-modern tracking-[0.4em] text-xs uppercase block">
              Realitas Yang Diam
            </span>
            <h2 className="font-classic text-4xl md:text-7xl text-[#fcf6ba] italic leading-tight">
              Data yang <br /> 
              <span className="text-white not-italic font-bold">Dibungkam.</span>
            </h2>
          </div>
          <p className="text-stone-400 font-modern leading-relaxed max-w-md text-lg opacity-80">
            Dunia melihat Anda sebagai "Ibu Biasa", tapi realita menunjukkan ada luka yang sedang Anda tanggung sendiri.
          </p>
          <div className="pt-10 space-y-6 italic text-[#bf953f]/60 font-classic">
             "Kami mengumpulkan suara-suara yang selama ini hanya berani berbisik di balik pintu rumah."
          </div>
        </motion.div>

        <div className="relative h-[650px] w-full max-w-[500px] mx-auto overflow-hidden rounded-[2.5rem] border border-[#bf953f]/30 bg-black/40 shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2a0009] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#2a0009] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-40 border-y border-[#bf953f]/20 bg-[#bf953f]/5 z-10 pointer-events-none" />

          <div ref={marqueeRef} className="flex flex-col gap-6 p-6">
            {[...newsImages, ...newsImages, ...newsImages].map((news, index) => (
              <a 
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-full bg-[#3d000d]/80 rounded-3xl border border-white/5 p-8 flex flex-col justify-between shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 group shrink-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="px-3 py-1 bg-[#bf953f]/10 border border-[#bf953f]/30 rounded-full text-[9px] text-[#fcf6ba] uppercase tracking-widest font-bold">
                    {news.source}
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono italic">Case Reference</div>
                </div>
                <h4 className="text-white font-classic text-lg md:text-xl italic group-hover:text-[#fcf6ba] leading-relaxed">
                  "{news.title}"
                </h4>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                   <span className="text-[10px] text-stone-500 uppercase tracking-widest group-hover:text-[#bf953f] transition-colors">Validasi Fakta</span>
                   <span className="text-[#bf953f]">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
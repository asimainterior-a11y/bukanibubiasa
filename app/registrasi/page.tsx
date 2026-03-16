'use client';

import { useState } from 'react'; // Tambahkan useState
import { motion } from 'framer-motion';
import { 
  User, MapPin, Phone, Calendar, Heart, 
  ArrowRight, Sparkle, Quotes 
} from '@phosphor-icons/react';
import Navbar from '../../components/sections/Navbar';

export default function RegistrationPage() {
  // State untuk menampung data form
  const [formData, setFormData] = useState({
    nama: '',
    ttl: '',
    alamat: '',
    kontak: '',
    harapan: '',
    motivasi: ''
  });

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Menyusun format pesan WhatsApp yang lebih personal dan sopan
    const message = 
      `Assalamualaikum Wr. Wb.%0A%0A` +
      `Saya *${formData.nama}*, saya merasa sangat tertarik untuk mengikuti kegiatan ini karena saya percaya bahwa setiap wanita berhak untuk terus tumbuh, belajar, dan menjadi inspirasi bagi sekitarnya. %0A%0ABerikut adalah Form Pendaftaran saya:%0A%0A` +
      `----------------------------------%0A` +
      `*REGISTRASI PESERTA BIB*%0A` +
      `----------------------------------%0A` +
      `*Nama:* ${formData.nama}%0A` +
      `*TTL:* ${formData.ttl}%0A` +
      `*Alamat:* ${formData.alamat}%0A` +
      `*Kontak:* ${formData.kontak}%0A` +
      `*Harapan:* ${formData.harapan}%0A` +
      `*Motivasi:* ${formData.motivasi}%0A` +
      `----------------------------------%0A%0A` +
      `Besar harapan saya untuk dapat bergabung dan berproses bersama di keluarga besar Bukan Ibu Biasa. Terima kasih atas kesempatan yang diberikan.%0A%0A` +
      `Wassalamualaikum Wr. Wb.%0A%0A` +
      `Salam Hangat,%0A%0A` +
      `*${formData.nama}*`;

    const whatsappNumber = "6281296230144";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="bg-[#8b0000] min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bf953f]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#bf953f]/30 text-[#fcf6ba] text-[10px] uppercase tracking-[0.4em] mb-8"
            >
              <Sparkle weight="fill" className="text-[#bf953f]" /> Form Pendaftaran Peserta
            </motion.div>
            <h1 className="font-classic text-3xl md:text-6xl text-[#fcf6ba] mb-6">
              Ceritakan <span className="italic opacity-50">Kisah Anda</span>
            </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#660000]/50 backdrop-blur-md border border-[#bf953f]/20 p-8 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.6)] relative"
          >
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              
              {/* NAMA LENGKAP */}
              <div className="group">
                <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.4em] mb-4 block">Nama Lengkap</label>
                <div className="flex items-center border-b border-white/10 py-3 group-focus-within:border-[#fcf6ba] transition-all duration-500">
                  <User className="text-[#bf953f]/50 mr-4" size={20} />
                  <input 
                    required
                    type="text" 
                    placeholder="Siapa nama Anda?" 
                    className="font-modern bg-transparent outline-none w-full text-white placeholder:text-red-900/50 text-sm"
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  />
                </div>
              </div>

              {/* TEMPAT TANGGAL LAHIR */}
              <div className="group">
                <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.4em] mb-4 block">Tempat, Tanggal Lahir</label>
                <div className="flex items-center border-b border-white/10 py-3 group-focus-within:border-[#fcf6ba] transition-all duration-500">
                  <Calendar className="text-[#bf953f]/50 mr-4" size={20} />
                  <input 
                    required
                    type="text" 
                    placeholder="Contoh: Banjar, 12 Mei 1995" 
                    className="font-modern bg-transparent outline-none w-full text-white placeholder:text-red-900/50 text-sm"
                    onChange={(e) => setFormData({...formData, ttl: e.target.value})}
                  />
                </div>
              </div>

              {/* ALAMAT LENGKAP */}
              <div className="group">
                <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.4em] mb-4 block">Alamat Domisili</label>
                <div className="flex items-start border-b border-white/10 py-3 group-focus-within:border-[#fcf6ba] transition-all duration-500">
                  <MapPin className="text-[#bf953f]/50 mr-4 mt-1" size={20} />
                  <textarea 
                    required
                    rows={2} 
                    placeholder="Alamat lengkap saat ini..." 
                    className="font-modern bg-transparent outline-none w-full text-white placeholder:text-red-900/50 text-sm resize-none"
                    onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                  />
                </div>
              </div>

              {/* NOMOR KONTAK */}
              <div className="group">
                <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.4em] mb-4 block">WhatsApp / No. HP</label>
                <div className="flex items-center border-b border-white/10 py-3 group-focus-within:border-[#fcf6ba] transition-all duration-500">
                  <Phone className="text-[#bf953f]/50 mr-4" size={20} />
                  <input 
                    required
                    type="tel" 
                    placeholder="08XXXXXXXXXX" 
                    className="font-modern bg-transparent outline-none w-full text-white placeholder:text-red-900/50 text-sm"
                    onChange={(e) => setFormData({...formData, kontak: e.target.value})}
                  />
                </div>
              </div>

              {/* HARAPAN */}
              <div className="group bg-[#4d0000]/40 p-6 border-l-2 border-[#bf953f]/30">
                <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.4em] mb-4 block italic">Harapan Mengikuti Kegiatan</label>
                <div className="flex items-start">
                  <Heart className="text-[#bf953f]/50 mr-4 mt-1" size={20} />
                  <textarea 
                    required
                    rows={3} 
                    placeholder="Apa yang ingin Anda dapatkan?" 
                    className="font-modern bg-transparent outline-none w-full text-white placeholder:text-red-900/50 text-sm resize-none"
                    onChange={(e) => setFormData({...formData, harapan: e.target.value})}
                  />
                </div>
              </div>

              {/* MOTIVASI */}
              <div className="group bg-[#4d0000]/40 p-6 border-l-2 border-[#bf953f]/30">
                <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.4em] mb-4 block italic">Motivasi Kehidupan</label>
                <div className="flex items-start">
                  <Quotes className="text-[#bf953f]/50 mr-4 mt-1" size={20} />
                  <textarea 
                    required
                    rows={3} 
                    placeholder="Kalimat yang menguatkan Anda..." 
                    className="font-modern bg-transparent outline-none w-full text-white placeholder:text-red-900/50 text-sm resize-none italic"
                    onChange={(e) => setFormData({...formData, motivasi: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] text-[#3d000d] py-5 font-modern font-bold uppercase tracking-[0.3em] text-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex justify-center items-center gap-4 group"
                >
                  Kirim Data Via WhatsApp 
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
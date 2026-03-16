'use client';

import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="py-24 px-6 bg-[#4d0011] relative">
      {/* Dekorasi halus di background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h4 className="font-modern text-[#bf953f] tracking-[0.4em] uppercase text-xs mb-4">
            Latar Belakang & Urgensi
          </h4>
          <h2 className="font-classic text-3xl md:text-5xl text-[#fcf6ba] leading-tight">
            Mengapa Kita Perlu Berhenti Sejenak?
          </h2>
          <div className="gold-line !w-24 mx-auto opacity-60" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-modern text-stone-200 leading-relaxed text-sm md:text-base">
          {/* Paragraf Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="mb-6">
              <span className="text-5xl font-classic float-left mr-3 mt-1 text-[#bf953f]">P</span>
              erempuan adalah pilar utama dalam keluarga dan masyarakat yang seringkali menjalani berbagai peran sekaligus dalam satu waktu—sebagai ibu, istri, profesional, anak, hingga penggerak sosial.
            </p>
            <p>
              Di balik dedikasi tersebut, akumulasi beban peran yang begitu besar tidak jarang memunculkan tekanan emosional yang mendalam, kelelahan mental <span className="text-[#fcf6ba] italic">(burnout)</span>, serta luka batin yang sering kali dipendam sendirian.
            </p>
          </motion.div>

          {/* Paragraf Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="mb-6">
              Kondisi psikologis yang tidak stabil ini, jika dibiarkan, tidak hanya berdampak pada kesejahteraan diri, tetapi juga memengaruhi pola asuh anak dan keharmonisan rumah tangga. 
            </p>
            <p className="p-6 border-l-2 border-[#bf953f] bg-white/5 rounded-r-xl italic">
              "Bukan Ibu Biasa hadir sebagai ruang pembelajaran dan emotional healing yang dirancang khusus bagi para muslimah untuk menemukan kembali kekuatan hati."
            </p>
          </motion.div>
        </div>

        {/* Bagian Bawah: Penutup Narasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center border-t border-[#bf953f]/20 pt-12"
        >
          <p className="font-modern text-stone-100 max-w-2xl mx-auto mb-8">
            Melihat urgensi kesehatan mental perempuan di daerah, untuk pertama kalinya, kegiatan ini akan diselenggarakan di <span className="text-[#fcf6ba] font-bold">Kota Banjar</span>. Menjadi titik balik perjalanan pemulihan diri.
          </p>
          
          <div className="inline-block px-6 py-2 border border-[#bf953f]/40 rounded-full">
            <span className="font-classic text-[10px] tracking-[0.3em] text-[#bf953f] uppercase">
              Ratusan Alumni Telah Merasakan Manfaatnya
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
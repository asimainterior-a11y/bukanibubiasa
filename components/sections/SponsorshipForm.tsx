'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BuildingOffice, User, Briefcase, Eye, 
  Star, PaperPlaneTilt, CheckCircle, PlusCircle, Phone
} from '@phosphor-icons/react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Navbar from '../../components/sections/Navbar';

// --- Konfigurasi Tipe & Data ---
type PackageType = 'PLATINUM' | 'GOLD' | 'SILVER';

interface PackageDetail {
  color: string;
  services: string[];
}

const packageDetails: Record<PackageType, PackageDetail> = {
  PLATINUM: {
    color: '#bf953f',
    services: [
      'Logo Utama di Semua Media',
      'Booth VIP Eksklusif di Lokasi',
      'Slot Presentasi Produk (10 Menit)',
      'Branding Premium di Video Recap',
      'Database Peserta (Sesuai Kebijakan)'
    ],
  },
  GOLD: {
    color: '#b38728',
    services: [
      'Logo di Media Cetak & Backdrop',
      'Ad-Lips oleh MC di Main Stage',
      'Pemasangan 3 Titik Banner',
      'Slot Sampling Produk'
    ],
  },
  SILVER: {
    color: '#a8a8a8',
    services: [
      'Logo di Backdrop Event',
      'Sertifikat Apresiasi Kemitraan',
      'Social Media Shoutout (1x)'
    ],
  }
};

export default function SponsorshipFormPage() {
  return (
    <Suspense fallback={<div className="bg-[#8b0000] min-h-screen pt-32 text-center text-white font-modern">Menyiapkan Portal...</div>}>
      <SponsorshipContent />
    </Suspense>
  );
}

function SponsorshipContent() {
  const searchParams = useSearchParams();
  const [selectedPkg, setSelectedPkg] = useState<PackageType>('PLATINUM');
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    nama: '',
    jabatan: '',
    perusahaan: '',
    bidang: '',
    alamat: '',
    kontak: '',
    sektor: '',
    visi: '',
    kampanye: '',
    negosiasi: ''
  });

  useEffect(() => {
    setMounted(true);
    const pkg = searchParams.get('package')?.toUpperCase();
    if (pkg && pkg in packageDetails) setSelectedPkg(pkg as PackageType);
  }, [searchParams]);

  const generatePDF = () => {
    if (typeof window === 'undefined') return;

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4'
    });

    const primaryColor = packageDetails[selectedPkg].color;

    // --- Kop Surat (Compact) ---
    doc.setFillColor(77, 0, 17); 
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(252, 246, 186); 
    doc.setFont('times', 'bold');
    doc.setFontSize(18);
    doc.text('BUKAN IBU BIASA', 105, 15, { align: 'center' });
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Managemen Hati, Healing Session, Self Therapy | Banjar Patroman', 105, 22, { align: 'center' });

    doc.setDrawColor(191, 149, 63);
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // --- Header Detail ---
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(9);
    doc.text(`Perihal: Surat Minat Kemitraan - ${selectedPkg}`, 20, 45);
    doc.text(`Tanggal: ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`, 20, 50);

    // --- Narasi Pendahuluan ---
    doc.setFont('helvetica', 'bold');
    doc.text(`Yth. Panitia Pelaksana "Bukan Ibu Biasa"`, 20, 60);
    doc.setFont('helvetica', 'normal');
    
    const introText = `Kami telah meninjau profil kegiatan "Bukan Ibu Biasa" dan sangat tertarik untuk mendukung inisiatif ini. Kami percaya visi yang diusung dalam memberdayakan psikologis dan kebahagiaan perempuan selaras dengan nilai-nilai kami. Oleh karena itu, kami bermaksud mengajukan penawaran kerjasama dengan rincian sebagai berikut:`;
    
    const splitIntro = doc.splitTextToSize(introText, 172);
    doc.text(splitIntro, 20, 66);

    const tableStartY = 66 + (splitIntro.length * 5) + 2;

    // --- Tabel Identitas Lengkap ---
    autoTable(doc, {
      startY: tableStartY,
      head: [['Kategori Pengenal', 'Informasi Lengkap']],
      body: [
        ['Nama Lengkap', formData.nama || '-'],
        ['Jabatan', formData.jabatan || '-'],
        ['Nama Perusahaan', formData.perusahaan || '-'],
        ['Sektor Bisnis', formData.sektor || '-'],
        ['Nomor WhatsApp', formData.kontak || '-'],
        ['Alamat Kantor', formData.alamat || '-'],
        ['Paket Dipilih', selectedPkg],
        ['Visi Kolaborasi', formData.visi || '-'],
        ['Layanan Tambahan', formData.negosiasi || 'Tidak ada'],
      ],
      headStyles: { fillColor: primaryColor as any, textColor: [255, 255, 255], fontStyle: 'bold' },
      styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 3.5 },
      columnStyles: { 0: { cellWidth: 45, fontStyle: 'bold' } },
    });

    // --- Penutup & Tanda Tangan ---
    const finalY = (doc as any).lastAutoTable.finalY + 12;
    doc.setFontSize(9);
    doc.text(`Demikian surat minat ini kami sampaikan untuk proses pendataan lebih lanjut. Atas perhatian dan kerjasamanya, kami ucapkan terima kasih.`, 20, finalY, { maxWidth: 170 });

    const signY = finalY + 18;
    doc.setFont('helvetica', 'bold');
    doc.text('Hormat Kami,', 140, signY);
    doc.text(formData.nama || '(Nama Terang)', 140, signY + 18);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(formData.jabatan || 'Jabatan', 140, signY + 23);
    doc.text(formData.perusahaan || 'Perusahaan', 140, signY + 27);

    doc.save(`Proposal_BIB_${(formData.perusahaan || 'Partner').replace(/\s+/g, '_')}.pdf`);
  };

const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    generatePDF();

    // Teks WhatsApp yang komprehensif (Back-up Data PDF)
    const message = 
      `*MINAT KEMITRAAN: BUKAN IBU BIASA*%0A` +
      `------------------------------------------%0A%0A` +
      `Halo Admin BIB, %0A%0A` +
      `Kami telah meninjau profil kegiatan *"Bukan Ibu Biasa"* dan sangat tertarik untuk mendukung inisiatif ini. Kami percaya visi pemberdayaan psikologis perempuan yang diusung sangat selaras dengan nilai perusahaan kami.%0A%0A` +
      `Bersama pesan ini, kami bermaksud mengajukan penawaran kerjasama dengan rincian sebagai berikut:%0A%0A` +
      `*DATA IDENTITAS:*%0A` +
      `• *Instansi:* ${formData.perusahaan || '-'}%0A` +
      `• *Sektor:* ${formData.sektor || '-'}%0A` +
      `• *Narahubung:* ${formData.nama} (${formData.jabatan})%0A` +
      `• *Kontak:* ${formData.kontak}%0A` +
      `• *Alamat:* ${formData.alamat || '-'}%0A%0A` +
      `*DETAIL KEMITRAAN:*%0A` +
      `• *Paket:* ${selectedPkg}%0A` +
      `• *Visi Branding:* ${formData.visi || '-'}%0A` +
      `• *Permintaan Khusus:* ${formData.negosiasi || 'Tidak ada'}%0A%0A` +
      `Saya juga melampirkan file PDF Proposal resmi yang baru saja saya generate melalui website. Besar harapan kami untuk dapat berdiskusi lebih lanjut mengenai kolaborasi ini.%0A%0A` +
      `Terima kasih atas perhatian dan kerjasamanya!%0A%0A` +
      `Salam hangat,%0A` +
      `*${formData.nama}*`;

    setTimeout(() => {
      window.open(`https://wa.me/6281296230144?text=${message}`, '_blank');
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <main className="bg-[#8b0000] min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-classic text-5xl md:text-7xl text-[#fcf6ba] mb-6 drop-shadow-2xl">
              Partnership <span className="italic opacity-60">Portal</span>
            </h2>
            
            <div className="flex justify-center gap-4 mb-8">
              {(['SILVER', 'GOLD', 'PLATINUM'] as PackageType[]).map((pkg) => (
                <button 
                  key={pkg}
                  type="button"
                  onClick={() => setSelectedPkg(pkg)}
                  className={`px-8 py-3 font-modern text-[10px] tracking-widest transition-all duration-500 border
                  ${selectedPkg === pkg 
                    ? 'bg-[#bf953f] text-[#4d0000] border-[#bf953f] shadow-[0_0_20px_rgba(191,149,63,0.4)]' 
                    : 'border-[#bf953f]/30 text-[#bf953f] hover:bg-[#bf953f]/10'}`}
                >
                  {pkg}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              key={selectedPkg}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 bg-[#660000] p-8 border-l-4 border-[#bf953f] h-fit shadow-2xl"
            >
              <h3 className="font-classic text-[#fcf6ba] text-2xl mb-6 flex items-center gap-3">
                <Star weight="fill" className="text-[#bf953f]" /> Benefit {selectedPkg}
              </h3>
              <ul className="space-y-4">
                {packageDetails[selectedPkg].services.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-red-100/70 font-modern text-[11px] leading-relaxed uppercase tracking-wider">
                    <CheckCircle className="text-[#bf953f] shrink-0" size={18} /> {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSendWhatsApp} className="space-y-12">
                <div className="space-y-8">
                  <h3 className="font-classic text-[#fcf6ba] text-xl border-b border-[#bf953f]/30 pb-2">Informasi Narahubung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField label="Nama Lengkap" icon={<User color="#bf953f" size={20}/>} placeholder="Sarah Az-Zahra" value={formData.nama} onChange={(v) => setFormData({...formData, nama: v})} />
                    <InputField label="Jabatan" icon={<Briefcase color="#bf953f" size={20}/>} placeholder="Marketing Manager" value={formData.jabatan} onChange={(v) => setFormData({...formData, jabatan: v})} />
                    <InputField label="Nomor Kontak (WhatsApp)" icon={<Phone color="#bf953f" size={20}/>} placeholder="08123456789" value={formData.kontak} onChange={(v) => setFormData({...formData, kontak: v})} />
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="font-classic text-[#fcf6ba] text-xl border-b border-[#bf953f]/30 pb-2">Profil Instansi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField label="Nama Perusahaan" icon={<BuildingOffice color="#bf953f" size={20}/>} placeholder="PT. Inovasi Muslimah" value={formData.perusahaan} onChange={(v) => setFormData({...formData, perusahaan: v})} />
                    <InputField label="Sektor Bisnis" icon={<Star color="#bf953f" size={20}/>} placeholder="Fashion / Kuliner" value={formData.sektor} onChange={(v) => setFormData({...formData, sektor: v})} />
                  </div>
                  <InputField label="Alamat Perusahaan" icon={<BuildingOffice color="#bf953f" size={20}/>} placeholder="Jl. Raya Utama No. 123" value={formData.alamat} onChange={(v) => setFormData({...formData, alamat: v})} />
                </div>

                <div className="space-y-8">
                   <TextAreaField label="Visi Branding" icon={<Eye color="#bf953f" size={20}/>} placeholder="Objektif utama kolaborasi..." value={formData.visi} onChange={(v) => setFormData({...formData, visi: v})} />
                   <div className="p-6 bg-[#4d0000] border-t-2 border-[#bf953f] shadow-inner">
                      <label className="font-modern text-[10px] text-[#bf953f] uppercase tracking-[0.2em] mb-4 block flex items-center gap-2">
                        <PlusCircle size={18} weight="fill" /> Permintaan Khusus / Negosiasi
                      </label>
                      <textarea rows={3} value={formData.negosiasi} placeholder="Contoh: Logo khusus atau sampling produk..." className="font-modern w-full bg-transparent border-b border-white/10 outline-none text-white text-sm py-2 focus:border-[#bf953f] transition-all resize-none" onChange={(e) => setFormData({...formData, negosiasi: e.target.value})} />
                   </div>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#bf953f] py-5 font-modern font-bold uppercase tracking-[0.3em] text-[11px] text-[#3d000d] shadow-2xl flex justify-center items-center gap-4">
                  Generate Proposal & Kirim WhatsApp <PaperPlaneTilt size={20} weight="bold" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- Helper Components ---
interface FieldProps {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

const InputField = ({ label, icon, placeholder, value, onChange }: FieldProps) => (
  <div className="group">
    <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.2em] mb-3 block">{label}</label>
    <div className="flex items-center border-b border-white/10 py-3 group-focus-within:border-[#fcf6ba] transition-all">
      <div className="mr-4 opacity-50">{icon}</div>
      <input required value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder={placeholder} className="bg-transparent outline-none w-full text-white text-sm placeholder:text-red-900/20 font-modern" />
    </div>
  </div>
);

const TextAreaField = ({ label, icon, placeholder, value, onChange }: FieldProps) => (
  <div className="group">
    <label className="font-modern text-[9px] text-[#bf953f] uppercase tracking-[0.2em] mb-3 block">{label}</label>
    <div className="flex items-start border-b border-white/10 py-3 group-focus-within:border-[#fcf6ba] transition-all">
      <div className="mr-4 mt-1 opacity-50">{icon}</div>
      <textarea required value={value} onChange={(e) => onChange(e.target.value)} rows={2} placeholder={placeholder} className="bg-transparent outline-none w-full text-white text-sm placeholder:text-red-900/20 font-modern resize-none" />
    </div>
  </div>
);
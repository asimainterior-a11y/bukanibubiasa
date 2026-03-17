'use client';

import React from 'react';
import { motion } from 'framer-motion';
// Perhatikan path import ini, sesuaikan dengan struktur folder baru kamu
import Navbar from '@/components/sections/Navbar'; 

const budgetData = [
  { no: 1, item: "Sewa Gedung", satuan: "1", harga: 2000000, jumlah: 2000000 },
  { no: 2, item: "Fee Pembicara", satuan: "1", harga: 5000000, jumlah: 5000000 },
  { no: 3, item: "Sertifikat Peserta", satuan: "150", harga: 5000, jumlah: 750000 },
  { no: 4, item: "Suvenir Peserta & Buku Cinta", satuan: "150", harga: 10000, jumlah: 1500000 },
  { no: 5, item: "Makan Siang Peserta & Panitia", satuan: "170", harga: 20000, jumlah: 3400000 },
  { no: 6, item: "Makan Siang Pembicara", satuan: "3", harga: 50000, jumlah: 150000 },
  { no: 7, item: "Snack Peserta + Panitia", satuan: "170", harga: 5000, jumlah: 850000 },
  { no: 8, item: "Snack Pembicara", satuan: "3", harga: 15000, jumlah: 45000 },
  { no: 9, item: "Spanduk & Backdrop Acara", satuan: "1", harga: 500000, jumlah: 500000 },
  { no: 10, item: "Dokumentasi", satuan: "1", harga: 1000000, jumlah: 1000000 },
  { no: 11, item: "Operasional", satuan: "1", harga: 1000000, jumlah: 1000000 },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-[#1a0005] text-[#fcf6ba] selection:bg-[#bf953f] selection:text-white">
      
      {/* Navbar dari components/sections/Navbar.tsx */}
      <Navbar />

      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#bf953f] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#5d0016] blur-[100px]" />
      </div>

      <section className="relative pt-48 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="font-sans text-[#bf953f] text-xs tracking-[0.6em] uppercase block mb-4">
                Financial Report • 2026
              </span>
              <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
                Rencana <br />
                <span className="italic text-[#bf953f]/80 ml-0 md:ml-20">Anggaran Dana</span>
              </h1>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "100%" }} 
              className="h-px bg-gradient-to-r from-[#bf953f] to-transparent" 
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-[#bf953f]/20 bg-black/60 backdrop-blur-3xl overflow-hidden shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#bf953f]/10 text-[#bf953f] font-sans text-[10px] uppercase tracking-widest">
                    <th className="p-6">No</th>
                    <th className="p-6">Item</th>
                    <th className="p-6 text-center">Qty</th>
                    <th className="p-6">Harga</th>
                    <th className="p-6 text-right px-8">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-sm border-t border-white/5">
                  {budgetData.map((row) => (
                    <tr key={row.no} className="border-b border-white/5 hover:bg-white/[0.03] transition-all">
                      <td className="p-6 text-white/20">{row.no}</td>
                      <td className="p-6 text-white/90">{row.item}</td>
                      <td className="p-6 text-center text-white/60">{row.satuan}</td>
                      <td className="p-6 text-white/60">{formatCurrency(row.harga)}</td>
                      <td className="p-6 text-right px-8 text-[#bf953f] font-semibold">{formatCurrency(row.jumlah)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#bf953f] text-[#1a0005]">
                    <td colSpan={4} className="p-8 text-right font-sans text-xs uppercase tracking-[0.4em] font-bold">Total Estimasi</td>
                    <td className="p-8 text-right px-8 font-serif text-3xl font-bold whitespace-nowrap">
                      {formatCurrency(16195000)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
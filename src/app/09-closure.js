// path: src/app/09-closure.js
"use client";

import React from 'react';
import { ArrowRight, HelpCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ClosureManifesto() {
  const handleScrollToPricing = () => {
    const target = document.getElementById('pricing_section') || document.getElementById('pricing-section');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-28 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* HEADER STAGE HEADER */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-8 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
          DECISION ARCHITECTURE NODE
        </div>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-10 leading-[1.15] max-w-2xl mx-auto">
          Pilihan Di Tangan <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Anda Hari Ini...</span>
        </h2>

        {/* TWO DECISION PATHS (BENTO-STYLE GRID OR SPLIT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-16">
          
          {/* PATH A: STATUS QUO (THE LEAK - bg-transparent visually fades out) */}
          <div className="bg-transparent border border-red-500/10 hover:border-red-500/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-red-500/10 pb-3">
                <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider">PATH_A // REJECT_EVOLUTION</span>
                <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
              </div>
              <h3 className="text-lg font-black text-white tracking-tight">Teruskan Jalan Lama</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                Anda boleh tutup halaman ini. Teruskan membakar RM11,520 setahun dalam leads yang mati akibat kelembapan respons sistem manual — sambil kompetitor yang sudah deploy sistem seperti ini menukar prospek anda menjadi pelanggan mereka, jam 3 pagi tadi.
              </p>
            </div>
            <div className="mt-8 pt-3 border-t border-red-500/5 font-mono text-[9px] text-red-500/70 font-bold uppercase tracking-wider">
              ● SYSTEM STATUS: UNRESOLVED LEAKAGE
            </div>
          </div>

          {/* PATH B: THE CORE ENGINE (THE CAP - bg and glow boosted) */}
          <div className="bg-orange-500/[0.04] border border-orange-500/30 hover:border-orange-500/40 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(249,115,22,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-black font-mono text-[8px] font-black px-4 py-1 rounded-bl uppercase tracking-widest">
              OPTIMUM ROI
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-orange-500/10 pb-3">
                <span className="font-mono text-[10px] font-bold text-orange-400 uppercase tracking-wider">PATH_B // INTEGRATE_AROS</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-lg font-black text-white tracking-tight">Deploy AROS Autopilot Engine</h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-medium">
                Senario mudah: Jam 3:17 pagi — telefon anda senyap, tiada operasi manual berjalan. Tapi AROS Engine anda sudah membalas 7 prospek, menapis 4 yang serius, dan menghantar pautan pembayaran kepada 2 prospek yang sedia bertransaksi. Esok pagi anda bangun — ada notifikasi jualan masuk. Sistem yang kami bina dalam 3 hari itu bekerja keras sepanjang malam anda rehat.
              </p>
            </div>
            <div className="mt-8 pt-3 border-t border-orange-500/5 font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
              ● SYSTEM STATUS: FULLY_OPTIMIZED
            </div>
          </div>

        </div>

        {/* CTA ACTION BUTTON */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider animate-pulse mb-1">
            ● STATUS INTEGRASI: Hanya 1 slot kosong berbaki untuk minggu ini.
          </span>
          <button
            onClick={handleScrollToPricing}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-black font-black text-base md:text-lg px-10 py-5 rounded-2xl cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_10px_30px_rgba(249,115,22,0.2)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Inject AROS Engine Ke Dalam Sistem Bisnes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-2">
            // Slot deployment anda akan disahkan dalam masa 24 jam selepas pembayaran.
          </span>
        </div>

      </div>
    </section>
  );
}

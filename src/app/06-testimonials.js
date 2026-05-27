// path: src/app/06-testimonials.js
"use client";

import React from 'react';
import { ShieldCheck, Check, X, Activity } from 'lucide-react';

export default function Testimonials() {
  const benchmarks = [
    {
      metric: "Response Speed & Latency",
      desc: "Kelewatan membalas mesej pertama WhatsApp (CTWA) selepas prospek klik iklan.",
      human: "15 - 45 Minit (80% Leads Mati & Beralih Arah)",
      oldBot: "3 - 5 Minit (Kaku Ikut Aliran Keyword Semata)",
      aros: "0.2 Saat (Instant Hook & Intent Retention 99%)",
      status: "MAXIMUM_CONVERSION"
    },
    {
      metric: "Multi-Threading Capacity",
      desc: "Kapasiti menguruskan lonjakan trafik leads masuk serentak dalam satu-satu masa.",
      human: "Maksima 3 - 5 Chat (Kecuaian & Typos)",
      oldBot: "Sistem Jammed / Hang Jika Request Terlalu Padat",
      aros: "Tanpa Had (Concurrent Threads Tanpa Lag)",
      status: "MAXIMUM_SCALE"
    },
    {
      metric: "Behavioral Follow-Up Precision",
      desc: "Ketepatan proses auto-follow-up prospek yang 'bluetick' sahaja.",
      human: "90% Terbiar (Risiko Data Tercicir & Tindakan Terlewat)",
      oldBot: "Blast Buta Teks Sama (Risau Akaun Kena Banned)",
      aros: "Algorithmic Loops (Auto-Follow Up Ikut Respon State)",
      status: "MAXIMUM_PRECISION"
    },
    {
      metric: "Operational Lifespan",
      desc: "Tempoh bersiaga menguruskan closing dan melayan leads tanpa kos overhead.",
      human: "8 Jam Sahaja (Lumpuh Total Waktu Malam/Cuti)",
      oldBot: "24/7 (Tapi Terhad Pada Rules Butang Kaku)",
      aros: "24/7/365 Autopilot (AI Bekerja Tanpa Henti)",
      status: "MAXIMUM_LIFESPAN"
    },
    {
      metric: "Operational Cost Structure",
      desc: "Perbandingan komitmen kewangan komersial secara bulanan dan tahunan.",
      human: "RM2,500 - RM4,000 / Bln (RM30K - RM48K / Tahun)",
      oldBot: "RM150 - RM400 / Bln (RM1.8K - RM4.8K / Tahun)",
      aros: "RM900 Setup Fee + RM99/bln (Year 1: ~RM2,088 | Year 2 & seterusnya cuma RM99 × 12 = RM1,188)",
      status: "MAXIMUM_SAVINGS"
    }
  ];

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-24 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER BLOCK (CLEANED FROM TESTIMONIAL REFERENCES) */}
        <div className="text-center mb-20 max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
            <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            DETERMINISTIC EFFICIENCY PROOF
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Analisis Komparatif: <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Kecekapan Infrastruktur AROS</span> vs Kaedah Tradisional
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Dalam pengurusan data enterprise, ketetapan angka adalah fakta mutlak. Berikut adalah perbandingan terus keupayaan pemprosesan data antara kaedah manual dan infrastruktur AROS Engine.
          </p>
        </div>

        {/* HIGH-END INTERACTIVE TABLE LAYOUT - AROS FLOATED FIRST COLUMN FOR MOBILE ADVANTAGES */}
        <div className="w-full overflow-x-auto rounded-3xl border border-white/5 bg-[#0F1424] shadow-sm">
          <table className="w-full border-collapse text-left font-sans min-w-[850px] table-fixed">
            <thead>
              <tr className="bg-[#0B0F19]/80 text-white font-mono text-[12px] uppercase tracking-wider border-b border-white/10">
                {/* Float AROS immediately as the first data column: 24% | 30% | 23% | 23% */}
                <th className="py-4 px-5 font-black w-[24%] border-r border-white/10">EFFICIENCY CRITERIA</th>
                <th className="py-4 px-5 font-black text-orange-400 bg-orange-500/[0.08] text-center text-sm md:text-base tracking-wide w-[30%] shadow-inner border-r border-white/10">
                  ▲ AROS CORE ENGINE
                </th>
                <th className="py-4 px-5 font-bold text-neutral-400 w-[23%] border-r border-white/10">MANUAL HUMAN STAFF</th>
                <th className="py-4 px-5 font-bold text-neutral-400 w-[23%]">BASIC KEYWORD CHATBOT</th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium divide-y divide-white/5">
              {benchmarks.map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                  
                  {/* 1. Criteria Column */}
                  <td className="py-3.5 px-5 space-y-1 border-r border-white/5 bg-white/[0.01]">
                    <div className="font-black text-white text-sm tracking-tight">{row.metric}</div>
                    <div className="text-neutral-400 text-xs leading-relaxed font-normal">{row.desc}</div>
                  </td>
                  
                  {/* 2. AROS Core Engine Column (Now second column, instantly visible on mobile - iOS Crash Fix Wrap applied!) */}
                  <td className="py-3.5 px-5 bg-orange-500/[0.05] font-semibold border-r border-white/5 border-x border-orange-500/10 text-center">
                    <div className="flex flex-col items-center gap-1.5 w-full">
                      <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-black mb-1.5 text-[11px] mx-auto bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded w-fit shadow-2xs">
                        <Check className="w-3.5 h-3.5 shrink-0 stroke-[3]" /> {row.status}
                      </div>
                      <span className="text-white font-bold text-sm md:text-[14px] tracking-tight block max-w-[230px] mx-auto leading-snug">
                        {row.aros}
                      </span>
                    </div>
                  </td>

                  {/* 3. Human Staff Column */}
                  <td className="py-3.5 px-5 text-neutral-300 font-medium leading-relaxed border-r border-white/5">
                    <div className="flex items-center gap-1.5 text-red-400 font-bold mb-1 text-[11px]">
                      <X className="w-3.5 h-3.5 shrink-0" /> LOW_EFFICIENCY
                    </div>
                    {row.human}
                  </td>
                  
                  {/* 4. Basic Bot Column */}
                  <td className="py-3.5 px-5 text-neutral-300 font-medium leading-relaxed">
                    <div className="flex items-center gap-1.5 text-orange-400 font-bold mb-1 text-[11px]">
                      <X className="w-3.5 h-3.5 shrink-0" /> KAKU_LIMITATION
                    </div>
                    {row.oldBot}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>



        {/* HIGH-END SYSTEM AUDIT FOOTNOTE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#0F1424] border border-white/5 px-6 py-4 rounded-xl text-xs md:text-sm text-neutral-300 font-medium max-w-3xl mx-auto shadow-xs text-left leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0 hidden sm:block" />
            <span>
              <strong>AROS Architecture Conclusion:</strong> Conversion rate latency dan had pemprosesan multi-threading sistem manual adalah satu limitasi manusia yang mutlak. AROS dibina bukan untuk menggantikan strategi pemasaran anda, tetapi untuk memastikan 100% leads yang masuk mempunyai kecekapan sistem tertinggi untuk ditukarkan menjadi hasil jualan (revenue) dengan kos komersial yang jauh lebih efisien.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
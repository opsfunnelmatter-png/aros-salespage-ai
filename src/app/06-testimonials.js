// path: src/app/06-testimonials.js
"use client";

import React from 'react';
import { ShieldCheck, Check, X, Activity } from 'lucide-react';

export default function Testimonials({ dict }) {
  const defaultBenchmarks = [
    {
      metric: "Kelajuan Balas Mesej (Latency)",
      desc: "Kelewatan membalas mesej pertama WhatsApp selepas prospek klik iklan.",
      human: "15 - 45 Minit (80% leads lari/sejuk)",
      oldBot: "3 - 5 Minit (Kaku ikut butang menu sahaja)",
      aros: "0.2 Saat (Serta-merta close jualan)",
      status: "RESPONS PANTAS"
    },
    {
      metric: "Kapasiti Melayan Prospek Serentak",
      desc: "Keupayaan melayan mesej bertubi-tubi pada waktu puncak / iklan viral.",
      human: "Maksima 3 - 5 Chat (Staff mula cuai & salah taip)",
      oldBot: "Sistem jammed jika trafik masuk padat",
      aros: "Tanpa Had (Boleh layan beribu leads serentak)",
      status: "CONCURRENT UNLIMITED"
    },
    {
      metric: "Ketepatan Auto Follow-Up",
      desc: "Ketepatan proses kejar semula pelanggan yang senyap atau 'blue-tick'.",
      human: "90% Terbiar (Staff terlepas pandang atau terlupa)",
      oldBot: "Blast teks kosong yang sama (Risiko nombor kena ban)",
      aros: "Auto Follow-Up Pintar (Ikut konteks perbualan)",
      status: "FOLLOW-UP PINTAR"
    },
    {
      metric: "Waktu Operasi Menjawab",
      desc: "Tempoh bersiaga menguruskan jualan tanpa henti.",
      human: "8 Jam Sehari (Lumpuh waktu cuti / malam)",
      oldBot: "24/7 (Tapi kaku, tidak boleh menjawab soalan FAQ)",
      aros: "24/7/365 Autopilot (AI bekerja tanpa henti)",
      status: "OPERASI 24 JAM"
    },
    {
      metric: "Struktur Kos Bulanan",
      desc: "Komitmen kewangan bulanan dan tahunan.",
      human: "RM2,500 - RM4,000 / Bln (Kos gaji & bonus staff)",
      oldBot: "RM150 - RM400 / Bln (Inbox kaku tanpa AI)",
      aros: "RM999 Setup (Termasuk server bulan pertama) + RM99/bln mulai bulan ke-2",
      status: "KOS PALING PENJIMATAN"
    }
  ];

  const dictRows = dict?.matrix?.rows || [];
  const benchmarks = defaultBenchmarks.map((staticConfig, idx) => {
    const dictRow = dictRows[idx] || {};
    return {
      metric: dictRow.metric || staticConfig.metric,
      desc: dictRow.desc || staticConfig.desc,
      human: dictRow.human || staticConfig.human,
      oldBot: dictRow.bot || dictRow.oldBot || staticConfig.oldBot,
      aros: dictRow.aros || staticConfig.aros,
      status: dictRow.status || staticConfig.status
    };
  });

  // General translated tags and strings
  const section_sub = dict?.section_sub || "ANALISIS KECEKAPAN SISTEM";
  const section_title = dict?.section_title || "Perbandingan Kecekapan: AROS AI Engine vs Kaedah Biasa";
  const section_desc = dict?.section_desc || "Dalam perniagaan, angka adalah fakta mutlak. Berikut adalah perbandingan terus kecekapan antara kaedah staf manual, chatbot menu kaku, dan AROS Complete AI Engine.";
  const recommendation_badge = dict?.recommendation_badge || "REKOMENDASI (TERBAIK)";
  const performance_badge = dict?.performance_badge || "PILIHAN PRESTASI TINGGI";
  const traditional_badge = dict?.traditional_badge || "KAEDAH TRADISIONAL";
  const limited_badge = dict?.limited_badge || "SISTEM HAD LIMIT";
  const summary_heading = dict?.summary_heading || "Rumusan Kecekapan AROS:";
  const summary_desc = dict?.summary_desc || "Kelajuan membalas WhatsApp dan keupayaan melayan beratus mesej serentak adalah had biologi manusia yang mutlak. AROS dibina bukan untuk menggantikan staf jualan anda, tetapi untuk memastikan 100% leads yang masuk dilayan serta-merta tanpa sebarang keciciran jualan terutamanya waktu malam.";

  const heading_aros = dict?.matrix?.heading_aros || "▲ AROS COMPLETE AI ENGINE";
  const desc_aros = dict?.matrix?.desc_aros || "Sistem autopilot jualan pintar 24/7/365.";
  const heading_human = dict?.matrix?.heading_human || "STAF MANUAL MANUSIA";
  const desc_human = dict?.matrix?.desc_human || "Mengurus secara manual menggunakan tenaga staf.";
  const heading_bot = dict?.matrix?.heading_bot || "CHATBOT KATA KUNCI (BOT BUTANG)";
  const desc_bot = dict?.matrix?.desc_bot || "Menggunakan aliran kaku tanpa fungsi kecerdasan AI.";

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-24 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-20 max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
            <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            {section_sub}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {section_title}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            {section_desc}
          </p>
        </div>

        {/* RESPONSIVE CARDS GRID (1 column on mobile, 3 columns side-by-side on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* CARD 1: AROS CORE ENGINE */}
          <div className="rounded-3xl border-2 border-orange-500 bg-[#0F1424] p-6 lg:p-7 shadow-[0_15px_40px_rgba(249,115,22,0.12)] relative overflow-hidden flex flex-col justify-between hover:border-orange-400 transition-colors">
            <div className="absolute top-0 right-0 bg-orange-500 text-black font-mono text-[9px] font-black px-4 py-1.5 rounded-bl uppercase tracking-widest z-10">
              {recommendation_badge}
            </div>
            <div>
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                  {performance_badge}
                </span>
                <h3 className="text-xl font-black text-white mt-3">{heading_aros}</h3>
                <p className="text-xs text-neutral-400 mt-1">{desc_aros}</p>
              </div>
              
              <div className="space-y-4 text-left">
                {benchmarks.map((row, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0 text-left">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{row.metric}</div>
                    <div className="flex items-start gap-2 mt-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-white text-xs font-bold leading-relaxed">{row.aros}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: STAF MANUAL MANUSIA */}
          <div className="rounded-3xl border border-white/5 bg-[#0F1424]/60 p-6 lg:p-7 relative overflow-hidden flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase bg-white/5 px-2.5 py-1 rounded border border-white/10 text-left block w-fit">
                  {traditional_badge}
                </span>
                <h3 className="text-xl font-black text-white mt-3 text-left">{heading_human}</h3>
                <p className="text-xs text-neutral-400 mt-1 text-left">{desc_human}</p>
              </div>
              
              <div className="space-y-4 text-left">
                {benchmarks.map((row, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0 text-left">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{row.metric}</div>
                    <div className="flex items-start gap-2 mt-1.5">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-xs font-semibold leading-relaxed">{row.human}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: CHATBOT KATA KUNCI */}
          <div className="rounded-3xl border border-white/5 bg-[#0F1424]/60 p-6 lg:p-7 relative overflow-hidden flex flex-col justify-between hover:border-white/10 transition-colors">
            <div>
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase bg-white/5 px-2.5 py-1 rounded border border-white/10 text-left block w-fit">
                  {limited_badge}
                </span>
                <h3 className="text-xl font-black text-white mt-3 text-left">{heading_bot}</h3>
                <p className="text-xs text-neutral-400 mt-1 text-left">{desc_bot}</p>
              </div>
              
              <div className="space-y-4 text-left">
                {benchmarks.map((row, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0 text-left">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{row.metric}</div>
                    <div className="flex items-start gap-2 mt-1.5">
                      <X className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-xs font-semibold leading-relaxed">{row.oldBot}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* HIGH-END SYSTEM AUDIT FOOTNOTE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#0F1424] border border-white/5 px-6 py-4 rounded-xl text-xs md:text-sm text-neutral-300 font-medium max-w-3xl mx-auto shadow-xs text-left leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0 hidden sm:block" />
            <span>
              <strong>{summary_heading}</strong> {summary_desc}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
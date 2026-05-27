// path: src/app/04-timeline.js
"use client";

import React from 'react';
import { Cpu, FileCode2, GitMerge, CheckCircle2, KanbanSquare, ShieldCheck } from 'lucide-react';

export default function TimelineProcess() {
  const deliverables = [
    {
      title: "Salespage Ultra-Pantas",
      desc: "Sales page premium Next.js dioptimumkan untuk kelajuan loading bawah 0.1 saat. Prospek tak lari selepas klik iklan.",
      tag: "Halaman Jualan"
    },
    {
      title: "Otak AI Closing WhatsApp",
      desc: "Robot AI terlatih khusus mengikut skrip FAQ dan produk anda sendiri. Layan & closing leads secara automatik 24/7.",
      tag: "Otak AI Utama"
    },
    {
      title: "Auto Follow-Up Pintar",
      desc: "Sistem susulan automatik. Ia mengejar semula prospek yang 'blue-tick' atau senyap mengikut reaksi perbualan.",
      tag: "Follow-Up Auto"
    },
    {
      title: "Integrasi Bayaran Lancar",
      desc: "Pautan gerbang pembayaran (Stripe/FPX) dipasang terus di dalam sales page. Checkout pantas tanpa friction.",
      tag: "Gerbang Bayaran"
    }
  ];

  const deployment = [
    { 
      step: "01", 
      day: "Hari Pertama", 
      title: "Penyerahan Info & FAQ Produk", 
      desc: "Anda isi borang ringkas tentang bisnes, berikan FAQ produk, dan kami sambungkan nombor WhatsApp rasmi Meta Cloud API anda." 
    },
    { 
      step: "02", 
      day: "Hari Kedua", 
      title: "Latihan AI & Setup Salespage", 
      desc: "Kami mula melatih sistem AI mengikut skrip closing anda dan membina reka bentuk halaman jualan Next.js premium." 
    },
    { 
      step: "03", 
      day: "Hari Ketiga", 
      title: "Ujian Penuh & Sistem Live", 
      desc: "Kami jalankan simulasi perbualan untuk pastikan AI membalas lancar, sahkan parameter operasi, dan serahkan sistem autopilot kepada anda." 
    }
  ];

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-24 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* ROW 1: MASTER FULL-WIDTH HEADLINE */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
            <KanbanSquare className="w-3.5 h-3.5 text-orange-500" />
            GARIS MASA PELAKSANAAN
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Dari Rangka Pembangunan <br className="hidden md:block"/>
            Sehingga Sistem <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Sedia Beroperasi</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Kebocoran jualan anda bukan masalah iklan tak menarik — ia masalah sistem melayan customer. Kami bukan jual kelas atau buku panduan. Kami bertindak sebagai jurutera: bina sistem jualan tersusun, pasang AI, uji, dan serahkan enjin jualan autopilot yang lengkap kepada anda.
          </p>
        </div>

        {/* ROW 2: FLEX LAYOUT SYSTEM ROADMAP (items-stretch, lg:flex-[11] / lg:flex-[9]) */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch w-full">
          
          {/* LAJUR KIRI: WHAT WE BUILD (EXACTLY 11/20F WIDTH) */}
          <div className="w-full lg:flex-[11] shrink-0 space-y-6">
            <div className="text-left border-b border-white/5 pb-4">
              <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                KOMPONEN PEMBANGUNAN
              </span>
              <h3 className="text-xl font-black text-white mt-3 tracking-tight">Apa Yang Kami Bina</h3>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed font-medium">Empat lapisan infrastruktur utama terpasang yang akan disambung terus ke perniagaan anda.</p>
            </div>

            {/* Premium Card Grid Layout inside proportional container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {deliverables.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-white/5 bg-[#0F1424] shadow-2xs hover:shadow-md hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono font-bold text-orange-400 uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                      {idx === 0 && <FileCode2 className="w-4 h-4 text-blue-400" />}
                      {idx === 1 && <Cpu className="w-4 h-4 text-indigo-400" />}
                      {idx === 2 && <GitMerge className="w-4 h-4 text-purple-400" />}
                      {idx === 3 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <h4 className="font-black text-sm text-white mb-1.5 tracking-tight">{item.title}</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LAJUR KANAN: HOW FAST IT DEPLOYS (EXACTLY 9/20F WIDTH) */}
          <div className="w-full lg:flex-[9] shrink-0 space-y-6 lg:pl-4">
            <div className="text-left border-b border-white/5 pb-4">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                TIMELINE PEMASANGAN
              </span>
              <h3 className="text-xl font-black text-white mt-3 tracking-tight">Sistem Live Dalam Masa 3 Hari</h3>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed font-medium">Proses setup tersusun, pantas, dan telus tanpa sebarang delay.</p>
            </div>

            {/* Timeline connector snap center aligned to 36px bullets (left-18px) */}
            <div className="space-y-6 relative text-left before:absolute before:top-[18px] before:bottom-[18px] before:left-[18px] before:w-[1px] before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5">
              {deployment.map((item, idx) => (
                <div key={idx} className="flex gap-4 relative group">
                  {/* Floating Timeline Bullet node */}
                  <div className="w-9 h-9 rounded-full bg-[#0F1424] border-2 border-white/10 group-hover:border-orange-500 text-neutral-400 group-hover:text-orange-400 flex items-center justify-center font-mono font-bold text-xs z-10 shadow-2xs transition-colors duration-300">
                    {item.step}
                  </div>
                  {/* System Milestone Content Box */}
                  <div className="border border-white/5 bg-[#0F1424] rounded-xl p-5 flex-1 shadow-2xs group-hover:border-orange-500/30 transition-all duration-300">
                    <h4 className="font-black text-white text-sm mb-1 flex items-center gap-2 flex-wrap">
                      {item.title} 
                      <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                        {item.day}
                      </span>
                    </h4>
                    <p className="text-neutral-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM SPEED COMPLIANCE FOOTNOTE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-start gap-3 bg-[#0F1424] border border-white/5 px-6 py-4 rounded-xl text-xs md:text-sm text-neutral-300 font-medium max-w-3xl mx-auto shadow-xs text-left leading-relaxed w-full sm:w-auto">
            <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <span>
              <strong>Had Setup Mingguan:</strong> Kami hadkan setup kepada 3 syarikat sahaja seminggu demi menjaga kualiti setup AI dan kelajuan sales page anda pada tahap terbaik.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
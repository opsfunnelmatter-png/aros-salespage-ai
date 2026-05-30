// path: src/app/03-pain-grid.js
"use client";

import React from 'react';
import { X, ZapOff, TrendingDown, ShieldAlert, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export default function PainGrid() {
  const painCards = [
    { 
      badge: "TRAFIK BANYAK, SALES SIKIT", 
      title: "Iklan Dah Viral, Tapi Sales Tetap Flat", 
      desc: [
        "Leads mencurah masuk — tapi tiada sistem layan automatik",
        "Prospek sejuk sebab terlalu lama tunggu balas",
        "Duit ads terbakar, closing tetap sifar"
      ], 
      icon: <ZapOff className="w-5 h-5 text-red-400" />, 
      bgIcon: "bg-red-500/10 border-red-500/20", 
      footer: "TIADA SISTEM CLOSING" 
    },
    { 
      badge: "KOS LEADS MAKIN MAHAL", 
      title: "Pembaziran Kredit Iklan Setiap Minggu", 
      desc: [
        "Leads masuk banyak tapi 'sejuk' — lambat dilayan",
        "Cost-per-lead (CPL) naik, margin untung makin nipis",
        "Modal topup iklan, hasil tak setimpal"
      ], 
      icon: <TrendingDown className="w-5 h-5 text-orange-400" />, 
      bgIcon: "bg-orange-500/10 border-orange-500/20", 
      footer: "MARGIN UNTUNG NIPIS" 
    },
    { 
      badge: "DATABASE HANGUS", 
      title: "Risiko Nombor WhatsApp Kena Ban Kekal", 
      desc: [
        "Blast guna phone peribadi = risiko ban permanen Meta",
        "Database beribu pelanggan boleh hilang sekelip mata",
        "Tiada sistem rasmi = operasi jualan tak selamat"
      ], 
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />, 
      bgIcon: "bg-red-500/10 border-red-500/20", 
      footer: "RISIKO NOMBOR KENA BAN" 
    },
    { 
      badge: "LEADS MATI WAKTU TIDUR", 
      title: "Bocor 80% Leads Selepas Jam 10 Malam", 
      desc: [
        "Staff tidur, iklan tetap jalan — leads masuk pukul 2 pagi",
        "Balas esok pagi = prospek dah beli dengan pesaing",
        "80% leads waktu malam tidak pernah di-follow up"
      ], 
      icon: <Clock className="w-5 h-5 text-orange-400" />, 
      bgIcon: "bg-orange-500/10 border-orange-500/20", 
      footer: "LEADS MATI WAKTU MALAM" 
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center'
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="pain_grid_section" className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            ANALISIS KEBOCORAN JUALAN
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            4 Kebocoran Besar Yang Sedang <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Membakar Duit Iklan Anda</span>
          </h2>
        </div>

        {/* EMBLA WRAPPER */}
        <div className="relative px-8 md:px-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {painCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="flex-[0_0_100%] sm:flex-[0_0_360px] min-w-0 pl-6"
                >
                  <div className="h-full bg-[#0F1424] border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between min-h-[340px]">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-9 h-9 rounded-xl ${card.bgIcon} border flex items-center justify-center shadow-xs`}>
                          {card.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-orange-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded tracking-wide truncate max-w-[120px] sm:max-w-[200px]">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-black text-lg mb-3 text-white tracking-tight leading-snug">
                        {card.title}
                      </h3>
                      
                      <ul className="space-y-2 mt-3">
                        {card.desc.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-400 font-medium leading-snug">
                            <span className="text-orange-500/60 mt-0.5 shrink-0">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 font-mono text-xs font-bold text-red-400/90 uppercase tracking-wider">
                      <X className="w-3.5 h-3.5 text-red-500" />
                      {card.footer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <button 
            onClick={scrollPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all cursor-pointer text-neutral-400 hover:text-orange-400 md:scale-100 scale-125 bg-zinc-900/80 border border-orange-500/30 rounded-full shadow-md hover:border-orange-500/60"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all cursor-pointer text-neutral-400 hover:text-orange-400 md:scale-100 scale-125 bg-zinc-900/80 border border-orange-500/30 rounded-full shadow-md hover:border-orange-500/60"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* BRIDGE TEXT */}
        <div className="mt-16 text-center max-w-2xl mx-auto px-4 relative z-10">
          <p className="text-sm md:text-base text-neutral-300 font-medium leading-relaxed">
            Sebab itu <strong className="text-orange-400 font-black">AROS</strong> dibina. Bukan sekadar bot automatik, tetapi struktur kecerdasan buatan yang mengambil alih tugas jualan anda <span className="underline decoration-orange-500/50 underline-offset-4 font-semibold text-white">dalam masa 72 jam</span>.
          </p>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const target = document.getElementById('timeline_section');
              if (target) {
                const y = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 text-orange-400 border border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5 hover:bg-orange-500/10 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
          >
            Tengok Macam Mana AROS Selesaikan Ini →
          </button>
        </div>

      </div>
    </section>
  );
}
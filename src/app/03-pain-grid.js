// path: src/app/03-pain-grid.js
"use client";

import React from 'react';
import { X, ZapOff, TrendingDown, ShieldAlert, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export default function PainGrid() {
  const painCards = [
    { badge: "TRAFIK BANYAK, SALES SIKIT", title: "Iklan Dah Viral, Tapi Sales Tetap Flat", desc: "Kempen ads di TikTok/Facebook dah cukup viral, leads masuk mencurah-curah — tapi sales tetap sifar sebab tiada sistem penapis automatik yang tolong layan & close prospek segera.", icon: <ZapOff className="w-5 h-5 text-red-400" />, bgIcon: "bg-red-500/10 border-red-500/20", footer: "TIADA SISTEM CLOSING" },
    { badge: "KOS LEADS MAKIN MAHAL", title: "Pembaziran Kredit Iklan Setiap Minggu", desc: "Bila topup kredit iklan, lead masuk banyak tapi 'sejuk' sebab lambat layan. Akhirnya cost-per-lead (CPL) melambung naik dan margin untung makin nipis.", icon: <TrendingDown className="w-5 h-5 text-orange-400" />, bgIcon: "bg-orange-500/10 border-orange-500/20", footer: "MARGIN UNTUNG NIPIS" },
    { badge: "DATABASE HANGUS", title: "Risiko Nombor WhatsApp Kena Ban Kekal", desc: "Guna sistem blast haram atau personal phone untuk kejar customer? Bila-bila masa sahaja nombor rasmi boleh kena ban dengan Meta. Database beribu pelanggan boleh hilang sekelip mata.", icon: <ShieldAlert className="w-5 h-5 text-red-400" />, bgIcon: "bg-red-500/10 border-red-500/20", footer: "RISIKO NOMBOR KENA BAN" },
    { badge: "LEADS MATI WAKTU TIDUR", title: "Bocor 80% Leads Selepas Jam 10 Malam", desc: "Staff tidur, tapi iklan tetap berjalan 24 jam. Leads masuk pukul 2 pagi terpaksa tunggu esok pagi baru dibalas. Bila tunggu lama, prospek dah beli dengan pesaing.", icon: <Clock className="w-5 h-5 text-orange-400" />, bgIcon: "bg-orange-500/10 border-orange-500/20", footer: "LEADS MATI WAKTU MALAM" }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center'
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-20 text-white overflow-hidden">
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
            {/* Trik Embla Sebenar: 
              1. Buang 'gap-6'.
              2. Guna '-ml-6' pada container. 
              3. Guna 'pl-6' pada setiap kad. 
            */}
            <div className="flex -ml-6">
              {painCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="flex-[0_0_100%] sm:flex-[0_0_360px] min-w-0 pl-6"
                >
                  <div className="h-full bg-[#0F1424] border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between hover:border-red-500/30 transition-all duration-300 min-h-[340px]">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-9 h-9 rounded-xl ${card.bgIcon} border flex items-center justify-center shadow-xs`}>
                          {card.icon}
                        </div>
                        <span className="font-mono text-[9px] font-bold text-orange-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded tracking-wide truncate max-w-[120px] sm:max-w-[200px]">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-black text-lg mb-3 text-white tracking-tight leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-neutral-400 text-xs leading-relaxed font-medium">
                        {card.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 font-mono text-[10px] font-bold text-red-400/90 uppercase tracking-wider">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-colors cursor-pointer text-neutral-400 hover:text-orange-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-colors cursor-pointer text-neutral-400 hover:text-orange-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
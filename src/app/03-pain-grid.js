// path: src/app/03-pain-grid.js
"use client";

import React from 'react';
import { X, ZapOff, TrendingDown, ShieldAlert, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export default function PainGrid({ dict }) {
  const defaultCards = [
    { 
      icon: <ZapOff className="w-5 h-5 text-red-400" />, 
      bgIcon: "bg-red-500/10 border-red-500/20"
    },
    { 
      icon: <TrendingDown className="w-5 h-5 text-orange-400" />, 
      bgIcon: "bg-orange-500/10 border-orange-500/20"
    },
    { 
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />, 
      bgIcon: "bg-red-500/10 border-red-500/20"
    },
    { 
      icon: <Clock className="w-5 h-5 text-orange-400" />, 
      bgIcon: "bg-orange-500/10 border-orange-500/20"
    }
  ];

  const dictCards = dict?.cards || [];
  const painCards = defaultCards.map((staticConfig, idx) => {
    const dictCard = dictCards[idx] || {};
    return {
      ...staticConfig,
      badge: dictCard.badge || "",
      title: dictCard.title || "",
      desc: dictCard.bullets || dictCard.desc || [],
      footer: dictCard.footer || ""
    };
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center'
  });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const section_sub = dict?.section_sub || "ANALISIS KEBOCORAN JUALAN";
  const section_title_line1 = dict?.section_title_line1 || "4 Kebocoran Besar Yang Sedang";
  const section_title_line2 = dict?.section_title_line2 || "Membakar Duit Iklan Anda";
  const section_desc = dict?.section_desc || "Sebab itu AROS dibina. Bukan sekadar bot automatik, tetapi struktur kecerdasan buatan yang mengambil alih tugas jualan anda dalam masa 72 jam.";
  const btn_action = dict?.btn_action || "Tengok Macam Mana AROS Selesaikan Ini →";

  return (
    <section id="pain_grid_section" className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            {section_sub}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {section_title_line1} <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">{section_title_line2}</span>
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
            {section_desc}
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
            {btn_action}
          </button>
        </div>

      </div>
    </section>
  );
}
// path: src/app/01-hero.js
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeroSection({ dailyBudget }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative z-20 w-full bg-[#0B0F19] pt-8 md:pt-10 pb-24 px-6 overflow-hidden text-center">
      
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.07)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* PREMIUM HEADER NAVBAR */}
      <div className="max-w-5xl mx-auto mb-16 flex items-center justify-between gap-4 border-b border-white/5 pb-6 relative z-30">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl font-black tracking-wider text-white">AROS</span>
          <span className="text-xs font-mono font-bold tracking-widest bg-orange-500/10 text-orange-400 px-2.5 py-0.5 rounded border border-orange-500/20 select-none">
            AI AUTOMATION
          </span>
        </div>
        <div className="text-xs font-mono text-neutral-500 tracking-tight text-right select-none">
          ⚡ Powered by Bromover Resources Sdn. Bhd.
        </div>
      </div>

      {/* TOP ANCHOR BRANDING BADGE - SINGLE & CLEAN */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-center px-4 relative z-10">
        <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.05)] text-center">
          SISTEM JUALAN AUTOMATIK WHATSAPP
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* CRITICAL B2B DECLARATIVE HEADLINE */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.08] mb-8 text-white max-w-5xl mx-auto font-sans transform transition-all duration-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Leads Masuk Malam.{' '}
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(249,115,22,0.15)]">
            Esok Pagi Dah Ada Sale.
          </span>
        </h1>


        {/* METRIC SPECIFIC SUB-HEADLINE */}
        <p 
          className={`text-neutral-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium transform transition-all duration-1000 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Kami pasang sistem AI ke nombor WhatsApp rasmi anda — AI balas dalam <strong className="text-orange-400">0.2 saat</strong>, tapis prospek yang serius, dan hantar pautan pembayaran terus. <strong className="text-neutral-200">Automatik 24/7/365.</strong>
        </p>

        {/* CONVERSION DIRECT INTERACTIVE TRIGGER */}
        <div 
          className={`mb-12 transform transition-all duration-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <button 
            onClick={() => {
              const target = document.getElementById('bleeding_math_section');
              if (target) {
                const y = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-black font-black text-sm sm:text-base md:text-lg px-5 py-3.5 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-2xl cursor-pointer overflow-hidden transform transition-all duration-300 animate-premium-pulse hover:scale-[1.03] active:scale-95 whitespace-normal sm:whitespace-nowrap tracking-wide max-w-full"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Kira Berapa RM Anda Rugi Setiap Malam
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200 shrink-0" />
          </button>
          
          <div className="mt-3.5 text-xs font-mono text-neutral-400/90 tracking-wide flex items-center justify-center gap-1.5 select-none">
            ⏱️ Tak sampai 5 saat untuk dapat jawapan.
          </div>
        </div>

        {/* CREDIBILITY ANCHOR BAR */}
        <div
          className={`flex items-center justify-center gap-2 flex-wrap mb-6 transform transition-all duration-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {[
            'Bromover Resources Sdn. Bhd.',
            'EST. 2019',
            '30+ Bisnes Didigitalkan',
          ].map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest"
            >
              {i === 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              )}
              {label}
            </span>
          ))}
        </div>

        {/* EVERGREEN SUB-CTA QUANTUM BAR */}
        <div 
          className={`flex items-center justify-center gap-6 text-xs font-mono text-neutral-500 tracking-wider transform transition-all duration-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-orange-500" /> SETUP RASMI META CLOUD API (100% SELAMAT)
          </span>
        </div>

      </div>
    </section>
  );
}
// path: src/app/sticky-cta.js
"use client";
import React, { useState, useEffect } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPricingVisible, setIsPricingVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
      const pricing = document.getElementById('pricing_section');
      if (pricing) {
        const rect = pricing.getBoundingClientRect();
        setIsPricingVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleClick = () => {
    const target = document.getElementById('pricing_section');
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  if (!isVisible || isPricingVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-[#0A0E1A]/95 backdrop-blur-xl border-t border-orange-500/20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          ⚠️ Slot minggu ini hampir penuh
        </div>
        <div className="hidden md:block text-xs font-mono text-neutral-600">
          Bromover Resources Sdn. Bhd. · SSM: 201901003230
        </div>
        <button
          onClick={handleClick}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-black text-base px-6 py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer tracking-wide whitespace-nowrap shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        >
          <Lock className="w-4 h-4" />
          Kunci Slot Sekarang
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

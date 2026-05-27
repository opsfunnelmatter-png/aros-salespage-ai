// path: src/app/01-hero.js
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, AlertCircle, Cpu, Check, Activity, Zap } from 'lucide-react';

export default function HeroSection({ dailyBudget }) {
  const isBudgetCompleted = dailyBudget !== undefined && dailyBudget !== '' && parseFloat(dailyBudget) > 0;
  const [isMounted, setIsMounted] = useState(false);
  const [isBoardPulsing, setIsBoardPulsing] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [displayCheckedCount, setDisplayCheckedCount] = useState(0);
  const boardRef = useRef(null);

  const [checklist, setChecklist] = useState([
    { id: 1, text: "Salespage ultra-laju (< 0.5 saat) yang dioptimumkan untuk mobile conversion (bukan sekadar templat basic WordPress yang lambat)", checked: false },
    { id: 2, text: "Integrasi WhatsApp Cloud API rasmi Meta (bukan perisian blast haram / personal phone yang berisiko disekat bila-bila masa)", checked: false },
    { id: 3, text: "Sistem penapisan intent (Lead Filtering) automatik sebelum diproses (supaya tidak membakar masa melayan leads tidak serius)", checked: false },
    { id: 4, text: "Sistem tangkapan data automatik (Real-time Lead Capture) saat prospek mendarat, walaupun mereka menutup halaman tanpa membeli", checked: false },
    { id: 5, text: "Pautan pembayaran langsung (Payment Gateway Integration) di dalam salespage tanpa redirect luar yang membunuh momentum pembelian", checked: false },
    { id: 6, text: "Pangkalan data leads awan (Cloud Database) yang diselaraskan secara real-time untuk penjejakan analitik ROI iklan", checked: false },
    { id: 7, text: "Otak AI Agent (Autonomous Closing Engine) 24/7 tanpa henti yang terlatih mengikut tingkah laku dan skrip syarikat", checked: false },
    { id: 8, text: "Mekanisme susulan pintar (Algorithmic Follow-Up Loops) automatik berasaskan state perbualan prospek (blue-tick, senyap, atau minat)", checked: false },
    { id: 9, text: "Broadcast Engine rasmi yang dilesenkan Meta untuk menghidupkan semula cold database secara selamat tanpa risiko disekat", checked: false },
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const totalCount = checklist.length;

  const handleCalculateScore = () => {
    const currentChecked = checklist.filter(item => item.checked).length;
    const computedPercentage = Math.round((currentChecked / totalCount) * 100);
    
    setScorePercentage(computedPercentage);
    setDisplayCheckedCount(currentChecked);
    setHasCalculated(true);
  };

  const handleScrollToBoard = () => {
    setIsBoardPulsing(true);
    const target = document.getElementById('diagnostic_board');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      setIsBoardPulsing(false);
    }, 2500);
  };

  return (
    <section className="relative z-20 w-full bg-[#0B0F19] pt-40 md:pt-32 pb-24 px-6 overflow-hidden text-center">
      
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.07)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* TOP ANCHOR BRANDING BADGE - SINGLE & CLEAN */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-center px-4 relative z-10">
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.05)] text-center">
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
          className={`text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-medium transform transition-all duration-1000 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Kami pasang sistem AI ke nombor WhatsApp rasmi anda — dia balas dalam <strong className="text-orange-400">0.2 saat</strong>, tapis prospek yang serius, dan hantar pautan pembayaran terus. <strong className="text-neutral-200">Automatik 24/7</strong> tanpa anda perlu angkat jari.
        </p>

        {/* CONVERSION DIRECT INTERACTIVE TRIGGER */}
        <div 
          className={`mb-20 transform transition-all duration-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <button 
            onClick={handleScrollToBoard}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-black font-black text-sm md:text-base px-6 py-4 md:px-8 md:py-4 rounded-2xl cursor-pointer overflow-hidden transform transition-all duration-300 animate-premium-pulse hover:scale-[1.03] active:scale-95 whitespace-nowrap tracking-wide"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Semak Kebocoran Jualan Anda
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          {/* EVERGREEN SUB-CTA QUANTUM BAR */}
          <div className="mt-5 flex items-center justify-center gap-6 text-[10px] font-mono text-neutral-500 tracking-wider">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-orange-500" /> SETUP RASMI META CLOUD API (100% SELAMAT)
            </span>
          </div>
        </div>

        {/* INLINE SYSTEM DIAGNOSTIC BOARD - FULLY COMPACT FOR ALL DEVICES */}
        <div className="px-2 sm:px-0">
          <div 
            id="diagnostic_board"
            ref={boardRef}
            className={`h-[85vh] md:h-auto flex flex-col overflow-hidden max-w-4xl mx-auto rounded-3xl border bg-[#0A0E1A]/90 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative text-left border-t-white/15 transform transition-all duration-500 ${
              isBoardPulsing 
                ? 'border-orange-500 scale-[1.01] shadow-[0_0_40px_rgba(249,115,22,0.2)]' 
                : 'border-white/10'
            }`}
          >
            {/* TERMINAL BAR HEADER CONTAINER */}
            <div className="bg-[#0E1324] px-5 py-4 border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/40 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/40 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/40 inline-block" />
                <span className="text-[10px] font-mono text-neutral-400 font-bold ml-3 uppercase tracking-widest flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-orange-400" /> SYSTEM_DIAGNOSTIC_BOARD.SYS
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="hidden sm:inline-block">STATE: {hasCalculated ? "AUDIT_COMPLETED" : "READY_TO_RUN"}</span>
              </div>
            </div>

            {/* MAIN INTERNAL BOARD STRUCTURE */}
            <div className="flex-1 min-h-0 overflow-hidden flex flex-col md:block">
              
              {/* MOBILE LAYOUT (md:hidden) */}
              <div className="md:hidden flex flex-col h-full bg-[#0E1220] p-4 gap-4 overflow-hidden">
                {/* 1. Instruction Box */}
                <div className="shrink-0 space-y-3">
                  {!hasCalculated ? (
                    <div>
                      <div className={`text-[10px] uppercase font-black tracking-widest mb-1.5 flex items-center gap-1.5 transition-colors duration-500 ${isBudgetCompleted ? 'text-orange-400' : 'text-red-500'}`}>
                        <Zap className={`w-3 h-3 transition-colors duration-500 ${isBudgetCompleted ? 'text-orange-400' : 'text-red-500'}`} /> ARAHAN PENGGUNA
                      </div>
                      <div className={`p-4 rounded-xl text-xs font-bold leading-relaxed animate-pulse transition-all duration-500 ${
                        isBudgetCompleted 
                          ? 'bg-orange-500/5 border border-orange-500/30 text-orange-100' 
                          : 'bg-red-950/30 border-2 border-red-500 text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                      }`}>
                        Audit Funnel Anda: Tanda elemen yang sudah ada dalam bisnes anda sekarang.
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[10px] uppercase text-neutral-500 font-black tracking-widest mb-1.5">
                        // DIAGNOSTIC_FEEDBACK
                      </div>
                      {scorePercentage >= 80 ? (
                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl text-[11px] text-emerald-400 leading-relaxed">
                          Asas bisnes anda kukuh. Ini bermakna AROS akan berfungsi pada kapasiti tertinggi untuk memaksimumkan setiap ringgit iklan yang anda belanjakan. Sila tembus ke analisis bawah untuk meneliti impak kebocoran sisa.
                        </div>
                      ) : (
                        <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl text-[11px] text-red-400 leading-relaxed">
                          Aliran jualan dikesan mengalami kebocoran kritikal. Sistem pemasaran anda kehilangan momentum jualan berharga terutamanya luar waktu operasi.
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Checklist Section */}
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                  <div className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-2 shrink-0">
                    Tanda Elemen Yang Sudah Aktif:
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-white/10 relative">
                    {checklist.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer select-none ${
                          item.checked 
                            ? 'bg-orange-500/5 border-orange-500/30 text-white shadow-xs' 
                            : 'bg-white/[0.01] border-white/5 text-neutral-400 hover:border-white/10 hover:text-neutral-200'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          item.checked ? 'bg-orange-500 border-orange-500 text-black' : 'border-white/20 bg-transparent'
                        }`}>
                          {item.checked && <Check className="w-3 h-3 stroke-[4]" />}
                        </div>
                        <span className="text-xs font-medium leading-relaxed">{item.text}</span>
                      </button>
                    ))}
                    {/* Gradient Fade Mask */}
                    <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-8 w-full bg-gradient-to-t from-[#0E1220] to-transparent z-10" />
                  </div>
                </div>

                {/* 3. Score & Action Section */}
                <div className="shrink-0 space-y-3 pt-3 border-t border-white/5">
                  {/* Score Box */}
                  <div className={`transition-opacity duration-300 ${!hasCalculated ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="bg-black/40 border border-white/5 p-3.5 rounded-xl flex items-center justify-between gap-4">
                      <div className="text-left">
                        <div className="text-[10px] uppercase text-neutral-500 font-black tracking-widest">// AUTOMATION_DEFICIT</div>
                        <div className="text-[10px] text-neutral-400 font-bold">Kadar Kecekapan</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-black transition-colors duration-300 ${!hasCalculated ? 'text-neutral-600' : scorePercentage >= 80 ? 'text-emerald-400' : scorePercentage >= 40 ? 'text-yellow-400' : 'text-red-500'}`}>
                          {hasCalculated ? `${scorePercentage}%` : `--%`}
                        </div>
                        <div className="text-[9px] text-neutral-500">
                          {hasCalculated ? `${displayCheckedCount}/${totalCount} Aktif` : "Menunggu Diagnos"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calculate Score Button */}
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={handleCalculateScore}
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-black text-xs py-3.5 rounded-xl hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all cursor-pointer uppercase tracking-wider whitespace-nowrap active:scale-95 text-center shrink-0"
                    >
                      CALCULATE AUDIT SCORE
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-[9px] text-neutral-500 uppercase font-bold shrink-0">
                      <AlertCircle className="w-3.5 h-3.5 text-orange-500 shrink-0" /> Pengiraan memerlukan pengesahan manual
                    </div>
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT (hidden md:grid) */}
              <div className="hidden md:grid md:grid-cols-12 font-mono text-xs">
                
                {/* SIDEBAR DISPLAY (4 COLS) - PERFECTLY BALANCED HEIGHT */}
                <div className="col-span-4 bg-[#0E1220] p-6 border-r border-white/5 flex flex-col justify-between h-full gap-6">
                  {/* Box 1: User Instruction / Diagnostic Feedback */}
                  <div className="space-y-3">
                    {!hasCalculated ? (
                      <div>
                        <div className={`text-[10px] uppercase font-black tracking-widest mb-2 flex items-center gap-1.5 transition-colors duration-500 ${isBudgetCompleted ? 'text-orange-400' : 'text-red-500'}`}>
                          <Zap className={`w-3 h-3 transition-colors duration-500 ${isBudgetCompleted ? 'text-orange-400' : 'text-red-500'}`} /> ARAHAN PENGGUNA
                        </div>
                        <div className={`p-5 rounded-xl text-xs font-bold leading-relaxed animate-pulse transition-all duration-500 ${
                          isBudgetCompleted 
                            ? 'bg-orange-500/5 border border-orange-500/30 text-orange-100' 
                            : 'bg-red-950/30 border-2 border-red-500 text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                        }`}>
                          Audit Funnel Anda: Tanda elemen yang sudah ada dalam bisnes anda sekarang.
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-[10px] uppercase text-neutral-500 font-black tracking-widest mb-2">
                          // DIAGNOSTIC_FEEDBACK
                        </div>
                        {scorePercentage >= 80 ? (
                          <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl text-[11px] text-emerald-400 leading-relaxed">
                            Asas bisnes anda kukuh. Ini bermakna AROS akan berfungsi pada kapasiti tertinggi untuk memaksimumkan setiap ringgit iklan yang anda belanjakan. Sila tembus ke analisis bawah untuk meneliti impak kebocoran sisa.
                          </div>
                        ) : (
                          <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl text-[11px] text-red-400 leading-relaxed">
                            Aliran jualan dikesan mengalami kebocoran kritikal. Sistem pemasaran anda kehilangan momentum jualan berharga terutamanya luar waktu operasi.
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Box 2: Automation Deficit */}
                  <div className={`space-y-3 transition-opacity duration-300 ${!hasCalculated ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="text-[10px] uppercase text-neutral-500 font-black tracking-widest">// AUTOMATION_DEFICIT</div>
                    <div className="bg-black/40 border border-white/5 p-5 rounded-xl text-center space-y-2">
                      <div className="text-xs text-neutral-400 font-bold">Kadar Kecekapan</div>
                      <div className={`text-4xl font-black transition-colors duration-300 ${!hasCalculated ? 'text-neutral-600' : scorePercentage >= 80 ? 'text-emerald-400' : scorePercentage >= 40 ? 'text-yellow-400' : 'text-red-500'}`}>
                        {hasCalculated ? `${scorePercentage}%` : `--%`}
                      </div>
                      <div className="text-[9px] text-neutral-500">
                        {hasCalculated ? `${displayCheckedCount} daripada ${totalCount} Aktif` : "Menunggu Diagnos Penuh"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* LIVE CHECKLIST WORK AREA (8 COLS) - COMPACT SCROLL ON BOTH MOBILE & DESKTOP */}
                <div className="col-span-8 p-6 flex flex-col bg-black/20">
                  <div className="text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-4">
                    Tanda Elemen Yang Sudah Aktif Dalam Aliran Jualan Anda:
                  </div>
                  
                  {/* SCROLLABLE INNER CONTAINER - LOCKED MAX HEIGHT */}
                  <div className="space-y-2 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 relative">
                    {checklist.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`w-full flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer select-none ${
                          item.checked 
                            ? 'bg-orange-500/5 border-orange-500/30 text-white shadow-xs' 
                            : 'bg-white/[0.01] border-white/5 text-neutral-400 hover:border-white/10 hover:text-neutral-200'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          item.checked ? 'bg-orange-500 border-orange-500 text-black' : 'border-white/20 bg-transparent'
                        }`}>
                          {item.checked && <Check className="w-3 h-3 stroke-[4]" />}
                        </div>
                        <span className="text-xs font-medium leading-relaxed">{item.text}</span>
                      </button>
                    ))}

                    {/* Gradient Fade Mask (Visible to indicate scrolling) */}
                    <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-12 w-full bg-gradient-to-t from-[#090d18] to-transparent z-10" />
                  </div>

                  {/* BOTTOM ANCHORED ACTION BRIDGE */}
                  <div className="pt-5 mt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                    <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 uppercase font-bold">
                      <AlertCircle className="w-4 h-4 text-orange-500" /> Pengiraan memerlukan pengesahan manual
                    </div>
                    <button 
                      onClick={handleCalculateScore}
                      className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-black font-black text-xs px-6 py-3.5 rounded-xl hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all cursor-pointer uppercase tracking-wider whitespace-nowrap"
                    >
                      CALCULATE AUDIT SCORE
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
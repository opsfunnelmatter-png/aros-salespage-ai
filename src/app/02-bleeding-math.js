// path: src/app/02-bleeding-math.js
"use client";

import React, { useState } from 'react';
import { DollarSign, Users, TrendingDown, AlertTriangle, Calculator, ArrowRight, Edit2, Check } from 'lucide-react';

export default function BleedingMath({ dailyBudget, setDailyBudget }) {
  const [localBudget, setLocalBudget] = useState('');
  const budget = dailyBudget !== undefined ? dailyBudget : localBudget;
  const setBudget = setDailyBudget !== undefined ? setDailyBudget : setLocalBudget;

  const isIdle = !budget || budget <= 0;
  const dailyBudgetNum = budget === '' ? 0 : parseFloat(budget);
  const yearlyLoss = Math.round((dailyBudgetNum * 0.40 * 0.80) * 365);
  const monthlyBudget = Math.round(dailyBudgetNum * 30);

  const isBudgetCompleted = budget !== '' && parseFloat(budget) > 0;

  const handleScrollToDiagnostic = () => {
    const target = document.getElementById('diagnostic_board');
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const containerCardClass = isBudgetCompleted
    ? "flex-1 p-5 rounded-2xl border border-white/5 bg-[#0F1424]/60 flex gap-4 items-center transition-all duration-500 hover:bg-[#0F1424]/90 shadow-xs"
    : "flex-1 p-5 rounded-2xl border-2 border-red-500/60 bg-red-950/15 flex gap-4 items-center transition-all duration-500 hover:border-red-400/80 hover:bg-red-950/25 shadow-[0_0_20px_rgba(239,68,68,0.25)]";

  const iconContainerClass = isBudgetCompleted
    ? "p-3 rounded-xl bg-white/5 text-white flex items-center justify-center shrink-0 shadow-sm border border-white/10 transition-all duration-500"
    : "p-3 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 shadow-sm border border-red-500/20 transition-all duration-500";

  const variableTitleClass = isBudgetCompleted
    ? "text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider transition-colors duration-500"
    : "text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider transition-colors duration-500";

  const promptTextClass = isBudgetCompleted
    ? "text-[10px] text-orange-400 font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5 relative transition-colors duration-500"
    : "text-[10px] text-red-400 font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5 relative transition-colors duration-500";

  const dotClass = isBudgetCompleted
    ? "w-1.5 h-1.5 rounded-full bg-orange-500 absolute left-[1px] inline-block transition-colors duration-500"
    : "w-1.5 h-1.5 rounded-full bg-red-500 absolute left-[1px] inline-block transition-colors duration-500";

  const dotPingClass = isBudgetCompleted
    ? "w-2 h-2 rounded-full bg-orange-500 animate-ping inline-block transition-colors duration-500"
    : "w-2 h-2 rounded-full bg-red-500 animate-ping inline-block transition-colors duration-500";

  const inputClass = isBudgetCompleted
    ? "bg-black/40 border-b-2 border-orange-500/50 text-white font-black text-2xl p-2 pr-8 rounded-t-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-500 w-36 text-center min-h-[44px] focus:animate-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-all duration-500"
    : "bg-black/60 border-b-2 border-red-500 text-white font-black text-2xl p-2 pr-8 rounded-t-lg focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-500 w-36 text-center min-h-[44px] animate-pulse focus:animate-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-all duration-500";

  return (
    <section id="bleeding_math_section" className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-24 text-white overflow-hidden">
      
      {/* EXCLUSIVE INDUSTRIAL GRAPHIC BACKGROUND FOR CONTINUITY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* ROW 1: SECTION HEADER BLOCK (FULL WIDTH - MATCHES SECTION 2 & 3) */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            KALKULATOR KEBOCORAN IKLAN WHATSAPP
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Kira Berapa RM Bajet Iklan Anda <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Terbakar Setiap Malam</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Masukkan bajet iklan harian anda di bawah. Kalkulator ini akan menunjukkan anggaran matematik berapa banyak duit iklan anda hangus begitu sahaja apabila tiada staff membalas mesej selepas jam 10 malam.
          </p>
        </div>

        {/* ROW 2: SPLIT LAYOUT (Left: Inputs, Right: Severe Leakage Output) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* LEFT COLUMN: DATA INPUTS STACK (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            
            {/* Input Metric 1 */}
            <div className={containerCardClass}>
              <div className={iconContainerClass}>
                <DollarSign className="w-5 h-5"/>
              </div>
              <div className="space-y-1 w-full">
                <div className={variableTitleClass}>1. BAJET IKLAN HARIAN</div>
                <div className="text-xs text-neutral-400 font-semibold">Berapa anda spend untuk FB/TikTok Ads?</div>
                <div className={promptTextClass}>
                  <span className={dotPingClass} />
                  <span className={dotClass} />
                  <span>Masukkan bajet iklan harian anda (RM):</span>
                </div>
                <div className="flex items-center gap-2 font-black text-white text-base md:text-lg flex-wrap mt-1">
                  <span>RM</span>
                  <div className="relative inline-flex items-center">
                    <input 
                      type="number" 
                      value={budget}
                      onChange={(e) => {
                        const val = e.target.value;
                        setBudget(val === '' ? '' : parseFloat(val));
                      }}
                      className={inputClass}
                      min="0"
                      placeholder="cth: 300"
                    />
                    {isBudgetCompleted ? (
                      <Check className="w-4 h-4 text-emerald-400 absolute right-2 pointer-events-none font-bold" />
                    ) : (
                      <Edit2 className="w-4 h-4 text-red-500 absolute right-2 pointer-events-none opacity-80 animate-pulse" />
                    )}
                  </div>
                  <span>/ Hari</span>
                  <span className="text-xs font-mono font-bold text-neutral-500 ml-1 whitespace-nowrap">
                    (RM{Intl.NumberFormat('en-US').format(monthlyBudget)} / Bln)
                  </span>
                </div>
                <div className="text-[10px] italic text-neutral-500 mt-1">Anggaran kerugian tahunan dikira secara automatik.</div>
              </div>
            </div>
            
            {/* Input Metric 2 */}
            <div className={`flex-1 p-5 rounded-2xl border border-white/5 bg-[#0F1424]/60 flex gap-4 items-center transition-all duration-300 hover:bg-[#0F1424]/90 shadow-xs ${isIdle ? 'opacity-40' : 'opacity-100'}`}>
              <div className="p-3 rounded-xl bg-white/5 text-white flex items-center justify-center shrink-0 shadow-sm border border-white/10">
                <Users className="w-5 h-5"/>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">2. TRAFIK WAKTU MALAM</div>
                <div className="text-xs text-neutral-400 font-semibold">Trafik Masuk Malam (10 PM - 7 AM)</div>
                <div className="font-black text-white text-base md:text-lg">40% Leads <span className="text-xs text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 uppercase font-mono">Masuk Waktu Malam (Tiada Siapa Layan)</span></div>
              </div>
            </div>
            
            {/* Input Metric 3 */}
            <div className={`flex-1 p-5 rounded-2xl border border-red-500/20 bg-red-500/5 flex gap-4 items-center transition-all duration-300 hover:bg-red-500/10 shadow-xs ${isIdle ? 'opacity-40' : 'opacity-100'}`}>
              <div className="p-3 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 shadow-xs border border-red-500/30">
                <TrendingDown className="w-5 h-5"/>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">3. KADAR PROSPEK LARI</div>
                <div className="text-xs text-red-300/80 font-semibold">Sebab Layan Lambat / Esok Pagi Baru Balas</div>
                <div className="font-black text-red-400 text-base md:text-lg">80% Prospek Lari Sebab Lambat Balas</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CORE CALCULATION OUTPUT CONSOLE (7 COLS) */}
          <div className={`lg:col-span-7 relative rounded-3xl border-2 border-red-500/80 bg-[#0F1424] p-8 overflow-hidden shadow-[0_20px_50px_rgba(239,68,68,0.15)] flex flex-col justify-between text-center lg:text-left min-h-full transition-opacity duration-300 ${isIdle ? 'opacity-40' : 'opacity-100'}`}>
            <div className="absolute top-0 right-0 bg-red-500 text-white font-mono text-[9px] font-black px-5 py-2 rounded-b uppercase tracking-widest shadow-sm">
              ANGGARAN KERUGIAN ANDA
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="space-y-6 my-auto relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-white/5 pb-4 gap-2">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">ANGGARAN DUIT TERBAKAR SETAHUN (WASTED AD SPEND)</span>
                <span className="font-mono text-[9px] font-black text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded w-fit mx-auto lg:mx-0">SANGAT KRITIKAL</span>
              </div>
              
              {isIdle ? (
                <div className="space-y-2">
                  <div className="text-2xl font-mono text-white/30 animate-pulse [animation-duration:1s]">
                    MENUNGGU INPUT...
                  </div>
                  <div className="text-[10px] text-neutral-600 font-mono mt-4">
                    * Sila masukkan bajet iklan di sebelah kiri untuk mula pengiraan.
                  </div>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-4 justify-center lg:justify-start">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    RM{Intl.NumberFormat('en-US').format(yearlyLoss)}
                  </div>
                  <div className="text-sm font-mono font-black text-red-500 tracking-widest uppercase animate-pulse">
                    / SETAHUN HANGUS
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                <div className="text-white font-bold text-base tracking-tight">Duit Iklan Anda Lebur Begitu Sahaja</div>
                <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                  Anda bukan tak ada jualan. Prospek sentiasa ada dan iklan terus berjalan setiap malam. Tapi disebabkan tiada sistem auto-closing WhatsApp yang bersedia melayan 24/7 tanpa had, prospek yang berminat beralih arah ke pesaing yang membalas lebih cepat.
                </p>
              </div>

              {/* HIGH-INTENT BRIDGE CTA */}
              {!isIdle && (
                <div className="pt-2">
                  <button 
                    onClick={handleScrollToDiagnostic}
                    className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-black font-black text-xs py-4 rounded-xl cursor-pointer shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center tracking-wider font-sans select-none flex items-center justify-center gap-2 animate-premium-pulse"
                  >
                    Lihat Kenapa Ini Berlaku
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Micro Industrial Footer Tag */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono font-bold text-neutral-500 gap-2">
              <div className="flex items-center gap-1.5 text-red-400">
                <AlertTriangle className="w-3.5 h-3.5" /> KEBOCORAN BELUM DISELESAIKAN
              </div>
              <div className="text-right flex flex-col items-center sm:items-end">
                <div className="text-amber-400">PENGIRAAN BERDASARKAN PURATA INDUSTRI (80% DROP-OFF RATE)</div>
                <div className="text-[8px] text-neutral-600 font-mono mt-0.5 uppercase tracking-tighter">
                  [Sumber: Data Analitis Industri Meta Ads & Purata Respons WhatsApp Malaysia 2025/2026]
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
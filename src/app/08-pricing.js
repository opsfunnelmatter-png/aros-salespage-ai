// path: src/app/08-pricing.js
"use client";

import React from 'react';
import { CheckCircle2, Lock, Zap, AlertCircle, Server, Plus, Brain, Database, Tags, UserCheck, RefreshCw, Megaphone } from 'lucide-react';

export default function PricingMatrix() {
  // Pautan Stripe Dinamik untuk Checkout
  const paymentLinks = {
    frontend: {
      promo: "https://buy.stripe.com/8x25kv43sgY64lU5XJ4ZG0i", // RM570 + RM129 = RM699
      high: "https://buy.stripe.com/8x2eV59nM23c2dMadZ4ZG0j",  // RM870 + RM129 = RM999
    },
    complete: {
      promo: "https://buy.stripe.com/8x2fZ98jI0Z87y64TF4ZG0k", // RM900 + RM99 = RM999
      high: "https://buy.stripe.com/4gM14f7fE6js05EgCn4ZG0l",  // RM1400 + RM99 = RM1499
    }
  };


  const [mounted, setMounted] = React.useState(false);
  const [priceStatus, setPriceStatus] = React.useState('high'); // Default to high for safety
  const [timeLeft, setTimeLeft] = React.useState('');

  React.useEffect(() => {
    setMounted(true);

    const updateTimer = () => {
      try {
        let expiry = localStorage.getItem('aros_pricing_expiry');
        const now = Date.now();

        if (!expiry) {
          // First visit: set 24 hours countdown
          expiry = String(now + 24 * 60 * 60 * 1000);
          localStorage.setItem('aros_pricing_expiry', expiry);
          localStorage.setItem('aros_pricing_status', 'promo');
        }

        const expiryTime = parseInt(expiry, 10);
        let status = localStorage.getItem('aros_pricing_status') || 'promo';

        if (now > expiryTime) {
          if (status === 'promo') {
            status = 'high';
            localStorage.setItem('aros_pricing_status', 'high');
          } else if (status === 'rollback') {
            status = 'rollback_expired';
            localStorage.setItem('aros_pricing_status', 'rollback_expired');
          }
        }

        setPriceStatus(status);

        if (status === 'promo' || status === 'rollback') {
          const diff = expiryTime - now;
          if (diff <= 0) {
            if (status === 'promo') {
              setPriceStatus('high');
              localStorage.setItem('aros_pricing_status', 'high');
            } else {
              setPriceStatus('rollback_expired');
              localStorage.setItem('aros_pricing_status', 'rollback_expired');
            }
            setTimeLeft('');
          } else {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            const formatNum = (num) => String(num).padStart(2, '0');
            if (status === 'rollback') {
              setTimeLeft(`${formatNum(minutes)}:${formatNum(seconds)}`);
            } else {
              setTimeLeft(`${formatNum(hours)}:${formatNum(minutes)}:${formatNum(seconds)}`);
            }
          }
        } else {
          setTimeLeft('');
        }
      } catch (err) {
        setPriceStatus('high');
        setTimeLeft('');
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRollback = React.useCallback(() => {
    try {
      const now = Date.now();
      const rollbackExpiry = String(now + 1 * 60 * 60 * 1000); // 1 Hour Rollback
      localStorage.setItem('aros_pricing_expiry', rollbackExpiry);
      localStorage.setItem('aros_pricing_status', 'rollback');
      setPriceStatus('rollback');
    } catch (err) {
      // safe fallback
    }
  }, []);

  // Dynamic Prices
  const leftPrice = (mounted && (priceStatus === 'promo' || priceStatus === 'rollback')) ? 'RM699' : 'RM999';
  const leftSetupFee = (mounted && (priceStatus === 'promo' || priceStatus === 'rollback')) ? 'RM570' : 'RM870';
  const rightPrice = (mounted && (priceStatus === 'promo' || priceStatus === 'rollback')) ? 'RM999' : 'RM1,499';
  const rightSetupFee = (mounted && (priceStatus === 'promo' || priceStatus === 'rollback')) ? 'RM900' : 'RM1,400';

  const frontendCheckoutUrl = (mounted && (priceStatus === 'promo' || priceStatus === 'rollback')) 
    ? paymentLinks.frontend.promo 
    : paymentLinks.frontend.high;

  const completeCheckoutUrl = (mounted && (priceStatus === 'promo' || priceStatus === 'rollback')) 
    ? paymentLinks.complete.promo 
    : paymentLinks.complete.high;

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] py-24 text-white overflow-hidden">

      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-3 py-1.5 rounded-md border border-orange-500/20 shadow-sm">
            <Zap className="w-3.5 h-3.5" /> AROS DEPLOYMENT INVESTMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15]">
            Pelan Pelaburan <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Systems Integration</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Sistem setup premium satu kali untuk mendominasi pasaran digital. Tiada yuran agensi tersembunyi.
          </p>
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-neutral-400 shadow-inner">
              <AlertCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              Nilai Standard Pembangunan Sistem: <span className="text-base sm:text-lg font-black text-red-500 line-through animate-pulse ml-1">RM2,999</span>
            </div>
          </div>
        </div>

        {/* GOLDEN TICKET ROLLBACK BANNER */}
        {mounted && priceStatus === 'high' && (
          <div className="sticky top-24 z-40 max-w-2xl mx-auto mb-10 bg-[#0F1424]/95 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_35px_rgba(245,158,11,0.15)] transition-all duration-500">
            <div className="text-left space-y-1.5 flex-1">
              <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/25 px-2.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase">
                🔴 TAWARAN PROMO TERKUNCI
              </span>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                Kunci Harga Rollback Terakhir Anda
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                Tawaran pengenalan telah tamat tempoh. Walau bagaimanapun, anda layak menuntut 1× tiket keselamatan rollback untuk mengunci semula harga promo asal selama 1 Jam sahaja.
              </p>
            </div>
            <button 
              onClick={handleRollback}
              className="w-full sm:w-auto shrink-0 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 border border-yellow-400/40 text-black font-black uppercase tracking-widest px-6 py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:border-yellow-300 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-xs"
            >
              <Tags className="w-4 h-4 text-black shrink-0" />
              Claim Golden Ticket (Rollback)
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[11fr_13fr] gap-8 items-start max-w-5xl mx-auto">
          
          {/* ============================================================= */}
          {/* LAJUR KIRI — FRONTEND PIPELINE (Decoy Card)                    */}
          {/* ============================================================= */}
          <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-7 flex flex-col text-left group hover:border-white/10 transition-all duration-300 h-full">
            
            {/* Card Header */}
            <div className="mb-5">
              <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-1">STAGE 01 // FRONTEND ONLY</div>
              <h3 className="text-xl font-black text-white tracking-tight">Frontend Pipeline</h3>
            </div>

            {/* ENGINE 01 ONLY Visual Tag */}
            <div className="mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mb-2">TERMASUK DALAM PAKEJ INI</div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0" />
                <span className="text-[11px] text-neutral-300 font-mono font-bold">ENGINE 01: FRONTEND SAHAJA</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-700 font-mono">
                <Lock className="w-2.5 h-2.5" />
                ENGINE 02 (AI CLOSER) — TIDAK TERMASUK
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-3.5 text-xs text-neutral-300 mb-8 font-medium flex-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" /> 
                <span>Integrasi Custom Domain (.com) & Hosting (Percuma Tahun 1)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" /> 
                <span>Seni Bina Salespage Premium (Next.js/React)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" /> 
                <span>Ultra-Low Latency Load Time (&lt; 0.1s) via Edge CDN</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" /> 
                <span>High-Converting Sales Copywriting Architecture</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" /> 
                <span>Meta/TikTok Pixel Tracking Ready</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/60 shrink-0 mt-0.5" /> 
                <span>Bimbingan Setup Payment Gateway (Akaun mutlak klien)</span>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-600">
                <Lock className="w-3 h-3 shrink-0 mt-0.5" /> 
                <span>Tiada Autonomous AI Closing Brain</span>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-600">
                <Lock className="w-3 h-3 shrink-0 mt-0.5" /> 
                <span>Tiada Algorithmic Follow-Up Loops</span>
              </li>
            </ul>

            {mounted && (priceStatus === 'promo' || priceStatus === 'rollback') && (
              <div className="mb-4 bg-red-500/10 border border-red-500/25 p-3 rounded-2xl text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-red-400 font-bold tracking-wide uppercase">
                  {priceStatus === 'rollback' ? 'HARGA ROLLBACK TAMAT DALAM:' : 'HARGA PROMO TAMAT DALAM:'} {timeLeft}
                </span>
              </div>
            )}

            {/* Price Console - Stripe Breakdown */}
            <div key={leftPrice} className="mb-6 font-mono p-5 rounded-2xl bg-black/40 border border-white/5 transition-all duration-500">
              <span className="text-xs sm:text-sm text-red-500/80 line-through block font-black animate-pulse mb-1">RM1,499 VALUE</span>
              <span className="text-[9px] text-neutral-500 font-bold block mb-1 uppercase tracking-widest">Total Pelaburan Hari Ini</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-4xl font-black text-white">{leftPrice}</span>
              </div>
              
              {/* Billing Breakdown */}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-neutral-400">
                  <span>Kos Setup Sistem (One-Off):</span>
                  <span className="text-white font-bold">{leftSetupFee}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-neutral-400">
                  <span>Domain & Hosting (Tahunan):</span>
                  <span className="text-white font-bold">RM129<span className="text-neutral-500">/thn</span></span>
                </div>
              </div>
            </div>

            <a 
              href={frontendCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider transform hover:scale-[1.01] active:scale-95 text-center block"
            >
              Deploy Frontend Pipeline Only
            </a>
          </div>

          {/* ============================================================= */}
          {/* LAJUR KANAN — AROS COMPLETE ENGINE (Hero Card)                 */}
          {/* ============================================================= */}
          <div className="relative h-full flex flex-col">
            
            {/* RECOMMENDED BADGE */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-[9px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(249,115,22,0.4)] whitespace-nowrap z-20 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
              </span>
              RECOMMENDED SYSTEMS SOLUTION
            </div>

            {/* Pulsing Border Shell Overlay */}
            <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl animate-pulse pointer-events-none z-10" />

            <div className="bg-[#0F1424]/90 border-2 border-transparent rounded-3xl p-7 flex flex-col text-left shadow-[0_20px_50px_rgba(249,115,22,0.15)] relative overflow-hidden flex-1">
              
              <div className="mb-6 pt-2">
                 <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-bold">THE CORE HYBRID SYSTEM</div>
                <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight">
                  AROS Complete Autonomous AI Engine
                </h3>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed mt-2">
                  Satu pelaburan. Dua enjin beroperasi serentak — sistem hadapan dan otak AI — aktif 24/7 secara autopilot.
                </p>
              </div>

              {/* ============================================================= */}
              {/* THE UNIFIED FEATURE LIST (Vertical Stack Layout)               */}
              {/* ============================================================= */}
              <div className="mb-8 flex-1">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-3 text-center">
                  — 2 ENJIN DIINTEGRASIKAN SERENTAK —
                </div>
                
                <div className="flex flex-col gap-3">
                  
                  {/* ENGINE 01: MINIMALIST SUMMARY */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition-colors">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[9px] font-mono font-black text-neutral-500 uppercase tracking-widest">ENGINE 01</span>
                      </div>
                      <div className="text-sm font-black text-white leading-tight">
                        Frontend Pipeline <span className="text-neutral-400 font-medium text-[11px] ml-1 hidden sm:inline">— Termasuk semua spec premium.</span>
                      </div>
                      <div className="text-neutral-400 font-medium text-[11px] mt-1 sm:hidden">
                        Termasuk semua spec premium.
                      </div>
                    </div>
                  </div>

                  {/* ENGINE 02: HIGH-VALUE AI FEATURES */}
                  <div className="bg-orange-500/[0.05] border border-orange-500/25 rounded-2xl p-5 hover:border-orange-500/40 transition-colors duration-200 relative overflow-hidden">
                    {/* Subtle glow accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_70%)] pointer-events-none" />
                    
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-[10px] font-mono font-black text-orange-500/80 uppercase tracking-widest">ENGINE 02</span>
                    </div>
                    <div className="text-base font-black text-white tracking-tight mb-4 leading-tight">AI Closer System</div>
                    
                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-2.5 text-[11px] text-neutral-300">
                        <Brain className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">10-Step AI Closing Brain:</strong> Ejen pintar beroperasi 24/7 membalas soalan pelanggan tanpa henti.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[11px] text-neutral-300">
                        <Database className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Smart AI Memory:</strong> Sistem berkuasa mengingati sejarah pesanan dan rujukan perbualan prospek terdahulu.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[11px] text-neutral-300">
                        <RefreshCw className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Auto Follow-Up Loop:</strong> Kejar prospek senyap atau 'blue-tick' secara automatik mengikut logik sela masa.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[11px] text-neutral-300">
                        <Tags className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Auto-Label & Segmentation:</strong> Tagging pelanggan (Hot Lead, Support) secara *real-time* berdasarkan konteks mesej.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[11px] text-neutral-300">
                        <UserCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Seamless Human Takeover:</strong> Transisi automatik kepada *human agent* jika mengesan pelanggan marah atau isu kritikal.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[11px] text-neutral-300">
                        <Megaphone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Broadcast Blaster Engine:</strong> Keupayaan hantaran kempen promosi pukal yang selamat dari risiko nombor di-ban.</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Supplementary technical note */}
                <p className="text-[10px] text-neutral-600 font-mono mt-4 text-center">
                  + Meta Cloud API · Webhook Berenkripsi · Database Setup · 30-Hari Support
                </p>
              </div>

              {mounted && (priceStatus === 'promo' || priceStatus === 'rollback') && (
                <div className="mb-4 bg-red-500/10 border border-red-500/25 p-3 rounded-2xl text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-red-400 font-bold tracking-wide uppercase">
                    {priceStatus === 'rollback' ? 'HARGA ROLLBACK TAMAT DALAM:' : 'HARGA PROMO TAMAT DALAM:'} {timeLeft}
                  </span>
                </div>
              )}

              {/* PRICE CONSOLE - Stripe Breakdown */}
              <div key={rightPrice} className="bg-black/40 border border-orange-500/20 rounded-2xl p-5 mb-6 font-mono text-xs transition-all duration-500">
                <span className="text-xs sm:text-sm text-red-500/80 line-through block font-black animate-pulse mb-1">RM2,999 VALUE</span>
                <span className="text-[9px] text-neutral-500 font-bold block mb-1 uppercase tracking-widest">Total Pelaburan Hari Ini</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 tracking-tight">{rightPrice}</span>
                </div>
                
                {/* Billing Breakdown */}
                <div className="mt-4 pt-4 border-t border-orange-500/20 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-neutral-400">
                    <span>Kos Setup Sistem (One-Off):</span>
                    <span className="text-white font-bold">{rightSetupFee}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-neutral-400">
                    <span>Server AI, Domain & Hosting (Bulanan):</span>
                    <span className="text-orange-400 font-bold">RM99<span className="text-neutral-500">/bln</span></span>
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <a 
                href={completeCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02] font-black py-4 rounded-xl transition-all duration-200 transform active:scale-95 cursor-pointer text-sm tracking-wide text-center uppercase block"
              >
                Deploy AROS Autonomous AI Engine
              </a>
            </div>
          </div>

        </div>

        {/* INFRASTRUCTURE TRANSPARENCY BANNER */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-[#0f1424] to-[#0A0E1A] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-8 items-start">
            
            {/* Column 1 (Icon) */}
            <div className="flex justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                <Server className="w-8 h-8 text-orange-400" />
              </div>
            </div>
            
            {/* Column 2 (Features) */}
            <div className="text-left space-y-4">
              <div>
                <h4 className="text-sm md:text-base font-black text-white mb-2 uppercase tracking-wide">
                  Kenapa Ada Caj RM99/bln Untuk AROS Complete Autonomous AI Engine?
                </h4>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium">
                  Sistem AI Agent berprestasi tinggi bukan sekadar skrip bot biasa. Komitmen RM99 anda disalurkan terus untuk menggerakkan infrastruktur Enterprise yang kritikal:
                </p>
              </div>
              
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Algorithmic Auto Follow-Up:</strong> Kos pemprosesan Cloud Server untuk enjin susulan pintar yang mengejar prospek senyap atau 'blue-tick' secara automatik siang dan malam.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Official Broadcast (Blaster) Engine:</strong> Akses sistem pemasaran pukal berkelajuan tinggi menggunakan lesen rasmi Meta Cloud API tanpa risiko nombor di-ban.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Penyelenggaraan Keseluruhan:</strong> Merangkumi pengurusan token AI dinamik, pembaharuan Domain (.com), Hosting, dan Database Live Inbox 24/7.</span>
                </li>
              </ul>
            </div>

            {/* Column 3 (Comparison) */}
            <div className="bg-black/40 border border-white/5 p-5 rounded-xl h-full">
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                Sebagai perbandingan industri, platform pengurusan mesej standard seperti <strong className="text-orange-400">Sleekf***</strong> atau <strong className="text-orange-400">Resp***.io</strong> mengenakan caj bermula <strong className="text-red-400">RM300 hingga RM400+ sebulan</strong> (HANYA untuk sistem inbox kaku, tanpa sebarang kapasiti otak AI, Auto Follow-Up pintar, mahupun Blaster). 
                <br /><br />
                <strong className="text-emerald-400">RM99/bulan</strong> ini memastikan ekosistem pemasaran digital anda sentiasa berjalan secara optimum tanpa kos tersembunyi.
              </p>
            </div>

          </div>
        </div>

        {/* INFRASTRUCTURE COST DISCLAIMER */}
        <p className="text-center text-[10px] sm:text-xs text-neutral-600 mt-6 max-w-3xl mx-auto leading-relaxed px-4">
          * Nota: Komitmen penyelenggaraan tertakluk kepada kadar pembekal Cloud Server global dan Meta Cloud API. Pihak kami berhak menyemak semula kos ini dari semasa ke semasa bagi menjamin kestabilan infrastruktur sistem pada tahap optimum.
        </p>

        {/* SCARCITY INDICATOR */}
        <div className="mt-10 w-full max-w-2xl mx-auto flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono text-red-400 bg-red-500/5 border border-red-500/20 px-4 py-3 rounded-2xl select-none shadow-[0_0_20px_rgba(239,68,68,0.05)]">
          <span className="relative flex h-2 w-2 shrink-0 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="leading-relaxed font-semibold animate-pulse text-center">
            Status Semasa: Hanya tinggal 1 slot integrasi dibuka untuk minggu ini.
          </span>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-[10px] font-mono text-neutral-600 leading-relaxed uppercase tracking-widest">
            Seni Bina Sistem Diuruskan Penuh Oleh Pasukan Jurutera Bromover AI
          </p>
        </div>

      </div>
    </section>
  );
}
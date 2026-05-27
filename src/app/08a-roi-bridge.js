// path: src/app/08a-roi-bridge.js
"use client";

import React from 'react';
import { TrendingDown, Wallet, TrendingUp, ArrowRight, Calculator } from 'lucide-react';

const EXAMPLE_DAILY = 300;

export default function ROIBridge({ dailyBudget }) {
  const hasBudget = dailyBudget !== undefined && dailyBudget !== '' && parseFloat(dailyBudget) > 0;
  const effectiveDaily = hasBudget ? parseFloat(dailyBudget) : EXAMPLE_DAILY;

  // Formula sama seperti BleedingMath: 40% leads malam × 80% drop-off × 365 hari
  const yearlyLoss = Math.round(effectiveDaily * 0.40 * 0.80 * 365);
  // Kos AROS setahun penuh: RM999 setup + RM99 × 12 bulan
  const arosCostYear = 999 + 99 * 12; // = RM2,187
  const netSaving = Math.max(0, yearlyLoss - arosCostYear);

  const fmt = (n) => `RM${Intl.NumberFormat('en-US').format(n)}`;

  const handleScrollToPricing = () => {
    document.getElementById('pricing_section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const metrics = [
    {
      icon: <TrendingDown className="w-4 h-4 text-red-400 shrink-0" />,
      label: 'Anggaran Kebocoran Iklan / Tahun',
      value: fmt(yearlyLoss),
      valueClass: 'text-red-400',
      note: '40% leads malam × 80% drop-off',
    },
    {
      icon: <Wallet className="w-4 h-4 text-neutral-400 shrink-0" />,
      label: 'Kos Operasi AROS Setahun',
      value: fmt(arosCostYear),
      valueClass: 'text-white',
      note: 'RM999 setup + RM99 × 12 bulan',
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />,
      label: 'Penjimatan Bersih Anggaran',
      value: netSaving > 0 ? fmt(netSaving) : '—',
      valueClass: 'bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent',
      note: hasBudget ? 'berdasarkan bajet iklan anda' : `contoh bajet RM${EXAMPLE_DAILY}/hari`,
    },
  ];

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-16 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Label badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            {hasBudget ? 'ANALISIS ROI PERNIAGAAN ANDA' : `SIMULASI ROI — CONTOH SPEND RM${EXAMPLE_DAILY}/HARI`}
          </span>
        </div>

        {/* Main card */}
        <div className="bg-[#0F1424] border border-orange-500/20 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(249,115,22,0.08)]">

          {/* 3-column metric grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {metrics.map((m, i) => (
              <div key={i} className="p-7 text-center flex flex-col items-center gap-3">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                  {m.icon}
                  {m.label}
                </div>
                <div className={`text-3xl md:text-4xl font-black tracking-tight leading-none ${m.valueClass}`}>
                  {m.value}
                </div>
                <div className="text-[10px] font-mono text-neutral-600">
                  {m.note}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <div className="border-t border-white/5 bg-black/20 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed text-center sm:text-left max-w-md">
              Untuk bisnes yang spend iklan setiap hari,{' '}
              <strong className="text-white">kos AROS membayar dirinya sendiri</strong>{' '}
              dalam minggu pertama operasi sahaja.
            </p>
            <button
              onClick={handleScrollToPricing}
              className="group shrink-0 inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-black text-xs sm:text-sm px-7 py-3.5 rounded-2xl hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] transition-all duration-200 active:scale-95 cursor-pointer uppercase tracking-wide whitespace-nowrap"
            >
              Lihat Pelan Pelaburan AROS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

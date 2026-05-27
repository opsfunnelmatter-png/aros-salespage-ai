// path: src/app/10-bonus-stack.js
"use client";

import React from 'react';
import { Database, Wrench } from 'lucide-react';

export default function BonusStack() {
  const bonuses = [
    {
      id: "SERVICE 01",
      title: "FREE 30-Days System Fine-Tuning",
      duration: "Post-Launch",
      value: "INCLUDED FREE",
      desc: "Pemantauan logik perbualan and talaan prompt eksklusif oleh engineer kami selepas sistem live."
    },
    {
      id: "SERVICE 02",
      title: "FREE Native Database Scrubbing & Onboarding Setup",
      duration: "Onboarding Phase",
      value: "INCLUDED FREE",
      desc: "Integrasi and penyusunan semula database sedia ada secara selamat ke dalam ekosistem sistem pusat."
    }
  ];

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 border-t border-white/5 bg-[#0B0F19]">
      
      {/* Header Stack */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-400/5 px-3 py-1 rounded-md border border-emerald-400/10">
          FREE EXCLUSIVE SERVICE BONUSES
        </span>
        <h2 className="text-2xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          Servis Premium Tambahan · Termasuk Dalam Pakej
        </h2>
        <p className="text-neutral-500 mt-2 text-sm md:text-base">
          PERCUMA 2 Servis Tambahan Gred Enterprise Untuk Menjamin Kelancaran Integrasi Sistem AROS.
        </p>
      </div>

      {/* 2-Column Bonus Grid */}
      <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
        {bonuses.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent relative group backdrop-blur-sm hover:border-orange-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/5 border border-orange-500/10 px-2 py-1 rounded">
                  {item.id}
                </span>
                <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                  {idx === 0 ? <Wrench className="w-3.5 h-3.5 text-orange-400" /> : <Database className="w-3.5 h-3.5 text-orange-400" />} {item.duration}
                </span>
              </div>
              <h4 className="font-bold text-neutral-200 text-base mb-2 group-hover:text-orange-400 transition-colors font-sans tracking-tight">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-right font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Value Accumulation Summary Banner */}
      <div className="max-w-2xl mx-auto rounded-2xl border border-white/5 bg-white/[0.01] p-6 backdrop-blur-sm text-center">
        <div className="grid grid-cols-3 gap-4 text-xs font-mono text-neutral-400 mb-4">
          <div>
            <div className="text-neutral-600">Seni Bina Sistem</div>
            <div className="font-bold text-neutral-300 mt-1">Nilai RM3,098</div>
          </div>
          <div className="border-x border-white/5">
            <div className="text-neutral-600">2 Service Bonuses</div>
            <div className="font-bold text-emerald-400 mt-1">+ Nilai RM598</div>
          </div>
          <div>
            <div className="text-neutral-600">TOTAL NILAI SEBENAR</div>
            <div className="font-bold text-orange-400 mt-1">RM3,696</div>
          </div>
        </div>
        <div className="text-xs text-neutral-500 font-medium">
          Pelaburan combo premium yang membebaskan anda daripada batasan manual dan kerugian kos iklan.
        </div>
      </div>

    </section>
  );
}
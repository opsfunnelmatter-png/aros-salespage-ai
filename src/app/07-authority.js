// path: src/app/07-authority.js
"use client";

import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function AuthoritySection() {
  const pillars = [
    {
      title: "Event-Driven Workflow Orchestration",
      subtitle: "Pengurusan tugasan berasaskan trigger untuk memastikan zero-latency dalam setiap operasi."
    },
    {
      title: "Cloud-Native Resilient Infrastructure",
      subtitle: "Seni bina infrastruktur dengan uptime 99.9% yang direka khas untuk operasi mission-critical."
    },
    {
      title: "Autonomous Agentic Logic & Tuning",
      subtitle: "Custom prompt engineering dan logic tuning yang dioptimumkan untuk kadar conversion maksimum."
    },
    {
      title: "Distributed LLM Context Databases",
      subtitle: "Pengurusan database yang selamat dan pantas bagi menyimpan context perbualan secara berpusat."
    }
  ];

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-20 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* ROW 1: HEADLINE (Centered Full Width) */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-md text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest mx-auto shadow-sm">
            <Award className="w-3.5 h-3.5" /> SYSTEM ARCHITECT AUTHORITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Di Sebalik Seni Bina <br className="hidden md:block"/>
            Infrastruktur <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">AROS Engine</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Sistem automasi berdaya saing tinggi tidak lahir dari konfigurasi templat generik. Ia memerlukan ketetapan logik dan integrasi teknikal gred enterprise.
          </p>
        </div>

        {/* ROW 2: SPLIT CONTENT (Left: Extended Profile Card, Right: Bio + 2x2 Checklist Grid) */}
        {/* grid items-stretch ensures columns maintain identical height benchmarks */}
        {/* Profile Card stretches to occupy full bounds of md:col-span-4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Column Kiri: Visual Profile Card (md:col-span-4, no max-w clamp) */}
          <div className="md:col-span-4 relative group w-full h-full flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
            
            {/* Height limits scaled for responsive mobile (min-h-[280px]) and desktop (md:min-h-[440px]) layouts */}
            <div className="relative rounded-3xl border-2 border-orange-500/20 bg-[#0F1424] shadow-[0_20px_50px_rgba(249,115,22,0.08)] overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)] w-full h-full flex flex-col flex-grow min-h-[280px] md:min-h-[440px]">
              
              <div className="relative w-full h-full flex-grow flex flex-col">
                {/* THE PREMIUM EXECUTIVE IMAGE BLOCK WITH ADJUSTED FILTERS */}
                <div className="absolute inset-0 z-0 w-full h-full">
                  <img 
                    src="/image_1.jpg"
                    alt="Amin Azman - AROS System Architect" 
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 mix-blend-luminosity opacity-95 group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                
                {/* SCRIM GRAPHIC LAYER */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-5" />
                
                {/* Text and Badge Node Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10 space-y-2.5">
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <h4 className="font-black text-2xl text-neutral-100 tracking-tight">Amin Azman</h4>
                    <p className="text-[10px] font-mono text-orange-400 mt-1 uppercase tracking-widest font-black bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                      Enterprise System Architect
                    </p>
                  </div>

                  {/* Firm's Legal Registration Badge */}
                  <div className="w-full bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-xl text-[9px] font-mono font-bold text-neutral-400 whitespace-nowrap backdrop-blur-md tracking-wider shadow-sm uppercase">
                    BROMOVER RESOURCES SDN. BHD. · EST. 2019
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column Kanan: Bio Text + INTEGRATED 2x2 CHECKLIST GRID */}
          <div className="md:col-span-8 space-y-6 text-left flex flex-col justify-between h-full">
            
            {/* Top Block: Premium Copywriting (Founder-to-Founder Hard Truth with Fact Injections) */}
            <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed font-medium">
              <p>
                Agensi biasa menjual laman web. Kami membina enjin jualan berprestasi tinggi. Sejak 2022, AROS direka khusus untuk satu matlamat matematik mutlak: memaksimumkan LTV (Lifetime Value) bagi setiap klik iklan yang anda belanjakan. Melalui integrasi Custom Logic Layer dan Agentic AI Workflows terus ke dalam WhatsApp Cloud API rasmi Meta, kami menyuntik keupayaan automasi bertaraf korporat.
              </p>
              <p>
                Dengan portfolio melebihi 30 operasi perniagaan merentasi pelbagai sektor industri yang berjaya didigitalkan secara cloud-native, kami membina sistem autopilot berdaya tahan tinggi yang beroperasi tanpa henti — membebaskan perniagaan anda daripada sebarang limitasi biologi atau kesilapan manusia.
              </p>
            </div>

            {/* Bottom Block: Relocated 2x2 Automation Infrastructure Pillars with Subtitles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3.5 bg-[#0F1424] border border-white/5 p-4 rounded-xl hover:border-orange-500/30 hover:bg-white/[0.03] transition-all duration-300 text-left"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-neutral-200 font-bold leading-snug block">{pillar.title}</span>
                    <span className="text-[11px] text-neutral-400 leading-relaxed block">{pillar.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* FOOTER BADGES */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-[10px] font-mono text-neutral-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 justify-center sm:justify-start">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-neutral-400" /> ADVANCED SYSTEM ARCHITECTURE PROTOCOL SECURED
            </div>
          </div>
          <div className="tracking-wider text-center sm:text-right">
            AROS SYSTEM CORE // BROMOVER RESOURCES SDN. BHD.
          </div>
        </div>

      </div>
    </section>
  );
}
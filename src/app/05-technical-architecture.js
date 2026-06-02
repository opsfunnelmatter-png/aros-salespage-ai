// path: src/app/05-technical-architecture.js
"use client";

import React from 'react';
import { Megaphone, UserPlus, FileText, Cpu, RefreshCw, Layers, ArrowRight, ArrowDown, ShieldCheck } from 'lucide-react';

export default function TechnicalArchitecture({ dict }) {
  const defaultSteps = [
    {
      num: "01",
      badge: "Traffic Acquisition",
      log: "METRIC: CTR_OPTIMIZED",
      styles: "bg-blue-950/10 border-blue-500/20 hover:border-blue-500/50 text-neutral-200 hover:bg-blue-950/20",
      iconIndex: 0
    },
    {
      num: "02",
      badge: "Lead Capture",
      log: "API: WEBHOOK_READY",
      styles: "bg-indigo-950/10 border-indigo-500/20 hover:border-indigo-500/50 text-neutral-200 hover:bg-indigo-950/20",
      iconIndex: 1
    },
    {
      num: "03",
      badge: "Intent Warming",
      log: "FUNNEL: RAMP_UP_CONVERSION",
      styles: "bg-purple-950/10 border-purple-500/20 hover:border-purple-500/50 text-neutral-200 hover:bg-purple-950/20",
      iconIndex: 2
    },
    {
      num: "04",
      badge: "Autonomous Closing",
      log: "ENGINE: CLOSING_LIVE",
      styles: "bg-orange-950/10 border-orange-500/20 hover:border-orange-500/50 text-neutral-200 hover:bg-orange-950/20",
      iconIndex: 3
    },
    {
      num: "05",
      badge: "Lead Management",
      log: "FLOW: RECOVERY_RUN",
      styles: "bg-emerald-950/10 border-emerald-500/20 hover:border-emerald-500/50 text-neutral-200 hover:bg-emerald-950/20",
      iconIndex: 4
    },
    {
      num: "06",
      badge: "LTV Optimization",
      log: "DATABASE: LTV_MAXIMIZED",
      styles: "bg-rose-950/10 border-rose-500/20 hover:border-rose-500/50 text-neutral-200 hover:bg-rose-950/20",
      iconIndex: 5
    }
  ];

  const dictSteps = dict?.steps || [];
  const steps = defaultSteps.map((staticConfig, idx) => {
    const dictStep = dictSteps[idx] || {};
    return {
      ...staticConfig,
      num: dictStep.id || staticConfig.num,
      title: dictStep.title || "",
      desc: dictStep.desc || ""
    };
  });

  const section_sub = dict?.section_sub || "▸ ALIRAN INFRASTRUKTUR TEKNIKAL";
  const section_title_line1 = dict?.section_title_line1 || "Seni Bina Ekosistem ";
  const section_title_highlight = dict?.section_title_highlight || "Jualan Di Sebalik Tabir";
  const warn_title = dict?.warn_title || "AMARAN INFRASTRUKTUR SISTEM:";
  const warn_desc = dict?.warn_desc || "Jika sistem anda sekarang tiada struktur Fasa 03, 04, dan 05 (Intent Warming & Auto-Close), modal iklan di Fasa 01 and 02 secara matematik akan hangus dan lebur 80% begitu sahaja.";

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-24 text-white overflow-hidden">
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* SECTION SUBHEADER FOR BLUEPRINT */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-5">
          <span className="text-[10px] font-mono font-bold text-orange-400 tracking-widest uppercase bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-md w-fit mx-auto select-none">
            {section_sub}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {section_title_line1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 block sm:inline">{section_title_highlight}</span>
          </h2>
        </div>

        {/* HIGH-END STRUCTURED GRAPHIC GRID WITH INTERACTIVE CONNECTING ARROWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 text-left items-stretch relative mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col group">
              
              {/* CORE CARD COMPONENT WITH SUBTLE COLOUR VARIATION */}
              <div className={`w-full border p-6 rounded-2xl shadow-xs transition-all duration-300 flex flex-col justify-between overflow-hidden relative flex-1 ${step.styles}`}>
                
                {/* Internal Step Watermark Grid */}
                <div className="absolute -top-3 -right-3 font-mono text-7xl font-black opacity-[0.03] pointer-events-none z-0 text-white">
                  {step.num}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded shadow-2xs text-neutral-300">
                      {step.badge}
                    </span>
                    
                    {/* Icon Select Switch Matrix */}
                    <div className="text-neutral-400 group-hover:scale-110 transition-transform duration-300">
                      {step.iconIndex === 0 && <Megaphone className="w-4 h-4 text-blue-400" />}
                      {step.iconIndex === 1 && <UserPlus className="w-4 h-4 text-indigo-400" />}
                      {step.iconIndex === 2 && <FileText className="w-4 h-4 text-purple-400" />}
                      {step.iconIndex === 3 && <Cpu className="w-4 h-4 text-orange-400" />}
                      {step.iconIndex === 4 && <RefreshCw className="w-4 h-4 text-emerald-400" />}
                      {step.iconIndex === 5 && <Layers className="w-4 h-4 text-rose-400" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-black tracking-tight text-white">
                    <span className="text-neutral-400 font-mono text-sm font-bold">{step.num}.</span> {step.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Non-Repetitive Contextual System Footer Logs */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-neutral-400 font-bold">
                  <span className="text-orange-400">{step.log}</span>
                  <span className="text-emerald-400">● STABLE</span>
                </div>
              </div>

              {/* DYNAMIC CONNECTING ARROWS MATRIX */}
              {index !== 2 && index !== 5 && (
                <div className="hidden lg:flex absolute top-1/2 -right-[13px] -translate-y-1/2 z-20 w-6 h-6 items-center justify-center text-neutral-600 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              )}

              {index !== 5 && (
                <div className={`lg:hidden flex justify-center items-center w-full absolute -bottom-10 left-0 text-neutral-600 py-1 z-20 animate-pulse ${index % 2 === 1 ? 'md:flex' : 'md:hidden'}`}>
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </div>
              )}

            </div>
          ))}
        </div>

        {/* FOOTNOTE RE-ENFORCING ARCHITECT AUTHORITY - RED WARNING BOX */}
        <div className="bg-red-950/20 border border-red-500/30 p-6 rounded-2xl flex items-start gap-4 text-left max-w-3xl mx-auto shadow-md">
          <div className="bg-red-500/10 p-2 rounded-lg shrink-0">
            <ShieldCheck className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed font-medium">
            <strong className="text-red-400 block mb-1">{warn_title}</strong>
            {warn_desc}
          </p>
        </div>

      </div>
    </section>
  );
}

// path: src/app/10-faq.js
"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ dict }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!dict) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = dict.questions || [];

  return (
    <section id="faq_section" className="relative z-10 max-w-4xl mx-auto px-6 py-24 border-t border-white/5 bg-[#0B0F19]">
      
      {/* Header FAQ */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase bg-orange-400/5 px-3 py-1.5 rounded-md border border-orange-400/10 inline-flex items-center gap-1.5 shadow-sm">
          <HelpCircle className="w-3.5 h-3.5" /> {dict.section_sub}
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-4 text-white tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">{dict.section_title_line1}</span>{dict.section_title_line2}
        </h2>
        <p className="text-neutral-500 text-sm mt-2 leading-relaxed">{dict.section_desc}</p>
      </div>

      {/* FAQ Interactive Accordion List */}
      <div className="space-y-3.5 max-w-3xl mx-auto text-left mb-16 select-none">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-orange-500/20 bg-[#0F1424]' 
                  : 'border-white/5 bg-white/[0.01] hover:border-white/10'
              }`}
            >
              {/* Accordion Toggle Header */}
              <div 
                onClick={() => toggleFAQ(idx)}
                className="p-5 flex items-center justify-between cursor-pointer"
              >
                <h4 className="font-bold text-neutral-200 text-xs sm:text-sm md:text-base flex items-start gap-2 pr-4 leading-snug">
                  <span className="text-orange-500 font-mono mr-1.5">Q.</span> {item.q}
                </h4>
                <ChevronDown className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-400' : ''}`} />
              </div>

              {/* Accordion Collapsible Body */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[400px] border-t border-white/5' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="p-5 text-neutral-400 text-xs sm:text-sm leading-relaxed pl-5 font-medium bg-[#0A0E1A]/40">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🎯 THE REVERTED CRITICAL MAINTENANCE & RISK REVERSAL TERMS - SOFTENED TONE */}
      <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0F1424]/60 max-w-3xl mx-auto text-center space-y-4 backdrop-blur-sm">
        <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase bg-white/5 px-3 py-1 rounded-md border border-white/10 inline-block">
          {dict.footer_sub}
        </div>
        
        <p className="text-[11px] text-neutral-500 leading-relaxed max-w-2xl mx-auto font-medium">
          {dict.footer_grace_start}<strong className="text-neutral-300">{dict.footer_grace_highlight}</strong>{dict.footer_grace_end}
        </p>
      </div>

    </section>
  );
}
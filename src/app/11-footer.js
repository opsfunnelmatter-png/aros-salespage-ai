// path: src/app/11-footer.js
"use client";

import React from 'react';

export default function FooterSection({ dict }) {
  if (!dict) return null;

  return (
    <footer 
      className="relative z-10 bg-[#070A13] border-t border-white/10 pt-16 text-neutral-400 font-sans"
      style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
    >
      
      {/* BACKGROUND GLOW ACCENT DECOR */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* TOP BLOCK: 3-COLUMN ASYMMETRICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 pb-12 border-b border-white/5 text-left">
          
          {/* Kolum 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(249,115,22,0.3)] text-sm">
                A
              </div>
              <span className="font-bold tracking-wider text-lg text-white font-mono">AROS SYSTEM</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed font-medium">
               {dict.brand_desc_part1} <br />
               {dict.brand_desc_part2}
            </p>
          </div>

          {/* Kolum 2: Corporate Registration */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">{dict.corporate_info_title}</h4>
            <div className="text-xs leading-relaxed space-y-1">
              <div className="font-bold text-neutral-300">{dict.corporate_info_name}</div>
              <div className="text-neutral-500 font-mono text-[11px]">{dict.corporate_info_ssm}</div>
            </div>
          </div>

          {/* Kolum 3: Registered Office Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">{dict.office_title}</h4>
            <p className="text-xs text-neutral-500 leading-relaxed font-medium">
              {dict.office_line1}<br />
              {dict.office_line2}<br />
              {dict.office_line3}
            </p>
          </div>

        </div>

        {/* BOTTOM BLOCK: LEGAL TERMS & DISCLAIMER */}
        <div className="pt-8 space-y-6 text-[11px] text-neutral-600 leading-relaxed text-center">
          
          {/* Facebook Inc Mandatory Disclaimer - FORCE ALIGN CENTER */}
          <p className="italic text-center max-w-4xl mx-auto">
            {dict.disclaimer}
          </p>

          {/* Privacy Links and Copyright Summation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/[0.02]">
            <div className="flex gap-4 font-medium">
              <a href="https://bromover.com/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">{dict.link_privacy}</a>
              <span className="text-neutral-800">|</span>
              <a href="https://bromover.com/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">{dict.link_terms}</a>
            </div>
            <div className="font-mono text-[10px] tracking-wide text-neutral-500">
              {dict.copyright}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
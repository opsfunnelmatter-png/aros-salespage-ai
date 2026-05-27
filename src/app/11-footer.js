// path: src/app/11-footer.js
"use client";

import React from 'react';

export default function FooterSection() {
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
               Membina sistem jualan automatik 24/7 <br />
               untuk pemilik bisnes Malaysia.
            </p>
          </div>

          {/* Kolum 2: Corporate Registration */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">Corporate Info</h4>
            <div className="text-xs leading-relaxed space-y-1">
              <div className="font-bold text-neutral-300">BROMOVER RESOURCES SDN. BHD.</div>
              <div className="text-neutral-500 font-mono text-[11px]">SSM REG: 201901003230 (1312556-H)</div>
            </div>
          </div>

          {/* Kolum 3: Registered Office Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">Registered Office</h4>
            <p className="text-xs text-neutral-500 leading-relaxed font-medium">
              Unit B-3A-22, 4th Floor, Block B,<br />
              Ativo Plaza @ Damansara Avenue,<br />
              52200 Kuala Lumpur, Wilayah Persekutuan.
            </p>
          </div>

        </div>

        {/* BOTTOM BLOCK: LEGAL TERMS & DISCLAIMER */}
        <div className="pt-8 space-y-6 text-[11px] text-neutral-600 leading-relaxed text-center">
          
          {/* Facebook Inc Mandatory Disclaimer - FORCE ALIGN CENTER */}
          <p className="italic text-center max-w-4xl mx-auto">
            Disclaimer: This website is not part of the Facebook, Instagram, TikTok, or Twitter/X websites, nor is it affiliated with Meta Platforms, Inc., ByteDance Ltd., or X Corp. Additionally, this site is NOT endorsed by Facebook, Instagram, TikTok, or Twitter/X in any way. Facebook and Instagram are trademarks of Meta Platforms, Inc. TikTok is a trademark of ByteDance Ltd. Twitter/X is a trademark of X Corp.
          </p>

          {/* Privacy Links and Copyright Summation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/[0.02]">
            <div className="flex gap-4 font-medium">
              <a href="https://bromover.com/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
              <span className="text-neutral-800">|</span>
              <a href="https://bromover.com/terms-of-service.html" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
            </div>
            <div className="font-mono text-[10px] tracking-wide text-neutral-500">
              © 2026 Bromover Resources Sdn. Bhd. All Rights Reserved.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
// path: src/app/07-authority.js
"use client";

import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function AuthoritySection() {
  const pillars = [
    {
      title: "Penyelarasan Webhook Pantas",
      subtitle: "Integrasi sistem yang memastikan respons mesej kurang 0.2 saat tanpa sebarang delay."
    },
    {
      title: "Infrastruktur Pelayan Awan",
      subtitle: "Seni bina cloud server berdaya tahan tinggi bagi memastikan sistem WhatsApp AI anda aktif 24/7."
    },
    {
      title: "Prompt Engineering Tersuai",
      subtitle: "Otak AI dilatih khusus mengikut produk, skrip closing, dan FAQ perniagaan anda sendiri."
    },
    {
      title: "Pangkalan Data Selamat",
      subtitle: "Penyimpanan konteks perbualan pelanggan secara tersusun untuk penjejakan analitik iklan."
    }
  ];

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-20 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* ROW 0: HEADLINE (Centered Full Width) */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-md text-xs font-mono font-bold text-orange-400 uppercase tracking-widest mx-auto shadow-sm">
            <Award className="w-3.5 h-3.5" /> PENGASAS SISTEM AROS
          </div>
          

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            Di Sebalik Pembangunan <br className="hidden md:block"/>
            Enjin Automasi <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">AROS Engine</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Sistem automasi jualan yang dibina berdasarkan data jualan sebenar, bukan sekadar templat bot kosong.
          </p>
        </div>

        {/* ROW 1: 4 VISUAL FOUNDER STAT CARDS - FULL WIDTH */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-left w-full">
          {[
            {
              value: '17',
              unit: 'Tahun',
              label: 'Dalam Arena Bisnes',
              sub: 'Sejak 2008',
            },
            {
              value: 'RM12J',
              unit: 'Run Rate',
              label: 'Rekod Pelancaran',
              sub: 'Bisnes Baru Dalam Tahun Pertama',
            },
            {
              value: '6+',
              unit: 'Industri',
              label: 'Merentas Sektor',
              sub: 'MLM · Transport · F&B · Kosmetik · Suplemen · Pembinaan',
            },
            {
              value: '30+',
              unit: 'Bisnes',
              label: 'Didigitalkan',
              sub: 'Sejak Penubuhan 2019',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-black/30 border border-white/10 rounded-2xl p-5 text-center hover:border-orange-500/20 transition-colors duration-300 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                {stat.value}
                <span className="text-orange-400 text-xs font-bold ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs font-bold text-neutral-300 mt-2 leading-snug">{stat.label}</div>
              <div className="text-xs font-mono text-neutral-600 mt-1 leading-snug">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* ROW 2: SPLIT CONTENT (Col 1: Founder Image, Col 2: Founder Story & Pilot Offer) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Column 1 (gambar founder): md:col-span-4 */}
          <div className="md:col-span-4 relative group w-full h-full flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative rounded-3xl border-2 border-orange-500/20 bg-[#0F1424] shadow-[0_20px_50px_rgba(249,115,22,0.08)] overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)] w-full h-full flex flex-col flex-grow min-h-[280px] md:min-h-[440px]">
              
              <div className="relative w-full h-full flex-grow flex flex-col">
                <div className="absolute inset-0 z-0 w-full h-full">
                  <img 
                    src="/image_1.jpg"
                    alt="Amin Azman - AROS System Architect" 
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 mix-blend-luminosity opacity-95 group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-5" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10 space-y-2.5">
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <h4 className="font-black text-2xl text-neutral-100 tracking-tight">Amin Azman</h4>
                    <p className="text-xs font-mono text-orange-400 mt-1 uppercase tracking-widest font-black bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded">
                      AROS System Architect
                    </p>
                  </div>
 
                  <div className="w-full bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-xl text-xs font-mono font-bold text-neutral-400 whitespace-nowrap backdrop-blur-md tracking-wider shadow-sm uppercase">
                    BROMOVER RESOURCES SDN. BHD. · EST. 2019
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2 (founder story & pilot client offer): md:col-span-8 */}
          <div className="md:col-span-8 space-y-6 text-left flex flex-col justify-center h-full">
            
            {/* founder story */}
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed font-medium">
              <p>
                Saya berada dalam arena perniagaan sejak 2008 — 17 tahun mengharungi pasaran dan "berdarah" dalam pelbagai industri: bisnes sistem SMS, MLM, F&B, kosmetik, suplemen, hingga sektor pembinaan.
              </p>
              <p>
                Selepas bertahun-tahun mencuba, gagal, dan bangkit semula — saya menemui satu Sistem Kejuruteraan Bisnes (Business Engineering) berasaskan matematik tegar yang mengubah kompas perniagaan saya sepenuhnya. Melalui strategi Hero Product, taktik Negative CAC, dan pemaksimuman Lifetime Value (LTV), saya berjaya memacu sebuah perniagaan baru sehingga mencapai run rate RM12 Juta dalam tahun pertama.
              </p>
              <p>
                Ini bukan kebetulan atau magik — ini matematik bisnes yang boleh direplikasi.
              </p>
              <p>
                AROS adalah sistem yang lahir dari pengalaman sebenar ini. Kami bina untuk menyelesaikan masalah yang kami sendiri hadapi: leads masuk waktu tidur, tiada siapa layan, duit iklan hangus tanpa hasil. Kalau sistem ini cukup kuat untuk memacu RM12 juta, ia cukup kuat untuk menjaga setiap lead yang masuk ke bisnes anda.
              </p>
            </div>

            {/* pilot client offer */}
            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest mb-2">
                // FASA PELANCARAN AWAL — PILOT CLIENT OFFER
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                AROS kini dalam fasa pelancaran awal. Kami membuka{' '}
                <strong className="text-white">3 slot pilot klien</strong> sahaja minggu ini
                bagi memastikan setiap setup mendapat perhatian penuh pasukan jurutera kami.
                Sebagai pilot klien pertama, anda mendapat harga pelancaran — dan kami
                committed untuk sistem live dalam masa 72 jam, atau kami{' '}
                <strong className="text-white">refund 100% tanpa soal.</strong>
              </p>
            </div>

          </div>
        </div>

        {/* ROW 3: 4 EXISTING SKILL BADGES - FULL WIDTH */}
        <div className="w-full pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 bg-[#0F1424] border border-white/5 p-4 rounded-xl hover:border-orange-500/30 hover:bg-white/[0.03] transition-all duration-300 text-left"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-200 font-bold leading-snug block">{pillar.title}</span>
                  <span className="text-xs text-neutral-400 leading-relaxed block">{pillar.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER BADGES */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-xs font-mono text-neutral-500 text-center sm:text-left">
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
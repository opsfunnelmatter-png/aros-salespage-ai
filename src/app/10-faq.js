// path: src/app/10-faq.js
"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Adakah caj bulanan RM99 ini wajib? Kenapa tidak bayar one-off sahaja?",
      a: "Sistem AI Agent berprestasi tinggi bukan sekadar bot 'auto-reply' biasa. Ia menuntut kuasa pemprosesan Cloud Server 24/7, kos pemprosesan token LLM yang berat, and penyelenggaraan infrastruktur Meta Webhook yang berterusan. Sebagai perbandingan industri, platform pengurusan mesej biasa seperti Sleekf*** atau Resp***.io mengenakan caj langganan asas bermula RM300 hingga RM400+ sebulan (hanya untuk sistem inbox kaku, belum termasuk kapasiti AI). Komitmen RM99/bulan ini merangkumi kos operasi Cloud Server, pengurusan token AI, dan penyelenggaraan infrastruktur sistem anda secara berterusan."
    },
    {
      q: "Saya stuck dengan Meta Ads / TikTok Ads — sesuai ke sistem ini?",
      a: "Sangat sesuai. Sistem ini dipasang bukan untuk kurangkan kos iklan secara magik, tetapi untuk elakkan leads malam anda terbiar 'mati'. Bila conversion rate leads malam naik dari 0% ke 30%+, ROI iklan anda akan automatik jadi positif."
    },
    {
      q: "AI ni faham ke kalau pelanggan saya guna bahasa pasar atau singkatan macam 'pm brp', 'cod katne'?",
      a: "Ya, 100%. Otak AI AROS dibina menggunakan NLP (Natural Language Processing) khusus untuk pasaran Malaysia. Ia dilatih untuk memahami 99% singkatan, bahasa slanga tempatan, malah kesilapan ejaan (typo), dan akan membalas secara automatik dengan gaya bahasa yang natural seperti staf manusia yang ramah."
    },
    {
      q: "Saya bukan orang technical — boleh ikut atau uruskan ke?",
      a: "Sistem AROS berjalan di atas infrastruktur Cloud API rasmi yang telah diluluskan oleh Meta. Tugas berat setup API, konfigurasi otak AI 10-langkah, dan deployment salespage kesemuanya kami uruskan A-to-Z. Anda cuma perlu isi onboarding form mudah dan tonton video walkthrough untuk pantau dashboard."
    },
    {
      q: "Adakah sistem Autonomous AI Agent ini berisiko akaun WhatsApp kena ban?",
      a: "Kami menggunakan integrasi rasmi Cloud API WhatsApp Business (WABA) yang patuh terma Meta. Risiko ban hampir 0% berbanding jika anda menggunakan software haram jenis scraping/unofficial blast yang dilarang keras."
    },
    {
      q: "Adakah saya kena bayar kos asing untuk WhatsApp Meta Cloud API?",
      a: "Meta memberikan 1,000 perbualan PERCUMA setiap bulan untuk setiap akaun perniagaan. Majoriti perniagaan kecil tidak melebihi had percuma ini. Jika perniagaan anda berkembang dan melebihi 1,000 chat, caj langsung dari Meta adalah sekitar RM0.04 hingga RM0.12 bagi setiap sesi 24 jam. Kami akan bantu hubungkan kad debit/kredit anda terus ke Meta tanpa sebarang markup dari pihak kami."
    },
    {
      q: "Selepas pemasangan sistem integrasi ini, adakah terdapat caj tambahan lain?",
      a: "Satu-satunya komitmen berterusan sistem adalah RM99/bulan untuk kos penyelenggaraan Cloud Server infrastructure. Bagi kos penggunaan WhatsApp Cloud API, Meta memberikan 1,000 perbualan inbound (mesej masuk dari pelanggan) secara 100% PERCUMA setiap bulan. Sekiranya anda melakukan kempen outbound blasting menggunakan Meta template, caj perbualan standard akan dikenakan secara telus terus daripada kad kredit anda kepada pihak Meta tanpa sebarang markup tambahan daripada pihak kami."
    },
    {
      q: "Kalau saya tak puas hati dengan hasil, boleh minta refund?",
      a: "Jaminan Komitmen & Kualiti Penuh: Memandangkan sistem ini melibatkan kos penyediaan server awan khusus dan integrasi API rasmi Meta yang disesuaikan mengikut struktur perniagaan anda secara eksklusif, tiada pembatalan atau pulangan wang ditawarkan sebaik sahaja fasa pembangunan infrastruktur sistem anda dimulakan."
    }
  ];

  return (
    <section id="faq_section" className="relative z-10 max-w-4xl mx-auto px-6 py-24 border-t border-white/5 bg-[#0B0F19]">
      
      {/* Header FAQ */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase bg-orange-400/5 px-3 py-1.5 rounded-md border border-orange-400/10 inline-flex items-center gap-1.5 shadow-sm">
          <HelpCircle className="w-3.5 h-3.5" /> OBJECTION KILLER QUESTIONS
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-4 text-white tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Soalan Lazim</span> (FAQ)
        </h2>
        <p className="text-neutral-500 text-sm mt-2 leading-relaxed">Semua jawapan teknikal dan komersial yang anda perlu tahu.</p>
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
          KOMITMEN PERKHIDMATAN BERTERUSAN
        </div>
        
        <p className="text-[11px] text-neutral-500 leading-relaxed max-w-2xl mx-auto font-medium">
          Sekiranya langganan dihentikan, sistem anda akan memasuki fasa <strong>30-Hari Grace Period</strong> untuk penangguhan sementara sebelum akaun dinyahaktifkan secara automatik demi menjamin integriti data server. Pengaktifan semula selepas fasa tersebut akan tertakluk kepada caj penyambungan semula standard syarikat.
        </p>
      </div>

    </section>
  );
}
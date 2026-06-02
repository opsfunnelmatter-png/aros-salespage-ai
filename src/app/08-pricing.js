// path: src/app/08-pricing.js
"use client";

import React from 'react';
import { CheckCircle2, Lock, Zap, AlertCircle, Brain, Database, Tags, UserCheck, RefreshCw, Megaphone } from 'lucide-react';

export default function PricingMatrix({ dict, lang = 'bm' }) {
  // Pautan Stripe Dinamik untuk Checkout
  const paymentLinks = {
    frontend: "https://buy.stripe.com/8x25kv43sgY64lU5XJ4ZG0i", // RM699 (Starter)
    aiAgent: "https://buy.stripe.com/cNi8wHdE2bDM5pY3PB4ZG0m",  // RM699 (AROS AI Agent)
    complete: "https://buy.stripe.com/8x2fZ98jI0Z87y64TF4ZG0k"  // RM999 (Complete)
  };

  const [promoDate, setPromoDate] = React.useState('');

  React.useEffect(() => {
    // Generate dynamic localized week range
    const today = new Date();
    const day = today.getDay();
    const diffToMonday = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.getFullYear(), today.getMonth(), diffToMonday);
    
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    
    const months = {
      bm: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      zh: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    };
    
    const currentMonths = months[lang] || months.bm;
    
    const startDay = monday.getDate();
    const startMonth = currentMonths[monday.getMonth()];
    const endDay = sunday.getDate();
    const endMonth = currentMonths[sunday.getMonth()];
    
    let dateStr = '';
    if (monday.getMonth() === sunday.getMonth()) {
      if (lang === 'zh') {
        dateStr = `${monday.getFullYear()}年${startMonth}${startDay}日 - ${endDay}日`;
      } else {
        dateStr = `${startDay} - ${endDay} ${startMonth} ${sunday.getFullYear()}`;
      }
    } else {
      if (lang === 'zh') {
        dateStr = `${monday.getFullYear()}年${startMonth}${startDay}日 - ${endMonth}${endDay}日`;
      } else {
        dateStr = `${startDay} ${startMonth} - ${endDay} ${endMonth} ${sunday.getFullYear()}`;
      }
    }
    setPromoDate(dateStr);
  }, [lang]);

  if (!dict) return null;

  const starterPkg = dict.packages?.starter;
  const agentPkg = dict.packages?.agent;
  const completePkg = dict.packages?.complete;

  return (
    <section id="pricing_section" className="relative z-10 w-full bg-[#0B0F19] py-24 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-3 py-1.5 rounded-md border border-orange-500/20 shadow-sm">
            <Zap className="w-3.5 h-3.5" /> {dict.section_sub}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15]">
            {dict.section_title_line1}<span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">{dict.section_title_highlight}</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            {dict.section_desc}
          </p>
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-xl text-xs font-mono text-orange-400">
              <AlertCircle className="w-3.5 h-3.5 text-orange-400 shrink-0 animate-pulse" />
              {dict.early_adopter_badge}
            </div>
          </div>
        </div>

        {/* PROMO TIME AND SLOT BANNER */}
        {promoDate && (
          <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(249,115,22,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left pl-2">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-black text-orange-400 uppercase tracking-widest bg-orange-500/10 px-2.5 py-1 rounded">
                  {dict.promo_badge}
                </span>
                <p className="text-sm text-neutral-300 font-medium pt-1">
                  {dict.promo_text_start}<strong className="text-white text-base font-black underline decoration-orange-500 underline-offset-4">{promoDate}</strong>{dict.promo_text_end}
                </p>
              </div>
              <div className="flex items-start gap-3 bg-orange-500/10 border border-orange-500/15 p-4 rounded-xl h-full justify-center flex-col md:flex-row">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="relative flex h-2 w-2 mt-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                </div>
                <p className="text-xs text-orange-200/90 leading-relaxed font-medium">
                  {dict.promo_limit_note}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* ============================================================= */}
          {/* COLUMN KIRI — SALESPAGE STARTER & AROS AI AGENT               */}
          {/* ============================================================= */}
          <div className="flex flex-col gap-8 lg:h-full">
            
            {/* PAKEJ 1 — SALESPAGE STARTER */}
            {starterPkg && (
              <div className="bg-[#0F1424]/40 border border-white/5 rounded-3xl p-6 sm:p-7 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between lg:h-full">
                <div className="text-left">
                  <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-1">{starterPkg.badge}</div>
                  <h3 className="text-xl font-black text-white tracking-tight">{starterPkg.name}</h3>
                  <p className="text-xs text-neutral-400 font-medium mt-1 mb-5 leading-relaxed">
                    {starterPkg.desc}
                  </p>
                  
                  {/* Features List */}
                  <div className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mb-3">{starterPkg.spec_label}</div>
                  <ul className="space-y-2.5 text-xs text-neutral-300 font-medium mb-6">
                    {starterPkg.specs?.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500/60 shrink-0 mt-0.5" /> 
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-left border-t border-white/5 pt-5 mt-auto">
                  {/* Price Console */}
                  <div className="mb-4 font-mono p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-red-500/80 line-through block font-black mb-0.5">{starterPkg.value_label}</span>
                    <span className="text-[8px] text-neutral-500 font-bold block mb-0.5 uppercase tracking-widest">{starterPkg.investment_label}</span>
                    <div className="flex items-baseline gap-0.5 mb-1">
                      <span className="text-2xl font-black text-white">{starterPkg.price}</span>
                    </div>
                    <div className="text-[9px] text-neutral-400 leading-relaxed">
                      {starterPkg.renewal_note}
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      window.location.href = paymentLinks.frontend;
                    }}
                    className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold py-3 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider text-center block"
                  >
                    {starterPkg.btn_cta}
                  </button>
                </div>
              </div>
            )}

            {/* PAKEJ 2 — AROS AI AGENT */}
            {agentPkg && (
              <div className="bg-[#0F1424]/40 border border-white/5 rounded-3xl p-6 sm:p-7 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between lg:h-full">
                <div className="text-left">
                  <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-1">{agentPkg.badge}</div>
                  <h3 className="text-xl font-black text-white tracking-tight">{agentPkg.name}</h3>
                  <p className="text-xs text-neutral-400 font-medium mt-1 mb-5 leading-relaxed">
                    {agentPkg.desc}
                  </p>
                  
                  {/* Features List */}
                  <div className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mb-3">{agentPkg.spec_label}</div>
                  <ul className="space-y-2.5 text-xs text-neutral-300 font-medium mb-6">
                    {agentPkg.specs_bold?.map((spec, i) => {
                      const iconMap = [
                        <Brain className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
                        <Database className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
                        <RefreshCw className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
                        <Tags className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
                        <UserCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
                        <Megaphone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      ];
                      return (
                        <li key={i} className="flex items-start gap-2">
                          {iconMap[i] || <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />}
                          <span><strong className="text-white">{spec.title}</strong>{spec.desc}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="text-left border-t border-white/5 pt-5 mt-auto">
                  {/* Price Console */}
                  <div className="mb-4 font-mono p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-red-500/80 line-through block font-black mb-0.5">{agentPkg.value_label}</span>
                    <span className="text-[8px] text-neutral-500 font-bold block mb-0.5 uppercase tracking-widest">{agentPkg.investment_label}</span>
                    <div className="flex items-baseline gap-0.5 mb-1">
                      <span className="text-2xl font-black text-white">{agentPkg.price}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center text-[10px]">
                      <span className="text-neutral-500">{agentPkg.monthly_label}</span>
                      <span className="text-orange-400 font-bold text-sm">{agentPkg.monthly_fee}<span className="text-neutral-500 text-[10px]">{agentPkg.monthly_unit}</span></span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      window.location.href = paymentLinks.aiAgent;
                    }}
                    className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold py-3 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider text-center block"
                  >
                    {agentPkg.btn_cta}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* ============================================================= */}
          {/* COLUMN KANAN — AROS COMPLETE AI ENGINE                        */}
          {/* ============================================================= */}
          {completePkg && (
            <div id="complete_price_card" className="relative flex flex-col lg:h-full mt-6 lg:mt-0">
              {/* RECOMMENDED BADGE */}
              <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-[9px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(249,115,22,0.4)] whitespace-nowrap z-20 flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
                </span>
                {completePkg.top_badge}
              </div>

              {/* Pulsing Border Shell Overlay */}
              <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl animate-pulse pointer-events-none z-10" />

              <div className="bg-[#0F1424]/90 border-2 border-transparent rounded-3xl p-6 sm:p-8 flex flex-col justify-between lg:h-full shadow-[0_20px_50px_rgba(249,115,22,0.15)] relative overflow-hidden">
                <div className="text-left">
                  <div className="text-[9px] font-mono text-orange-400 uppercase tracking-widest font-bold mb-1">{completePkg.badge}</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">{completePkg.name}</h3>
                  <p className="text-xs text-neutral-400 font-medium leading-relaxed mt-1 mb-5">
                    {completePkg.desc}
                  </p>

                  {/* Features List */}
                  <div className="text-[9px] font-mono text-orange-500/80 uppercase tracking-widest mb-3">{completePkg.spec_label}</div>
                  <ul className="space-y-2.5 text-xs text-neutral-300 font-medium mb-6">
                    {completePkg.specs_bold?.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">{spec.title}</strong>{spec.desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BREAKDOWN NILAI KOMPONEN */}
                  <div className="mb-6 bg-black/20 border border-white/5 rounded-2xl p-4">
                    <div className="text-[9px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-3">{completePkg.breakdown_label}</div>
                    <div className="space-y-2">
                      {[
                        { label: 'Custom Next.js Salespage (Mobile-Optimised)', value: 'RM 1,499' },
                        { label: 'AI Training + Prompt Engineering', value: 'RM 700' },
                        { label: 'Meta Cloud API Integration + Setup', value: 'RM 500' },
                        { label: 'Webhook + Database Architecture', value: 'RM 400' },
                        { label: '30-Day Post-Launch Support', value: 'RM 299' },
                        { label: 'Meta Cloud API License (Bulan 1)', value: 'RM 299' },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center gap-3">
                          <span className="text-[10px] font-mono text-neutral-500 leading-snug">{item.label}</span>
                          <span className="text-[10px] font-mono font-black text-neutral-300 shrink-0">{item.value}</span>
                        </div>
                      ))}
                      <div className="border-t border-white/10 pt-2 mt-1 flex justify-between items-center">
                        <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wide">{completePkg.value_label}</span>
                        <span className="text-xs font-mono font-black text-red-400/80 line-through">{completePkg.value_price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-left border-t border-white/5 pt-6 mt-6">
                  {/* PRICE CONSOLE */}
                  <div className="bg-black/40 border border-orange-500/20 rounded-xl p-4 mb-4 font-mono text-xs">
                    <span className="text-[10px] text-red-500/80 line-through block font-black mb-0.5">{completePkg.value_price}</span>
                    <span className="text-[8px] text-neutral-500 font-bold block mb-0.5 uppercase tracking-widest">{completePkg.investment_label}</span>
                    <div className="flex items-baseline gap-0.5 mb-2">
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 tracking-tight">{completePkg.price}</span>
                    </div>
                    
                    <div className="text-[9px] font-mono text-neutral-500 leading-relaxed pb-2.5 border-b border-white/5 mb-1">
                      {completePkg.separate_buy_label}{' '}
                      <span className="line-through text-neutral-600">{completePkg.separate_buy_price}</span>
                      <span className="text-orange-400 font-bold ml-2">{completePkg.bundle_save_label}</span>
                    </div>
                    
                    {/* Billing Breakdown */}
                    <div className="mt-3 pt-3 border-t border-orange-500/20 space-y-1.5">
                      <div className="text-[9px] text-orange-400 leading-relaxed font-bold">
                        {completePkg.fire_save_desc}
                      </div>
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        <p className="text-[9px] text-neutral-300 leading-relaxed font-medium">
                          {completePkg.unstop_desc_start}{' '}
                          <strong className="text-white">{completePkg.unstop_desc_end}</strong>
                        </p>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-neutral-500 font-mono">{agentPkg.monthly_label}</span>
                          <span className="text-orange-400 font-bold text-sm">{agentPkg.monthly_fee}<span className="text-neutral-500 text-[10px]">{agentPkg.monthly_unit}</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA BUTTON */}
                   <button 
                    onClick={() => {
                      window.location.href = paymentLinks.complete;
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02] font-black py-3 rounded-xl transition-all duration-200 transform active:scale-95 cursor-pointer text-xs uppercase tracking-wider text-center block"
                  >
                    {completePkg.btn_cta}
                  </button>

                  {/* 100% DONE-FOR-YOU (DFY) GUARANTEE */}
                  <div className="mt-6 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold text-sm tracking-wide uppercase">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {dict.dfy_badge}
                    </div>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {dict.dfy_title}<span className="text-zinc-200 font-medium">{dict.dfy_highlight}</span>{dict.dfy_desc}
                    </p>
                  </div>

                  {/* MICRO-TRUST ANCHORS */}
                  <div className="mt-4 text-center flex flex-wrap items-center justify-center gap-1.5 text-[8px] sm:text-[9px] font-mono text-neutral-500 select-none">
                    <span>{dict.secure_payment_label}</span>
                    <span>•</span>
                    <span>Secure Stripe Checkout</span>
                    <span>•</span>
                    <span>{dict.secure_payment_label.includes('安全') ? 'Bromover Resources Sdn. Bhd. (201901003230) 公司认证' : dict.secure_payment_label.includes('Secure') ? 'Bromover Resources Sdn. Bhd. (201901003230) SSM Corporate Compliance' : 'Bromover Resources Sdn. Bhd. (201901003230) SSM Perkhidmatan Terjamin'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>


        {/* NO-MARKUP COST GUARANTEE */}
        <div className="max-w-3xl mx-auto mt-8 bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex items-start gap-3 text-left">
          <div className="w-5 h-5 shrink-0 mt-0.5">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-orange-400 w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
              {dict.fee_faq_q}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-2">
              {dict.fee_faq_a_part1}<strong className="text-white">{dict.fee_faq_a_salary}</strong>{dict.fee_faq_a_part2}<strong className="text-white">{dict.fee_faq_a_inbox_cost}</strong>{dict.fee_faq_a_part3}
            </p>
            <div className="mt-3 pt-3 border-t border-white/5 text-xs font-mono text-neutral-500">
              {dict.entity_verification_label}<strong className="text-neutral-400">{dict.corporate_title_raw}</strong>
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-neutral-600 leading-relaxed uppercase tracking-widest">
            {dict.footer_architecture_note}
          </p>
        </div>

      </div>
    </section>
  );
}
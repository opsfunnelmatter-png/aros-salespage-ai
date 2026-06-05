// path: src/app/08-pricing.js
"use client";
import React from 'react';
import { CheckCircle2, Lock, Zap, AlertCircle, Brain, Database, Tags, UserCheck, RefreshCw, Megaphone, ShieldCheck, ArrowRight } from 'lucide-react';

/* ─── Inline SVG Platform Logos ─────────────────────────────────────────── */
const TikTokSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="TikTok">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const MetaSVG = ({ className }) => (
  <svg viewBox="0 0 40 20" className={className} fill="currentColor" aria-label="Meta">
    <path d="M4 10c0-3.3 1.6-6 3.5-6S11 7 11 10s-1.6 6-3.5 6S4 13.3 4 10zm9 0c0-4.4 2.5-8 5.5-8S24 5.6 24 10s-2.5 8-5.5 8S13 14.4 13 10zm11 0c0-4.7 1.6-8 3.5-8S31 5.3 31 10s-1.6 8-3.5 8S24 14.7 24 10z" />
  </svg>
);

const InstagramSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Instagram">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const YouTubeSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="YouTube">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1C4.4 20.5 12 20.5 12 20.5s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
  </svg>
);

const WordPressSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="WordPress">
    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.109m-7.981.105c.647-.033 1.232-.099 1.232-.099.582-.066.514-.93-.067-.896 0 0-1.743.137-2.87.137-1.057 0-2.84-.137-2.84-.137-.583-.034-.65.863-.068.896 0 0 .54.066 1.121.099l1.665 4.552-2.338 7.003L7.375 6.93c.648-.033 1.232-.099 1.232-.099.583-.066.515-.93-.065-.896 0 0-1.744.137-2.87.137-.202 0-.44-.005-.692-.015C7.27 3.766 9.483 2.5 12 2.5c1.907 0 3.645.734 4.94 1.93-.031-.002-.062-.004-.094-.004-1.055 0-1.804.92-1.804 1.903 0 .886.513 1.634 1.057 2.521.41.72.89 1.643.89 2.977 0 .921-.354 1.993-.821 3.479l-1.075 3.585-3.9-11.56m9.921-1.557c.017.286.026.576.026.87 0 1.261-.235 2.677-.94 4.451l-3.779 10.925C22.073 19.107 24 15.765 24 12c0-1.999-.518-3.879-1.432-5.504m-7.928 14.302L12.183 22.5c-1.504-.05-2.934-.396-4.228-.979l3.337-9.678 3.189 8.832zm-7.593-2.055L3.631 9.25a9.456 9.456 0 0 0-.404 2.75c0 2.641 1.065 5.04 2.79 6.817M1.154 9.333A11.531 11.531 0 0 0 .5 12c0 5.695 3.315 10.632 8.146 12.97L1.154 9.333z"/>
  </svg>
);

const ShopifySVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Shopify">
    <path d="M15.337.15a.402.402 0 0 0-.37-.143c-.148.02-3.384.627-3.384.627L9.2 2.857l-.83-.098C7.674 1.774 6.956 1.5 6.12 1.5c-1.83 0-2.72 2.284-3.003 3.444l-1.29.4C1 5.667.98 5.686.94 6.068L0 20.07l14.336 2.43L24 20.444V19.6S15.535.526 15.337.15zM11.43 1.98l-1.563 1.507a3.19 3.19 0 0 0-2.023-.673c.13-.93.637-2.745 1.775-2.745a.98.98 0 0 1 .45.104zM8.945 7.41l-2.027-1.098c.4-1.444.99-2.103 1.553-2.103.473 0 .79.308.99.607zm.58-1.667a3.028 3.028 0 0 0-1.175-.44l.614-1.834zm1.252-.34-.758-1.764 2.056-1.99C12.415 3.29 11.26 5.22 10.777 5.403z"/>
  </svg>
);

const WooCommerceSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="WooCommerce">
    <path d="M21.791 0H2.21C.988 0 0 .988 0 2.21v13.256c0 1.22.988 2.21 2.21 2.21h8.728l2.97 6.324 2.971-6.323h4.912c1.22 0 2.21-.99 2.21-2.21V2.21C24 .988 23.012 0 21.791 0zM4.196 12.57a.8.8 0 0 1-.805-.605l-1.31-5.882A.8.8 0 0 1 2.86 5.1h.003a.8.8 0 0 1 .78.62l.753 3.39 1.48-2.95a.8.8 0 0 1 1.433.008l1.308 2.858.728-3.306a.8.8 0 0 1 1.567.313l-1.31 5.882a.8.8 0 0 1-1.487.136L6.59 8.77l-1.56 3.282a.8.8 0 0 1-.834.518zm12.85.605h-4.11a.8.8 0 0 1-.8-.8V7.4a.8.8 0 0 1 1.6 0v4.175h3.31a.8.8 0 0 1 0 1.6z"/>
  </svg>
);

export default function PricingMatrix({ dict, lang = 'bm' }) {
  const paymentLink = "https://buy.stripe.com/cNi9ALgQe23cdWufyj4ZG0n";
  const [promoDate, setPromoDate] = React.useState('');
  React.useEffect(() => {
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
  const pkg = dict.packages?.solo;
  if (!pkg) return null;
  const iconMap = [
    <Brain className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
    <Database className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
    <RefreshCw className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
    <Tags className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
    <UserCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
    <Megaphone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />,
  ];
  return (
    <section id="pricing_section" className="relative z-10 w-full bg-[#0B0F19] py-24 text-white overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-2xl md:max-w-4xl mx-auto px-6 relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center mb-14 space-y-4">
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
        
        {/* INTEGRATION CAPSULE */}
        <div className="flex justify-center mb-8 relative z-20 animate-fade-in">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 bg-white/[0.02] border border-white/[0.08] px-4 py-2.5 rounded-2xl text-[9px] sm:text-[10px] font-mono font-bold tracking-wide text-neutral-300">
            <span className="text-neutral-200 uppercase tracking-widest leading-none whitespace-nowrap">ZERO TOUCH. ZERO DOWNTIME. ZERO DISRUPTION.</span>
            <span className="hidden sm:inline text-neutral-700">│</span>
            <div className="flex items-center gap-2.5 text-neutral-400 shrink-0">
              <TikTokSVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
              <MetaSVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
              <InstagramSVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
              <YouTubeSVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
              <WordPressSVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
              <ShopifySVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
              <WooCommerceSVG className="h-3 w-auto text-neutral-400 hover:text-white transition-colors duration-200" />
            </div>
          </div>
        </div>

        {/* SINGLE HERO PRICING CARD */}
        <div className="relative">
          {/* RECOMMENDED BADGE */}
          <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-[9px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(249,115,22,0.4)] whitespace-nowrap z-20 flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
            </span>
            {pkg.badge}
          </div>
          {/* PULSING BORDER OVERLAY */}
          <div className="absolute inset-0 border-2 border-orange-500 rounded-3xl animate-pulse pointer-events-none z-10" />
          <div className="bg-[#0F1424]/90 border-2 border-transparent rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(249,115,22,0.15)] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-stretch text-left">
              {/* LEFT COLUMN: Top Half Content */}
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* PACKAGE HEADER */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{pkg.name}</h3>
                    <p className="text-sm text-neutral-400 font-medium mt-1.5 leading-relaxed">{pkg.desc}</p>
                  </div>
                  {/* BOT DIFFERENTIATION BLOCK */}
                  <div className="mb-6 p-4 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                    <div className="text-sm font-bold text-orange-400 mb-1">{dict.bot_diff_title}</div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-medium">{dict.bot_diff_desc}</p>
                  </div>
                  {/* FEATURES LIST */}
                  <div className="text-[9px] font-mono text-orange-500/80 uppercase tracking-widest mb-3">{pkg.spec_label}</div>
                  <ul className="space-y-2.5 text-xs text-neutral-300 font-medium mb-6">
                    {pkg.specs_bold?.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {iconMap[i] || <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />}
                        <span><strong className="text-white">{spec.title}</strong>{spec.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* VALUE BREAKDOWN */}
                <div className="bg-black/20 border border-white/5 rounded-2xl p-4">
                  <div className="text-[9px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-3">{pkg.breakdown_label}</div>
                  <div className="space-y-2">
                    {pkg.breakdown_items?.map((item, i) => (
                      <div key={i} className="flex justify-between items-center gap-3">
                        <span className="text-[10px] font-mono text-neutral-500 leading-snug">{item.label}</span>
                        <span className="text-[10px] font-mono font-black text-neutral-300 shrink-0">{item.value}</span>
                      </div>
                    ))}
                    <div className="border-t border-white/10 pt-2 mt-1 flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wide">{pkg.value_label}</span>
                      <span className="text-xs font-mono font-black text-red-400/80 line-through">{pkg.value_price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Bottom Half Content */}
              <div className="flex flex-col justify-between h-full md:border-l md:border-white/5 md:pl-8 pt-6 md:pt-0 border-t border-white/5 md:border-t-0">
                <div>
                  {/* URGENCY BLOCK */}
                  <div className="mb-4 bg-orange-500/5 border border-orange-500/20 rounded-xl p-4 text-left">
                    <div className="text-[10px] font-mono font-black text-orange-400 uppercase tracking-widest mb-1.5">
                      {lang === 'zh' ? '本周特惠' : lang === 'en' ? 'THIS WEEK PROMOTION' : 'PROMOSI MINGGU INI'}
                    </div>
                    <p className="text-xs text-neutral-300 font-semibold mb-2 leading-relaxed">
                      {dict.promo_text_start || "Harga promo pelancaran awal ini sah dari "}<span className="text-white font-black underline decoration-orange-500 underline-offset-2">{promoDate || "1 - 7 Jun 2026"}</span>{dict.promo_text_end || " sahaja."}
                    </p>
                    <div className="flex items-start gap-2 text-[10px] text-neutral-400 leading-normal border-t border-white/5 pt-2 mt-2 font-medium">
                      <span className="relative flex h-1.5 w-1.5 mt-1 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                      </span>
                      <span>{dict.promo_limit_note || "Slot setup mingguan dihadkan bagi mengekalkan kualiti konfigurasi AI optimum untuk setiap klien."}</span>
                    </div>
                  </div>

                  {/* PRICE CONSOLE */}
                  <div className="bg-black/40 border border-orange-500/20 rounded-xl p-5 mb-4 font-mono">
                    <span className="text-[10px] text-red-500/80 line-through block font-black mb-0.5">{pkg.value_price}</span>
                    <span className="text-[8px] text-neutral-500 font-bold block mb-1 uppercase tracking-widest">{pkg.investment_label}</span>
                    <div className="flex items-baseline gap-0.5 mb-2">
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 tracking-tight">{pkg.price}</span>
                    </div>
                    <div className="text-[9px] font-mono text-neutral-500 mb-3">
                      {pkg.nightshift_anchor}
                    </div>
                    <div className="border-t border-orange-500/20 pt-3 flex justify-between items-center text-[10px]">
                      <span className="text-neutral-500 font-mono">{pkg.monthly_label}</span>
                      <span className="text-orange-400 font-bold text-sm">{pkg.monthly_fee}<span className="text-neutral-500 text-[10px]">{pkg.monthly_unit}</span></span>
                    </div>
                  </div>
                  {/* CTA BUTTON */}
                  <button
                    onClick={() => { window.location.href = paymentLink; }}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02] font-black py-4 rounded-xl transition-all duration-200 transform active:scale-95 cursor-pointer text-sm uppercase tracking-wider flex items-center justify-center gap-2 px-6"
                  >
                    <Lock className="w-4 h-4 shrink-0" />
                    <span className="text-center leading-tight">{pkg.btn_cta}</span>
                  </button>
                  {/* 72-HOUR GUARANTEE */}
                  <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-emerald-400">{dict.guarantee_title}</div>
                      <div className="text-[11px] text-neutral-400 leading-relaxed mt-0.5">{dict.guarantee_desc}</div>
                    </div>
                  </div>
                  {/* DFY BLOCK */}
                  <div className="mt-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
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
                </div>
                {/* MICRO-TRUST ANCHORS */}
                <div className="mt-4 text-center flex flex-wrap items-center justify-center gap-1.5 text-[8px] sm:text-[9px] font-mono text-neutral-500 select-none">
                  <span>{dict.secure_payment_label}</span>
                  <span>•</span>
                  <span>Secure Stripe Checkout</span>
                  <span>•</span>
                  <span>Bromover Resources Sdn. Bhd. (201901003230)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEE FAQ BLOCK */}
        <div className="max-w-2xl mx-auto mt-8 bg-white/[0.02] border border-white/10 rounded-2xl p-5 flex items-start gap-3 text-left">
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
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-neutral-600 leading-relaxed uppercase tracking-widest">
            {dict.footer_architecture_note}
          </p>
        </div>
      </div>
    </section>
  );
}
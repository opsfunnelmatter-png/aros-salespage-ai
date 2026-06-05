// path: src/app/traffic-integration-trust.js
"use client";

import React, { useEffect, useRef, useState } from 'react';

/* ─── Inline SVG Platform Logos ─────────────────────────────────────────── */

const MetaSVG = ({ className }) => (
  <svg viewBox="0 0 40 20" className={className} fill="currentColor" aria-label="Meta">
    <path d="M4 10c0-3.3 1.6-6 3.5-6S11 7 11 10s-1.6 6-3.5 6S4 13.3 4 10zm9 0c0-4.4 2.5-8 5.5-8S24 5.6 24 10s-2.5 8-5.5 8S13 14.4 13 10zm11 0c0-4.7 1.6-8 3.5-8S31 5.3 31 10s-1.6 8-3.5 8S24 14.7 24 10z" />
  </svg>
);

const TikTokSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="TikTok">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const YouTubeSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="YouTube">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1C4.4 20.5 12 20.5 12 20.5s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
  </svg>
);

const InstagramSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Instagram">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
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

const WhatsAppSVG = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

/* ─── Animated Flow Dots ─────────────────────────────────────────────────── */
const FlowDots = ({ color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-400',
    green: 'bg-emerald-400',
  };
  return (
    <div className="flex gap-1.5 items-center justify-center">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${colors[color]} opacity-70 animate-bounce`}
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1s' }}
        />
      ))}
    </div>
  );
};

/* ─── Slim Strip (Hero variant) ──────────────────────────────────────────── */
function SlimStrip({ dict }) {
  const slim_label = dict?.slim_label || 'Zero Touch. Zero Downtime. Zero Disruption.';

  const allLogos = [
    { Icon: TikTokSVG,    title: 'TikTok'      },
    { Icon: MetaSVG,      title: 'Meta'        },
    { Icon: InstagramSVG, title: 'Instagram'   },
    { Icon: YouTubeSVG,   title: 'YouTube'     },
    { Icon: WordPressSVG,   title: 'WordPress' },
    { Icon: ShopifySVG,     title: 'Shopify'   },
    { Icon: WooCommerceSVG, title: 'WooCommerce' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-3 px-1">
      <div className="flex items-center justify-center gap-3 flex-wrap sm:flex-nowrap bg-white/[0.025] border border-white/[0.06] rounded-xl px-4 py-2 select-none">

        {/* Tagline */}
        <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-widest uppercase whitespace-nowrap shrink-0">
          {slim_label}
        </span>

        {/* Divider */}
        <span className="w-[1px] h-3 bg-white/10 shrink-0 hidden sm:block" />

        {/* Logos */}
        <div className="flex items-center gap-2.5 opacity-35 hover:opacity-60 transition-opacity duration-300 shrink-0">
          {allLogos.map(({ Icon, title }, i) => (
            <Icon key={i} className="h-3 w-auto text-neutral-300 flex-shrink-0" title={title} />
          ))}
        </div>

      </div>
    </div>
  );
}


/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function TrafficIntegrationTrust({ dict, variant }) {
  // ── Slim variant for Hero Section ────────────────────────────────────────
  if (variant === 'slim') return <SlimStrip dict={dict} />;

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // ── Copy (with safe fallbacks) ──────────────────────────────────────────
  const section_label    = dict?.section_label    || 'EKOSISTEM TRAFIK & INTEGRASI';
  const section_headline = dict?.section_headline || 'Sistem Ini Serasi Dengan Semua Platform Anda';

  // Panel 1 — Traffic
  const p1_badge    = dict?.p1_badge    || '▸ OMNICHANNEL TRAFFIC INTERCEPT';
  const p1_headline = dict?.p1_headline || 'Tak Kisah Iklan Dari Mana — AROS Tangkap Semua Leads';
  const p1_body     = dict?.p1_body     || 'TikTok Ads, Facebook, Instagram, atau YouTube? Setiap klik iklan anda akan disalurkan terus ke WhatsApp dan dilayan AI dalam masa 0.2 saat — 24 jam, tanpa miss seorang pun.';
  const p1_status   = dict?.p1_status   || 'SEMUA PLATFORM AKTIF';
  const p1_platforms = dict?.p1_platforms || ['TikTok Ads', 'Meta Ads', 'Instagram', 'YouTube'];

  // Panel 2 — Integration
  const p2_badge    = dict?.p2_badge    || '▸ ZERO FUNNEL DISRUPTION';
  const p2_headline = dict?.p2_headline || 'Sistem Ini Masuk Tanpa Ubah Apa-Apa Yang Ada';
  const p2_body     = dict?.p2_body     || 'Plug-and-play 100%. Sama ada website anda WordPress, Shopify, WooCommerce, atau Custom Salespage — AROS disambung terus ke nombor WhatsApp rasmi anda sahaja. Tiada pixel rosak. Tiada downtime.';
  const p2_status   = dict?.p2_status   || 'PLUG-AND-PLAY · NO CODE';
  const p2_platforms = dict?.p2_platforms || ['WordPress', 'Shopify', 'WooCommerce', 'Custom'];

  // Center badge
  const center_label = dict?.center_label || 'WhatsApp Official';

  return (
    <div
      ref={ref}
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 my-10"
    >
      {/* ── Section Label ────────────────────────────────────────────────── */}
      <div className={`text-center mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
          {section_label}
        </span>
        <p className="mt-2 text-sm font-semibold text-neutral-400">{section_headline}</p>
      </div>

      {/* ── Main Grid ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-3 items-stretch">

        {/* ══ PANEL 1: Traffic ══════════════════════════════════════════════ */}
        <div
          className={`relative rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/30 via-[#0E1322]/80 to-[#0B0F19] p-5 overflow-hidden flex flex-col gap-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Glow top border shimmer */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
          {/* Corner glow */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Badge */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono font-black tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
              {p1_badge}
            </span>
            <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              {p1_status}
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-sm sm:text-base font-black text-white leading-tight tracking-tight">
            {p1_headline}
          </h3>

          {/* Platform Logos Row */}
          <div className="flex flex-wrap gap-2">
            {[
              { Icon: TikTokSVG,   label: p1_platforms[0] || 'TikTok Ads',  color: 'hover:text-[#ff0050]' },
              { Icon: MetaSVG,     label: p1_platforms[1] || 'Meta Ads',    color: 'hover:text-[#1877f2]' },
              { Icon: InstagramSVG,label: p1_platforms[2] || 'Instagram',   color: 'hover:text-[#e1306c]' },
              { Icon: YouTubeSVG,  label: p1_platforms[3] || 'YouTube',     color: 'hover:text-[#ff0000]' },
            ].map(({ Icon, label, color }, i) => (
              <div
                key={i}
                className={`group flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-lg px-2.5 py-1.5 transition-all duration-300 cursor-default`}
              >
                <Icon className={`h-3.5 w-3.5 text-neutral-400 ${color} transition-colors duration-300 flex-shrink-0`} />
                <span className="text-[10px] font-mono font-bold text-neutral-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Flow animation */}
          <div className="flex items-center gap-2 mt-auto">
            <FlowDots color="blue" />
            <span className="text-[10px] font-mono text-blue-400/80">→ WhatsApp</span>
          </div>

          {/* Body */}
          <p className="text-neutral-400 text-xs leading-relaxed font-medium border-t border-white/5 pt-3">
            {p1_body}
          </p>
        </div>

        {/* ══ CENTER CONNECTOR ═════════════════════════════════════════════ */}
        <div
          className={`flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-0 transition-all duration-700 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          {/* Vertical line (desktop) / Horizontal line (mobile) */}
          <div className="hidden lg:block w-[1px] flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="lg:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* WhatsApp Badge */}
          <div className="relative flex flex-col items-center gap-1.5 shrink-0">
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 border-2 border-emerald-500/40 flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.25)]">
              <WhatsAppSVG className="h-7 w-7 text-emerald-400" />
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-2xl border-2 border-emerald-400/30 animate-ping" style={{ animationDuration: '2s' }} />
            </div>
            <span className="text-[9px] font-mono font-black text-emerald-400 tracking-wide text-center whitespace-nowrap">
              {center_label}
            </span>
          </div>

          <div className="hidden lg:block w-[1px] flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="lg:hidden h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ══ PANEL 2: Integration ══════════════════════════════════════════ */}
        <div
          className={`relative rounded-2xl border border-emerald-500/25 bg-gradient-to-bl from-emerald-950/30 via-[#0E1322]/80 to-[#0B0F19] p-5 overflow-hidden flex flex-col gap-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Glow top border */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
          {/* Corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Badge */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono font-black tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              {p2_badge}
            </span>
            <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              {p2_status}
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-sm sm:text-base font-black text-white leading-tight tracking-tight">
            {p2_headline}
          </h3>

          {/* Platform Logos Row */}
          <div className="flex flex-wrap gap-2">
            {[
              { Icon: WordPressSVG,   label: p2_platforms[0] || 'WordPress',  color: 'hover:text-[#21759b]' },
              { Icon: ShopifySVG,     label: p2_platforms[1] || 'Shopify',    color: 'hover:text-[#96bf48]' },
              { Icon: WooCommerceSVG, label: p2_platforms[2] || 'WooCommerce',color: 'hover:text-[#7f54b3]' },
              { Icon: null,           label: p2_platforms[3] || 'Custom',     color: 'hover:text-orange-400' },
            ].map(({ Icon, label, color }, i) => (
              <div
                key={i}
                className="group flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-lg px-2.5 py-1.5 transition-all duration-300 cursor-default"
              >
                {Icon ? (
                  <Icon className={`h-3.5 w-3.5 text-neutral-400 ${color} transition-colors duration-300 flex-shrink-0`} />
                ) : (
                  <span className={`text-[9px] font-mono font-black text-neutral-500 ${color} transition-colors duration-300`}>✦</span>
                )}
                <span className="text-[10px] font-mono font-bold text-neutral-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Flow animation */}
          <div className="flex items-center gap-2 mt-auto">
            <FlowDots color="green" />
            <span className="text-[10px] font-mono text-emerald-400/80">→ No Code Needed</span>
          </div>

          {/* Body */}
          <p className="text-neutral-400 text-xs leading-relaxed font-medium border-t border-white/5 pt-3">
            {p2_body}
          </p>
        </div>

      </div>

      {/* ── Bottom Status Bar ─────────────────────────────────────────────── */}
      <div
        className={`mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '350ms' }}
      >
        {[
          { dot: 'bg-blue-400',    text: dict?.tag_1 || '4 Platform Iklan Utama' },
          { dot: 'bg-emerald-400', text: dict?.tag_2 || 'Tiada Perubahan Website Diperlukan' },
          { dot: 'bg-orange-400',  text: dict?.tag_3 || 'Sambung Terus ke WhatsApp Rasmi' },
        ].map(({ dot, text }, i) => (
          <div key={i} className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
            <span className={`w-1.5 h-1.5 rounded-full ${dot} inline-block`} />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

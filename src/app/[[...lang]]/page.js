// path: src/app/[[...lang]]/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { getDictionary } from '../dictionaries.js';

// Trik import menggunakan ejaan nama komponen yang selamat daripada ralat nombor/sempang
import HeroSection from '../01-hero.js';
import BleedingMath from '../02-bleeding-math.js';
import DiagnosticBoard from '../01b-diagnostic.js';
import PainGrid from '../03-pain-grid.js';
import TimelineProcess from '../04-timeline.js';
import AuthorityProfile from '../07-authority.js';
import CaseStudies from '../05-case-studies.js';
import Testimonials from '../06-testimonials.js';
import PricingMatrix from '../08-pricing.js';
import ROIBridge from '../08a-roi-bridge.js';
import BonusStack from '../09-bonus-stack.js';
import ClosureManifesto from '../09-closure.js';
import FAQAccordion from '../10-faq.js';
import FooterSection from '../11-footer.js';
import StickyCTA from '../sticky-cta.js';
import LanguageToggle from '../language-toggle.js';

export default function Home({ params }) {
  const [dailyBudget, setDailyBudget] = useState('');
  const [dict, setDict] = useState(null);

  // Menggunakan React.use untuk unwrap params di Client Component (Next.js 15 standard)
  const unwrappedParams = React.use ? React.use(params) : params;
  const langArray = unwrappedParams?.lang || [];
  const lang = langArray[0] || 'bm';

  useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  if (!dict) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center font-mono text-xs">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-x-hidden font-sans pb-24">
      
      {/* GLOBAL BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* FLOATING LANGUAGE TOGGLE SELECTOR */}
      <LanguageToggle currentLang={lang} />

      {/* 🚀 THE 12 CHRONOLOGICAL SALESPAGE SECTIONS TREE (PSYCHOLOGICAL CONVERSION FLOW) */}
      <HeroSection dailyBudget={dailyBudget} dict={dict.hero} />
      <BleedingMath dailyBudget={dailyBudget} setDailyBudget={setDailyBudget} dict={dict.bleeding_math} />
      <DiagnosticBoard dailyBudget={dailyBudget} dict={dict.diagnostic} />
      <PainGrid dict={dict.pain_grid} />
      <TimelineProcess dict={dict.timeline} />
      <AuthorityProfile dict={dict.authority} />
      <CaseStudies dict={dict.case_studies} />
      <Testimonials dict={dict.testimonials} />
      <PricingMatrix dict={dict.pricing} lang={lang} />
      <ROIBridge dailyBudget={dailyBudget} dict={dict.roi_bridge} />
      <BonusStack dict={dict.bonus_stack} />
      <ClosureManifesto dict={dict.closure} />
      <FAQAccordion dict={dict.faq} />
      <FooterSection dict={dict.footer} />

      <StickyCTA dict={dict.sticky_cta} />

    </div>
  );
}

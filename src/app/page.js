// path: src/app/page.js
"use client";

import React from 'react';

// Trik import menggunakan ejaan nama komponen yang selamat daripada ralat nombor/sempang
import HeroSection from './01-hero.js';
import BleedingMath from './02-bleeding-math.js';
import PainGrid from './03-pain-grid.js';
import TimelineProcess from './04-timeline.js';
import CaseStudies from './05-case-studies.js';
import Testimonials from './06-testimonials.js';
import AuthorityProfile from './07-authority.js';
import PricingMatrix from './08-pricing.js';
import ClosureManifesto from './09-closure.js';
import FAQAccordion from './10-faq.js';
import FooterSection from './11-footer.js';

export default function Home() {
  const [dailyBudget, setDailyBudget] = React.useState('');

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-x-hidden font-sans">
      
      {/* GLOBAL BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_65%)] pointer-events-none z-0" />
 
      {/* HEADER NAVBAR CONTAINER */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-4 md:gap-2 border-b border-white/5 backdrop-blur-sm bg-[#0B0F19]/40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]">A</div>
          <span className="font-bold tracking-wider text-xl bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">AROS</span>
        </div>
        <div className="md:hidden">
          <span className="text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-widest uppercase bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)] whitespace-nowrap md:whitespace-normal max-w-full block text-center">
            ZERO LATENCY AUTOPILOT SALES FUNNEL
          </span>
        </div>
        <div className="hidden md:flex items-center">
          <span className="text-[9px] lg:text-[10px] font-mono font-bold tracking-widest uppercase bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full border border-orange-500/20 shadow-orange-500/10 whitespace-nowrap">
            ZERO LATENCY AUTOPILOT SALES FUNNEL
          </span>
        </div>
      </header>
 
      {/* 🚀 THE 11 CHRONOLOGICAL SALESPAGE SECTIONS TREE */}
      <HeroSection dailyBudget={dailyBudget} />
      <BleedingMath dailyBudget={dailyBudget} setDailyBudget={setDailyBudget} />
      <PainGrid />
      <TimelineProcess />
      <CaseStudies />
      <Testimonials />
      <AuthorityProfile />
      <PricingMatrix />
      <ClosureManifesto />
      <FAQAccordion />
      <FooterSection />

    </div>
  );
}
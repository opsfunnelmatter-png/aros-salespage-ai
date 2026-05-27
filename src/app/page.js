// path: src/app/page.js
"use client";

import React from 'react';

// Trik import menggunakan ejaan nama komponen yang selamat daripada ralat nombor/sempang
import HeroSection from './01-hero.js';
import BleedingMath from './02-bleeding-math.js';
import PainGrid from './03-pain-grid.js';
import CaseStudies from './05-case-studies.js';
import Testimonials from './06-testimonials.js';
import AuthorityProfile from './07-authority.js';
import TimelineProcess from './04-timeline.js';
import ClosureManifesto from './09-closure.js';
import ROIBridge from './08a-roi-bridge.js';
import PricingMatrix from './08-pricing.js';
import BonusStack from './09-bonus-stack.js';
import FAQAccordion from './10-faq.js';
import FooterSection from './11-footer.js';

export default function Home() {
  const [dailyBudget, setDailyBudget] = React.useState('');

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-x-hidden font-sans">
      
      {/* GLOBAL BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_65%)] pointer-events-none z-0" />


      {/* 🚀 THE 12 CHRONOLOGICAL SALESPAGE SECTIONS TREE (PSYCHOLOGICAL CONVERSION FLOW) */}
      <HeroSection dailyBudget={dailyBudget} />
      <BleedingMath dailyBudget={dailyBudget} setDailyBudget={setDailyBudget} />
      <PainGrid />
      <CaseStudies />
      <TimelineProcess />
      <Testimonials />
      <AuthorityProfile />
      <ClosureManifesto />
      <ROIBridge dailyBudget={dailyBudget} />
      <PricingMatrix />
      <BonusStack />
      <FAQAccordion />
      <FooterSection />

    </div>
  );
}
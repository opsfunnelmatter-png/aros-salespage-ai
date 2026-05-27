// path: src/app/success/frontend/summary/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Printer, ShieldCheck, Globe, FileText, 
  Layers, Zap, MessageSquare, ChevronLeft, Info, Copy, 
  ExternalLink, CreditCard, Award, FileSpreadsheet
} from 'lucide-react';
import Link from 'next/link';

export default function ExecutionBlueprintSummary() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

 // 🟢 STATE BARU UNTUK KAWAL ALIRAN TRAFIK SUBMIT
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  // HYDRATION & DATA EXTRACTION ONLY (Sifar Auto-Submit!)
  useEffect(() => {
    const savedSubmission = localStorage.getItem('aros_frontend_blueprint_submitted');
    if (savedSubmission) {
      try {
        setData(JSON.parse(savedSubmission));
      } catch (e) {
        console.error("Failed to parse submission storage bundle", e);
      }
    }
    setLoading(false);
  }, []);

  // FUNGSI UTAMA: Hanya dicetuskan bila butang hijau ditekan manual!
  const handleFinalSubmit = async () => {
    setIsSyncing(true);
    const savedSubmission = localStorage.getItem('aros_frontend_blueprint_submitted');
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxU7RNQCUHTSWEx-db_RL3pqC7cBW0rmuBVyyB60lXk200TKmbqpD1P-2NTB_iSdOLF/exec";
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: savedSubmission
      });
      
      // Sukses! Tukar skrin UI kad kepada mod tahniah
      setSyncSuccess(true);
    } catch (err) {
      console.error("Google Sheets manual sync execution failed:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center font-mono text-xs uppercase tracking-widest">
        <Zap className="w-5 h-5 text-orange-400 animate-spin mr-2" /> Initializing Executive Blueprint Wallet...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
          <Info className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase font-mono tracking-wider">Tiada Rekod Penyerahan</h3>
          <p className="text-xs text-neutral-500 max-w-xs mx-auto">Sila lengkapkan borang onboarding terlebih dahulu untuk menjana ringkasan seni bina.</p>
        </div>
        <Link href="/success/frontend" className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider hover:bg-white/10 text-orange-400 transition-all">
          Buka Borang Onboarding
        </Link>
      </div>
    );
  }

  // Generate Dynamic WhatsApp URL Injection Payload (Change 60123456789 to your number)
  const targetWhatsAppNumber = "60123456789"; 
  const waMessage = `Hi Boss Amin, saya baru sahaja selesai mengunci AROS Frontend Architecture Blueprint untuk perniagaan saya [${data.productBrand || data.companyName}]. Sila sahkan slot kontena server ekspres saya sekarang.`;
  const encodedMessage = encodeURIComponent(waMessage);
  const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-orange-500/30 relative overflow-x-hidden pb-24 print:bg-white print:text-black">
      {/* GRID BACKGROUND (HIDDEN ON PRINT) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none print:hidden" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_60%)] pointer-events-none print:hidden" />

      {/* ACTION HUB NAVIGATION HEADER (HIDDEN ON PRINT) */}
      <div className="bg-neutral-900/60 border-b border-white/5 backdrop-blur-md py-4 px-6 sticky top-0 z-30 print:hidden">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link href="/success/frontend" className="text-neutral-400 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all">
            <ChevronLeft className="w-4 h-4" /> Update Form Data
          </Link>
          
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button onClick={handleCopyLink} type="button" className="bg-white/5 border border-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-1.5">
              <Copy className="w-3.5 h-3.5 text-neutral-400" /> {copied ? 'Salin URL!' : 'Salin Pautan'}
            </button>
            <button onClick={handlePrint} type="button" className="bg-white/5 border border-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 text-orange-400">
              <Printer className="w-3.5 h-3.5" /> Cetak / Save PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 relative z-10 print:mt-0 print:px-0">
        
        {/* SUCCESS INTERACTIVE BANNER (HIDDEN ON PRINT) */}
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-5 print:hidden">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div className="space-y-1 flex-1">
            <h2 className="text-xl font-black uppercase tracking-wide font-mono">Blueprint Execution Locked</h2>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Tahniah <strong>{data.picName || 'Founder'}</strong>. Seluruh DNA komponen jualan digital anda selamat dijana dalam cache korporat Next.js.
            </p>
          </div>
        </div>

        {/* CORE DOCUMENT COMPONENT WALL */}
        <div className="bg-[#0F1424]/90 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-10 relative overflow-hidden box-border print:border-none print:bg-white print:p-0 print:shadow-none">
          
          {/* INCISION PRINT HEADER (VISIBLE ONLY ON PRINT) */}
          <div className="hidden print:block border-b-2 border-black pb-4 text-center space-y-1">
            <h1 className="text-xl font-black uppercase tracking-widest font-mono">AROS ENTERPRISE BLUEPRINT ARCHITECTURE REPORT</h1>
            <p className="text-xs font-mono text-neutral-600">Generated Secure Bundle Matrix // Verification Code: AROS-2026-X99</p>
          </div>

          {/* BLOCK SECTION 1: PERSONAL META */}
          <div className="space-y-4">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">01 // Profil Peribadi PIC & Kredibiliti Infrastruktur</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono">Nama Penuh PIC:</span>
                <span className="font-bold font-sans text-neutral-200 print:text-black">{data.picName || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono">WhatsApp PIC:</span>
                <span className="font-bold font-mono text-neutral-200 print:text-black">{data.picWhatsApp || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono">Nama Resmi Syarikat:</span>
                <span className="font-bold font-sans text-neutral-200 print:text-black">{data.companyName || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono">No. Siri SSM:</span>
                <span className="font-bold font-mono text-neutral-200 print:text-black">{data.ssmNumber || 'N/A'}</span>
              </div>
              <div className="sm:col-span-2 flex flex-col border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono mb-0.5">Alamat / Butiran Sokongan Footer:</span>
                <span className="font-medium text-neutral-300 print:text-black leading-relaxed">{data.supportContact || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono">Domain Pilihan 1:</span>
                <span className="font-bold font-mono text-emerald-400 print:text-black">{data.domain1 || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                <span className="text-neutral-500 font-mono">Domain Pilihan 2:</span>
                <span className="font-bold font-mono text-neutral-400 print:text-black">{data.domain2 || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* BLOCK SECTION 2: AD TRACKING SYSTEM */}
          <div className="space-y-4">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">02 // Parameter Kod Penjejakan Iklan (Ad Tracking Hub)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 print:border-neutral-200 print:p-1">
                <span className="text-neutral-500 font-mono block text-[10px]">META DATASET / PIXEL ID</span>
                <span className="font-bold font-mono text-neutral-200 print:text-black mt-1 block truncate">{data.metaPixel || '❌ TIDAK DISEDIAKAN'}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 print:border-neutral-200 print:p-1">
                <span className="text-neutral-500 font-mono block text-[10px]">TIKTOK PIXEL ID</span>
                <span className="font-bold font-mono text-neutral-200 print:text-black mt-1 block truncate">{data.tiktokPixel || '❌ TIDAK DISEDIAKAN'}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 print:border-neutral-200 print:p-1">
                <span className="text-neutral-500 font-mono block text-[10px]">GOOGLE GA4 MEASUREMENT ID</span>
                <span className="font-bold font-mono text-neutral-200 print:text-black mt-1 block truncate">{data.googleAnalytics || '❌ TIDAK DISEDIAKAN'}</span>
              </div>
            </div>
          </div>

          {/* BLOCK SECTION 3: STRUCTURED PRODUCT DNA & CONDITIONAL AUTHORITIES */}
          <div className="space-y-4">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">03 // Anatomi Mesej & Struktur Mikro DNA Produk</h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                  <span className="text-neutral-500 font-mono">Kategori Industri:</span>
                  <span className="font-bold text-neutral-200 print:text-black">{data.productCategory || 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                  <span className="text-neutral-500 font-mono">Nama Jenama Produk:</span>
                  <span className="font-bold text-neutral-200 print:text-black">{data.productBrand || 'N/A'}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1 bg-black/20 p-3.5 rounded-xl border border-white/5 print:border-neutral-200 print:p-0 print:bg-white">
                <span className="text-neutral-500 font-mono text-[10px]">TARGET AVATAR (PELANGGAN KHUSUS IDAMAN):</span>
                <p className="text-neutral-200 print:text-black font-medium leading-relaxed font-sans">{data.targetAvatar || 'N/A'}</p>
              </div>

              <div className="flex flex-col space-y-1 bg-black/20 p-3.5 rounded-xl border border-white/5 print:border-neutral-200 print:p-0 print:bg-white">
                <span className="text-neutral-500 font-mono text-[10px]">GRID MASALAH EMOSI TERBESAR (PAIN POINTS COPIWRITING):</span>
                <p className="text-neutral-300 print:text-black font-mono leading-relaxed whitespace-pre-line">{data.painPoints || 'N/A'}</p>
              </div>

              <div className="flex flex-col space-y-1 bg-black/20 p-3.5 rounded-xl border border-white/5 print:border-neutral-200 print:p-0 print:bg-white">
                <span className="text-neutral-500 font-mono text-[10px]">UNIQUE SELLING PROPOSITION (USP MEKANISME MEKANIKA):</span>
                <p className="text-neutral-200 print:text-black font-medium leading-relaxed font-sans italic">"{data.usp || 'N/A'}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-black/30 border border-white/5 rounded-xl print:border-neutral-200 print:p-0 print:bg-white">
                <div>
                  <span className="text-neutral-500 font-mono text-[9px] block">MATRIKS BEFORE (SENGSARA):</span>
                  <span className="font-bold text-red-400 print:text-black block text-xs mt-0.5">{data.transformationBefore || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono text-[9px] block">MATRIKS AFTER (BAHAGIA):</span>
                  <span className="font-bold text-emerald-400 print:text-black block text-xs mt-0.5">{data.transformationAfter || 'N/A'}</span>
                </div>
              </div>

              {/* RESTRUCTURED CONDITIONAL AUTHORITY CODES SHOWCASE */}
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2.5 print:border-neutral-200 print:p-0 print:bg-white">
                <span className="text-neutral-500 font-mono text-[10px] block">NOMBOR REGISTER KELULUSAN RASMI (AUTHORITY CODE MATRIX):</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex justify-between items-center py-1 border-b border-white/5 print:border-neutral-200">
                    <span className="text-neutral-400">Rujukan KKM (MAL/NOT):</span>
                    <span className="font-mono font-bold text-orange-400 print:text-black">{data.hasKkm ? (data.kkmNumber || 'Sijil Ada / No Missing') : '❌ TIADA KELULUSAN'}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5 print:border-neutral-200">
                    <span className="text-neutral-400">Rujukan Halal JAKIM:</span>
                    <span className="font-mono font-bold text-orange-400 print:text-black">{data.hasHalal ? (data.halalNumber || 'Sijil Ada / No Missing') : '❌ TIADA HALAL'}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5 print:border-neutral-200">
                    <span className="text-neutral-400">Lab Test Report Approved:</span>
                    <span className="font-mono font-bold text-neutral-200 print:text-black">{data.hasLabTest ? '✅ DISEDIAKAN (DI DALAM DRIVE)' : '❌ TIADA'}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5 print:border-neutral-200">
                    <span className="text-neutral-400">Anugerah / Pengiktirafan:</span>
                    <span className="font-mono font-bold text-neutral-200 print:text-black">{data.hasAward ? '✅ DISEDIAKAN (DI DALAM DRIVE)' : '❌ TIADA'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK SECTION 4: PACKAGE AND STRIPE TARGET LINK DETAILS */}
          <div className="space-y-4">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">04 // Pemetaan Struktur Pakej Kombo & Corong Jualan</h3>
            </div>
            
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* CARD 1 */}
                <div className="bg-black/40 border border-white/5 p-3 rounded-xl print:border-neutral-200 print:p-1">
                  <span className="text-neutral-500 font-mono text-[9px] block">📦 COMPACT PAKEJ 01</span>
                  <div className="font-bold text-neutral-200 print:text-black mt-1 truncate">{data.package1Name || 'N/A'}</div>
                  <div className="text-orange-400 font-mono font-black text-sm mt-1">RM {data.package1Price || '0.00'}</div>
                  <div className="text-[9px] font-mono text-neutral-500 truncate mt-1 select-all">{data.package1Stripe || 'No Stripe Attached'}</div>
                </div>
                {/* CARD 2 */}
                <div className="bg-black/40 border border-white/5 p-3 rounded-xl print:border-neutral-200 print:p-1">
                  <span className="text-neutral-500 font-mono text-[9px] block">📦 POPULAR PAKEJ 02</span>
                  <div className="font-bold text-neutral-200 print:text-black mt-1 truncate">{data.package2Name || 'N/A'}</div>
                  <div className="text-orange-400 font-mono font-black text-sm mt-1">RM {data.package2Price || '0.00'}</div>
                  <div className="text-[9px] font-mono text-neutral-500 truncate mt-1 select-all">{data.package2Stripe || 'No Stripe Attached'}</div>
                </div>
                {/* CARD 3 */}
                <div className="bg-black/40 border border-white/5 p-3 rounded-xl print:border-neutral-200 print:p-1">
                  <span className="text-neutral-500 font-mono text-[9px] block">📦 PREMIUM PAKEJ 03</span>
                  <div className="font-bold text-neutral-200 print:text-black mt-1 truncate">{data.package3Name || 'N/A'}</div>
                  <div className="text-orange-400 font-mono font-black text-sm mt-1">RM {data.package3Price || '0.00'}</div>
                  <div className="text-[9px] font-mono text-neutral-500 truncate mt-1 select-all">{data.package3Stripe || 'No Stripe Attached'}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-black/20 rounded-xl border border-white/5 print:border-none print:p-0">
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                  <span className="text-neutral-500 font-mono">Mod Sistem CTA:</span>
                  <span className="font-black font-mono text-white uppercase print:text-black">{data.ctaType === 'whatsapp' ? 'WhatsApp Staf' : 'AROS AI Autonomous Agent'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                  <span className="text-neutral-500 font-mono">Teks Atas Butang CTA:</span>
                  <span className="font-bold text-orange-400 print:text-black truncate max-w-[180px]">"{data.ctaButtonCopy || 'N/A'}"</span>
                </div>
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200 sm:col-span-2">
                  <span className="text-neutral-500 font-mono">Mod Aliran Terminal Bayaran:</span>
                  <span className="font-bold text-neutral-200 print:text-black">{data.paymentType === 'embed' ? 'Embed Form Terminal Dalam Web (Satu Halaman)' : 'Redirect External Link Portal Invois'}</span>
                </div>
                <div className="flex flex-col border-b border-white/5 py-1 print:border-neutral-200 sm:col-span-2">
                  <span className="text-neutral-500 font-mono text-[9px]">PAUTAN SETELAH TRANSAKSI BERJAYA (AFTER-PAYMENT LANDING URL):</span>
                  <span className="font-mono text-emerald-400 print:text-black truncate mt-0.5 select-all">{data.afterPaymentUrl || 'N/A'}</span>
                </div>
                <div className="flex flex-col border-b border-white/5 py-1 print:border-neutral-200 sm:col-span-2">
                  <span className="text-neutral-500 font-mono text-[9px]">TERMA DAN SYARAT POLISI JAMINAN WANG (GUARANTEE TERMS):</span>
                  <p className="text-neutral-300 print:text-black mt-0.5 leading-relaxed">{data.guaranteePolicy || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK SECTION 5: MODULAR BLUEPRINT BLOCKS CHOSEN */}
          <div className="space-y-4">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">05 // Urutan Struktur Aliran Seni Bina Modular</h3>
            </div>
            <div className="text-xs space-y-3">
              <div className="flex flex-wrap gap-2">
                {data.sections && data.sections.map((section, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-lg bg-orange-500/5 text-orange-400 border border-orange-500/10 font-mono font-bold text-[10px] print:bg-white print:text-black print:border-black">
                    {index + 1}. {section}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                  <span className="text-neutral-500 font-mono">Identiti Aura Warna Tema:</span>
                  <span className="font-bold text-neutral-200 print:text-black">{data.themeColor || 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 py-1 print:border-neutral-200">
                  <span className="text-neutral-500 font-mono">Vibe Estetik Reka Bentuk:</span>
                  <span className="font-bold text-neutral-200 print:text-black">{data.designVibe || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK SECTION 6: VAULT GRAPHICS ASSETS */}
          <div className="space-y-4">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">06 // Lokasi Repositori Aset Visual & Kontrak Pindaan</h3>
            </div>
            <div className="text-xs space-y-3">
              <div className="p-3.5 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-between gap-4 print:border-neutral-200 print:p-0 print:bg-white">
                <div className="overflow-hidden">
                  <span className="text-neutral-500 font-mono text-[9px] block">REPOSITORY REPO VAULT LINK:</span>
                  <span className="font-mono text-orange-400 print:text-black select-all text-xs block truncate mt-0.5">{data.driveLink || 'N/A'}</span>
                </div>
                {data.driveLink && (
                  <a href={data.driveLink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-black p-2 rounded-lg font-black font-mono shrink-0 print:hidden transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="p-4 bg-neutral-900/40 rounded-xl border border-white/5 space-y-2 font-mono text-[10px] text-neutral-400 print:border-none print:p-0 print:text-neutral-700">
                <span className="text-[9px] font-mono font-bold text-neutral-500 block uppercase tracking-wider mb-1">LOG PENGESAHAN KONTRAK MANDATORI:</span>
                <div className="flex items-center gap-2">✔ Logo PNG Lutsinar: <span className="font-bold text-white print:text-black">{data.logoCheck ? 'DISEDIAKAN' : 'TIADA'}</span></div>
                <div className="flex items-center gap-2">✔ Gambar Produk Pencahayaan Jelas: <span className="font-bold text-white print:text-black">{data.productCheck ? 'DISEDIAKAN' : 'TIADA'}</span></div>
                <div className="flex items-center gap-2">✔ Gambar Bukti Tangkapan Skrin Testimoni: <span className="font-bold text-white print:text-black">{data.testimonialCheck ? 'DISEDIAKAN' : 'TIADA'}</span></div>
                <div className="flex items-center gap-2">✔ Google Drive Shared settings set to PUBLIC: <span className="font-bold text-emerald-400 print:text-black">{data.drivePublicCheck ? 'YA (SAH)' : 'BELUM'}</span></div>
                <div className="flex items-center gap-2">✔ Syarat Maksimum 2 Kali Pindaan Draf: <span className="font-bold text-orange-400 print:text-black">{data.revisionAgree ? 'BERSETUJU (TERKUNCI)' : 'BELUM'}</span></div>
                <div className="flex items-center gap-2">✔ Rangka Susunan Blok Komponen Modular Muktamad: <span className="font-bold text-orange-400 print:text-black">{data.layoutAgree ? 'BERSETUJU (TERKUNCI)' : 'BELUM'}</span></div>
              </div>
            </div>
          </div>

          {/* DYNAMIC FAQ ACCORDION SUMMARY SHOWCASE */}
          <div className="space-y-3">
            <div className="border-b border-white/5 print:border-black pb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-400 print:text-black" />
              <h3 className="text-xs font-mono font-black uppercase tracking-widest text-orange-400 print:text-black">07 // Arkib Soalan Lazim Dinamik Pelanggan (FAQ)</h3>
            </div>
            <div className="space-y-3 text-xs font-sans">
              {data.faqs && data.faqs.map((faq, index) => (
                <div key={index} className="p-3 bg-black/20 border border-white/5 rounded-xl print:border-neutral-200 print:p-1">
                  <div className="font-black text-neutral-200 print:text-black flex items-start gap-1">
                    <span className="text-orange-400 font-mono font-bold shrink-0">S#{index+1}:</span> {faq.question || 'Tiada Soalan'}
                  </div>
                  <div className="text-neutral-400 print:text-neutral-600 mt-1 leading-relaxed pl-5 flex items-start gap-1">
                    <span className="text-emerald-400 font-mono font-bold shrink-0">J:</span> {faq.answer || 'Tiada Jawapan'}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* POST-SUBMISSION DYNAMIC ACTION HUB (PRINT:HIDDEN) */}
        <div className="mt-10 max-w-xl mx-auto print:hidden">
          
          {!syncSuccess ? (
            /* KAD FASA 1: SEBELUM TEKAN (RUPA ASAL SEPERTI GAMBAR KAU) */
            <div className="bg-[#0F1424] border border-orange-500/30 rounded-3xl p-8 text-center space-y-5 shadow-2xl">
              <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto text-orange-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase font-mono tracking-wider">Langkah Terakhir: Hantar Data Kepada Unit Teknikal</h4>
                <p className="text-[11px] text-neutral-400 max-w-xs mx-auto leading-relaxed">
                  Sila klik butang di bawah untuk menghantar draf *Blueprint* jualan ini terus kepada team kami. Pegawai teknikal kami akan mula memproses halaman jualan anda dengan kadar segera.
                </p>
              </div>
              
              <button 
                onClick={handleFinalSubmit}
                disabled={isSyncing}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(37,211,102,0.15)] text-xs uppercase tracking-wider font-mono disabled:opacity-50"
              >
                {isSyncing ? (
                  <>⏳ Memproses & Menghantar Data...</>
                ) : (
                  <>📥 Hantar Blueprint & Mula Bina Landing Page</>
                )}
              </button>
            </div>
          ) : (
            /* KAD FASA 2: SELEPAS KLIK (AUTOMATIK TUKAR JADI PRESTIGE AUTOPILOT CONFIRMATION) */
            <div className="bg-gradient-to-b from-[#101A30] to-[#0A0F1D] border border-emerald-500/20 rounded-3xl p-8 text-center space-y-4 shadow-[0_0_50px_rgba(16,185,129,0.08)] animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-black uppercase font-mono tracking-wider text-emerald-400">Pendaftaran Blueprint Selesai!</h4>
                <p className="text-xs text-neutral-300 font-medium max-w-sm mx-auto leading-relaxed">
                  Tahniah, data *Blueprint Architecture* perniagaan anda telah selamat direkodkan ke dalam sistem pusat AROS.
                </p>
                <p className="text-[11px] text-neutral-400 max-w-xs mx-auto leading-normal bg-black/40 py-2.5 px-4 rounded-xl border border-white/5 font-mono">
                  ✨ Anda akan dihubungi oleh pegawai pengurus projek team kami dalam masa 24 jam melalui WhatsApp/panggilan rasmi untuk fasa peluncuran.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
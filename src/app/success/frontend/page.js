// path: src/app/success/frontend/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, ShieldCheck, Paintbrush, Globe, Send, 
  ChevronRight, LayoutGrid, FileText, Camera, AlertTriangle, 
  Layers, Palette, Info, ChevronLeft, Clock, Zap, MessageSquare, 
  Plus, Trash2, ArrowUp, ArrowDown, CreditCard, Link2, HelpCircle, User, Phone
} from 'lucide-react';

export default function UltimateModularFrontendOnboarding() {
  const [step, setStep] = useState(1);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [showAutoSaveNotif, setShowAutoSaveNotif] = useState(false);

  // 1. CORE FORM STATE ARCHITECTURE (ALL MISSED FIELDS RECOVERED)
  const [formData, setFormData] = useState({
    // Fasa 1: Personal PIC & Infrastructure
    picName: '',
    picWhatsApp: '',
    companyName: '',
    ssmNumber: '',
    supportContact: '',
    domain1: '',
    domain2: '',
    metaPixel: '',
    tiktokPixel: '',
    googleAnalytics: '',

    // Fasa 2: Structured Product DNA & Authority Numbers
    productCategory: 'Suplemen & Kesihatan',
    productBrand: '',
    targetAvatar: '', 
    painPoints: '', 
    usp: '', 
    transformationBefore: '', 
    transformationAfter: '',
    hasKkm: false,
    kkmNumber: '',
    hasHalal: false,
    halalNumber: '',
    hasLabTest: false,
    hasAward: false,

    // Fasa 3: Funnel & Offer Setup
    package1Name: '', package1Price: '', package1Stripe: '',
    package2Name: '', package2Price: '', package2Stripe: '',
    package3Name: '', package3Price: '', package3Stripe: '',
    ctaType: 'whatsapp', 
    ctaValue: '', 
    ctaButtonCopy: '', // Missed field added
    guaranteePolicy: '', // Missed field added
    paymentType: 'embed', 
    afterPaymentUrl: '', 

    // Fasa 4: Visual Identity
    themeColor: '', 
    designVibe: 'Clean & Minimalist (Gaya Produk Teknologi / Apple-Style)',

    // Fasa 5: Vault Repository & Legals
    driveLink: '', 
    logoCheck: false, 
    productCheck: false, 
    testimonialCheck: false, 
    authorityDocCheck: false,
    drivePublicCheck: false, 
    revisionAgree: false, 
    layoutAgree: false
  });

  // 2. DYNAMIC FAQ STATE MATRIX (MINIMUM 3 ENFORCED)
  const [faqs, setFaqs] = useState([
    { question: '', answer: '' },
    { question: '', answer: '' },
    { question: '', answer: '' }
  ]);

  // 3. MODULAR COMPONENT POOL SCHEMAS
  const availableSections = [
    "Hero Header Premium",
    "VSL / Video Surat Jualan Box",
    "Penyuntikan Masalah (Pain Points)",
    "Deklarasi Formula / Solusi Produk",
    "Manfaat Makro & Bahan Utama",
    "Galeri Visual & Portfolio Produk",
    "Tembok Testimoni / Sosial Proof",
    "Jaminan Pulangan Wang (Guarantee)",
    "Sistem Kad Harga / Pakej Kombo",
    "Dynamic FAQ Container"
  ];

  const [selectedSections, setSelectedSections] = useState([
    "Hero Header Premium",
    "Penyuntikan Masalah (Pain Points)",
    "Deklarasi Formula / Solusi Produk",
    "Sistem Kad Harga / Pakej Kombo",
    "Dynamic FAQ Container"
  ]);

// 4. STEP WIZARD NAVIGATION MECHANICS (LASER TARGET ID LOCK)
  const nextStep = () => {
    // Tembak tepat pada ID borang onboarding kita sahaja
    const form = document.getElementById('aros-blueprint-form');
    
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return; // Sekat keras jika fasa semasa ada required field yang kosong
    }
    
    setStep((prev) => Math.min(prev + 1, 5));
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 5. LOCALSTORAGE CACHE ENGINE (WITH INITIALIZATION GUARD RAIL)
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedDraft = localStorage.getItem('aros_frontend_blueprint_draft');
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        if (parsed.formData) setFormData(parsed.formData);
        if (parsed.faqs) setFaqs(parsed.faqs);
        if (parsed.selectedSections) setSelectedSections(parsed.selectedSections);
        if (parsed.step) setStep(parsed.step);
      } catch (e) {
        console.error("Failed to restore blueprint local cache data", e);
      }
    }
    // Setel load! Baru buka kunci perisai untuk aktifkan auto-save
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // PERISAI UTAMA: Sekat auto-save daripada overwrite memori selagi loading belum setel sepenuhnya!
    if (!isInitialized) return;

    const dataToSave = { formData, faqs, selectedSections, step };
    localStorage.setItem('aros_frontend_blueprint_draft', JSON.stringify(dataToSave));
    setShowAutoSaveNotif(true);
    const timeout = setTimeout(() => setShowAutoSaveNotif(false), 1500);
    return () => clearTimeout(timeout);
  }, [formData, faqs, selectedSections, step, isInitialized]);

  // 6. FORM MUTATORS & ARRAY HANDLERS
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFaqChange = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const addFaqField = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const removeFaqField = (index) => {
    if (faqs.length > 3) {
      setFaqs(faqs.filter((_, i) => i !== index));
    }
  };

  const addSectionBlock = (blockName) => {
    if (selectedSections.length >= 7) return;
    setSelectedSections([...selectedSections, blockName]);
  };

  const removeSectionBlock = (index) => {
    setSelectedSections(selectedSections.filter((_, i) => i !== index));
  };

  const moveBlock = (index, direction) => {
    const updated = [...selectedSections];
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= updated.length) return;
    const temp = updated[index];
    updated[index] = updated[target];
    updated[target] = temp;
    setSelectedSections(updated);
  };

  // 3. SECURE FORM SUBMISSION LOGIC (FAST LOCAL REDIRECT)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const finalPayload = {
      ...formData,
      faqs,
      sections: selectedSections,
      submittedAt: new Date().toISOString()
    };
    
    // Simpan data dalam localStorage untuk diumpan ke Summary Page
    localStorage.setItem('aros_frontend_blueprint_submitted', JSON.stringify(finalPayload));
    
    // Terus hantar ke summary page sepantas kilat tanpa tunggu fetch internet
    window.location.href = '/success/frontend/summary';
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-orange-500/30 relative overflow-x-hidden pb-32">
      {/* GRID BACKGROUND PERUSAHAAN */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* TOP REAL-TIME CACHE URGENCY BANNER */}
      <div className="bg-gradient-to-r from-neutral-900 via-orange-500/10 to-neutral-900 border-b border-white/5 py-3 px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-neutral-400 font-medium">
            <Clock className="w-4 h-4 text-orange-400 animate-pulse" /> Slot Launching Protected // 24H Deadline Lock
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] uppercase font-mono font-bold tracking-widest px-2 py-0.5 rounded transition-all ${showAutoSaveNotif ? 'bg-emerald-500/20 text-emerald-400 animate-pulse' : 'bg-white/5 text-neutral-500'}`}>
              {showAutoSaveNotif ? '🟢 Auto-Saving...' : '🟢 Draft Secured'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 relative z-10">
        
        {/* BRANDING HEADER */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 mb-2">
            <Zap className="w-6 h-6 text-orange-400 fill-orange-400/10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider font-mono">AROS FRONTEND <span className="text-orange-400 italic">ARCHITECTURE</span></h1>
          <p className="text-neutral-500 text-xs max-w-md mx-auto font-medium">Sistem Pengumpulan Berstruktur Tinggi Untuk Pemetaan Komponen Jualan Dan Skrip Salinan Copywriting Kempen.</p>
        </div>

        {/* 5-STEP PROGRESS INDICATOR BAR */}
        <div className="bg-black/30 border border-white/5 backdrop-blur-md rounded-2xl p-4 mb-10 max-w-2xl mx-auto grid grid-cols-5 gap-2">
          {[
            { s: 1, title: 'PIC & Domain' },
            { s: 2, title: 'CW Product DNA' },
            { s: 3, title: 'Corong Logic' },
            { s: 4, title: 'Modular Box' },
            { s: 5, title: 'Vault Contract' }
          ].map((phase) => (
            <div key={phase.s} className="flex flex-col items-center gap-1.5 text-center">
              <div className={`w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center transition-all duration-300 ${step >= phase.s ? 'bg-orange-400 text-black shadow-[0_0_10px_rgba(249,115,22,0.3)]' : 'bg-white/5 text-neutral-600 border border-white/5'}`}>
                {phase.s}
              </div>
              <span className={`text-[8px] font-mono uppercase font-bold tracking-tight hidden sm:block ${step === phase.s ? 'text-orange-400' : 'text-neutral-500'}`}>{phase.title}</span>
            </div>
          ))}
        </div>

        {/* WORKSPACE FRAMEWORK FORM CONTAINER */}
        <form id="aros-blueprint-form" onSubmit={handleSubmit} className="bg-[#0F1424]/95 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-visible box-border">
          
          {/* FASA 01: PERSONAL PIC, LEGAL COMPLIANCE & TRACKING */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg font-black uppercase font-mono text-neutral-200 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-400" /> Fasa 01: Profil Peribadi PIC & Dasar Infrastruktur (Compliance)
                </h3>
                <p className="text-neutral-500 text-xs mt-1">Maklumat komunikasi rasmi agensi serta penguncian parameter penjejakan iklan Meta/TikTok.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* IN-HOUSE INTERNAL PIC COMMUNICATIONS DATA */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1"><User className="w-3 h-3 text-orange-400" /> Nama Penuh PIC Projek / Founder</label>
                  <input type="text" required value={formData.picName} onChange={(e) => updateField('picName', e.target.value)} placeholder="e.g. Muhammad Amin" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1"><Phone className="w-3 h-3 text-orange-400" /> Nombor WhatsApp Direct PIC (Urusan Projek)</label>
                  <input type="text" required value={formData.picWhatsApp} onChange={(e) => updateField('picWhatsApp', e.target.value)} placeholder="e.g. 60123456789" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none transition-all text-white font-mono" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Nama Resmi Syarikat / Jenama</label>
                  <input type="text" required value={formData.companyName} onChange={(e) => updateField('companyName', e.target.value)} placeholder="e.g. Liposlim Corporation Sdn Bhd" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Nombor Pendaftaran SSM</label>
                  <input type="text" required value={formData.ssmNumber} onChange={(e) => updateField('ssmNumber', e.target.value)} placeholder="e.g. 202601023456 (MA03456-X)" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none transition-all text-white" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Alamat Pejabat & No. Sokongan Pelanggan (Footer Meta Compliance Data)</label>
                  <input type="text" required value={formData.supportContact} onChange={(e) => updateField('supportContact', e.target.value)} placeholder="e.g. No 12, Jalan Perindustrian Bayan Lepas, Penang // Hubungi: +604-1234567" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none transition-all text-white" />
                </div>

                {/* DOMAIN SELECTION INFRASTRUCTURE BLOCKS */}
                <div className="space-y-2 p-4 rounded-2xl bg-black/30 border border-white/5 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Seni Bina Cadangan Nama Domain Laman</span>
                    <p className="text-neutral-500 text-[10px] mt-0.5">Sediakan alternatif domain sekiranya pilihan pertama sudah dibeli atau dimiliki pihak lain.</p>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-neutral-400 uppercase font-black tracking-wider">Cadangan Utama (Pilihan 1) *</label>
                    <input type="text" required value={formData.domain1} onChange={(e) => updateField('domain1', e.target.value)} placeholder="e.g. liposlimhq.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-neutral-400 uppercase font-black tracking-wider">Cadangan Sandaran (Pilihan 2) *</label>
                    <input type="text" required value={formData.domain2} onChange={(e) => updateField('domain2', e.target.value)} placeholder="e.g. liposlimofficial.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                  </div>
                </div>

                {/* TRACKING ANALYTICS MODULES WITH POP-UP TOOLTIPS */}
                <div className="sm:col-span-2 space-y-3 pt-2">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">Parameter Penjejakan Trafik (Ad Tracking IDs)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    
                    {/* META PIXEL */}
                    <div className="space-y-1 relative">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Meta Pixel / Dataset ID</label>
                        <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'meta' ? null : 'meta')} className="text-neutral-500 hover:text-orange-400"><HelpCircle className="w-3 h-3" /></button>
                      </div>
                      <input type="text" value={formData.metaPixel} onChange={(e) => updateField('metaPixel', e.target.value)} placeholder="e.g. 8472910482910" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      {activeTooltip === 'meta' && (
                        <div className="absolute bottom-full mb-2 left-0 right-0 bg-neutral-900 border border-white/10 p-3 rounded-xl z-30 text-[10px] text-neutral-400 leading-normal shadow-xl animate-in fade-in duration-200">
                          Sila letakkan <strong>ID sahaja</strong> (13-15 angka). Jangan letak keseluruhan kod script Javascript! Unit kami akan menyuntik ID ini terus ke kepala kod Next.js.
                        </div>
                      )}
                    </div>

                    {/* TIKTOK PIXEL */}
                    <div className="space-y-1 relative">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">TikTok Pixel ID</label>
                        <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'tiktok' ? null : 'tiktok')} className="text-neutral-500 hover:text-orange-400"><HelpCircle className="w-3 h-3" /></button>
                      </div>
                      <input type="text" value={formData.tiktokPixel} onChange={(e) => updateField('tiktokPixel', e.target.value)} placeholder="e.g. CD5K2LBC910A2M" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      {activeTooltip === 'tiktok' && (
                        <div className="absolute bottom-full mb-2 left-0 right-0 bg-neutral-900 border border-white/10 p-3 rounded-xl z-30 text-[10px] text-neutral-400 leading-normal shadow-xl animate-in fade-in duration-200">
                          Masukkan ID Pixel TikTok unik anda (Cth: gabungan abjad dan nombor rawak).
                        </div>
                      )}
                    </div>

                    {/* GOOGLE ANALYTICS */}
                    <div className="space-y-1 relative">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Google GA4 Measurement ID</label>
                        <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'ga4' ? null : 'ga4')} className="text-neutral-500 hover:text-orange-400"><HelpCircle className="w-3 h-3" /></button>
                      </div>
                      <input type="text" value={formData.googleAnalytics} onChange={(e) => updateField('googleAnalytics', e.target.value)} placeholder="e.g. G-XRE45YTB2" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      {activeTooltip === 'ga4' && (
                        <div className="absolute bottom-full mb-2 left-0 right-0 bg-neutral-900 border border-white/10 p-3 rounded-xl z-30 text-[10px] text-neutral-400 leading-normal shadow-xl animate-in fade-in duration-200">
                          Measurement ID bagi Google Analytics 4. Wajib bermula dengan abjad 'G-'.
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* FASA 02: ANATOMI MIKRO DNA PRODUK & SIJIL KUASA */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg font-black uppercase font-mono text-neutral-200 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-orange-400" /> Fasa 02: Anatomi & Struktur Mikro DNA Produk (CW Engine)
                </h3>
                <p className="text-neutral-500 text-xs mt-1">Sediakan maklumat produk secara berstructured bagi membantu Copywriter menukar data ini menjadi ayat jualan yang agresif.</p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Kategori & Bentuk Fizikal Perniagaan</label>
                    <select value={formData.productCategory} onChange={(e) => updateField('productCategory', e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white">
                      <option>Suplemen & Kesihatan</option>
                      <option>Kosmetik & Kecantikan</option>
                      <option>Pakaian & Fesyen</option>
                      <option>Makanan & Minuman (F&B)</option>
                      <option>Hartanah, Projek & Property</option>
                      <option>Automotif, Bengkel & Modifikasi</option>
                      <option>Gajet, Komputer & Elektronik Hardware</option>
                      <option>Produk Digital (Ebook / Kursus Video / Software)</option>
                      <option>Perkhidmatan (Services / Agensi / Konsultasi / Homestay)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Nama Panggilan Produk / Jenama Komersial</label>
                    <input type="text" required value={formData.productBrand} onChange={(e) => updateField('productBrand', e.target.value)} placeholder="e.g. Liposlim Premium Berry Drink" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white" />
                  </div>
                </div>

                {/* TARGET AVATAR WITH CONTEXTUAL TOOLTIP */}
                <div className="space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Parameter Spesifik Target Market (Avatar Hub)</label>
                    <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'avatar' ? null : 'avatar')} className="text-neutral-500 hover:text-orange-400 flex items-center gap-1 text-[10px] font-bold"><HelpCircle className="w-3 h-3" /> Formula Panduan</button>
                  </div>
                  <textarea rows={2} required value={formData.targetAvatar} onChange={(e) => updateField('targetAvatar', e.target.value)} placeholder="Siapa pelanggan khusus yang paling terdesak memerlukan produk ini?" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white leading-relaxed" />
                  {activeTooltip === 'avatar' && (
                    <div className="bg-neutral-950 border border-orange-500/20 p-4 rounded-xl text-[11px] text-neutral-400 leading-relaxed space-y-1 z-30 relative animate-in fade-in duration-200">
                      <p className="text-red-400 font-bold uppercase tracking-wider">⚠️ ELAKKAN JAWAPAN AM: "Semua orang / Lelaki & Wanita"</p>
                      <p><strong>Formula Contoh:</strong> "Wanita berusia 30 hingga 45 tahun yang bekerja pejabat dan mengalami masalah perut buncit yang ketara selepas melahirkan anak kedua, stres tiada masa pergi gim."</p>
                    </div>
                  )}
                </div>

                {/* PAIN POINTS WITH CONTEXTUAL TOOLTIP */}
                <div className="space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Grid Masalah Emosi Terbesar (3 Pain Points Utama)</label>
                    <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'pain' ? null : 'pain')} className="text-neutral-500 hover:text-orange-400 flex items-center gap-1 text-[10px] font-bold"><HelpCircle className="w-3 h-3" /> Formula Panduan</button>
                  </div>
                  <textarea rows={3} required value={formData.painPoints} onChange={(e) => updateField('painPoints', e.target.value)} placeholder="Apakah kemarahan, ketakutan, atau rasa malu harian pelanggan anda?" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white font-mono leading-relaxed" />
                  {activeTooltip === 'pain' && (
                    <div className="bg-neutral-950 border border-orange-500/20 p-4 rounded-xl text-[11px] text-neutral-400 leading-relaxed z-30 relative animate-in fade-in duration-200">
                      <p className="text-orange-400 font-bold uppercase tracking-wider mb-1">Tulis Apa Yang Membuatkan Mereka Rendah Diri:</p>
                      <p>1. Rasa rendah diri dan malu dengan suami sebab peha makin menggeleber lemak bergulung.<br />2. Mahu menangis setiap kali sarung baju saiz lama semuanya ketat padat.<br />3. Kerap letih, sembelit teruk, dan lesu sepanjang hari di pejabat.</p>
                    </div>
                  )}
                </div>

                {/* USP WITH CONTEXTUAL TOOLTIP */}
                <div className="space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Mekanisme Unik Tunggal (Unique Selling Proposition)</label>
                    <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'usp' ? null : 'usp')} className="text-neutral-500 hover:text-orange-400 flex items-center gap-1 text-[10px] font-bold"><HelpCircle className="w-3 h-3" /> Formula Panduan</button>
                  </div>
                  <textarea rows={2} required value={formData.usp} onChange={(e) => updateField('usp', e.target.value)} placeholder="Apakah keunikan ekstrem produk anda yang tidak ada pada mana-mana pesaing lain?" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white leading-relaxed" />
                  {activeTooltip === 'usp' && (
                    <div className="bg-neutral-950 border border-orange-500/20 p-4 rounded-xl text-[11px] text-neutral-400 leading-relaxed z-30 relative animate-in fade-in duration-200">
                      <p className="text-orange-400 font-bold uppercase tracking-wider mb-1">Formula Penguncian USP Pasaran:</p>
                      <p className="italic">"Produk kami bantu [Target Market] capai [Hasil Impian] TANPA perlu lalui [Perkara Sengsara/Ditakuti]."</p>
                      <p className="mt-1"><strong>Contoh:</strong> "Satu-satunya formula jus botani yang membakar lemak degil 3x lebih laju menggunakan herba African Mango premium TANPA perlu berlapar atau cirit-birit."</p>
                    </div>
                  )}
                </div>

                {/* BEFORE VS AFTER MATRIX */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-black/30 border border-white/5">
                  <div className="sm:col-span-2">
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">Matriks Transformasi Kehidupan 30 Hari (Before vs After)</span>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Keadaan Sengsara Sebelum Guna</label>
                    <input type="text" required value={formData.transformationBefore} onChange={(e) => updateField('transformationBefore', e.target.value)} placeholder="e.g. Perut buncit berlapis, lesu & sembelit teruk" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Keadaan Bahagia Selepas 30 Hari</label>
                    <input type="text" required value={formData.transformationAfter} onChange={(e) => updateField('transformationAfter', e.target.value)} placeholder="e.g. Berat susut 6kg, pinggang ramping kemas & lawas bertenaga" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white" />
                  </div>
                </div>

                {/* AUTHORITY CREDIBILITY HUB */}
                <div className="space-y-4 p-4 rounded-2xl bg-black/30 border border-white/5">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Sijil Kuasa / Bukti Kredibiliti Rasmi (Authority Proof)</span>
                    <p className="text-neutral-500 text-[10px] mt-0.5">Sila tandakan sijil yang ada dan masukkan nombor siri rasmi untuk paparan patuh syarat iklan.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* KKM CONDITIONAL INPUT ENGINE */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                      <label className="flex items-center gap-2.5 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={formData.hasKkm || false} 
                          onChange={(e) => { 
                            updateField('hasKkm', e.target.checked); 
                            if(!e.target.checked) updateField('kkmNumber', ''); 
                          }} 
                          className="accent-orange-500 shrink-0" 
                        />
                        <span className="text-xs font-bold text-neutral-200">Kelulusan KKM (MAL/NOT)</span>
                      </label>
                      {formData.hasKkm && (
                        <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-200">
                          <input 
                            type="text" 
                            required={formData.hasKkm} 
                            value={formData.kkmNumber || ''} 
                            onChange={(e) => updateField('kkmNumber', e.target.value)} 
                            placeholder="Masukkan No. Siri KKM (e.g. MAL2011A231 atau NOT2605A)" 
                            className="w-full bg-black/60 border border-orange-500/30 rounded-lg px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" 
                        />
                          <p className="text-[9px] text-orange-400/80 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Peringatan: Wajib muat naik salinan sijil KKM ke Google Drive di Fasa 5.</p>
                        </div>
                      )}
                    </div>

                    {/* HALAL CONDITIONAL INPUT ENGINE */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                      <label className="flex items-center gap-2.5 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={formData.hasHalal || false} 
                          onChange={(e) => { 
                            updateField('hasHalal', e.target.checked); 
                            if(!e.target.checked) updateField('halalNumber', ''); 
                          }} 
                          className="accent-orange-500 shrink-0" 
                        />
                        <span className="text-xs font-bold text-neutral-200">Sijil Halal JAKIM / Diiktiraf</span>
                      </label>
                      {formData.hasHalal && (
                        <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-200">
                          <input 
                            type="text" 
                            required={formData.hasHalal} 
                            value={formData.halalNumber || ''} 
                            onChange={(e) => updateField('halalNumber', e.target.value)} 
                            placeholder="Masukkan No. Siri Rujukan Halal (e.g. JAKIM.700-2/1/...)" 
                            className="w-full bg-black/60 border border-orange-500/30 rounded-lg px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" 
                          />
                          <p className="text-[9px] text-orange-400/80 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Peringatan: Wajib muat naik dokumen bukti sijil Halal ke Google Drive di Fasa 5.</p>
                        </div>
                      )}
                    </div>

                    {/* LAB TEST CHECKBOX */}
                    <label onClick={() => updateField('hasLabTest', !formData.hasLabTest)} className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2 bg-black/40 ${formData.hasLabTest ? 'border-orange-500/50 bg-orange-500/5 text-orange-400' : 'border-white/5 text-neutral-500'}`}>
                      <input type="checkbox" checked={formData.hasLabTest || false} readOnly className="accent-orange-500" />
                      <div>
                        <span className="text-xs font-bold block">Laporan Ujian Makmal (Lab Test Approved)</span>
                        {formData.hasLabTest && <span className="text-[9px] text-orange-400/70 block mt-0.5">Sila sertakan dokumen sijil ujian makmal lengkap di dalam folder Drive nanti.</span>}
                      </div>
                    </label>

                    {/* AWARDS CHECKBOX */}
                    <label onClick={() => updateField('hasAward', !formData.hasAward)} className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2 bg-black/40 ${formData.hasAward ? 'border-orange-500/50 bg-orange-500/5 text-orange-400' : 'border-white/5 text-neutral-500'}`}>
                      <input type="checkbox" checked={formData.hasAward || false} readOnly className="accent-orange-500" />
                      <div>
                        <span className="text-xs font-bold block">Anugerah Industri / Sijil Pengiktirafan Bisnes</span>
                        {formData.hasAward && <span className="text-[9px] text-orange-400/70 block mt-0.5">Sila sertakan keratan imej grafik anugerah di dalam folder Drive nanti.</span>}
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* FASA 03: ARSITEKTUR CORONG CTA & LOGIK TAWARAN GILA (UNIVERSAL FRAMEWORK) */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg font-black uppercase font-mono text-neutral-200 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-400" /> Fasa 03: Arsitektur Corong CTA & Logik Tawaran Gila (Offer Hook)
                </h3>
                <p className="text-neutral-500 text-xs mt-1">Konfigurasikan struktur pakej jualan, halatuju butang penukaran, dan logik borang pemprosesan bayaran.</p>
              </div>

              <div className="space-y-6">
                {/* 100% UNIVERSAL STRUCTURED PRICING PACKAGES CARD MATRIX */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">Struktur Pecahan Kombo Jualan & Pautan Stripe</span>
                  <div className="grid grid-cols-1 gap-4">
                    
                    {/* PAKEJ 01 */}
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-3 border-b border-white/5 pb-1">
                        <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">📦 Pakej 01 (Asas / Pengenalan)</span>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Nama Pakej</label>
                        <input type="text" required value={formData.package1Name} onChange={(e) => updateField('package1Name', e.target.value)} placeholder="e.g. Pakej 1 Botol / Sesi Konsultasi Asas" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Harga Promosi (RM)</label>
                        <input type="text" required value={formData.package1Price} onChange={(e) => updateField('package1Price', e.target.value)} placeholder="e.g. 89" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Pautan Pembayaran (Stripe / Billplz / Toyyibpay)</label>
                        <input type="text" required={formData.paymentType === 'redirect'} value={formData.package1Stripe} onChange={(e) => updateField('package1Stripe', e.target.value)} placeholder="e.g. https://buy.stripe.com/... atau https://billplz.com/..." className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      </div>
                    </div>

                    {/* PAKEJ 02 */}
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-3 border-b border-white/5 pb-1">
                        <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">📦 Pakej 02 (Popular / Pilihan Utama Pelanggan)</span>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Nama Pakej</label>
                        <input type="text" required value={formData.package2Name} onChange={(e) => updateField('package2Name', e.target.value)} placeholder="e.g. Pakej 2 Botol (Best Seller) / Sesi Rawatan Intensif" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Harga Promosi (RM)</label>
                        <input type="text" required value={formData.package2Price} onChange={(e) => updateField('package2Price', e.target.value)} placeholder="e.g. 150" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Pautan Pembayaran (Stripe / Billplz / Toyyibpay)</label>
                        <input type="text" required={formData.paymentType === 'redirect'} value={formData.package2Stripe} onChange={(e) => updateField('package2Stripe', e.target.value)} placeholder="e.g. https://buy.stripe.com/... atau https://toyyibpay.com/..." className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      </div>
                    </div>

                    {/* PAKEJ 03 */}
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-3 border-b border-white/5 pb-1">
                        <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">📦 Pakej 03 (Premium / Penjimatan Maksimum)</span>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Nama Pakej</label>
                        <input type="text" required value={formData.package3Name} onChange={(e) => updateField('package3Name', e.target.value)} placeholder="e.g. Pakej Korporat / Set Borong / Kombo 3 Kotak" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Harga Promosi (RM)</label>
                        <input type="text" required value={formData.package3Price} onChange={(e) => updateField('package3Price', e.target.value)} placeholder="e.g. 200" className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-neutral-500 uppercase font-bold">Pautan Pembayaran (Stripe / Billplz / Toyyibpay)</label>
                        <input type="text" required={formData.paymentType === 'redirect'} value={formData.package3Stripe} onChange={(e) => updateField('package3Stripe', e.target.value)} placeholder="e.g. pautan invois pembayaran..." className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* THE MANDATORY CONDITIONAL CTA LOGIC SECTION */}
                <div className="space-y-3 p-4 bg-black/30 border border-white/5 rounded-2xl">
                  <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Penetapan Hala Tuju Aliran Butang Utama (CTA Destination Target)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label onClick={() => updateField('ctaType', 'whatsapp')} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 bg-black/20 ${formData.ctaType === 'whatsapp' ? 'border-orange-500 bg-orange-500/5' : 'border-white/10'}`}>
                      <input type="radio" name="cta_type_sel" checked={formData.ctaType === 'whatsapp'} readOnly className="mt-1 accent-orange-500" />
                      <div>
                        <span className="text-xs font-black block text-white">WhatsApp Button to Staff Line</span>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">Pakej standard tanpa ejen AI. Pelawat akan dihantar terus ke talian WhatsApp wakil jualan manusia.</span>
                      </div>
                    </label>
                    <label onClick={() => updateField('ctaType', 'ai_agent')} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 bg-black/20 ${formData.ctaType === 'ai_agent' ? 'border-orange-500 bg-orange-500/5' : 'border-white/10'}`}>
                      <input type="radio" name="cta_type_sel" checked={formData.ctaType === 'ai_agent'} readOnly className="mt-1 accent-orange-500" />
                      <div>
                        <span className="text-xs font-black block text-orange-400 flex items-center gap-1">AROS AI Agent Autonomous Routing <Zap className="w-3 h-3 text-orange-400 fill-orange-400" /></span>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">Wajib dipilih jika melanggan dwi-enjin automasi. Pelawat diserap secara automatik ke kontena AI Agent.</span>
                      </div>
                    </label>
                  </div>
                  <div className="pt-2 space-y-1.5">
                    <label className="text-[9px] font-mono text-neutral-400 uppercase font-bold">
                      {formData.ctaType === 'whatsapp' ? 'Masukkan Nombor WhatsApp Utama Staf (Sertakan kod negara lengkap, cth: 60123456789)' : 'Masukkan Pautan Webhook API Destinasi Ejen AI / Token Akses'}
                    </label>
                    <input type="text" required value={formData.ctaValue} onChange={(e) => updateField('ctaValue', e.target.value)} placeholder={formData.ctaType === 'whatsapp' ? 'e.g. 60123456789' : 'e.g. https://openclaw.aros-engine/v1/webhook_id'} className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                  </div>
                </div>

                {/* CTA BUTTON COPY TEXT INPUT */}
                <div className="space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Skrip Salinan Teks Atas Butang Jualan (CTA Button Copy)</label>
                    <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'btnCopy' ? null : 'btnCopy')} className="text-neutral-500 hover:text-orange-400"><HelpCircle className="w-3 h-3" /></button>
                  </div>
                  <input type="text" required value={formData.ctaButtonCopy} onChange={(e) => updateField('ctaButtonCopy', e.target.value)} placeholder="e.g. SAYA NAK REBUT DISKAUN 50% SEKARANG // DAFTAR SESI KONSULTASI VIP" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white uppercase tracking-wide font-black" />
                  {activeTooltip === 'btnCopy' && (
                    <div className="absolute bottom-full mb-2 left-0 right-0 bg-neutral-900 border border-white/10 p-3 rounded-xl z-30 text-[10px] text-neutral-400 leading-normal shadow-xl animate-in fade-in duration-200">
                      <strong>Psikologi Conversion:</strong> Gunakan ayat kata kerja tindakan berasaskan hasil impian prospek, bukan kata nama bosan. <span className="text-emerald-400 font-bold">Bagus: "SAYA NAK REBUT PROMOSI GAJI"</span> // <span className="text-red-400 font-bold">Hambar: "Beli Sekarang / Klik Sini"</span>.
                    </div>
                  )}
                </div>

                {/* EMBED VS REDIRECT PAYMENT CONFIG & AFTER-PAYMENT SUCCESS TARGET */}
                <div className="space-y-4 p-4 bg-black/30 border border-white/5 rounded-2xl">
                  <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Seni Bina Aliran Pemprosesan Bayaran & Pautan Sukses</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label onClick={() => updateField('paymentType', 'embed')} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 bg-black/20 ${formData.paymentType === 'embed' ? 'border-orange-500 bg-orange-500/5' : 'border-white/10'}`}>
                      <CreditCard className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-black block text-white">Embed Secure Stripe Payment Form</span>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">Borang transaksi dipasang terbenam secara fizikal di bawah halaman jualan. Pelawat membuat bayaran tanpa keluar dari web.</span>
                      </div>
                    </label>
                    <label onClick={() => updateField('paymentType', 'redirect')} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 bg-black/20 ${formData.paymentType === 'redirect' ? 'border-orange-500 bg-orange-500/5' : 'border-white/10'}`}>
                      <Link2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-black block text-white">Redirect to External Stripe Link</span>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">Butang CTA akan heret pelawat keluar dari landing page menuju ke pautan portal invois bil luar Stripe.</span>
                      </div>
                    </label>
                  </div>
                  
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <label className="text-[9px] font-mono text-neutral-400 uppercase font-bold block">Pautan Selepas Pembayaran Berjaya (After-Payment Landing URL)</label>
                    <input type="text" required value={formData.afterPaymentUrl} onChange={(e) => updateField('afterPaymentUrl', e.target.value)} placeholder="e.g. https://kedaianda.com/success-thankyou atau kedaianda.com/thankyou" className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                    <p className="text-[9px] text-neutral-500">Destinasi akhir pelawat dipulangkan semula oleh pelayan bank gateway selepas transaksi disahkan berjaya.</p>
                  </div>
                </div>

                {/* GUARANTEE POLICY TEXT INPUT */}
                <div className="space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Terma & Polisi Jaminan Pulangan Wang (Money-Back Guarantee Terms)</label>
                    <button type="button" onClick={() => setActiveTooltip(activeTooltip === 'guarantee' ? null : 'guarantee')} className="text-neutral-500 hover:text-orange-400"><HelpCircle className="w-3 h-3" /></button>
                  </div>
                  <textarea rows={2} required value={formData.guaranteePolicy} onChange={(e) => updateField('guaranteePolicy', e.target.value)} placeholder="e.g. Jaminan pulangan wang 100% tanpa banyak soal sekiranya berat badan langsung tidak turun / servis tidak mencapai KPI dalam masa 30 hari." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white leading-relaxed" />
                  {activeTooltip === 'guarantee' && (
                    <div className="absolute bottom-full mb-2 left-0 right-0 bg-neutral-900 border border-white/10 p-3 rounded-xl z-30 text-[10px] text-neutral-400 leading-normal shadow-xl animate-in fade-in duration-200">
                      Polisi ini akan dipaparkan di dalam komponen modul jaminan di fasa rekaan. Copywriter memerlukan maklumat ini agar janji perlindungan risiko tidak bercanggah dengan model perniagaan anda.
                    </div>
                  )}
                </div>

                {/* DYNAMIC FAQ ARRAY MODULAR SYSTEM */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Sistem Soalan Lazim Dinamik (FAQ Master Builder - Minima 3 Wajib)</label>
                    <button type="button" onClick={addFaqField} className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg hover:bg-emerald-500/20 transition-all">
                      <Plus className="w-3 h-3" /> Tambah Soalan FAQ
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 border-l border-white/5 pl-2">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2 relative">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-mono font-bold text-neutral-500">KOTAK SOALAN LAZIM #{idx + 1}</span>
                          {faqs.length > 3 && (
                            <button type="button" onClick={() => removeFaqField(idx)} className="text-red-400 hover:text-red-500 transition-colors">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                        <input type="text" required value={faq.question} onChange={(e) => handleFaqChange(idx, 'question', e.target.value)} placeholder={`e.g. S: Adakah ada komitmen bulanan atau kontrak tersembunyi?`} className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-orange-500 outline-none text-white" />
                        <textarea rows={1} required value={faq.answer} onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)} placeholder={`e.g. J: Tiada. Pembayaran adalah jenis sekali seumur hidup (one-time fee) tanpa caj tersembunyi.`} className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-orange-500 outline-none text-white" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* FASA 04: RANGKA SUSUNAN KOMPONEN MODULAR LAMAN (MAX-7 RULE) */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg font-black uppercase font-mono text-neutral-200 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-orange-400" /> Fasa 04: Rangka Susunan Komponen Modular Laman (Max-7 Rule)
                </h3>
                <p className="text-neutral-500 text-xs mt-1">Bina, ejas, dan susun sendiri urutan komponen modular mengikut kesesuaian corong trafik anda.</p>
              </div>

              {/* STRICT PSYCHOLOGICAL SYSTEM LIMITATION BANNER */}
              <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl flex gap-3 items-start">
                <AlertTriangle className="text-orange-400 w-4 h-4 shrink-0 mt-0.5" />
                <div className="text-xs text-orange-200/80 leading-relaxed">
                  <strong>Syarat Psikologi Kritis:</strong> Anda dihadkan untuk memilih **maksimum 7 seksyen sahaja**. Menyusun landing page terlalu panjang terbukti memecah fokus (*distract*) perhatian pelanggan, merosakkan emosi membeli, dan membunuh peratusan jualan kempen!
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                
                {/* AVAILABLE COMPONENT SOURCE POOL */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">Gudang Komponen Tersedia</span>
                  <div className="bg-black/40 border border-white/5 p-4 rounded-2xl space-y-2 max-h-[300px] overflow-y-auto">
                    {availableSections.map((block, i) => {
                      const isLocked = selectedSections.length >= 7;
                      return (
                        <button 
                          key={i} 
                          type="button" 
                          disabled={isLocked}
                          onClick={() => addSectionBlock(block)}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs font-bold flex justify-between items-center transition-all ${isLocked ? 'bg-white/5 border-white/5 opacity-30 cursor-not-allowed' : 'bg-black/50 border-white/10 hover:border-orange-500/50 hover:bg-neutral-900'}`}
                        >
                          <span>{block}</span>
                          <Plus className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* INTERACTIVE BUILD TARGET SLOTS WITH MANIPULATION CONTROLS */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">Seni Bina Aliran Struktur Laman Anda</span>
                    <span className="text-[10px] font-mono font-bold text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                      {selectedSections.length} / 7 Slots Used
                    </span>
                  </div>

                  <div className="bg-black/60 border border-white/10 p-4 rounded-2xl space-y-2 min-h-[220px] max-h-[300px] overflow-y-auto">
                    {selectedSections.length === 0 ? (
                      <p className="text-center text-neutral-600 text-xs py-12 font-mono">Klik lubang komponen tersedia untuk mula menyusun seni bina...</p>
                    ) : (
                      selectedSections.map((block, index) => (
                        <div key={index} className="bg-[#141A2E] border border-orange-500/10 p-2.5 rounded-xl flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-[9px] font-mono bg-black/50 text-orange-400 w-4 h-4 rounded-md flex items-center justify-center font-bold shrink-0">{index + 1}</span>
                            <span className="text-xs font-black text-neutral-200 truncate">{block}</span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button type="button" disabled={index === 0} onClick={() => moveBlock(index, 'up')} className="p-1 text-neutral-500 hover:text-white disabled:opacity-20"><ArrowUp className="w-3.5 h-3.5" /></button>
                            <button type="button" disabled={index === selectedSections.length - 1} onClick={() => moveBlock(index, 'down')} className="p-1 text-neutral-500 hover:text-white disabled:opacity-20"><ArrowDown className="w-3.5 h-3.5" /></button>
                            <button type="button" onClick={() => removeSectionBlock(index)} className="p-1 text-red-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

              {/* DESIGN AURA ESTETIC DROP DOWN MODULES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Warna Pilihan Identiti Grafik (Hex / Keterangan Warna Tema)</label>
                  <input type="text" required value={formData.themeColor} onChange={(e) => updateField('themeColor', e.target.value)} placeholder="e.g. Hijau Mint Segar & Putih Bersih (Fresh Slimming Vibe)" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Aura Estetik Reka Bentuk</label>
                  <select value={formData.designVibe} onChange={(e) => updateField('designVibe', e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-neutral-300">
                    <option>Clean & Minimalist (Gaya Produk Teknologi / Apple-Style)</option>
                    <option>Premium Corporate / Authority (Sesuai untuk Syarikat & Agensi B2B)</option>
                    <option>Ranggi / Streetwear Style / Bold (Sesuai untuk pakaian Gen-Z & sukan)</option>
                    <option>Luxury Luxury / High-End (Sesuai untuk Kosmetik Mahal & Barangan Mewah)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* FASA 05: DEPOSIT VAULT ASET GRAFIK & KONTRAK PEMBEKUAN DATA */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg font-black uppercase font-mono text-neutral-200 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-orange-400" /> Fasa 05: Deposit Vault Aset Grafik & Kontrak Pembekuan (Lock Contract)
                </h3>
                <p className="text-neutral-500 text-xs mt-1">Penyerahan pautan repositori visual luar bersama penguncian terma guaman had pembangunan.</p>
              </div>

              {/* HIGHLY VISIBLE CRITICAL GRAPHIC CLAUSE BOX */}
              <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl flex gap-3 items-start">
                <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="text-xs text-orange-200/80 leading-relaxed space-y-1">
                  <p><strong>Parameter Penerimaan Visual:</strong> Maksimum 15 imej di dalam folder awan. Had saiz adalah 2MB per keping.</p>
                  <p className="text-red-400 font-black uppercase tracking-wider">⚠️ PERINGATAN WAJIB: Pakej pembangunan ini TIDAK TERMASUK sebarang bentuk kerja memotong gambar latar belakang, manipulasi imej, atau grafik editing (No image editing service provided). Sila serah fail komersial yang sudah sedia pamer.</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* REPOSITORY CLOUD LINK ENTRY WITH STRICT ACCESSIBILITY WARNING */}
                <div className="border-2 border-dashed border-white/10 rounded-2xl p-6 text-center bg-black/20 relative group">
                  <Camera className="w-8 h-8 text-neutral-600 mx-auto mb-1 group-hover:text-orange-400/50 transition-colors" />
                  <p className="text-xs text-neutral-400">Tampalkan pautan (link) folder awan Google Drive / Dropbox anda di bawah:</p>
                  <input type="text" required value={formData.driveLink} onChange={(e) => updateField('driveLink', e.target.value)} placeholder="e.g. drive.google.com/drive/folders/... atau pasang pautan penuh" className="mt-3 w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-orange-500 outline-none text-white font-mono" />
                  <p className="text-[10px] text-neutral-500 mt-2">💡 <strong>Panduan Akses Drive (i):</strong> Sila pastikan tetapan kongsi (Share Settings) folder awan anda telah ditukar daripada 'Restricted' kepada <strong>'Anyone with the link can view'</strong> sebelum dihantar!</p>
                </div>

                {/* PHYSICAL CHECKLISTS FOR DEPOSITED CONTENTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-black/30 border border-white/5 rounded-xl">
                  <div className="sm:col-span-2 border-b border-white/5 pb-1">
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Senarai Semak Kandungan Fail Repositori</span>
                  </div>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" checked={formData.logoCheck} onChange={(e) => updateField('logoCheck', e.target.checked)} className="accent-orange-500 shrink-0 border-white/10 bg-black" />
                    <span className="text-xs text-neutral-400">Saya dah muat naik Fail Logo Transparan (Format PNG)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" checked={formData.productCheck} onChange={(e) => updateField('productCheck', e.target.checked)} className="accent-orange-500 shrink-0 border-white/10 bg-black" />
                    <span className="text-xs text-neutral-400">Saya dah muat naik Gambar Produk Pencahayaan Jelas (Min 5)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" checked={formData.testimonialCheck} onChange={(e) => updateField('testimonialCheck', e.target.checked)} className="accent-orange-500 shrink-0 border-white/10 bg-black" />
                    <span className="text-xs text-neutral-400">Saya dah muat naik Bukti Gambar Testimoni / Chat WhatsApp (Min 3)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" checked={formData.authorityDocCheck} onChange={(e) => updateField('authorityDocCheck', e.target.checked)} className="accent-orange-500 shrink-0 border-white/10 bg-black" />
                    <span className="text-xs text-orange-400">Saya dah muat naik Dokumen / Sijil Rujukan Sah KKM & Halal (Jika Ada)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none sm:col-span-2 pt-1 border-t border-white/5">
                    <input type="checkbox" required checked={formData.drivePublicCheck} onChange={(e) => updateField('drivePublicCheck', e.target.checked)} className="accent-orange-500 shrink-0" />
                    <span className="text-xs text-red-400 font-bold uppercase tracking-wider text-[11px]">Saya SAH sudah menukar status Share Settings Drive ke PUBLIC (Anyone with link)</span>
                  </label>
                </div>

                {/* MANDATORY LEGAL BINDING CONTRACT AGREEMENTS */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-3">
                  <span className="text-[9px] font-mono font-bold text-orange-400 block uppercase tracking-widest">MANDATORY EXECUTION BINDING CONTRACT</span>
                  
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <input type="checkbox" required checked={formData.revisionAgree} onChange={(e) => updateField('revisionAgree', e.target.checked)} className="mt-1 accent-orange-500 shrink-0" />
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                      Saya bersetuju dan memeteraikan kontrak muktamad bahawa sesi penukaran teks dan visual draf reka bentuk hanya dibenarkan **maksimum 2 kali perubahan sahaja** selepas draf pertama diserahkan. sebarang perubahan luar skop akan dikenakan caj tambahan.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <input type="checkbox" required checked={formData.layoutAgree} onChange={(e) => updateField('layoutAgree', e.target.checked)} className="mt-1 accent-orange-500 shrink-0" />
                    <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                      Saya faham susunan struktur aliran komponen modular halaman (layout framework) yang telah saya susun sendiri di Fasa 4 adalah **MUKTAMAD** dan tidak dibenarkan dirombak semula strukturnya semasa draf dalam fasa adjustment.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* WIZARD UNIVERSAL ACTION NAVIGATION PANEL */}
          <div className="flex gap-4 pt-6 mt-8 border-t border-white/5 relative z-20">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-xs uppercase font-mono tracking-wider border border-white/5">
                <ChevronLeft className="w-4 h-4" /> Kembali
              </button>
            )}
            {step < 5 ? (
              <button type="button" onClick={nextStep} className="flex-[2] bg-gradient-to-r from-orange-500 to-amber-500 text-black font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] font-mono text-xs uppercase tracking-wider">
                Fasa Seterusnya <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button type="submit" className="flex-[2] bg-emerald-500 hover:bg-emerald-600 text-black font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.2)] font-mono text-xs uppercase tracking-wider">
                Lock Execution Slot & Submit Blueprint <Send className="w-4 h-4" />
              </button>
            )}
          </div>

        </form>

        {/* SECURE SYSTEM FOOTER TAGS */}
        <footer className="mt-12 text-center">
          <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
            Aros Conversion Blueprint Suite // Secure Client-Side Engine v4.0
          </p>
        </footer>

      </div>
    </main>
  );
}
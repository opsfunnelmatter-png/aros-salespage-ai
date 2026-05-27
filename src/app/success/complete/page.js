// path: src/app/success/complete/page.js
"use client";

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Brain, Rocket, Send, ChevronRight, Settings } from 'lucide-react';
import Link from 'next/link';

export default function CompleteSuccessPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-orange-500/30 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 animate-bounce">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            AROS Autonomous <span className="text-orange-400 font-mono italic">Engine</span> Activated
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Pembayaran dwi-enjin disahkan. Server penyepaduan Meta Cloud API dan pangkalan CRM anda kini sedang dipersiapkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { label: 'Payment Verified', icon: CheckCircle2, status: 'done' },
            { label: 'AI Brain Profiling', icon: Brain, status: 'active' },
            { label: 'Autonomous Launch', icon: Rocket, status: 'pending' },
          ].map((step, idx) => (
            <div key={idx} className={`p-5 rounded-2xl border ${step.status === 'done' ? 'bg-emerald-500/5 border-emerald-500/20' : step.status === 'active' ? 'bg-orange-500/5 border-orange-500/30' : 'bg-white/5 border-white/5 opacity-50'} flex flex-col items-center text-center gap-2`}>
              <step.icon className={`w-5 h-5 ${step.status === 'done' ? 'text-emerald-400' : step.status === 'active' ? 'text-orange-400 animate-pulse' : 'text-neutral-500'}`} />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#0F1424]/90 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {!submitted ? (
            <div className="space-y-8">
              <div className="border-b border-white/5 pb-6">
                <h2 className="text-xl font-black flex items-center gap-3">
                  <Settings className="text-orange-400 w-5 h-5" /> AI Engine Knowledge Base
                </h2>
                <p className="text-neutral-400 text-xs mt-1">Sila berikan data FAQ & Profiling terperinci untuk fasa latihan tingkah laku (Brain Training) AI anda.</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">Nama Syarikat / Brand Utama</label>
                  <input required type="text" placeholder="e.g. MyShop Sdn Bhd" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all text-white" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">Nombor WhatsApp Untuk AI System (Meta API)</label>
                  <input required type="text" placeholder="e.g. 60123456789" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all text-white" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">Objektif Utama Sistem AI Closer</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all text-neutral-300">
                    <option>Menjawab Soalan Produk & Ambil Detail Order (Full Flow)</option>
                    <option>Menjawab Soalan FAQ Am Saja (Leads Generator)</option>
                    <option>Sistem Tempahan Jadual / Appointment Booking</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">Gaya Bahasa / Tone AI Mesej</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-black/20 cursor-pointer hover:bg-orange-500/5 hover:border-orange-500/30 transition-all group">
                      <input type="radio" name="aitone" className="accent-orange-500" defaultChecked />
                      <div className="text-sm font-bold text-neutral-300 group-hover:text-white">Skema & Professional</div>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-black/20 cursor-pointer hover:bg-orange-500/5 hover:border-orange-500/30 transition-all group">
                      <input type="radio" name="aitone" className="accent-orange-500" />
                      <div className="text-sm font-bold text-neutral-300 group-hover:text-white">Mesra & Guna Emoji (Casual)</div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">Senarai Soalan Lazim Produk (Paste FAQ / Maklumat Harga Kedai)</label>
                  <textarea rows={4} placeholder="Contoh: Baju Kurung RM89, postage RM8. Ambil masa 3 hari sampai. Kain moss crepe..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all text-white font-mono" required />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-black py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide text-xs">
                    Aktifkan Integrasi & Latihan Data AI <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-emerald-400 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black tracking-tight">System Initialized.</h2>
              <p className="text-neutral-400 text-sm max-w-md mx-auto">
                Data dwi-enjin berjaya dikunci. Pasukan jurutera kanan kami sedang menyediakan kontena pelayan awam anda. Pautannya akan siap dalam masa 48-72 jam bekerja.
              </p>
              <div className="pt-4">
                <Link href="/" className="inline-flex items-center gap-2 text-orange-400 font-bold hover:gap-4 transition-all text-sm">
                  Kembali ke Laman Utama <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-[10px] font-mono text-neutral-600 mt-12 uppercase tracking-widest">
          Secured AI Deployment Interface // AROS Integration Suite v1.0
        </p>

      </div>
    </main>
  );
}
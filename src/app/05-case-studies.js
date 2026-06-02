// path: src/app/05-case-studies.js
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { KanbanSquare, ShieldCheck } from 'lucide-react';

export default function CaseStudies({ dict }) {
  // FASA 5 Chat Sequence Data
  const defaultChatMessages = [
    {
      id: 1,
      sender: 'customer',
      text: "salam, pm harga pakej... area mana ek? Cod boleh?",
      time: "02:14 AM"
    },
    {
      id: 2,
      sender: 'aros',
      text: "Walaikumussalam! Terima kasih kerana berminat dengan AROS. Kami beroperasi sepenuhnya secara atas talian dari Kuala Lumpur. 🚀\n\nUntuk makluman, pakej kami sekarang sedang menawarkan harga diskaun promosi khas. Boleh saya tahu bisnes abang dalam industri apa ya? Supaya saya boleh sarankan modul AI yang paling sesuai. 😊",
      time: "02:14 AM"
    },
    {
      id: 3,
      sender: 'customer',
      text: "E-commerce jual produk skincare local bro. Ada staff tapi malam tido la hahah",
      time: "02:15 AM"
    },
    {
      id: 4,
      sender: 'aros',
      text: "Faham sangat bang! Skincare local memang laju leads masuk malam. AI AROS dibina khas untuk situasi ni — dia akan terus layan & close jualan sementara staff berehat. 💤\n\nBerdasarkan niche skincare, modul **Complete AI Engine** kami adalah yang terbaik. Ini link pembayaran promosi khas untuk lock slot abang hari ini:",
      time: "02:15 AM",
      isStripe: true
    }
  ];

  const dictChat = dict?.chat || [];
  const chatMessages = defaultChatMessages.map((staticConfig, idx) => {
    const dictMsg = dictChat[idx] || {};
    return {
      ...staticConfig,
      text: dictMsg.text || staticConfig.text
    };
  });

  const defaultMetrics = [
    { label: "VERSATILITY & ADAPTABILITY", title: "Universal", desc: "Sokongan menyeluruh untuk sebarang produk, sebarang industri, dan sebarang bahasa secara natural.", colorGradiant: "from-indigo-400 to-violet-500", glowColor: "bg-indigo-500/5", hoverBorder: "hover:border-indigo-500/30" },
    { label: "PURATA RESPONSE TIME", title: "0.2 Saat", desc: "Sistem membalas pada saat emosi prospek memuncak bagi mengelakkan mereka beralih ke pesaing.", colorGradiant: "from-orange-400 to-amber-500", glowColor: "bg-orange-500/5", hoverBorder: "hover:border-orange-500/30" },
    { label: "LEADS RECOVERED OVERNIGHT", title: "3× Ganda", desc: "Kutipan trafik dan jualan diselamatkan pada waktu staf manusia sedang tidur (1 pagi - 6 pagi).", colorGradiant: "from-orange-400 to-amber-500", glowColor: "bg-amber-500/5", hoverBorder: "hover:border-amber-500/30" },
    { label: "DEPLOYMENT TURNAROUND", title: "72 Jam", desc: "Penyerahan sistem AI sepenuhnya ke dalam bisnes anda lengkap dengan integrasi platform.", colorGradiant: "from-emerald-400 to-teal-500", glowColor: "bg-emerald-500/5", hoverBorder: "hover:border-emerald-500/30" }
  ];

  const dictMetrics = dict?.metrics || [];
  const metrics = defaultMetrics.map((staticConfig, idx) => {
    const dictMetric = dictMetrics[idx] || {};
    return {
      ...staticConfig,
      label: dictMetric.label || staticConfig.label,
      title: dictMetric.title || staticConfig.title,
      desc: dictMetric.desc || staticConfig.desc
    };
  });

  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    let active = true;
    let timerId = null;

    const playSequence = async () => {
      if (!active) return;
      setMessages([]);
      setIsTyping(false);

      for (let i = 0; i < chatMessages.length; i++) {
        if (!active) return;
        
        // Typing Phase
        setTypingSender(chatMessages[i].sender);
        setIsTyping(true);
        await new Promise(resolve => { timerId = setTimeout(resolve, 1500); });
        if (!active) return;
        
        // Message Phase
        setIsTyping(false);
        setMessages(prev => [...prev, chatMessages[i]]);
        
        // Wait before next message starts typing
        await new Promise(resolve => { timerId = setTimeout(resolve, 2000); });
        if (!active) return;
      }

      // Freeze for 6 seconds at the end of loop
      await new Promise(resolve => { timerId = setTimeout(resolve, 2000); });
      if (active) {
        playSequence();
      }
    };

    playSequence();

    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  // Auto Scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // General texts
  const section_sub = dict?.section_sub || "THE ENTERPRISE REVENUE ARCHITECTURE";
  const section_title = dict?.section_title || "Hentikan Kebocoran Leads. Seni Bina Ekosistem Pemasaran Autopilot 24/7";
  const section_desc = dict?.section_desc || "Seni bina kempen pemasaran moden bukan sekadar menjalankan iklan dan berharap staf manusia membalas secara manual. Anda perlukan kitaran ekosistem kalis bocor berautomasi tinggi dari fasa perolehan trafik sehingga ke pengiraan nilai LTV prospek.";
  const cta_board_title = dict?.cta_board_title || "KLIK & UJI AI BOT KAMI SEKARANG";
  const cta_board_desc = dict?.cta_board_desc || "Cuba hantar apa sahaja soalan & tengok kelajuan respons bot";
  const btn_chat_pay = dict?.btn_chat_pay || "BAYAR";

  return (
    <section className="relative z-10 w-full bg-[#0B0F19] border-t border-white/5 py-24 text-white overflow-hidden">
      
      {/* INDUSTRIAL GRAPHIC MATRIX BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER BLOCK (FULL WIDTH STRATEGIC BLUEPRINT REVIEW) */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
            <KanbanSquare className="w-3.5 h-3.5 text-orange-400" />
            {section_sub}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {section_title}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            {section_desc}
          </p>
        </div>

        {/* TOP LAYOUT GRID: Left (Mockup), Right (Stats & Warning) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Lajur Kiri: Mobile Phone Mockup (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            
            {/* REALISTIC SMARTPHONE CHASSIS */}
            <div className="relative w-full max-w-[320px] aspect-[9/19.5] mx-auto border-[8px] sm:border-[12px] border-zinc-900 rounded-[40px] sm:rounded-[50px] bg-[#0b141a] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(16,185,129,0.15)] flex flex-col">
              
              {/* HARDWARE BUTTONS */}
              <div className="absolute top-[120px] -left-[14px] w-1.5 h-[35px] bg-zinc-800 rounded-l-md" />
              <div className="absolute top-[170px] -left-[14px] w-1.5 h-[35px] bg-zinc-800 rounded-l-md" />
              <div className="absolute top-[140px] -right-[14px] w-1.5 h-[55px] bg-zinc-800 rounded-r-md" />

              {/* DYNAMIC ISLAND / NOTCH */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-black rounded-full z-40 flex items-center justify-between px-3 shadow-sm border border-white/5">
                <div className="w-2 h-2 rounded-full bg-indigo-900/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a2e] border border-zinc-800/80" />
              </div>

              {/* PHONE STATUS BAR */}
              <div className="bg-[#121b22] w-full px-5 py-2 pt-2.5 flex justify-between items-center z-30">
                <span className="text-[10px] font-medium text-white font-sans mt-1">3:17</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-3 h-2.5 bg-white/90 rounded-[2px]" />
                  <div className="w-3 h-2.5 bg-white/90 rounded-[2px]" />
                  <div className="w-4 h-2.5 border border-white/90 rounded-[3px]" />
                </div>
              </div>

              {/* WHATSAPP HEADER */}
              <div className="bg-[#121b22] px-4 py-3 border-b border-white/5 flex items-center justify-between shrink-0 relative z-30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center font-bold text-emerald-400 font-mono text-sm">
                      P
                    </div>
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute bottom-0 right-0 border-2 border-[#121b22]" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white leading-tight">Prospek AROS 12</div>
                    <div className="text-[10px] text-emerald-400 font-medium">(online)</div>
                  </div>
                </div>
                <div className="text-[8px] font-mono font-bold text-neutral-500 tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded select-none">
                  AI_BRAIN
                </div>
              </div>

              {/* CHAT BACKGROUND & MESSAGES AREA */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3.5 space-y-3.5 scrollbar-hide flex flex-col bg-[#0b141a] scroll-smooth relative z-10 pb-6">
                {messages.map((msg) => {
                  const isCustomer = msg.sender === 'customer';
                  return (
                    <div 
                      key={msg.id}
                      className={`max-w-[85%] rounded-[18px] px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm flex flex-col relative transition-all duration-300 ${
                        isCustomer 
                          ? 'self-start bg-[#202c33] text-white rounded-tl-[4px]' 
                          : 'self-end bg-[#005c4b] text-white rounded-tr-[4px]'
                      }`}
                    >
                      {!isCustomer && (
                        <div className="text-[9px] font-mono font-black text-emerald-300 tracking-widest uppercase mb-1.5 select-none">
                          // AROS AI ENGINE (0.2s)
                        </div>
                      )}
                      <p className="whitespace-pre-line text-left">{msg.text}</p>
                      
                      {msg.isStripe && (
                        <div className="mt-3 mb-1 bg-black/40 border border-white/10 p-2.5 rounded-xl flex items-center justify-between gap-3 text-left">
                          <div className="min-w-0">
                            <div className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest leading-none mb-1">STRIPE SECURE CHECKOUT</div>
                            <div className="text-[10px] font-bold text-emerald-400 underline truncate max-w-[120px]">stripe.com/pay/aros-skincare</div>
                          </div>
                          <a href="#pricing_section" className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-[10px] px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shadow-xs leading-none">
                            {btn_chat_pay}
                          </a>
                        </div>
                      )}

                      {/* Footer / Time & Tick */}
                      <div className="text-[9px] text-neutral-400/90 font-sans mt-1.5 self-end flex items-center gap-1 leading-none select-none">
                        <span>{msg.time}</span>
                        {!isCustomer && (
                          <svg className="w-3.5 h-3.5 text-[#53bdeb] fill-current" viewBox="0 0 16 15" width="16" height="15">
                            <path d="M15.01 3.3l-5.5 5.5-2.76-2.77-.88.88 3.64 3.64 6.38-6.38-.88-.87zm-5.5 8.25l-.88-.88-2.2 2.2 1.32 1.32 2.2-2.2-.44-.44zm-5.5-2.75L.37 5.16l-.88.88 4.52 4.52.88-.88-4.52-4.52.88-.88.37.37z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* TYPING DOTS INDICATOR */}
                {isTyping && (
                  <div 
                    className={`max-w-[75px] rounded-[18px] px-4 py-3 text-sm shadow-sm flex items-center justify-center gap-1.5 transition-all duration-300 ${
                      typingSender === 'customer' 
                        ? 'self-start bg-[#202c33] text-white rounded-tl-[4px]' 
                        : 'self-end bg-[#005c4b] text-white rounded-tr-[4px]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                  </div>
                )}
              </div>
              
              {/* HOME INDICATOR LINE */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-40" />
            </div>

          </div>

          {/* Lajur Kanan: Stat (lg:col-span-7) - Vertically Centered */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center gap-5 mt-8 lg:mt-0">
            
            {/* PREMIUM CTA BUTTON FOR BOT TESTING */}
            <div className="w-full text-center space-y-2 relative z-20 mb-2">
              <a 
                href="https://wa.me/601112755161?text=Salam%20AROS%2C%20saya%20nak%20test%20kehebatan%20bot%20ni%20sekarang"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-black font-black text-xs py-4 px-6 rounded-2xl cursor-pointer overflow-hidden transform transition-all duration-300 animate-premium-pulse hover:scale-[1.02] active:scale-95 whitespace-normal tracking-wide shadow-[0_0_25px_rgba(249,115,22,0.45)] select-none text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex h-2 w-2 mr-0.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                </span>
                {cta_board_title}
              </a>
              <p className="text-[10px] sm:text-xs font-mono text-neutral-400 leading-normal">
                {cta_board_desc}
              </p>
            </div>

            {/* 3-COLUMN INDUSTRY BENCHMARK RESULTS - VERTICAL STACK WITH MICRO-COPY */}
            <div className="flex flex-col gap-4">
              {metrics.map((item, idx) => (
                <div key={idx} className={`bg-[#0F1424] border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between text-left gap-4 shadow-xs relative overflow-hidden group ${item.hoverBorder} transition-colors`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${item.glowColor} rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none`} />
                  <div className="flex flex-col gap-2 relative z-10">
                    <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest">{item.label}</span>
                    <p className="text-sm text-neutral-500 font-medium max-w-[280px]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="relative z-10 shrink-0 self-start sm:self-center">
                    <span className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${item.colorGradiant} bg-clip-text text-transparent`}>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
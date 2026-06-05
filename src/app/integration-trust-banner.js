// path: src/app/integration-trust-banner.js
"use client";
import React from 'react';

export default function IntegrationTrustBanner() {
  return (
    <div className="w-full py-3.5 px-5 bg-[#0E1322]/45 border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 select-none max-w-4xl mx-auto my-6 text-neutral-400">
      <div className="flex items-center gap-2 text-xs font-mono font-medium shrink-0">
        <span>💡 Hassle-free, mess-free integration.</span>
      </div>
      
      {/* Logos (Inline SVG) */}
      <div className="flex items-center gap-5 opacity-50 hover:opacity-75 transition-opacity">
        {/* Meta */}
        <svg viewBox="0 0 24 24" className="h-4 w-auto fill-current text-neutral-400 hover:text-white transition-colors" title="Meta (Facebook)">
          <path d="M17.38 6.75c-1.27 0-2.45.54-3.38 1.44a5.04 5.04 0 0 0-3.38-1.44c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.27 0 2.45-.54 3.38-1.44a5.04 5.04 0 0 0 3.38 1.44c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6.76 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm6.76 3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
        {/* TikTok */}
        <svg viewBox="0 0 24 24" className="h-4 w-auto fill-current text-neutral-400 hover:text-white transition-colors" title="TikTok">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.02-2.89-.35-4.2-.97-.24-.11-.47-.24-.7-.37V14.4c.02 2.43-.89 4.96-2.82 6.47-1.92 1.56-4.66 2.02-7.06 1.45C4.38 21.6 1.96 18.79 1.98 15.4c-.06-3.41 2.44-6.62 5.86-7.04.53-.08 1.07-.1 1.61-.06v4.04c-.6-.08-1.23.01-1.78.29-.98.47-1.65 1.56-1.57 2.65.04 1.33 1.19 2.5 2.52 2.42 1.14-.04 2.16-.89 2.39-2.01.12-.46.12-.94.12-1.42V.02h.73z" />
        </svg>
        {/* Shopify */}
        <svg viewBox="0 0 24 24" className="h-4 w-auto fill-current text-neutral-400 hover:text-white transition-colors" title="Shopify">
          <path d="M19 6h-3V5c0-1.66-1.34-3-3-3s-3 1.34-3 3v1H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c.55 0 1 .45 1 1v1h-2V5c0-.55.45-1 1-1zm7 15H7V8h12v11z" />
        </svg>
        {/* WordPress */}
        <svg viewBox="0 0 24 24" className="h-4 w-auto fill-current text-neutral-400 hover:text-white transition-colors" title="WordPress">
          <path d="M12.158 12.786l-2.698 7.84c.767.234 1.579.366 2.423.366.697 0 1.369-.089 2.01-.26l-1.735-7.946zm-2.072-4.14c0 .324-.038.64-.11.944L8.358 14.88l-2.093-6.208c-.02-.073-.03-.146-.03-.223 0-.462.375-.838.838-.838.254 0 .484.116.639.297l1.97 5.845 2.197-5.875a.822.822 0 0 0 .077-.324.838.838 0 0 0-.838-.838c-.378 0-.712.253-.82.613l-1.39 3.738-1.57-4.223A4.275 4.275 0 0 0 8.04 6.774 4.28 4.28 0 0 0 12.16 3a4.28 4.28 0 0 0 4.28 4.28c0 .285-.028.56-.08.838L14.77 12.78l-2.612-4.135zm1.914-.646c0-.462.376-.838.838-.838.463 0 .839.376.839.838s-.376.838-.839.838c-.462 0-.838-.376-.838-.838zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        {/* Stripe */}
        <svg viewBox="0 0 40 16" className="h-4 w-auto fill-current text-neutral-400 hover:text-white transition-colors" title="Stripe">
          <path d="M4.6 6.8c0-.7.6-1 1.6-1 1.2 0 2.5.3 3.5.8V3.1C8.7 2.7 7.5 2.5 6.2 2.5c-3.1 0-5.3 1.7-5.3 4.6 0 4.1 5.7 3.4 5.7 5.2 0 .9-.7 1.2-1.8 1.2-1.5 0-3-.5-4.1-1.1v3.5c1.2.5 2.7.8 4.2.8 3.2 0 5.4-1.6 5.4-4.6 0-4.2-5.7-3.5-5.7-5.3zm12.3 1.9V2.9h-3.6v8.6c0 1.2.9 1.7 2.1 1.7.5 0 1-.1 1.4-.2v-3c-.2 0-.4.1-.6.1-.5 0-.8-.2-.8-.8V8.7h2.1zm2.3-5.8v2.4h3.6V2.9h-3.6zm0 5.8V8.7h3.6V2.9h-3.6zm7.2-2.9v3.1c0 1.4 1 2.2 2.3 2.2.4 0 .9-.1 1.3-.2v-3.1c0-1.4-1-2.2-2.3-2.2-.4 0-.9.1-1.3.2zm0 8.7V8.7h3.6v5.8h-3.6zm7.2-2.9c0-2.3 1.6-3.8 3.8-3.8.8 0 1.6.2 2.2.6V2.9h-3.6v8.6c.6.4 1.4.6 2.2.6 2.2 0 3.8-1.5 3.8-3.8zm0 5.8V8.7h3.6v5.8h-3.6z" />
        </svg>
      </div>
      
      <div className="text-[10px] font-mono text-neutral-500 text-center md:text-right leading-relaxed shrink-0">
        ⚠️ Slot minggu ini hampir penuh | Diselia oleh entiti sah: Bromover Resources Sdn. Bhd. (SSM: 201901003230)
      </div>
    </div>
  );
}

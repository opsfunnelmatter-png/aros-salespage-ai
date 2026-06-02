"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageToggle({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tetapkan label paparan bahasa yang aktif
  const langLabels = {
    bm: "BM",
    en: "EN",
    zh: "中文"
  };

  const activeLang = currentLang || "bm";

  // Tutup dropdown jika pengguna klik di luar kawasan komponen
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang) => {
    setIsOpen(false);
    
    // Jika pilih BM, kita hantar ke root path (/), jika EN ke /en, jika ZH ke /zh
    if (newLang === "bm") {
      router.push("/");
    } else {
      router.push(`/${newLang}`);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[9999]" ref={dropdownRef}>
      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 backdrop-blur-md bg-black/40 border border-white/10 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:bg-black/60 hover:border-white/20 cursor-pointer active:scale-95 select-none"
      >
        <Globe className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
        <span className="tracking-wider">{langLabels[activeLang]}</span>
        <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu Overlay */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-28 bg-[#090d18]/95 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col z-[9999] animate-in fade-in slide-in-from-top-1 duration-150">
          <button
            onClick={() => handleLanguageChange("bm")}
            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer border-b border-white/[0.03] ${
              activeLang === "bm"
                ? "text-orange-500 bg-white/[0.02] font-bold"
                : "text-neutral-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Bahasa Melayu
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer border-b border-white/[0.03] ${
              activeLang === "en"
                ? "text-orange-500 bg-white/[0.02] font-bold"
                : "text-neutral-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("zh")}
            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer ${
              activeLang === "zh"
                ? "text-orange-500 bg-white/[0.02] font-bold"
                : "text-neutral-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            华语 (Mandarin)
          </button>
        </div>
      )}
    </div>
  );
}

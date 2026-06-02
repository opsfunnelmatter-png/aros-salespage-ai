const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\amin8\\Desktop\\aros-salespage-ai';

// 1. Definasikan data terjemahan baru untuk dwi-warna headline
const translationUpdates = {
  bm: {
    pricing: {
      section_title_line1: "Pilih Sistem Yang Sesuai Untuk ",
      section_title_highlight: "Perniagaan Anda"
    },
    testimonials: {
      section_title_line1: "Perbandingan Kecekapan: ",
      section_title_highlight: "AROS AI Engine vs Kaedah Biasa"
    },
    technical_architecture: {
      section_title_line1: "Seni Bina Ekosistem ",
      section_title_highlight: "Jualan Di Sebalik Tabir"
    },
    case_studies: {
      section_title_line1: "Hentikan Kebocoran Leads. ",
      section_title_highlight: "Seni Bina Ekosistem Pemasaran Autopilot 24/7"
    },
    authority: {
      section_title_line1: "Di Sebalik Pembangunan Enjin ",
      section_title_highlight: "Automasi AROS Engine"
    },
    timeline: {
      section_title_line1: "Dari Rangka Pembangunan Sehingga ",
      section_title_highlight: "Sistem Sedia Beroperasi"
    }
  },
  en: {
    pricing: {
      section_title_line1: "Choose the Ideal System for ",
      section_title_highlight: "Your Business"
    },
    testimonials: {
      section_title_line1: "Efficiency Benchmark: ",
      section_title_highlight: "AROS AI Engine vs Traditional Methods"
    },
    technical_architecture: {
      section_title_line1: "The Backend Conversion ",
      section_title_highlight: "Flow Mechanism"
    },
    case_studies: {
      section_title_line1: "Plug Your Lead Leaks. ",
      section_title_highlight: "24/7 Autopilot Sales Ecosystem Engineering"
    },
    authority: {
      section_title_line1: "The Engineering Blueprint Behind ",
      section_title_highlight: "The AROS Automation Framework"
    },
    timeline: {
      section_title_line1: "From Development Framework To ",
      section_title_highlight: "Fully Operational System"
    }
  },
  zh: {
    pricing: {
      section_title_line1: "选择最适合您企业的",
      section_title_highlight: "自动化成交系统"
    },
    testimonials: {
      section_title_line1: "多维效能横向对比：",
      section_title_highlight: "AROS AI 智能引擎 vs 传统获客承接手段"
    },
    technical_architecture: {
      section_title_line1: "揭开 AROS 幕后高效转化的",
      section_title_highlight: "底层逻辑"
    },
    case_studies: {
      section_title_line1: "堵死流失流量。",
      section_title_highlight: "打造 24/7 全天候自动运转的闭环获客系统"
    },
    authority: {
      section_title_line1: "揭秘 AROS 全自动化成交引擎背后的",
      section_title_highlight: "研发总指挥"
    },
    timeline: {
      section_title_line1: "从架构搭建，到",
      section_title_highlight: "全自动化系统交付上线"
    }
  }
};

// Kemas kini kamus JSON (bm, en, zh)
for (const [lang, modules] of Object.entries(translationUpdates)) {
  const filePath = path.join(basePath, 'src', 'dictionaries', `${lang}.json`);
  const content = fs.readFileSync(filePath, 'utf8');
  const dict = JSON.parse(content);

  for (const [moduleName, keys] of Object.entries(modules)) {
    if (dict[moduleName]) {
      // Hapus kekunci section_title / section_title_line2 lama
      delete dict[moduleName].section_title;
      delete dict[moduleName].section_title_line2;
      
      // Masukkan kekunci baru
      dict[moduleName].section_title_line1 = keys.section_title_line1;
      dict[moduleName].section_title_highlight = keys.section_title_highlight;
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Updated dictionaries/${lang}.json successfully!`);
}

// 2. Refactor Components
const refactorComponent = (fileName, moduleKey, defaultL1, defaultHighlight) => {
  const fileFullPath = path.join(basePath, 'src', 'app', fileName);
  let content = fs.readFileSync(fileFullPath, 'utf8');

  // Cari dan gantikan pengisytiharan section_title fallback
  // Contoh: const section_title = dict?.section_title || "...";
  const regexTitle = new RegExp(`const\\s+section_title\\s*=\\s*dict\\?\\.section_title\\s*\\|\\|\\s*["'\`](.*?)["'\`];`);
  
  if (content.match(regexTitle)) {
    content = content.replace(regexTitle, 
      `const section_title_line1 = dict?.section_title_line1 || "${defaultL1}";\n  const section_title_highlight = dict?.section_title_highlight || "${defaultHighlight}";`
    );
  } else {
    // Sekiranya untuk pricing.js, ia sedia guna line1 & line2
    content = content.replace('dict?.section_title_line2', 'dict?.section_title_highlight');
    content = content.replace('section_title_line2', 'section_title_highlight');
  }

  // Gantikan bahagian <h2> rendering untuk section_title dengan span dwi-warna
  // Cari {section_title} atau {dict.xxx.section_title} atau {pricingPkg?.section_title}
  content = content.replace(
    /<h2>([\s\S]*?)\{\s*section_title\s*\}([\s\S]*?)<\/h2>/g,
    `<h2>$1{section_title_line1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 block sm:inline">{section_title_highlight}</span>$2</h2>`
  );
  
  content = content.replace(
    /<h2([\s\S]*?)\{\s*section_title\s*\}([\s\S]*?)<\/h2>/g,
    `<h2$1{section_title_line1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 block sm:inline">{section_title_highlight}</span>$2</h2>`
  );

  fs.writeFileSync(fileFullPath, content, 'utf8');
  console.log(`Refactored src/app/${fileName} successfully!`);
};

// Jalankan refactoring komponen
refactorComponent('04-timeline.js', 'timeline', 'Dari Rangka Pembangunan Sehingga ', 'Sistem Sedia Beroperasi');
refactorComponent('05-case-studies.js', 'case_studies', 'Hentikan Kebocoran Leads. ', 'Seni Bina Ekosistem Pemasaran Autopilot 24/7');
refactorComponent('05-technical-architecture.js', 'technical_architecture', 'Seni Bina Ekosistem ', 'Jualan Di Sebalik Tabir');
refactorComponent('06-testimonials.js', 'testimonials', 'Perbandingan Kecekapan: ', 'AROS AI Engine vs Kaedah Biasa');
refactorComponent('07-authority.js', 'authority', 'Di Sebalik Pembangunan Enjin ', 'Automasi AROS Engine');
refactorComponent('08-pricing.js', 'pricing', 'Pilih Sistem Yang Sesuai Untuk ', 'Perniagaan Anda');

console.log('--- ALL HEADLINES SUCCESSFULLY UPGRADED TO DOUBLE-COLOR GRADIENTS ---');

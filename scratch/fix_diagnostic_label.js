const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\amin8\\Desktop\\aros-salespage-ai';

// 1. Suntik kunci baharu ke kamus
const translations = {
  bm: "TANDA ELEMEN YANG SUDAH AKTIF:",
  en: "TICK ACTIVE ELEMENTS:",
  zh: "勾选已就位的元素："
};

for (const [lang, labelText] of Object.entries(translations)) {
  const dictPath = path.join(basePath, 'src', 'dictionaries', `${lang}.json`);
  const dictContent = fs.readFileSync(dictPath, 'utf8');
  const dict = JSON.parse(dictContent);
  
  if (dict.diagnostic) {
    dict.diagnostic.active_elements_label = labelText;
  }
  
  fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Successfully injected "active_elements_label" into dictionaries/${lang}.json`);
}

// 2. Refactor src/app/01b-diagnostic.js
const diagnosticPath = path.join(basePath, 'src', 'app', '01b-diagnostic.js');
let content = fs.readFileSync(diagnosticPath, 'utf8');

// Kita ganti talian label tegar
// Baris 148: {dict?.label_active_title || "Tanda Elemen Yang Sudah Aktif:"}
content = content.replace(
  /\{\s*dict\?\.label_active_title\s*\|\|\s*["']Tanda Elemen Yang Sudah Aktif:["']\s*\}/g,
  `{dict?.active_elements_label || "TANDA ELEMEN YANG SUDAH AKTIF:"}`
);

// Baris 269: {dict?.label_active_title || "Tanda Elemen Yang Sudah Aktif Dalam Aliran Jualan Anda:"}
content = content.replace(
  /\{\s*dict\?\.label_active_title\s*\|\|\s*["']Tanda Elemen Yang Sudah Aktif Dalam Aliran Jualan Anda:["']\s*\}/g,
  `{dict?.active_elements_label || "TANDA ELEMEN YANG SUDAH AKTIF:"}`
);

fs.writeFileSync(diagnosticPath, content, 'utf8');
console.log('Successfully refactored src/app/01b-diagnostic.js!');

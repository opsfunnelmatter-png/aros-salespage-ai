const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\amin8\\Desktop\\aros-salespage-ai';

// 1. Pastikan JSON dictionaries sudah betul (sudah betul dari fasa terdahulu, tetapi kita selaraskan)
const companyTags = {
  bm: "BROMOVER RESOURCES SDN. BHD. · EST. 2019 · 30+ Bisnes Didigitalkan",
  en: "BROMOVER RESOURCES SDN. BHD. · EST. 2019 · 30+ Enterprises Fully Digitalized",
  zh: "BROMOVER RESOURCES SDN. BHD. · 创立于 2019 年 · 全面数字化赋能转型 30+ 传统企业"
};

for (const [lang, text] of Object.entries(companyTags)) {
  const dictPath = path.join(basePath, 'src', 'dictionaries', `${lang}.json`);
  const dictContent = fs.readFileSync(dictPath, 'utf8');
  const dict = JSON.parse(dictContent);
  
  if (dict.authority) {
    dict.authority.company_tag = text;
  }
  
  fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Verified/updated dictionaries/${lang}.json company_tag`);
}

// 2. Refactor src/app/07-authority.js fallback
const authorityPath = path.join(basePath, 'src', 'app', '07-authority.js');
let authorityContent = fs.readFileSync(authorityPath, 'utf8');

// Kemas kini fallback default pada Line 90
authorityContent = authorityContent.replace(
  /const\s+company_tag\s*=\s*dict\?\.company_tag\s*\|\|\s*["']BROMOVER RESOURCES SDN. BHD. · EST. 2019["'];/g,
  `const company_tag = dict?.company_tag || "BROMOVER RESOURCES SDN. BHD. · EST. 2019 · 30+ Bisnes Didigitalkan";`
);

fs.writeFileSync(authorityPath, authorityContent, 'utf8');
console.log('Refactored src/app/07-authority.js fallback successfully!');

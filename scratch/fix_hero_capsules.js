const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\amin8\\Desktop\\aros-salespage-ai';

// 1. Suntik company_tag ke dalam objek "hero" dalam dictionaries
const companyTags = {
  bm: "BROMOVER RESOURCES SDN. BHD. · EST. 2019 · 30+ Bisnes Didigitalkan",
  en: "BROMOVER RESOURCES SDN. BHD. · EST. 2019 · 30+ Enterprises Fully Digitalized",
  zh: "BROMOVER RESOURCES SDN. BHD. · 创立于 2019 年 · 全面数字化赋能转型 30+ 传统企业"
};

for (const [lang, text] of Object.entries(companyTags)) {
  const dictPath = path.join(basePath, 'src', 'dictionaries', `${lang}.json`);
  const dictContent = fs.readFileSync(dictPath, 'utf8');
  const dict = JSON.parse(dictContent);
  
  if (dict.hero) {
    dict.hero.company_tag = text;
  }
  
  fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Successfully injected "company_tag" under "hero" in dictionaries/${lang}.json`);
}

// 2. Refactor src/app/01-hero.js
const heroPath = path.join(basePath, 'src', 'app', '01-hero.js');
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Gantikan pemetaan tegar array dengan pembelahan dinamik daripada dict?.company_tag
const oldMapBlock = `          {[
            'Bromover Resources Sdn. Bhd.',
            'EST. 2019',
            '30+ Bisnes Didigitalkan',
          ].map((label, i) => (`;

const newMapBlock = `          (dict?.company_tag || "Bromover Resources Sdn. Bhd. · EST. 2019 · 30+ Bisnes Didigitalkan")
            .split('·')
            .map(s => s.trim())
            .map((label, i) => (`;

heroContent = heroContent.replace(oldMapBlock, newMapBlock);

fs.writeFileSync(heroPath, heroContent, 'utf8');
console.log('Successfully refactored src/app/01-hero.js to use dynamic split capsules!');

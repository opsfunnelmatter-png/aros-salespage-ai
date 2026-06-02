const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\amin8\\Desktop\\aros-salespage-ai';

// 1. Kemas kini en.json
const enPath = path.join(basePath, 'src', 'dictionaries', 'en.json');
let enContent = fs.readFileSync(enPath, 'utf8');
enContent = enContent.replace(/Fully\s+Digitalized/g, 'Digitalized');
fs.writeFileSync(enPath, enContent, 'utf8');
console.log('Successfully updated en.json (removed "Fully")');

// 2. Kemas kini zh.json
const zhPath = path.join(basePath, 'src', 'dictionaries', 'zh.json');
let zhContent = fs.readFileSync(zhPath, 'utf8');
zhContent = zhContent.replace(/全面数字化/g, '数字化');
fs.writeFileSync(zhPath, zhContent, 'utf8');
console.log('Successfully updated zh.json (removed "全面")');

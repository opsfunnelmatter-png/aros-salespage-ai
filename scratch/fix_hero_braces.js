const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Users\\amin8\\Desktop\\aros-salespage-ai';
const heroPath = path.join(basePath, 'src', 'app', '01-hero.js');
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Pembetulan: masukkan kurungan kerinting `{` di permulaan ungkapan JavaScript dalam JSX
heroContent = heroContent.replace(
  `          (dict?.company_tag || "Bromover Resources Sdn. Bhd. · EST. 2019 · 30+ Bisnes Didigitalkan")`,
  `          {(dict?.company_tag || "Bromover Resources Sdn. Bhd. · EST. 2019 · 30+ Bisnes Didigitalkan")`
);

// Pastikan di hujung map ada penutup `}` untuk kurungan kerinting `{`
heroContent = heroContent.replace(
  `          ))` + '\r\n' + `        </div>`,
  `          }))}` + '\r\n' + `        </div>`
);

// Cuba backup gantian jika LF format sahaja
heroContent = heroContent.replace(
  `          ))` + '\n' + `        </div>`,
  `          }))}` + '\n' + `        </div>`
);

fs.writeFileSync(heroPath, heroContent, 'utf8');
console.log('Successfully wrapped Hero split capsules expression in JSX curly braces!');

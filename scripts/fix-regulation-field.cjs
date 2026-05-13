const fs = require('fs');
let content = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');

// Fix the broken pattern: replace literal `r`n with actual newline+indent
content = content.replace(/"season": 1,`r`n    "regulation": "M-A",/g, '"season": 1,\n    "regulation": "M-A",');

// Fix concatenated fields on same line (e.g. "regulation": "M-A",    "tier":)
content = content.replace(/"regulation": "M-A",    "/g, '"regulation": "M-A",\n    "');

const count = (content.match(/"regulation": "M-A"/g) || []).length;
fs.writeFileSync('src/lib/pokemon-data.ts', content, 'utf8');
console.log('Fixed. Count:', count);

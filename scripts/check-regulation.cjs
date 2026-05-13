const fs = require('fs');
const content = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');
const count = (content.match(/"regulation": "M-A"/g) || []).length;
const hasBroken = content.includes('`r`n');
console.log('regulation M-A count:', count);
console.log('has broken backtick-r-n:', hasBroken);
// Show first pokemon entry for sanity check
const start = content.indexOf('"season": 1');
console.log('\nSample around first season entry:');
console.log(content.slice(start, start + 120));

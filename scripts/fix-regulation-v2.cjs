const fs = require('fs');
let content = fs.readFileSync('src/lib/pokemon-data.ts', 'utf8');

// The broken replacement left literal backtick-r-backtick-n characters.
// Pattern: "season": 1,`r`n    "regulation": "M-A",    "NEXTFIELD":
// We split on the broken separator and rebuild properly.

const BROKEN_SEP = '"season": 1,\`r\`n    "regulation": "M-A",    "';
const FIXED_SEP = '"season": 1,\n    "regulation": "M-A",\n    "';

let count = 0;
while (content.includes(BROKEN_SEP)) {
  content = content.replace(BROKEN_SEP, FIXED_SEP);
  count++;
}

// Also handle the case where the rest of the line still has the issue
// but fields after regulation don't have spaces problem (already fixed above)

fs.writeFileSync('src/lib/pokemon-data.ts', content, 'utf8');
console.log('Fixed', count, 'occurrences');
console.log('Still broken:', content.includes('\`r\`n'));

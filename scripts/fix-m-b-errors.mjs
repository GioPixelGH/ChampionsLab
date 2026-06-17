#!/usr/bin/env node
/**
 * Fix errors from the M-B batch add:
 * 1. Remove Perrserker (#863) — wrong dex number, Falinks is #870
 * 2. Remove Charcadet (#935) — wrong dex number, Houndstone is #972
 * 3. Fix Pyroar name: "Pyroar Male" → "Pyroar"
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');

let src = fs.readFileSync(DATA_FILE, 'utf8');

function removeEntry(source, dexId) {
  // Match a full entry block: starts with ,?\n  {\n    "id": <dexId>, and ends before the next entry or the closing ];
  // Strategy: find the "id": N entry, then scan for the matching closing brace
  const startPattern = new RegExp(`(,?)\\n  \\{\\n    "id": ${dexId},`);
  const match = startPattern.exec(source);
  if (!match) {
    console.log(`⚠️  Entry #${dexId} not found`);
    return source;
  }

  // Find the closing brace of this entry
  const entryStart = match.index;
  const braceStart = source.indexOf('\n  {', entryStart);

  let depth = 0;
  let i = braceStart;
  while (i < source.length) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) {
        // Found the closing brace of the entry
        const entryEnd = i + 1;
        // Remove: either leading comma+newline or trailing comma+newline
        const leadingComma = match[1] === ',';
        if (leadingComma) {
          // Remove from the comma before \n  { to end of }
          source = source.slice(0, match.index) + source.slice(entryEnd);
        } else {
          // No leading comma — remove the entry and any trailing comma+newline
          const afterEntry = source.slice(entryEnd);
          const trailingComma = afterEntry.match(/^,\n/);
          if (trailingComma) {
            source = source.slice(0, entryStart) + afterEntry.slice(trailingComma[0].length);
          } else {
            source = source.slice(0, entryStart) + afterEntry;
          }
        }
        console.log(`✅ Removed entry #${dexId}`);
        return source;
      }
    }
    i++;
  }
  console.log(`⚠️  Could not find closing brace for #${dexId}`);
  return source;
}

// 1. Remove Perrserker (#863)
src = removeEntry(src, 863);

// 2. Remove Charcadet (#935)
src = removeEntry(src, 935);

// 3. Fix Pyroar name
if (src.includes('"name": "Pyroar Male"')) {
  src = src.replace('"name": "Pyroar Male"', '"name": "Pyroar"');
  console.log('✅ Fixed Pyroar name');
} else {
  console.log('ℹ️  Pyroar Male not found (may already be fixed)');
}

fs.writeFileSync(DATA_FILE, src, 'utf8');
console.log('\n✅ Fixes applied to pokemon-data.ts');

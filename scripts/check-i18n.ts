import * as fs from "fs";
import * as path from "path";

const I18N_DIR = path.join(process.cwd(), "src", "lib", "i18n");
const SOURCE_LANG = "en";
const TARGET_LANGS = ["fr", "es", "it", "de", "pt-PT"];

type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonArray = JsonValue[];

function flattenKeys(obj: JsonObject, prefix = ""): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...flattenKeys(value as JsonObject, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function loadJson(lang: string): JsonObject {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as JsonObject;
}

interface LangReport {
  lang: string;
  totalSourceKeys: number;
  totalTranslationKeys: number;
  missingKeys: string[];
  extraKeys: string[];
}

function checkLanguage(sourceKeys: string[], lang: string): LangReport {
  const translationData = loadJson(lang);
  const translationKeys = flattenKeys(translationData);

  const sourceSet = new Set(sourceKeys);
  const translationSet = new Set(translationKeys);

  const missingKeys = sourceKeys.filter((k) => !translationSet.has(k));
  const extraKeys = translationKeys.filter((k) => !sourceSet.has(k));

  return {
    lang,
    totalSourceKeys: sourceKeys.length,
    totalTranslationKeys: translationKeys.length,
    missingKeys,
    extraKeys,
  };
}

function main(): void {
  const sourceData = loadJson(SOURCE_LANG);
  const sourceKeys = flattenKeys(sourceData);

  console.log(`\ni18n Coverage Check`);
  console.log(`===================`);
  console.log(`Source language: ${SOURCE_LANG}`);
  console.log(`Total keys in en.json: ${sourceKeys.length}`);
  console.log(`Target languages: ${TARGET_LANGS.join(", ")}\n`);

  const reports: LangReport[] = [];
  let hasErrors = false;

  for (const lang of TARGET_LANGS) {
    const report = checkLanguage(sourceKeys, lang);
    reports.push(report);

    const missingCount = report.missingKeys.length;
    const extraCount = report.extraKeys.length;
    const status = missingCount === 0 ? "PASS" : "FAIL";

    console.log(`[${status}] ${lang}`);
    console.log(`  Total keys: ${report.totalTranslationKeys} / ${report.totalSourceKeys}`);

    if (missingCount > 0) {
      hasErrors = true;
      console.log(`  Missing keys (${missingCount}):`);
      for (const key of report.missingKeys) {
        console.log(`    - ${key}`);
      }
    } else {
      console.log(`  Missing keys: none`);
    }

    if (extraCount > 0) {
      console.log(`  Extra keys (${extraCount}) [in translation but not in en.json]:`);
      for (const key of report.extraKeys) {
        console.log(`    + ${key}`);
      }
    } else {
      console.log(`  Extra keys: none`);
    }

    console.log();
  }

  console.log(`Summary`);
  console.log(`-------`);
  for (const r of reports) {
    const bar = r.missingKeys.length === 0 ? "OK" : `MISSING ${r.missingKeys.length}`;
    const coverage = Math.round(
      ((r.totalTranslationKeys - r.extraKeys.length) / r.totalSourceKeys) * 100
    );
    console.log(
      `  ${r.lang.padEnd(8)} ${bar.padEnd(14)} coverage: ${coverage}%  keys: ${r.totalTranslationKeys}/${r.totalSourceKeys}`
    );
  }

  if (hasErrors) {
    console.error(`\nERROR: One or more languages have missing keys. See details above.`);
    process.exit(1);
  } else {
    console.log(`\nAll languages are complete.`);
    process.exit(0);
  }
}

main();

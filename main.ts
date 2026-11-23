// One Letter for Your Day — entry: the single letter H.
// H stands for "hangry" — hungry + angry, the most honest word for a day
// that went sideways before lunch. One letter, one mood, no explanation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "H";

// The entry must be exactly one capital letter, A–Z —
// anything else (empty, lowercase, multi-letter, whitespace)
// is not a valid one-letter day.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(
    `Invalid entry: expected exactly one capital letter A–Z, got ${JSON.stringify(LETTER)}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Verify the written file is byte-identical to the entry:
// exactly 1 byte, the letter H, no trailing newline.
const written = readFileSync(outPath);
if (written.length !== 1 || written[0] !== LETTER.charCodeAt(0)) {
  throw new Error(
    `Verification failed: ${outPath} is ${written.length} bytes, expected exactly 1 byte "H"`,
  );
}

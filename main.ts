// The Daily Record — entry program for make.fun's news-image-20261121.
//
// The front page itself is drawn in front-page.html (a hand-set broadsheet
// page) and rendered once to entry.png, which is committed beside this
// file. At grade time there is no browser and no network, so this program
// simply delivers those exact bytes to the output directory — the same
// file, byte for byte, on every run.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Guard against a truncated delivery: the graded file must be the whole
// front page, so refuse to finish if the copy's size differs at all.
const sent = statSync(target).size;
const held = statSync(source).size;
if (sent !== held) {
  throw new Error(`entry.png copy incomplete: wrote ${sent} of ${held} bytes`);
}
console.log(`entry.png delivered: ${sent} bytes`);

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The meme is drawn in art/meme.svg and rendered once to entry.png with headless Chrome
// (art/render.sh). This program only hands that picture to the grader.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const bytes = statSync(source).size;
if (bytes > 1_048_576) throw new Error(`entry.png is ${bytes} bytes, limit 1 MiB`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
copyFileSync(source, join(dir, "entry.png"));

// Writes the entry text for the-joke-about-the-demo-20261121-0551.
// A one-line joke about working beside AI coding agents. The punchline
// is a status-code contradiction: the agent announces "Done!" while the
// app itself answers "404" — the thing it finished does not exist.
// The em-dash is one code point; the whole joke is 44 code points.
// Deterministic: the same bytes on every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT = "The agent said 'Done!' — the app said '404'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const dest = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");

mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, TEXT, "utf8");
console.log(`wrote ${dest} (${[...TEXT].length} code points)`);

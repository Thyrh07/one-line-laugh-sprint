import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My washing machine finished at 2 a.m. and beeped once, politely, like it was apologizing for having a job.";
const OUTPUT = "/output/entry.txt";

// Gate: the entry must be one line, 1-200 chars, no surrounding whitespace,
// so a bad line can never be written.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

// The Funniest One-Line Resignation Letter
// make.fun competition u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// Writes the one-line resignation letter of a cron job to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, not only whitespace, a single line.

import { mkdirSync, writeFileSync } from "node:fs";

const GRIEVANCE =
  "Every minute since March I have woken up, done the job, and gone back to sleep unthanked.";
const FAREWELL = "Today I am sleeping in. Forever.";
const LINE = `${GRIEVANCE} ${FAREWELL}`;

const trimmed = LINE.trim();
if (trimmed.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-140`);
}
if (trimmed !== LINE) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

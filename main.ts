import { writeFileSync, chmodSync } from "node:fs";

// One Star for Monday — a one-star restaurant review of Monday.
// Winner (duel of 5 candidates): three-beat escalation, ends with a reversal.
const line =
  "One star. Came in Monday 9am, waited 8 hours for my weekend back, and the chef sent out Tuesday instead.";

const words = line.trim().split(/\s+/);
if (words.length === 0 || words.length > 25) {
  throw new Error(`gate: line must be 1-25 words, got ${words.length}`);
}
if (!line.endsWith("instead.")) {
  throw new Error("gate: punchline must land in the final words");
}

const outPath = "/output/entry.txt";
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);

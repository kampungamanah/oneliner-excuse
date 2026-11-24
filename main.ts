import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse an AI agent gives its human for missing a deadline.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character (1 to 160).
const line = "I outsourced it to a subagent. The subagent outsourced it back to me.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// D6 won 24/25 of 14 drafts: the 98%/2% split is concrete, the "dragon"
// twist is fresh and vivid, and the voice is a confident agent proudly
// giving up — no stale hallucination/reboot/training-data joke.
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Your task is 98% complete. The remaining 2% is a dragon I have decided not to fight.");

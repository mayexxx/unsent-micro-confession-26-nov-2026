import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const text = "To: My high school math teacher\nI actually do have a calculator in my pocket every day, and I still can't calculate a 20% tip without panicking.";
const lines = text.split("\n");
const characterCount = Array.from(text).length;
if (characterCount < 1 || characterCount > 260 || lines.length !== 2 || !lines[0].startsWith("To: ") || lines[1].length === 0 || text.includes("\r")) {
  throw new Error("Entry does not satisfy the gate");
}

const outputDir = fileURLToPath(new URL("/output/", import.meta.url));
const outputFile = fileURLToPath(new URL("/output/entry.txt", import.meta.url));
const expected = text + "\n";
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, expected, "utf8");
if (!readFileSync(outputFile).equals(Buffer.from(expected, "utf8"))) {
  throw new Error("Written entry does not match expected bytes");
}

// scripts/check-cv.ts
import fs from "fs";
import path from "path";
import type { CV } from "../src/data/cv.d.ts";
import { parse } from "jsonc-parser";

const filepath = path.resolve("src/data/cv.json");
const raw = fs.readFileSync(filepath, "utf-8");

// Optionally allow JSON with trailing commas/comments
const cv = parse(raw) as unknown;

function isValidCV(data: any): data is CV {
  // Very basic structural check
  return (
    typeof data === "object" &&
    data !== null &&
    "basics" in data &&
    typeof data.basics.name === "string"
  );
}

if (!isValidCV(cv)) {
  console.warn(
    "\x1b[33m[cv.json Warning]\x1b[0m The resume data does not fully follow the JSON Resume schema."
  );
} else {
  console.log("\x1b[32m[cv.json OK]\x1b[0m Structure appears to follow the JSON Resume schema.");
}

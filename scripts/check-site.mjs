import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const js = readFileSync("script.js", "utf8");

const required = [
  "两个8到9岁男孩",
  "蛋白质 Protein",
  "蔬菜 Vegetables",
  "体能训练 + 高尔夫",
  "Today tracker",
  "Dietary Guidelines for Americans 2025-2030"
];

const missing = required.filter((text) => !html.includes(text));
if (missing.length) {
  throw new Error(`Missing required text: ${missing.join(", ")}`);
}

if (!css.includes("@media (max-width: 700px)")) {
  throw new Error("Missing mobile media query.");
}

if (!js.includes("localStorage")) {
  throw new Error("Tracker persistence is missing.");
}

console.log("Site checks passed.");

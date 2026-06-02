import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "guide.html",
  "styles.css",
  "app.js",
  "guide-data.js",
  "guide-page.js",
  "official-spots.js",
  "banakpo-spots.js",
  "danfish-spots.js",
  "freshwater-spots.js",
  "national-freshwater-spots.js",
  "daeho-freshwater-spots.js",
  "osm-freshwater-spots.js",
  "manifest.webmanifest",
  "service-worker.js",
  "pwa-register.js",
  ".nojekyll"
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });
for (const file of files) await cp(file, `dist/${file}`);
await cp("assets", "dist/assets", { recursive: true });
console.log(`Copied ${files.length} web files and assets to dist`);

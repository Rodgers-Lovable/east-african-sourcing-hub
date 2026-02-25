/**
 * Sitemap generator for imweracoffee.com
 *
 * Run with:
 *   node --experimental-strip-types src/generate-sitemap.ts
 * Or via npm script:
 *   npm run generate:sitemap
 */

import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { origins } from "./data/origins.ts";
import { insights } from "./data/insights.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://imweracoffee.com";
const today = new Date().toISOString().split("T")[0];

interface UrlEntry {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

const staticRoutes: UrlEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/brokerage-sourcing", priority: "0.8", changefreq: "monthly" },
  { path: "/origins", priority: "0.9", changefreq: "monthly" },
  { path: "/insights", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" },
];

const originUrls: UrlEntry[] = origins.map((o) => ({
  path: `/origins/${o.slug}`,
  priority: "0.8",
  changefreq: "monthly",
}));

const insightUrls: UrlEntry[] = insights.map((i) => ({
  path: `/insights/${i.slug}`,
  priority: "0.7",
  changefreq: "yearly",
  lastmod: i.date,
}));

const allUrls = [...staticRoutes, ...originUrls, ...insightUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${BASE_URL}${u.path}</loc>
    <lastmod>${u.lastmod ?? today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outputPath = join(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, xml, "utf-8");
console.log(`Sitemap written to: public/sitemap.xml`);
console.log(`Total URLs: ${allUrls.length}`);
allUrls.forEach((u) => console.log(`  ${u.path}`));

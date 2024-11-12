// scripts/sitemap-generator.js
const fs = require("fs");

const domain = "https://woodworks.vercel.app";
routes = ["/", "/catalog"];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${domain}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === "/" ? "1.0" : "0.8"}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  try {
    fs.writeFileSync("public/sitemap.xml", sitemap);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();

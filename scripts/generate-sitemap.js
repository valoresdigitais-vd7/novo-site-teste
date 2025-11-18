import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lê a URL do site das variáveis de ambiente ou usa valor padrão
const SITE_URL = process.env.VITE_SITE_URL || 'https://tp1.valoresdigitais.com';

// Páginas estáticas do site
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/landing', priority: '1.0', changefreq: 'daily' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/termos-de-servico', priority: '0.7', changefreq: 'monthly' },
  { url: '/politica-de-privacidade', priority: '0.7', changefreq: 'monthly' },
  { url: '/politica-de-cookies', priority: '0.7', changefreq: 'monthly' },
  { url: '/devolucoes-e-trocas', priority: '0.7', changefreq: 'monthly' },
  { url: '/contato', priority: '0.7', changefreq: 'monthly' },
];

// Lê o manifesto de posts
const postsManifestPath = path.resolve(__dirname, '../posts/post-manifest.json');
let postSlugs = [];

try {
  const manifestContent = fs.readFileSync(postsManifestPath, 'utf-8');
  postSlugs = JSON.parse(manifestContent);
} catch (error) {
  console.warn('Aviso: Não foi possível ler o manifesto de posts:', error.message);
}

// Gera o sitemap XML
const currentDate = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${postSlugs.map(slug => `  <url>
    <loc>${SITE_URL}/posts/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>
`;

// Salva o sitemap na pasta public
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');

console.log(`✅ Sitemap gerado com sucesso em: ${sitemapPath}`);
console.log(`📍 URL base: ${SITE_URL}`);
console.log(`📄 Páginas estáticas: ${staticPages.length}`);
console.log(`📝 Posts do blog: ${postSlugs.length}`);
console.log(`📊 Total de URLs: ${staticPages.length + postSlugs.length}`);

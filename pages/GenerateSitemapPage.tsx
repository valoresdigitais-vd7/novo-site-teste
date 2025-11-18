
import React from 'react';
import postManifest from '@/posts/post-manifest.json';

const GenerateSitemapPage: React.FC = () => {
  const generateSitemap = () => {
    const baseUrl = import.meta.env.VITE_SITE_URL || 'https://tp1.valoresdigitais.com';
    const staticPages = [
      '/',
      '/landing',
      '/blog',
      '/termos-de-servico',
      '/politica-de-privacidade',
      '/politica-de-cookies',
      '/devolucoes-e-trocas',
      '/contato',
    ];

    const postSlugs = postManifest;

    const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((page) => `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `)
          .join('')}
        ${postSlugs
          .map((slug) => `
            <url>
              <loc>${baseUrl}/posts/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `)
          .join('')}
      </urlset>
    `;

    const blob = new Blob([sitemap], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Generate Sitemap</h1>
      <button onClick={generateSitemap}>Generate and Download Sitemap</button>
    </div>
  );
};

export default GenerateSitemapPage;

import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../lib/posts';

// This component uses document.write to completely replace the page's content
// with a pure XML sitemap. This is the most effective client-side method
// to serve a dynamic sitemap that can be correctly interpreted by crawlers
// that execute JavaScript.
const SitemapPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const generateAndServeSitemap = async () => {
            try {
                const baseUrl = window.location.origin;
                const posts = await getAllPosts();
                const today = new Date().toISOString().split('T')[0];

                // Function to escape XML special characters to prevent validation errors.
                const escapeXml = (unsafe: string): string => {
                    return unsafe.replace(/[<>&'"]/g, (c) => {
                        switch (c) {
                            case '<': return '&lt;';
                            case '>': return '&gt;';
                            case '&': return '&amp;';
                            case '\'': return '&apos;';
                            case '"': return '&quot;';
                            default: return c;
                        }
                    });
                };
    
                const staticPages = [
                    { path: '/', priority: '1.0', changefreq: 'daily' },
                    { path: '/landing', priority: '1.0', changefreq: 'daily' },
                    { path: '/blog', priority: '0.9', changefreq: 'daily' },
                    { path: '/termos-de-servico', priority: '0.7', changefreq: 'monthly' },
                    { path: '/politica-de-privacidade', priority: '0.7', changefreq: 'monthly' },
                    { path: '/politica-de-cookies', priority: '0.7', changefreq: 'monthly' },
                    { path: '/devolucoes-e-trocas', priority: '0.7', changefreq: 'monthly' },
                    { path: '/contato', priority: '0.7', changefreq: 'monthly' },
                ];
    
                const urlEntries = staticPages.map(page => `
  <url>
    <loc>${escapeXml(baseUrl + page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');
    
                const postEntries = posts.map(post => `
  <url>
    <loc>${escapeXml(baseUrl + '/posts/' + post.slug)}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');
    
                const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}${postEntries}
</urlset>`;
                
                // Replace the entire document with the XML content.
                document.open('text/xml');
                document.write(content);
                document.close();

            } catch (error) {
                console.error("Failed to generate sitemap:", error);
                document.body.innerHTML = 'Error: Could not generate sitemap.';
            } finally {
                // This state update might not render if the document is closed,
                // but it's good practice to have it.
                setIsLoading(false);
            }
        };
    
        generateAndServeSitemap();

    // The empty dependency array ensures this effect runs only once on mount.
    }, []);

    // This content will be displayed briefly before document.write replaces it.
    // It's a necessary placeholder as React components must return a valid element.
    if (isLoading) {
        return <div style={{fontFamily: 'monospace', padding: '1em'}}>Gerando sitemap...</div>;
    }

    // This will likely never be seen by the user because the document stream is closed.
    return null;
};

export default SitemapPage;

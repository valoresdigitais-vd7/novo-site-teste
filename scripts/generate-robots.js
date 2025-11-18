import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lê a URL do site das variáveis de ambiente ou usa valor padrão
const SITE_URL = process.env.VITE_SITE_URL || 'https://tp1.valoresdigitais.com';

// Conteúdo do robots.txt
const robotsContent = `# Robots.txt for ${SITE_URL}
User-agent: *
Allow: /

# Sitemap
Sitemap: https://${SITE_URL}/sitemap.xml
`;

// Salva o robots.txt na pasta public
const robotsPath = path.resolve(__dirname, '../public/robots.txt');
fs.writeFileSync(robotsPath, robotsContent, 'utf-8');

console.log(`✅ Robots.txt gerado com sucesso em: ${robotsPath}`);
console.log(`📍 URL base: ${SITE_URL}`);
console.log(`🤖 Configuração: Permitir todos os bots`);
console.log(`🗺️  Sitemap: ${SITE_URL}/sitemap.xml`);

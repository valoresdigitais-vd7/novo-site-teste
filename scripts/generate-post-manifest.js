import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Diretório onde estão os posts
const postsDir = path.resolve(__dirname, '../posts');
const publicPostsDir = path.resolve(__dirname, '../public/posts');
const manifestPath = path.resolve(postsDir, 'post-manifest.json');

// Lê todos os arquivos .md da pasta posts
try {
  const files = fs.readdirSync(postsDir);

  // Filtra apenas arquivos .md (exclui o manifest e outros arquivos)
  const mdFiles = files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''))
    .sort()
    .reverse(); // Ordenar de forma decrescente (posts mais recentes primeiro)

  // Gera o manifest
  fs.writeFileSync(manifestPath, JSON.stringify(mdFiles, null, 2), 'utf-8');

  console.log(`✅ Manifest de posts gerado com sucesso!`);
  console.log(`📝 Total de posts encontrados: ${mdFiles.length}`);
  console.log(`📄 Posts: ${mdFiles.join(', ')}`);
  console.log(`💾 Arquivo salvo em: ${manifestPath}`);

  // Cria a pasta public/posts se não existir
  if (!fs.existsSync(publicPostsDir)) {
    fs.mkdirSync(publicPostsDir, { recursive: true });
    console.log(`📁 Pasta public/posts criada`);
  }

  // Copia todos os arquivos de posts para public/posts
  const allPostFiles = files.filter(file => file.endsWith('.md') || file.endsWith('.json'));
  let copiedCount = 0;

  allPostFiles.forEach(file => {
    const sourcePath = path.join(postsDir, file);
    const destPath = path.join(publicPostsDir, file);
    fs.copyFileSync(sourcePath, destPath);
    copiedCount++;
  });

  console.log(`📋 ${copiedCount} arquivos copiados para public/posts/`);
} catch (error) {
  console.error('❌ Erro ao gerar manifest de posts:', error.message);
  process.exit(1);
}

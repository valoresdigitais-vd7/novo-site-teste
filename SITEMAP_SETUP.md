# Configuração do Sitemap e Blog Dinâmico

Este documento descreve as alterações feitas para corrigir o blog e implementar um sistema totalmente dinâmico de posts e geração automática do sitemap.xml.

## Sistema Dinâmico de Posts do Blog

**Problema:** Os posts do blog não apareciam porque os arquivos markdown estavam na pasta `/posts/` mas precisavam estar em `/public/posts/` para serem acessíveis via HTTP. Além disso, era necessário atualizar manualmente o `post-manifest.json` ao adicionar novos posts.

**Solução:** Sistema totalmente automatizado que:
1. Detecta automaticamente todos os arquivos `.md` na pasta `/posts/`
2. Gera automaticamente o `post-manifest.json`
3. Copia automaticamente os posts para `/public/posts/`
4. Atualiza o sitemap com os novos posts

### Como Adicionar um Novo Post

É muito simples! Basta criar um arquivo `.md` na pasta `/posts/` com o frontmatter:

```markdown
---
title: "Título do Post"
date: "2024-11-15"
excerpt: "Resumo do post que aparecerá na listagem"
---

## Conteúdo do Post

Seu conteúdo aqui em Markdown...
```

E pronto! O sistema detectará automaticamente o novo post no próximo build.

## Geração Automática do Sitemap

### Configuração de Variável de Ambiente

Foi criado um arquivo `.env.example` com a variável `VITE_SITE_URL`:

```env
VITE_SITE_URL=https://tp1.valoresdigitais.com
```

Para usar em produção, crie um arquivo `.env` com a URL do seu site:

```bash
cp .env.example .env
# Edite o arquivo .env com a URL correta
```

### Scripts de Geração

#### 1. Script de Detecção de Posts (`scripts/generate-post-manifest.js`)

Este script é executado primeiro e:
1. Escaneia a pasta `/posts/` procurando por arquivos `.md`
2. Gera automaticamente o `post-manifest.json` com a lista de posts
3. Copia todos os arquivos `.md` e `.json` para `/public/posts/`

#### 2. Script de Geração do Sitemap (`scripts/generate-sitemap.js`)

Este script é executado em seguida e:
1. Lê a variável de ambiente `VITE_SITE_URL`
2. Lê o manifesto de posts do blog (gerado pelo script anterior)
3. Gera um sitemap.xml com:
   - Todas as páginas estáticas do site
   - Todos os posts do blog
   - Data de última modificação
   - Frequência de atualização
   - Prioridade de cada página

### Execução Automática no Build

Os scripts são executados automaticamente antes de cada build através do script `prebuild` no `package.json`:

```json
{
  "scripts": {
    "prebuild": "npm run generate-post-manifest && npm run generate-sitemap",
    "build": "vite build",
    "generate-post-manifest": "node scripts/generate-post-manifest.js",
    "generate-sitemap": "node scripts/generate-sitemap.js"
  }
}
```

### Comandos Disponíveis

- `npm run generate-post-manifest` - Detecta posts e gera o manifest manualmente
- `npm run generate-sitemap` - Gera o sitemap manualmente
- `npm run build` - Executa tudo automaticamente e faz o build

### Fluxo de Trabalho

Quando você executa `npm run build`, o sistema:
1. ✅ Detecta todos os arquivos `.md` em `/posts/`
2. ✅ Gera o `post-manifest.json` automaticamente
3. ✅ Copia posts para `/public/posts/`
4. ✅ Gera o `sitemap.xml` com todos os posts
5. ✅ Executa o build do Vite
6. ✅ Resultado: Build completo com todos os posts e sitemap atualizado!

### Estrutura do Sitemap Gerado

O sitemap inclui:

**Páginas Estáticas:**
- `/` (Home) - prioridade 1.0, atualização diária
- `/landing` - prioridade 1.0, atualização diária
- `/blog` - prioridade 0.9, atualização diária
- `/termos-de-servico` - prioridade 0.7, atualização mensal
- `/politica-de-privacidade` - prioridade 0.7, atualização mensal
- `/politica-de-cookies` - prioridade 0.7, atualização mensal
- `/devolucoes-e-trocas` - prioridade 0.7, atualização mensal
- `/contato` - prioridade 0.7, atualização mensal

**Posts do Blog:**
- `/posts/{slug}` - prioridade 0.8, atualização semanal

## Verificação

Após o build, o sitemap estará disponível em:
- `/dist/sitemap.xml` (build local)
- `https://seu-dominio.com/sitemap.xml` (produção)

Os posts do blog estarão disponíveis em:
- `/dist/posts/` (build local)
- `https://seu-dominio.com/posts/{slug}.md` (produção)

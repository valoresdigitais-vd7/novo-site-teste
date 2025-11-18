# Documentação de Cores do Projeto

Este documento descreve todas as cores utilizadas no projeto para facilitar a manutenção e garantir consistência visual.

## Cores Primárias

### Primary (Principal)
- **DEFAULT**: `#0891b2` (cyan-600)
- **Light**: `#22d3ee` (cyan-400)
- **Dark**: `#0e7490` (cyan-700)
- **Uso**: Links, CTAs principais, destaques, logo

### Secondary (Secundária)
- **DEFAULT**: `#f97316` (orange-500)
- **Light**: `#fb923c` (orange-400)
- **Dark**: `#ea580c` (orange-600)
- **Uso**: Elementos de destaque, botões secundários, badges

## Cores Neutras

### Neutral (Cinzas)
- **100**: `#f8fafc` (slate-50) - Fundo geral
- **200**: `#f1f5f9` (slate-100) - Fundo de seções alternadas
- **300**: `#e2e8f0` (slate-200) - Bordas suaves
- **400**: `#cbd5e1` (slate-300) - Bordas
- **500**: `#94a3b8` (slate-400) - Texto desabilitado
- **600**: `#64748b` (slate-500) - Texto secundário
- **700**: `#475569` (slate-600) - Texto
- **800**: `#334155` (slate-700) - Texto escuro, fundo do footer
- **900**: `#1e293b` (slate-800) - Texto muito escuro

---

## Aplicação de Cores por Componente

### 🎨 Fundo Geral
- **Classe**: `bg-neutral-100`
- **Cor**: `#f8fafc` (slate-50)
- **Texto**: `text-neutral-800` (#334155)

### 📋 Header
- **Fundo**: `bg-neutral-100/80` (80% de opacidade)
- **Borda inferior**: `border-neutral-200` (#f1f5f9)
- **Logo**:
  - Texto principal: `text-primary` (#0891b2)
  - Destaque "X": `text-secondary` (#f97316)
- **Links de navegação**:
  - Normal: `text-neutral-600` (#64748b)
  - Hover: `text-primary` (#0891b2)
- **Menu mobile**:
  - Fundo hover: `bg-neutral-200` (#f1f5f9)

### 🦶 Footer
- **Fundo**: `bg-neutral-800` (#334155)
- **Texto principal**: `text-neutral-300` (#e2e8f0)
- **Texto secundário**: `text-neutral-400` (#cbd5e1)
- **Logo/título**: `text-secondary-light` (#fb923c)
- **Separadores**: `text-neutral-600` (#64748b)

### 🔘 Botões

#### Botão Simples / Secundário
- **Fundo**: `bg-neutral-200` (#f1f5f9)
- **Fundo hover**: `bg-neutral-300` (#e2e8f0)
- **Texto**: `text-neutral-800` (#334155)
- **Exemplo**: Botões de planos não-destacados

#### Botão CTA (Call-to-Action) / Principal
- **Fundo**: `bg-primary` (#0891b2)
- **Fundo hover**: `bg-primary-dark` (#0e7490)
- **Texto**: `text-white` (#ffffff)
- **Exemplo**: "Comprar Agora", "Começar Agora"

#### Botão CTA Secundário
- **Fundo**: `bg-secondary` (#f97316)
- **Fundo hover**: `bg-secondary-dark` (#ea580c)
- **Texto**: `text-white` (#ffffff)
- **Exemplo**: Formulários de checkout

#### Botão CTA Invertido (em fundo colorido)
- **Fundo**: `bg-white` (#ffffff)
- **Texto**: `text-primary` (#0891b2)
- **Exemplo**: CTA em seção com fundo primary

### 📝 Postagens (Blog)

#### Card de Post
- **Fundo**: `bg-white` (#ffffff)
- **Borda**: `border-neutral-200` (#f1f5f9)
- **Tag**:
  - Fundo: `bg-primary/10` (#0891b2 com 10% opacidade)
  - Texto: `text-primary` (#0891b2)
- **Título**: `text-neutral-900` (#1e293b)
- **Descrição**: `text-neutral-600` (#64748b)
- **Data**: `text-neutral-500` (#94a3b8)
- **Legenda de imagem**: `text-neutral-500` (#94a3b8)

### 🎯 Landing Page

#### Seção Hero
- **Fundo**: Transparente (herda do body)
- **Título destaque**: `text-primary` (#0891b2)

#### Seção Problema/Solução
- **Fundo**: `bg-neutral-100` (#f8fafc)
- **Card Problema**:
  - Fundo: `bg-white` (#ffffff)
  - Título: `text-red-600` (#dc2626)
- **Card Solução**:
  - Fundo: `bg-primary/5` (#0891b2 com 5% opacidade)
  - Borda: `border-primary/20` (#0891b2 com 20% opacidade)
  - Título: `text-primary` (#0891b2)

#### Seção Benefícios
- **Fundo**: `bg-neutral-200` (#f1f5f9)
- **Ícones**: `text-primary` (#0891b2)
- **Fundo ícone**: `bg-primary/10` (#0891b2 com 10% opacidade)

#### Seção Depoimentos
- **Fundo card**: `bg-neutral-100` (#f8fafc)
- **Borda card**: `border-neutral-200` (#f1f5f9)

#### Seção Garantia
- **Fundo**: `bg-neutral-100` (#f8fafc)
- **Card central**:
  - Fundo: `bg-white` (#ffffff)
  - Borda: `border-primary` (#0891b2) - tracejada
- **Ícone**: `text-primary` (#0891b2)

#### Seção CTA Final
- **Fundo**: `bg-primary` (#0891b2)
- **Texto**: `text-white` (#ffffff)
- **Texto secundário**: `text-cyan-100` (#cffafe)

### 🔗 Links
- **Normal**: `text-primary` (#0891b2)
- **Hover**: `hover:underline`
- **Voltar**: `text-primary` (#0891b2)

### ✅ Estados

#### Sucesso
- **Texto**: `text-green-600` (#16a34a)
- **Ícone**: `text-green-500` (#22c55e)

#### Erro
- **Texto**: `text-red-600` (#dc2626)
- **Ícone**: `text-red-500` (#ef4444)

#### Badges "Mais Popular"
- **Fundo**: `bg-primary` (#0891b2)
- **Texto**: `text-white` (#ffffff)

---

## Referência Rápida Tailwind

### Configuração (tailwind.config.js)
```javascript
colors: {
  primary: {
    DEFAULT: '#0891b2',
    light: '#22d3ee',
    dark: '#0e7490',
  },
  secondary: {
    DEFAULT: '#f97316',
    light: '#fb923c',
    dark: '#ea580c',
  },
  neutral: {
    100: '#f8fafc',
    200: '#f1f5f9',
    300: '#e2e8f0',
    400: '#cbd5e1',
    500: '#94a3b8',
    600: '#64748b',
    700: '#475569',
    800: '#334155',
    900: '#1e293b',
  }
}
```

---

## Diretrizes de Uso

1. **Fundo principal**: Sempre usar `neutral-100` para o fundo geral
2. **Header e Footer**: Manter consistência com as cores especificadas
3. **CTAs**: Usar `primary` para ações principais e `secondary` para ações de destaque/urgência
4. **Texto**: Seguir a hierarquia de neutral (600 para secundário, 800 para principal)
5. **Hover**: Sempre usar variação mais escura ou `primary` para interações
6. **Bordas**: Usar `neutral-200` ou `neutral-300` para bordas suaves

---

**Última atualização**: 2024-11-14

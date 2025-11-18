import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Planos', href: '#plans' },
  { name: 'Comunidade', href: '#community' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Flow Starter (Gratuito)',
    price: 'R$ 0/mês',
    features: [
      'Criação de até 3 hábitos simultâneos',
      'Acompanhamento diário básico',
      'Acesso à comunidade aberta',
    ],
  },
  {
    id: 2,
    name: 'Flow Pro (Individual)',
    price: 'R$ 29/mês',
    features: [
      'Hábitos ilimitados e histórico completo',
      'Sistema de XP e recompensas visuais',
      'Streak Shield – congele sequência até 3 dias/mês',
      'Integração com Apple Health / Google Fit',
      'Widget Interativo para plataformas Mobile',
      'Suporte prioritário por e‑mail',
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Flow Teams (Empresarial)',
    price: 'R$ 99/mês',
    features: [
      'Todos os recursos do Flow Pro',
      'Painel de equipe e gestão de grupos',
      'Desafios personalizáveis entre squads',
      'Gerente de conta dedicado',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'O HabitFlow mudou completamente minha relação com a produtividade. Agora consigo manter hábitos sem me sentir sobrecarregada!',
    author: 'Mariana Lopes',
    role: 'Empreendedora e Usuária Flow Pro',
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  },
  {
    quote:
      'O sistema de gamificação me mantém motivado dia após dia. Adoro desbloquear novos níveis enquanto melhoro de verdade.',
    author: 'Rafa Santos',
    role: 'Designer de Produto',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote:
      'Usamos o Flow Teams na empresa e vimos o engajamento da equipe disparar. É leve, divertido e eficiente.',
    author: 'Beatriz Lima',
    role: 'Gerente de RH, InovaCorp',
    avatarUrl: 'https://picsum.photos/id/1015/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'O que é o HabitFlow?',
    answer:
      'O HabitFlow é um app de gestão de hábitos que usa gamificação e ciência comportamental para ajudar você a construir consistência e alcançar seus objetivos de forma leve e sustentável.',
  },
  {
    question: 'O plano gratuito tem limitações?',
    answer:
      'Sim. O plano Flow Starter permite até 3 hábitos ativos e recursos básicos. Você pode fazer upgrade a qualquer momento para desbloquear todos os recursos Pro.',
  },
  {
    question: 'Como funciona o Streak Shield?',
    answer:
      'O Streak Shield permite “congelar” sua sequência por até 3 dias por mês usando moedas virtuais, garantindo que imprevistos não estraguem sua consistência.',
  },
  {
    question: 'Posso usar o HabitFlow em mais de um dispositivo?',
    answer:
      'Sim! Sua conta sincroniza automaticamente entre Web, iOS e Android.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer:
      'Sim. Utilizamos criptografia de ponta (AES‑256) e seguimos as melhores práticas de segurança para proteger todas as informações pessoais e de hábitos.',
  },
];

export const FOOTER_LINKS = {
  company: {
    name: 'HabitFlow',
    description:
      'Construa consistência, desbloqueie sua melhor versão. Aplicativo de gestão de hábitos com ciência e gamificação.',
    cnpj: 'CNPJ: 45.987.654/0001-32',
    address: 'Endereço: Av. da Consistência, 500 - São Paulo/SP',
  },
  support: [
    {
      name: 'suporte@habitflow.app',
      href: 'mailto:suporte@habitflow.app',
    },
    { name: '(11) 9999-8888', href: 'tel:+551199998888' },
    { name: 'Central de Ajuda', href: '#' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ],
  enterprise: [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '/contato' },
  ],
};

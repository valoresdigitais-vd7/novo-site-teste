import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Plano Básico',
    price: 'R$ 29/mês',
    features: ['Recurso Essencial 1', 'Recurso Essencial 2', 'Suporte por Email'],
  },
  {
    id: 2,
    name: 'Plano Pro',
    price: 'R$ 79/mês',
    features: ['Todos os recursos do Básico', 'Recurso Avançado 1', 'Recurso Avançado 2', 'Suporte Prioritário'],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Plano Empresa',
    price: 'R$ 299/mês',
    features: ['Todos os recursos do Pro', 'Dashboard de Equipe', 'Integrações Premium', 'Gerente de Conta Dedicado'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Este produto transformou completamente nosso fluxo de trabalho. Não consigo imaginar trabalhar sem ele.',
    author: 'Ana Silva',
    role: 'CEO, Tech Solutions',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: 'O suporte ao cliente é excepcional e a plataforma é incrivelmente fácil de usar. Recomendo fortemente!',
    author: 'Carlos Pereira',
    role: 'Diretor de Marketing, Creative Co.',
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: 'Um divisor de águas para nossa produtividade. O ROI foi quase imediato.',
    author: 'Juliana Costa',
    role: 'Gerente de Operações, Innovate Ltda.',
    avatarUrl: 'https://picsum.photos/id/1013/100/100',
  },
  {
    quote: 'Design elegante, funcionalidade poderosa. A equipe por trás disso realmente entende as necessidades do cliente.',
    author: 'Ricardo Mendes',
    role: 'Desenvolvedor Frontend, Web Crafters',
    avatarUrl: 'https://picsum.photos/id/1014/100/100',
  },
];

export const FAQ_DATA = [
    {
        question: 'O teste grátis realmente é grátis?',
        answer: 'Sim, o nosso teste de 7 dias é 100% gratuito e não exige cartão de crédito. Você terá acesso a todos os recursos do plano Pro para experimentar a plataforma sem compromissos.'
    },
    {
        question: 'Posso cancelar a qualquer momento?',
        answer: 'Com certeza. Você pode cancelar sua assinatura a qualquer momento, diretamente no seu painel de controle, com apenas alguns cliques. Sem burocracia ou taxas de cancelamento.'
    },
    {
        question: 'Funciona offline?',
        answer: 'Nossa plataforma é baseada na nuvem e requer uma conexão com a internet para a maioria das funcionalidades. No entanto, estamos desenvolvendo recursos que permitirão o acesso a certas informações offline.'
    },
    {
        question: 'Tem integração com outras ferramentas?',
        answer: 'Sim! Oferecemos integrações nativas com diversas ferramentas populares do mercado, como Slack, Google Drive, Trello e muitas outras. Além disso, nossa API está disponível para integrações personalizadas.'
    },
    {
        question: 'Meus dados ficam seguros?',
        answer: 'A segurança dos seus dados é nossa maior prioridade. Utilizamos criptografia de ponta (AES-256), servidores seguros e seguimos as melhores práticas de segurança do mercado para garantir que suas informações estejam sempre protegidas.'
    }
];

export const FOOTER_LINKS = {
    company: {
        name: 'Produto x',
        description: 'Transformando produtividade em resultados desde 2020.',
        cnpj: 'CNPJ: 12.345.678/0001-90',
        address: 'Endereço: Rua das Flores, 123 - São Paulo/SP',
    },
    support: [
        { name: 'suporte@taskflowpro.com', href: 'mailto:suporte@taskflowpro.com' },
        { name: '(11) 3333-4444', href: 'tel:+551133334444' },
        { name: 'Central de Ajuda', href: '#' },
        { name: 'Status do Sistema', href: '#' },
    ],
    legal: [
        { name: 'Termos de Uso', href: '/termos-de-servico' },
        { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
        { name: 'Política de Cookies', href: '/politica-de-cookies' },
        { name: 'Política de Reembolso', href: '/devolucoes-e-trocas' },
    ],
    enterprise: [
        { name: 'Sobre Nós', href: '#' },
        { name: 'Carreiras', href: '#' },
        { name: 'Imprensa', href: '#' },
        { name: 'Contato', href: '/contato' },
    ],
};

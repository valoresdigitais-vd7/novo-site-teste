import React, { useState, useRef } from 'react';
import {
  CheckCircleIcon,
  ZapIcon,
  ShieldIcon,
  ChevronDownIcon,
  UsersIcon,
  TargetIcon,
  HeartIcon,
} from '../components/icons';

// ============================================================================
// TIPAGEM (se necessário você pode mover para um arquivo de tipos compartilhado)
// ============================================================================

type PlanId = 'starter' | 'pro' | 'teams';

interface PricingPlan {
  id: PlanId;
  name: string;
  priceLabel: string;
  badge?: string;
  description: string;
  ctaLabel: string;
  isFeatured?: boolean;
  popular?: boolean;
  highlightColor?: string;
  featuresIncluded: string[];
  limitations?: string[];
  forWhom: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ============================================================================
// DADOS
// ============================================================================

const FAQ_DATA: FAQItem[] = [
  {
    question: 'O HabitFlow é realmente gratuito no plano Flow Starter?',
    answer:
      'Sim. O Flow Starter é 100% gratuito, sem necessidade de cartão de crédito. Ele é ideal para começar a construir consistência com até 3 hábitos ativos e recursos básicos de acompanhamento.',
  },
  {
    question: 'Posso mudar de plano depois?',
    answer:
      'Claro. Você pode fazer upgrade ou downgrade entre os planos a qualquer momento. A transição é automática e seus dados e hábitos são preservados.',
  },
  {
    question: 'O HabitFlow funciona em quais dispositivos?',
    answer:
      'O HabitFlow é baseado em web responsiva e funciona em qualquer dispositivo com navegador moderno. As integrações com Apple Health e Google Fit exigem dispositivos compatíveis.',
  },
  {
    question: 'Como funciona o Flow Teams para empresas?',
    answer:
      'O Flow Teams oferece gestão centralizada de usuários, relatórios de engajamento, criação de esquadrões por equipe e suporte dedicado. O valor é definido sob medida, de acordo com o tamanho e as necessidades da sua organização.',
  },
  {
    question: 'Há período de teste para o Flow Pro?',
    answer:
      'Sim, oferecemos 7 dias de teste gratuito para o Flow Pro. Se não fizer sentido para você, é só cancelar dentro desse período, sem cobranças.',
  },
];

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Flow Starter',
    priceLabel: 'Gratuito',
    description: 'Comece a construir consistência com o essencial, sem pagar nada.',
    ctaLabel: 'Começar de Graça',
    featuresIncluded: [
      'Até 3 hábitos ativos simultâneos',
      'Streak Shield Básico para proteger suas sequências',
      'Painel diário de hábitos com foco em clareza',
      'Widget interativo simples para acompanhar o dia',
      'Notificações básicas de lembrete',
      'Acesso à versão web responsiva',
    ],
    limitations: [
      'Sem grupos de responsabilidade (Esquadrões)',
      'Sem integrações completas com Apple Health / Google Fit',
      'Sem relatórios avançados de progresso',
    ],
    forWhom: 'Ideal para quem está começando a criar hábitos e quer testar o HabitFlow sem compromisso.',
  },
  {
    id: 'pro',
    name: 'Flow Pro',
    priceLabel: 'R$ 29 / mês',
    description:
      'Tudo o que você precisa para dominar seus hábitos, com ciência, gamificação e comunidade.',
    ctaLabel: 'Começar Teste de 7 Dias',
    isFeatured: true,
    popular: true,
    highlightColor:
      'ring-2 ring-offset-2 ring-primary/70 dark:ring-primary/80 border-primary/80 dark:border-primary-light',
    featuresIncluded: [
      'Hábitos ilimitados com organização por áreas da vida',
      'Streak Shield Avançado com regras flexíveis de recuperação',
      'Jornada de Nível de Usuário com XP, conquistas e desafios semanais',
      'Widget interativo completo para foco diário',
      'Esquadrões: grupos de responsabilidade com amigos ou comunidade',
      'Integração completa com Apple Health e Google Fit',
      'Relatórios de progresso com visão semanal, mensal e por hábito',
      'Modos de foco (Profundo, Manhã Poderosa, Noite Calma)',
      'Suporte prioritário por email',
    ],
    limitations: [],
    forWhom:
      'Perfeito para quem leva sua evolução pessoal a sério e quer transformar hábitos em um sistema sustentável.',
  },
  {
    id: 'teams',
    name: 'Flow Teams',
    priceLabel: 'Sob Consulta',
    description:
      'Um ecossistema de hábitos saudáveis para equipes, empresas e programas de bem-estar.',
    ctaLabel: 'Falar com Especialista',
    featuresIncluded: [
      'Todas as funcionalidades do Flow Pro para cada colaborador',
      'Gestão centralizada de múltiplos usuários e equipes',
      'Criação de Esquadrões por time, área ou programa de bem-estar',
      'Relatórios de engajamento e métricas de saúde de hábitos',
      'Desafios gamificados entre times (ex.: steps, foco, sono)',
      'Onboarding guiado e treinamento para líderes',
      'SLA e suporte dedicado para empresas',
      'Integração com ferramentas de RH e programas de benefícios (sob consulta)',
    ],
    limitations: [],
    forWhom:
      'Desenhado para organizações que desejam promover bem-estar, foco e alta performance de forma contínua e mensurável.',
  },
];

// ============================================================================
// COMPONENTES COMPARTILHADOS
// ============================================================================

interface InlineCheckoutFormProps {
  contextLabel: string;
}

const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ contextLabel }) => {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState<PlanId | 'indefinido'>('indefinido');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (email && email.includes('@')) {
      setStatus('success');
      setMessage(
        `Obrigado! Em breve entraremos em contato para te ajudar a começar com o HabitFlow (${contextLabel}${
          plan !== 'indefinido' ? ` - plano ${plan === 'starter' ? 'Flow Starter' : plan === 'pro' ? 'Flow Pro' : 'Flow Teams'}` : ''
        }).`
      );
    } else {
      setStatus('error');
      setMessage('Por favor, insira um email válido.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 bg-white/80 dark:bg-neutral-900/70 backdrop-blur rounded-2xl p-4 sm:p-5 shadow-sm border border-sky-100/70 dark:border-slate-700"
    >
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
          Escolha seu foco atual (opcional)
        </label>
        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => setPlan('starter')}
            className={`rounded-xl border px-3 py-2 text-center transition-all ${
              plan === 'starter'
                ? 'border-primary bg-primary/10 text-primary font-semibold shadow-sm'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary/60'
            }`}
          >
            Começar leve
          </button>
          <button
            type="button"
            onClick={() => setPlan('pro')}
            className={`rounded-xl border px-3 py-2 text-center transition-all ${
              plan === 'pro'
                ? 'border-primary bg-primary/10 text-primary font-semibold shadow-sm'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary/60'
            }`}
          >
            Evoluir com tudo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu melhor email"
            required
            className="flex-grow px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/70 focus:outline-none text-sm sm:text-base transition-all"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl text-sm sm:text-base transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Quero experimentar'}
          </button>
        </div>
      </div>

      {message && (
        <p
          className={`mt-3 text-xs sm:text-sm ${
            status === 'success'
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-rose-600 dark:text-rose-400'
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
        Sem spam, sem compromisso. Enviamos apenas orientações para começar no seu ritmo.
      </p>
    </form>
  );
};

// ============================================================================
// BLOCO 1 – HERO + VÍDEO PROMOCIONAL
// ============================================================================

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-gradient-to-b from-sky-50 via-slate-50 to-violet-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto principal */}
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide">
            HabitFlow · Ciência, gamificação e comunidade
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Construa consistência,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-400">
              desbloqueie sua melhor versão.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl">
            O HabitFlow é uma plataforma de hábitos sustentáveis que combina neurociência, dados
            e microvitórias diárias. Menos culpa, mais progresso real — em comunidade.
          </p>

          <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 mt-0.5 text-emerald-500" />
              <span>Baseado em evidências de psicologia comportamental e hábitos atômicos.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 mt-0.5 text-emerald-500" />
              <span>
                Gamificação leve: Streak Shield, Jornada de Nível de Usuário e conquistas sem
                pressão.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="h-5 w-5 mt-0.5 text-emerald-500" />
              <span>
                Esquadrões de responsabilidade e integração com Apple Health / Google Fit para
                acompanhar o que importa.
              </span>
            </li>
          </ul>

          <InlineCheckoutForm contextLabel="Landing Hero" />
        </div>

        {/* Vídeo Promocional + Badges de features */}
        <div className="space-y-5">
          <div className="w-full aspect-video rounded-2xl shadow-2xl shadow-sky-200/60 dark:shadow-sky-900/60 overflow-hidden border border-sky-100 dark:border-slate-700 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/T8ZZKPFSsNc?rel=0"
              title="Veja o HabitFlow em ação"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 rounded-xl bg-white/80 dark:bg-slate-900/70 px-3 py-2 border border-slate-100 dark:border-slate-700">
              <ShieldIcon className="h-5 w-5 text-sky-500" />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Streak Shield inteligente
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/80 dark:bg-slate-900/70 px-3 py-2 border border-slate-100 dark:border-slate-700">
              <TargetIcon className="h-5 w-5 text-violet-500" />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Jornada de Nível de Usuário
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/80 dark:bg-slate-900/70 px-3 py-2 border border-slate-100 dark:border-slate-700">
              <ZapIcon className="h-5 w-5 text-emerald-500" />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Widget interativo diário
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/80 dark:bg-slate-900/70 px-3 py-2 border border-slate-100 dark:border-slate-700">
              <UsersIcon className="h-5 w-5 text-sky-500" />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Esquadrões de responsabilidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// BLOCO 2 – VÍDEO EM AÇÃO (SEÇÃO DESTACADA)
// ============================================================================

const VideoSection: React.FC = () => (
  <section id="video" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Veja o HabitFlow em ação
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Um tour rápido pela experiência completa: criação de hábitos, Streak Shield, Jornada de
          Nível e Esquadrões. Entenda, em poucos minutos, como transformar intenção em consistência.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 rounded-2xl overflow-hidden border border-sky-100 dark:border-slate-800 shadow-xl shadow-sky-100/60 dark:shadow-slate-900/70 bg-black">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/T8ZZKPFSsNc?rel=0"
            title="HabitFlow - Por dentro da produtividade"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// BLOCO 3 – PROBLEMA E SOLUÇÃO (ADAPTADO PARA HÁBITOS)
// ============================================================================

const ProblemSolutionSection: React.FC = () => (
  <section
    id="problem-solution"
    className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
  >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Problema */}
        <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur rounded-2xl border border-rose-100/80 dark:border-rose-900/60 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-rose-600 dark:text-rose-400">
            O problema: motivação acaba, culpa fica.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            Você começa empolgado, cria metas enormes, baixa três apps diferentes... e, depois de
            alguns dias, tudo desanda. A frustração vira rotina e cada “recomeço” parece mais
            pesado que o anterior.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">❌</span>
              <span>
                Falta de clareza sobre por onde começar e qual hábito realmente importa agora.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">❌</span>
              <span>
                Aplicativos que punem qualquer deslize e reforçam a culpa, em vez de apoiar o
                processo.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5">❌</span>
              <span>
                Nenhuma visão clara dos seus pequenos avanços — e sem dados para ajustar a rota.
              </span>
            </li>
          </ul>
        </div>

        {/* Solução */}
        <div className="bg-sky-50/90 dark:bg-sky-900/20 backdrop-blur rounded-2xl border border-sky-200/80 dark:border-sky-700/70 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sky-700 dark:text-sky-300">
            A solução: um fluxo de hábitos seguro, leve e mensurável.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-100">
            O HabitFlow foi desenhado para reduzir fricção, proteger suas sequências e celebrar
            microvitórias. Em vez de depender de força de vontade, você cria um sistema.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-700 dark:text-slate-100">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✅</span>
              <span>
                Streak Shield inteligente que entende imprevistos sem jogar fora todo o seu
                progresso.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✅</span>
              <span>
                Jornada de Nível de Usuário com XP, desafios e recompensas para manter a motivação
                no médio e longo prazo.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✅</span>
              <span>
                Esquadrões de responsabilidade e integração com Apple Health / Google Fit para
                conectar hábitos ao seu corpo e à sua rotina real.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// BLOCO 4 – PÚBLICO-ALVO E FUNCIONALIDADES
// ============================================================================

const TargetAudienceSection: React.FC = () => (
  <section id="para-quem" className="py-16 sm:py-20 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Feito para quem quer progresso de verdade, não perfeição.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          HabitFlow foi desenhado para pessoas e equipes que valorizam consistência leve, ciência
          aplicada e apoio mútuo.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-50 dark:bg-slate-900/70 p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <UsersIcon className="h-9 w-9 mx-auto text-sky-500 mb-3" />
          <h3 className="font-semibold text-base text-slate-900 dark:text-white">
            Profissionais focados
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5">
            Crie rituais de foco, energia e descanso para sustentar alta performance sem burnout.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/70 p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <ZapIcon className="h-9 w-9 mx-auto text-violet-500 mb-3" />
          <h3 className="font-semibold text-base text-slate-900 dark:text-white">
            Estudantes e criativos
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5">
            Estruture sessões de estudo, prática criativa e revisão com feedback visual do seu
            progresso.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/70 p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <TargetIcon className="h-9 w-9 mx-auto text-emerald-500 mb-3" />
          <h3 className="font-semibold text-base text-slate-900 dark:text-white">
            Pessoas em transição
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5">
            Recomeços de carreira, saúde ou rotina com suporte visual e emocional do seu fluxo de
            hábitos.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/70 p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <HeartIcon className="h-9 w-9 mx-auto text-rose-400 mb-3" />
          <h3 className="font-semibold text-base text-slate-900 dark:text-white">
            Equipes e empresas
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5">
            Programas de bem-estar, cultura de foco e saúde mental com dados, desafios e
            acompanhamento.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <ZapIcon className="h-7 w-7 text-sky-500" />,
      title: 'Microinterações que mantêm o foco',
      description:
        'Feedbacks suaves, animações leves e streaks inteligentes criam um ambiente de recompensa constante, sem se tornar viciante.',
    },
    {
      icon: <ShieldIcon className="h-7 w-7 text-violet-500" />,
      title: 'Segurança emocional e de dados',
      description:
        'Nada de punições exageradas ou notificações agressivas. Seus dados são criptografados e você controla o ritmo.',
    },
    {
      icon: <CheckCircleIcon className="h-7 w-7 text-emerald-500" />,
      title: 'Interface limpa e científica',
      description:
        'Minimalismo, alta legibilidade e métricas que fazem sentido: taxa de consistência, janelas de foco e energia percebida.',
    },
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-3 bg-white dark:bg-slate-950/80 rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <div className="flex-shrink-0 bg-sky-50 dark:bg-slate-900 p-3 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// BLOCO 5 – PLANOS E PREÇOS (CRÍTICO)
// ============================================================================

const PlanCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const isFeatured = plan.isFeatured;

  return (
    <article
      className={`relative flex flex-col h-full rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-950/90 border text-sm sm:text-base transition-all 
      ${
        isFeatured
          ? 'shadow-xl shadow-sky-100/70 dark:shadow-slate-900/80 border-transparent ring-2 ring-offset-2 ring-primary/70 dark:ring-primary/80'
          : 'border-slate-200 dark:border-slate-800 hover:border-primary/60 hover:shadow-md'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary text-white text-[11px] font-semibold px-3 py-1 shadow-sm">
            <ZapIcon className="h-[14px] w-[14px]" />
            MAIS ESCOLHIDO
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          {plan.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {plan.description}
        </p>
      </div>

      <div className="mb-4">
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {plan.priceLabel}
        </div>
        {plan.id === 'pro' && (
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            7 dias de teste gratuito · cancele quando quiser
          </p>
        )}
        {plan.id === 'starter' && (
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            Comece sem cartão de crédito
          </p>
        )}
      </div>

      <div className="mb-4 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
        {plan.forWhom}
      </div>

      <div className="mt-2 mb-4">
        <h4 className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400 mb-2">
          O que está incluído
        </h4>
        <ul className="space-y-1.5 max-h-56 overflow-y-auto pr-1 text-xs sm:text-sm">
          {plan.featuresIncluded.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircleIcon className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-200">{feature}</span>
            </li>
          ))}
        </ul>

        {plan.limitations && plan.limitations.length > 0 && (
          <>
            <h5 className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Limitações
            </h5>
            <ul className="mt-1 space-y-1.5 text-xs sm:text-sm">
              {plan.limitations.map((lim) => (
                <li key={lim} className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">•</span>
                  <span className="text-slate-600 dark:text-slate-300">{lim}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="mt-auto pt-3">
        <button
          className={`w-full font-semibold py-2.5 sm:py-3 px-4 rounded-xl text-sm sm:text-base transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 
          ${
            plan.id === 'pro'
              ? 'bg-primary text-white hover:bg-primary-dark focus:ring-primary'
              : plan.id === 'starter'
              ? 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white focus:ring-slate-500'
              : 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500'
          }`}
        >
          {plan.ctaLabel}
        </button>
        {plan.id === 'teams' && (
          <p className="mt-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 text-center">
            Resposta em até 1 dia útil · planos anuais com condições especiais
          </p>
        )}
      </div>
    </article>
  );
};

const PricingSection: React.FC = () => (
  <section id="planos" className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Planos e preços pensados para seu ritmo.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Comece de graça com o Flow Starter, desbloqueie todo o potencial com o Flow Pro ou leve
          o HabitFlow para toda a sua equipe com o Flow Teams.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <p className="mt-6 text-[11px] sm:text-xs text-slate-400 text-center">
        Sem taxas escondidas. Você pode cancelar ou mudar de plano a qualquer momento. Todos os
        planos incluem acesso à nossa comunidade básica e atualizações contínuas do HabitFlow.
      </p>
    </div>
  </section>
);

// ============================================================================
// BLOCO 6 – COMO FUNCIONA (ADAPTADO PARA HÁBITOS)
// ============================================================================

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Defina seu ponto de partida',
      description:
        'Escolha até 3 hábitos-chave no Flow Starter ou crie seu sistema completo com o Flow Pro. Use nossos templates inspirados em pesquisas científicas.',
    },
    {
      number: '02',
      title: 'Ative seu fluxo diário',
      description:
        'Use o widget interativo para focar na próxima ação, acione modos de foco e deixe o Streak Shield proteger suas sequências.',
    },
    {
      number: '03',
      title: 'Evolua com dados e comunidade',
      description:
        'Acompanhe suas métricas, suba de nível na Jornada de Usuário e encontre Esquadrões para manter a motivação no longo prazo.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Como o HabitFlow se encaixa no seu dia.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Três passos simples para transformar boas intenções em consistência mensurável.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center p-6 sm:p-7 bg-white dark:bg-slate-900/80 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 via-violet-500 to-emerald-400 mb-3">
                {step.number}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// BLOCO 7 – PROVA SOCIAL (SIMPLIFICADO/ADAPTADO)
// ============================================================================

const TestimonialsSection: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        'Em 3 meses com o HabitFlow, consegui manter 5 hábitos ativos sem aquela sensação de “tudo ou nada”. As métricas de consistência me ajudaram a ajustar a rota, não a me culpar.',
      author: 'Ana Paula',
      role: 'Médica residente · Flow Pro',
    },
    {
      quote:
        'Usei o Flow Teams na minha squad de produto. Em poucas semanas, todo mundo tinha rituais claros de foco e de descanso. O clima do time mudou.',
      author: 'Lucas Ferreira',
      role: 'Líder de Produto · Flow Teams',
    },
    {
      quote:
        'Já tinha testado vários apps de hábito, mas sempre abandonava. A ideia de Esquadrões de responsabilidade fez toda a diferença para mim.',
      author: 'Carolina Menezes',
      role: 'Designer freelancer · Flow Pro',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pessoas reais, hábitos sustentáveis.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Histórias de quem trocou ciclos de culpa por consistência leve e contínua.
          </p>
        </div>

        <div
          ref={scrollContainer}
          className="mt-10 flex space-x-5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-80 md:w-96 bg-slate-50 dark:bg-slate-900/80 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <p className="text-sm text-slate-700 dark:text-slate-200 italic">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// BLOCO 8 – GARANTIA E CTA FINAL
// ============================================================================

const GuaranteeSection: React.FC = () => (
  <section id="garantia" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-950/90 border-2 border-dashed border-emerald-400/80 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
        <ShieldIcon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-emerald-500 mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          7 dias para sentir a diferença — ou cancelar sem culpa.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-200">
          Queremos que o HabitFlow seja um aliado, não um peso. Por isso, você tem 7 dias para testar
          todos os recursos do Flow Pro. Se não fizer sentido, é só cancelar. Sem formulários
          escondidos, sem burocracia.
        </p>
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section
    id="cta"
    className="py-16 sm:py-20 bg-gradient-to-r from-sky-600 via-violet-600 to-emerald-500"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h2 className="text-2xl sm:text-3xl font-extrabold">
        Pronto para transformar hábitos em um fluxo sustentável?
      </h2>
      <p className="mt-3 text-sm sm:text-base text-sky-50/90 max-w-2xl mx-auto">
        Comece agora com o Flow Starter gratuito ou desbloqueie todo o poder do Flow Pro. O passo
        mais difícil você já deu: decidir mudar. Deixa que o HabitFlow cuida do resto, um dia de
        cada vez.
      </p>
      <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="#planos"
          className="inline-flex justify-center items-center bg-white text-sky-700 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          Ver planos e começar
        </a>
        <a
          href="#video"
          className="inline-flex justify-center items-center bg-sky-700/40 backdrop-blur text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl text-sm sm:text-base border border-white/20 hover:bg-sky-700/60 transition-colors"
        >
          Assistir ao HabitFlow em ação
        </a>
      </div>
    </div>
  </section>
);

// ============================================================================
// BLOCO 9 – FAQ
// ============================================================================

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Tudo o que você precisa saber antes de começar seu fluxo de hábitos.
          </p>
        </div>
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-50">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-slate-500 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-64' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-200">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// COMPONENTE FINAL DA LANDING PAGE
// ============================================================================

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero + captura + vídeo embutido */}
      <HeroSection />

      {/* Seção dedicada: vídeo promocional */}
      <VideoSection />

      {/* Problema e solução focados em hábitos */}
      <ProblemSolutionSection />

      {/* Público-alvo e benefícios chave */}
      <TargetAudienceSection />
      <BenefitsSection />

      {/* Planos e preços – seção crítica */}
      <PricingSection />

      {/* Como funciona no dia a dia */}
      <HowItWorksSection />

      {/* Prova social */}
      <TestimonialsSection />

      {/* Garantia e CTA final */}
      <GuaranteeSection />
      <CTASection />

      {/* FAQ */}
      <FAQSection />
    </>
  );
};

export default LandingPage;

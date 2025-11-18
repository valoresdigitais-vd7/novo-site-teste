
import React, { useState } from 'react';
import { CheckCircleIcon, UsersIcon, StarIcon, HeartIcon, ShieldIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

interface InlineCheckoutFormProps {
  ctaText: string;
}
const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ ctaText }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email && email.includes('@')) {
      setStatus('success');
      setMessage('Obrigado por se inscrever! Que comece sua jornada de consistência.');
    } else {
      setStatus('error');
      setMessage('Por favor, insira um email válido.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Seu melhor email"
        required
        className="px-4 py-3 rounded-md bg-white border border-neutral-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-shadow flex-grow sm:max-w-xs"
      />
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 focus:ring-2 focus:ring-green-400 focus:outline-none"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : ctaText}
      </button>
      {message && (
        <p
          className={`mt-2 text-center text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

// --- SEÇÃO 1: HERO SECTION ---
const HeroSection: React.FC = () => (
  <section id="hero" className="py-20 text-center bg-gradient-to-br from-blue-50 via-lilac-50 to-green-50">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900">
        Construa Hábitos Poderosos e Viva Sua Melhor Versão
      </h1>
      <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
        Descubra o HabitFlow – o app inovador que une gamificação e ciência para transformar sua rotina diária.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        <InlineCheckoutForm ctaText="Experimente Gratuitamente" />
        <a
          href="#benefits"
          className="sm:ml-4 bg-transparent border border-green-400 text-green-500 py-3 px-6 rounded-md font-bold hover:bg-green-50 transition"
        >
          Saiba Mais
        </a>
      </div>
      <p className="mt-3 text-xs text-neutral-500">Sem cartão de crédito</p>
      <div className="mt-8 flex justify-center gap-8 text-sm font-semibold text-neutral-600">
        <span>🌱 +80.000 Downloads</span>
        <span>🔥 65% de Retenção D7</span>
        <span>💎 10.000 Usuários Pagantes Ativos</span>
      </div>
    </div>
  </section>
);

// --- SEÇÃO 2: SOCIAL PROOF IMEDIATO ---
const SocialProofSection: React.FC = () => (
  <section id="social-proof" className="py-16 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
        <img src="/logos/techcrunch.svg" alt="TechCrunch" className="h-8" />
        <img src="/logos/appstore.svg" alt="App Store" className="h-8" />
        <img src="/logos/googleplay.svg" alt="Google Play" className="h-8" />
        <img src="/logos/fastcompany.svg" alt="Fast Company" className="h-8" />
      </div>
      <blockquote className="mt-12 max-w-2xl mx-auto italic text-neutral-700">
        “HabitFlow transformou minha rotina: agora atingi metas que antes pareciam inalcançáveis, sem a pressão habitual.”
        <div className="mt-4 font-bold">— Mariana, Gerente de Projetos</div>
        <div className="text-sm text-green-600">Produtividade aumentada em 45%</div>
      </blockquote>
    </div>
  </section>
);

// --- SEÇÃO 3: PROPOSTA DE VALOR (3 BENEFÍCIOS CORE) ---
const BenefitsCoreSection: React.FC = () => (
  <section id="benefits" className="py-20 bg-green-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 text-neutral-900">Principais Benefícios</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="text-4xl mb-4">⏱️</div>
          <h3 className="font-semibold text-xl mb-2">Controle Seus Hábitos Diários</h3>
          <p className="text-neutral-600">
            Monitore e ajuste suas rotinas com lembretes e relatórios baseados em ciência comportamental para garantir consistência diariamente.
          </p>
          <a href="#how-it-works" className="mt-3 inline-block text-green-600 font-semibold">
            Saiba Mais →
          </a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="font-semibold text-xl mb-2">Gamificação que Motiva</h3>
          <p className="text-neutral-600">
            Transforme tarefas em desafios divertidos com recompensas, XP e níveis que evidenciam seu progresso real e inspirador.
          </p>
          <a href="#how-it-works" className="mt-3 inline-block text-green-600 font-semibold">
            Ver Pontuação →
          </a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="font-semibold text-xl mb-2">Comunidade que Inspira</h3>
          <p className="text-neutral-600">
            Participe dos Esquadrões e compartilhe metas com até 5 pessoas, ganhando suporte motivacional e o impulso necessário para vencer desafios.
          </p>
          <a href="#community" className="mt-3 inline-block text-green-600 font-semibold">
            Junte-se Agora →
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- SEÇÃO 4: COMO FUNCIONA / O MÉTODO ---
const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 mb-10">Construa Hábitos em 3 Passos Simples</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg border">
          <div className="text-4xl mb-4">⚙️</div>
          <h3 className="font-semibold text-xl mb-2">Configure sua Rotina</h3>
          <p className="text-neutral-600">Personalize seus hábitos e receba lembretes inteligentes com uma interface intuitiva.</p>
        </div>
        <div className="p-6 rounded-lg border">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="font-semibold text-xl mb-2">Gamifique sua Jornada</h3>
          <p className="text-neutral-600">Complete desafios, ganhe XP e desbloqueie recompensas divertidas a cada meta alcançada.</p>
        </div>
        <div className="p-6 rounded-lg border">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="font-semibold text-xl mb-2">Compartilhe e Evolua</h3>
          <p className="text-neutral-600">Participe dos Esquadrões para trocar experiências e evoluir junto com uma comunidade comprometida.</p>
        </div>
      </div>
      <div className="mt-10 text-lg font-semibold text-green-600">Transforme sua rotina e alcance a excelência diária.</div>
    </div>
  </section>
);

// --- SEÇÃO 5: CONTEÚDO/AUTORIDADE ---
const ContentAuthoritySection: React.FC = () => (
  <section id="content" className="py-20 bg-green-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Explore Mais Dicas e Estratégias</h2>
      <p className="text-neutral-600 mb-10">
        Conteúdo exclusivo para potencializar seus hábitos e produtividade
      </p>
      <div className="grid md:grid-cols-4 gap-6 text-left">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Guia de Hábitos Saudáveis</h3>
          <p className="text-sm text-neutral-600 mb-2">
            Descubra técnicas comprovadas para criar e manter rotinas produtivas.
          </p>
          <a href="#" className="text-green-600 font-semibold">Ler mais →</a>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Desafios da Comunidade</h3>
          <p className="text-sm text-neutral-600 mb-2">
            Inspire-se com os desafios e vitórias dos nossos esquadrões.
          </p>
          <a href="#" className="text-green-600 font-semibold">Explorar →</a>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Cases de Sucesso</h3>
          <p className="text-sm text-neutral-600 mb-2">
            Veja como usuários transformaram suas vidas com o HabitFlow.
          </p>
          <a href="#" className="text-green-600 font-semibold">Ver cases →</a>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Insights da Ciência Comportamental</h3>
          <p className="text-sm text-neutral-600 mb-2">
            Entenda os fundamentos científicos que tornam o hábito sustentável.
          </p>
          <a href="#" className="text-green-600 font-semibold">Ler mais →</a>
        </div>
      </div>
    </div>
  </section>
);

// --- SEÇÃO 6: CTA INTERMEDIÁRIO ---
const MidCTASection: React.FC = () => (
  <section id="mid-cta" className="py-20 bg-gradient-to-r from-green-400 to-blue-400 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Seu Novo Hábito Começa Agora!</h2>
    <p className="mb-8 text-lg">Pronto para transformar sua rotina?</p>
    <a
      href="#hero"
      className="bg-white text-green-500 font-bold py-3 px-8 rounded-md hover:scale-105 transform transition"
    >
      Experimente Gratuitamente
    </a>
    <p className="mt-3 text-sm text-green-100">Comece sem compromisso</p>
  </section>
);

// --- SEÇÃO 7: DIFERENCIAÇÃO/COMPARAÇÃO ---
const ComparisonSection: React.FC = () => (
  <section id="comparison" className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Por que HabitFlow é Diferente?</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-neutral-200 text-left">
          <thead>
            <tr className="bg-green-50">
              <th className="py-3 px-4 font-semibold text-neutral-700">Abordagem Tradicional</th>
              <th className="py-3 px-4 font-semibold text-neutral-700">HabitFlow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4">❌ Rotinas monótonas e repetitivas</td>
              <td className="py-3 px-4">✅ Gamificação dinâmica e recompensadora</td>
            </tr>
            <tr className="bg-green-50/30">
              <td className="py-3 px-4">❌ Falta de personalização</td>
              <td className="py-3 px-4">✅ Rotinas adaptadas ao seu estilo de vida</td>
            </tr>
            <tr>
              <td className="py-3 px-4">❌ Ausência de suporte comunitário</td>
              <td className="py-3 px-4">✅ Esquadrões com feedback e suporte real</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// --- SEÇÃO 8: DEPOIMENTOS EM GRID ---
const TestimonialsGridSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Carlos', role: 'Empreendedor', text: 'Com HabitFlow, consegui transformar minha rotina e atingir metas que sempre pareceram distantes. A plataforma é intuitiva e motivadora.', result: 'Rotina otimizada em 70%',
    },
    {
      name: 'Ana', role: 'Designer', text: 'Os desafios da comunidade me deram a força que precisava para manter hábitos saudáveis e produtivos. A experiência é revolucionária!', result: 'Sequência mantida por 30 dias',
    },
    {
      name: 'Lucas', role: 'Freelancer', text: 'HabitFlow é simples, divertido e realmente eficaz. Minha produtividade melhorou significativamente em apenas um mês!', result: 'Aumento de 50% na consistência',
    },
    {
      name: 'Mariana', role: 'Gerente', text: 'Jamais imaginei que formar um novo hábito poderia ser tão agradável. Cada desafio traz uma nova motivação para continuar.', result: 'Metas alcançadas consistentemente',
    },
    {
      name: 'Rafael', role: 'Analista', text: 'A mecânica de gamificação me mantém engajado e satisfeito com pequenas vitórias do dia a dia. Recomendo a todos!', result: 'Transformação da rotina em jogos de sucesso',
    },
    {
      name: 'Isabela', role: 'Empreendedora', text: 'Participar dos Esquadrões foi o diferencial que precisei para me comprometer com meus objetivos. O suporte da comunidade é fundamental.', result: 'Conquista diária de metas',
    },
  ];
  return (
    <section id="success-stories" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Histórias de Sucesso</h2>
        <p className="text-neutral-600 mb-10">Experiências que inspiram a mudança real</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-lg text-left">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="italic text-neutral-700 mb-4">{t.text}</p>
              <p className="font-semibold">{t.name} – {t.role}</p>
              <p className="text-sm text-green-600">{t.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SEÇÃO 9: FAQ ESTRATÉGICO ---
const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'Como funciona o modelo freemium do HabitFlow?',
      a: 'Você tem acesso ao plano Flow Starter gratuitamente, com ferramentas essenciais para gerenciar hábitos. Os planos Flow Pro e Flow Teams oferecem recursos exclusivos e integrações avançadas.',
    },
    {
      q: 'Preciso estar conectado à internet para registrar meus hábitos?',
      a: 'Não! O HabitFlow permite o registro offline, sincronizando seus dados automaticamente quando a conexão for restabelecida.',
    },
    {
      q: 'Quão seguro é o HabitFlow para os meus dados pessoais?',
      a: 'Seguimos os mais altos padrões de segurança e criptografia, garantindo que suas informações estejam sempre protegidas.',
    },
    {
      q: 'Como a gamificação me auxilia na manutenção dos hábitos?',
      a: 'Com nosso sistema de XP, recompensas e desafios, cada ação se torna uma conquista, motivando você a continuar sua jornada sem pressões excessivas.',
    },
    {
      q: 'Como posso participar dos Esquadrões?',
      a: 'Ao se inscrever em um dos planos pagos, você pode formar um grupo com até 5 pessoas e desfrutar de desafios colaborativos e suporte mútuo.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border rounded-md">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between w-full p-4 font-semibold text-left"
              >
                {item.q}
                <span>{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="p-4 border-t text-neutral-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SEÇÃO 10: CTA FINAL ---
const FinalCTASection: React.FC = () => (
  <section id="final-cta" className="py-20 bg-gradient-to-r from-blue-500 to-green-400 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Sua Jornada de Consistência Começa Agora</h2>
    <p className="mb-8 text-lg max-w-2xl mx-auto">
      Transforme seus hábitos e sua vida com o HabitFlow – o app que une ciência, gamificação e comunidade.
    </p>
    <a
      href="#hero"
      className="bg-white text-blue-600 font-bold py-3 px-8 rounded-md hover:scale-105 transform transition"
    >
      Comece Agora →
    </a>
    <div className="mt-6 text-sm flex flex-col gap-1 text-blue-100">
      <span>🛡️ Garantia de satisfação – 30 dias</span>
      <span>💬 Suporte dedicado 24/7</span>
      <span>👥 Comunidade ativa e engajada</span>
    </div>
  </section>
);

// --- FINAL PAGE COMPONENT ---
const LandingPage: React.FC = () => (
  <>
    <HeroSection />
    <SocialProofSection />
    <BenefitsCoreSection />
    <HowItWorksSection />
    <ContentAuthoritySection />
    <MidCTASection />
    <ComparisonSection />
    <TestimonialsGridSection />
    <FAQSection />
    <FinalCTASection />
  </>
);

export default LandingPage;

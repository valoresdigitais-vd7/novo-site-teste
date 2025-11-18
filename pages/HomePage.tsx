
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// InlineCheckoutForm Component
interface InlineCheckoutFormProps {
    productName: string;
}
const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ productName }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Obrigado! Em breve entraremos em contato para finalizar sua compra do ${productName}.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email válido.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Experimente HabitFlow'}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white">
                Construa Consistência, Desbloqueie Sua Melhor Versão
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Transforme sua rotina com gamificação, ciência comportamental e suporte comunitário – hoje mesmo.
            </p>
            <div className="max-w-md mx-auto">
                <InlineCheckoutForm productName="HabitFlow" />
                <p className="mt-2 text-sm text-neutral-500">Teste grátis por 7 dias</p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
                <Link to="/features" className="bg-white border border-blue-600 text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50">
                    Veja Funcionalidades
                </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-neutral-500 dark:text-neutral-400">
                <span>+80.000 instalações</span>
                <span>•</span>
                <span>65% de Retenção D7</span>
                <span>•</span>
                <span>10.000 assinantes ativos</span>
            </div>
        </div>
    </section>
);

const SocialProofSection: React.FC = () => (
    <section className="py-12 bg-neutral-100 dark:bg-neutral-900 text-center">
        <div className="container mx-auto px-4">
            <div className="flex justify-center items-center space-x-8 text-neutral-500 uppercase tracking-wide text-sm">
                <span>TechCrunch</span>
                <span>Forbes</span>
                <span>Wired</span>
                <span>Fast Company</span>
            </div>
            <blockquote className="mt-8 max-w-2xl mx-auto italic text-neutral-700 dark:text-neutral-300">
                “Eu nunca pensei que um app pudesse transformar minha rotina de forma tão divertida. A gamificação e o suporte da comunidade revolucionaram meus hábitos!”
            </blockquote>
            <p className="mt-4 font-semibold text-neutral-800 dark:text-neutral-100">— Fernando, Empreendedor</p>
            <p className="text-sm text-neutral-500">Aumento de 45% na produtividade pessoal</p>
        </div>
    </section>
);

const CoreBenefitsSection: React.FC = () => {
    const benefits = [
        {
            icon: "🏅",
            title: "Gamificação que Engaja",
            description: "Transforme tarefas em desafios diários e conquiste recompensas que estimulam sua continuidade. Mantenha o ritmo com diversão.",
            cta: "Saiba mais sobre gamificação"
        },
        {
            icon: "⏱️",
            title: "Ciência Comportamental Aplicada",
            description: "Utilize estratégias baseadas na ciência para criar hábitos que realmente funcionam, garantindo resultados duradouros.",
            cta: "Descubra nossa metodologia"
        },
        {
            icon: "👥",
            title: "Comunidade e Suporte Real",
            description: "Conecte-se com grupos de responsabilidade e transforme desafios individuais em vitórias coletivas.",
            cta: "Explore a comunidade"
        },
    ];
    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Transforme sua rotina com gamificação</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {benefits.map(b => (
                        <div key={b.title} className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow">
                            <div className="text-4xl mb-4">{b.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">{b.description}</p>
                            <Link to="/learn-more" className="text-blue-600 hover:underline">{b.cta}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection: React.FC = () => {
    const steps = [
        { icon: "✍️", title: "Defina Seus Hábitos", description: "Escolha os comportamentos que deseja incorporar e personalize suas metas para acompanhar seu progresso." },
        { icon: "🎮", title: "Gamifique e Alcance Metas", description: "Acumule XP, conquiste recompensas e use o Streak Shield para manter sua sequência ativa." },
        { icon: "🤝", title: "Conecte-se e Compartilhe", description: "Una-se aos 'Esquadrões' e participe de desafios que incentivam a responsabilidade coletiva." }
    ];
    return (
        <section className="py-20 bg-neutral-200 dark:bg-neutral-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Como Transformar Seus Hábitos em 3 Passos</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map(s => (
                        <div key={s.title} className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow">
                            <div className="text-4xl mb-4">{s.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">{s.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-8 font-medium text-blue-600">Transforme sua rotina – hábitos que viram um estilo de vida!</p>
            </div>
        </section>
    );
};

const ResourcesSection: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Recursos para Turbinar Sua Produtividade</h2>
            <p className="mb-12 text-neutral-600 dark:text-neutral-400">Descubra conteúdos exclusivos para transformar seus hábitos e alcançar metas</p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">E-book: Guia Prático de Hábitos</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4">Aprenda a construir hábitos sustentáveis com dicas baseadas em ciência.</p>
                    <Link to="/resources/ebook" className="text-blue-600 hover:underline">Baixar grátis</Link>
                </div>
                <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Artigo: Gamificação em Ação</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4">Descubra como transformar sua rotina com técnicas de gamificação eficazes.</p>
                    <Link to="/blog/gamificacao" className="text-blue-600 hover:underline">Ler mais</Link>
                </div>
                <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Checklist: Consistência Diária</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 mb-4">Ferramenta prática para manter o foco e a regularidade em suas ações.</p>
                    <Link to="/resources/checklist" className="text-blue-600 hover:underline">Acessar checklist</Link>
                </div>
            </div>
        </div>
    </section>
);

const MidCTASection: React.FC = () => (
    <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Você está preparado para o próximo nível?</h2>
        <p className="mb-8 text-cyan-100">Já viu como pequenas mudanças podem revolucionar sua rotina?</p>
        <Link to="/signup" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md">Experimente HabitFlow</Link>
        <p className="mt-2 text-sm">Teste grátis por 7 dias</p>
    </section>
);

const ComparisonSection: React.FC = () => (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-800 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Por que o HabitFlow é único?</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-3">Abordagem Tradicional</th>
                            <th className="border p-3">HabitFlow</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-3">❌ Rotina monótona</td>
                            <td className="border p-3">✅ Gamificação divertida e intuitiva</td>
                        </tr>
                        <tr>
                            <td className="border p-3">❌ Falta de suporte</td>
                            <td className="border p-3">✅ Comunidade motivadora</td>
                        </tr>
                        <tr>
                            <td className="border p-3">❌ Técnicas desatualizadas</td>
                            <td className="border p-3">✅ Ciência comportamental moderna</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

const SuccessStoriesSection: React.FC = () => {
    const testimonials = [
        { quote: "Com o HabitFlow, mantive meus hábitos por 30 dias seguidos! A gamificação realmente me motivou.", author: "Ana, Designer" },
        { quote: "Transformei minha rotina em algo divertido e produtivo, graças ao suporte da comunidade. Recomendo!", author: "Carlos, Empreendedor" },
        { quote: "Os desafios em grupo me impulsionaram a nunca desistir. Pequenos passos que fizeram uma grande diferença.", author: "Beatriz, Estudante" },
        { quote: "HabitFlow mudou minha visão de produtividade, entregando resultados rápidos e engajadores.", author: "Ricardo, Analista" },
        { quote: "O apoio da comunidade me ajudou a atingir metas que antes pareciam impossíveis. Uma experiência transformadora.", author: "Julia, Coach" },
        { quote: "O sistema de recompensas e os desafios diários me incentivaram a desenvolver hábitos valiosos de forma leve.", author: "Marcos, Freelancer" },
    ];
    return (
        <section className="py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Histórias de Sucesso</h2>
                <p className="mb-10 text-neutral-600 dark:text-neutral-400">Veja como o HabitFlow transformou a vida de nossos usuários</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow">
                            <p className="text-yellow-400 mb-2">★★★★★</p>
                            <blockquote className="italic text-neutral-700 dark:text-neutral-300 mb-4">“{t.quote}”</blockquote>
                            <p className="font-semibold">{t.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSection: React.FC = () => {
    const faqs = [
        { q: "Como o HabitFlow ajuda na construção de hábitos?", a: "Utilizamos uma combinação de gamificação, técnicas fundamentadas na ciência comportamental e suporte comunitário para tornar a mudança mais leve e sustentável." },
        { q: "Quais plataformas o HabitFlow suporta?", a: "O HabitFlow está disponível para dispositivos iOS, Android e também pode ser acessado via Web." },
        { q: "O que é o Streak Shield?", a: "Um recurso exclusivo que permite “congelar” sua sequência por até 3 dias usando moedas virtuais, protegendo seus progressos." },
        { q: "Como funcionam os grupos de responsabilidade (“Esquadrões”)?", a: "Os Esquadrões conectam até 5 pessoas para que vocês possam se apoiar mutuamente e enfrentar desafios divertidos juntos." },
        { q: "Existe um teste gratuito?", a: "Sim! Comece pelo Flow Starter, nosso plano gratuito, e experimente todas as funcionalidades sem compromisso." },
        { q: "Como a integração com Apple Health e Google Fit melhora a experiência?", a: "Ela automatiza o registro de hábitos relacionados à saúde, facilitando o acompanhamento dos seus progressos físicos sem esforço." },
        { q: "Posso migrar entre os planos?", a: "Sim, nosso modelo freemium permite atualizar ou ajustar seu plano conforme suas necessidades, sem complicações." }
    ];
    return (
        <section className="py-20 bg-neutral-200 dark:bg-neutral-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTASection: React.FC = () => (
    <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua rotina?</h2>
        <p className="mb-8 text-cyan-100">Comece hoje a jornada rumo a uma vida mais consistente e gratificante.</p>
        <Link to="/signup" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-md hover:bg-blue-50 inline-block">Iniciar Minha Jornada ➜</Link>
        <div className="mt-6 text-sm space-x-4 text-cyan-100">
            <span>Garantia de satisfação</span>•
            <span>Suporte dedicado 24/7</span>•
            <span>Comunidade exclusiva HabitFlow</span>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <CoreBenefitsSection />
      <HowItWorksSection />
      <ResourcesSection />
      <MidCTASection />
      <ComparisonSection />
      <SuccessStoriesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;

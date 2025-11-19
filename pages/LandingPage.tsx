import React, { useState, useRef } from 'react';
import type { Product, Testimonial } from '../types';
import { PRODUCTS, TESTIMONIALS, FAQ_DATA } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon, ChevronDownIcon, UsersIcon, TargetIcon, HeartIcon } from '../components/icons';

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

        // Simulate API call for lead generation
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Obrigado! Em breve você receberá o link para o ${productName}.`);
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
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-shadow"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Processando...' : 'Experimente Gratuitamente'}
                </button>
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Sem cartão de crédito necessário.</p>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- SEÇÃO 1: HERO SECTION ---

const HeroSection: React.FC = () => (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-b from-indigo-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center">
                <div className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        Construa Hábitos Poderosos e <span className="text-indigo-600 dark:text-indigo-400">Viva Sua Melhor Versão</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Descubra o HabitFlow – o app inovador que une gamificação e ciência para transformar sua rotina diária.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <InlineCheckoutForm productName="HabitFlow App" />
                    </div>
                    <div className="mt-6 flex justify-center gap-4">
                         <a href="#benefits" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Saiba Mais &darr;</a>
                    </div>
                </div>
                
                {/* Trust Elements (Hero) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-center border-t border-neutral-200 dark:border-neutral-700 pt-8">
                    <div>
                        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">+80.000</p>
                        <p className="text-sm text-neutral-500">Instalações Totais</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">65%</p>
                        <p className="text-sm text-neutral-500">Retenção em 7 Dias</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10k+</p>
                        <p className="text-sm text-neutral-500">Usuários Ativos</p>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-3xl aspect-video rounded-lg shadow-2xl overflow-hidden border-4 border-white dark:border-neutral-700">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/T8ZZKPFSsNc?autoplay=0&mute=0&controls=1&showinfo=0&rel=0"
                            title="Vídeo de demonstração HabitFlow"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- SEÇÃO 2: SOCIAL PROOF IMEDIATO ---

const SocialProofImmediateSection: React.FC = () => (
    <section id="social-proof-immediate" className="py-16 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logos */}
            <div className="flex justify-center items-center gap-x-8 sm:gap-x-16 flex-wrap mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-bold text-neutral-400">TechCrunch</span>
                <span className="text-xl font-bold text-neutral-400">App Store</span>
                <span className="text-xl font-bold text-neutral-400">Google Play</span>
                <span className="text-xl font-bold text-neutral-400">Fast Company</span>
            </div>

            {/* Depoimento Destaque */}
            <div className="max-w-3xl mx-auto bg-indigo-50 dark:bg-neutral-800/50 p-8 rounded-2xl text-center border border-indigo-100 dark:border-neutral-700">
                <div className="flex justify-center mb-4">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-neutral-800 dark:text-neutral-200 italic">
                    “HabitFlow transformou minha rotina: agora atingi metas que antes pareciam inalcançáveis, sem a pressão habitual.”
                </blockquote>
                <div className="mt-6">
                    <p className="font-bold text-indigo-700 dark:text-indigo-400">Mariana</p>
                    <p className="text-sm text-neutral-500">Gerente de Projetos — Produtividade aumentada em 45%</p>
                </div>
            </div>
        </div>
    </section>
);

// --- SEÇÃO 3: PROPOSTA DE VALOR (3 BENEFÍCIOS CORE) ---

const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            icon: <ZapIcon className="h-10 w-10 text-teal-500" />,
            title: 'Controle Seus Hábitos Diários',
            description: 'Monitore e ajuste suas rotinas com lembretes e relatórios baseados em ciência comportamental para garantir consistência diariamente.',
            cta: 'Saiba Mais'
        },
        {
            icon: <TargetIcon className="h-10 w-10 text-teal-500" />,
            title: 'Gamificação que Motiva',
            description: 'Transforme tarefas em desafios divertidos com recompensas, XP e níveis que evidenciam seu progresso real e inspirador.',
            cta: 'Ver Pontuação'
        },
        {
            icon: <UsersIcon className="h-10 w-10 text-teal-500" />,
            title: 'Comunidade que Inspira',
            description: 'Participe dos Esquadrões e compartilhe metas com até 5 pessoas, ganhando suporte motivacional e o impulso necessário para vencer desafios.',
            cta: 'Junte-se Agora'
        }
    ];
    return (
        <section id="benefits" className="py-20 bg-neutral-50 dark:bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Tudo o que você precisa para manter o foco</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Ciência e diversão unidas para resultados reais.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                     {benefits.map((benefit, idx) => (
                         <div key={idx} className="flex flex-col items-center text-center p-6 bg-white dark:bg-neutral-700/30 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-neutral-700">
                             <div className="flex-shrink-0 bg-teal-50 dark:bg-teal-900/20 p-4 rounded-full mb-6">{benefit.icon}</div>
                             <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{benefit.title}</h3>
                             <p className="mt-3 text-neutral-600 dark:text-neutral-300 flex-grow">{benefit.description}</p>
                             <span className="mt-6 text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wide cursor-pointer hover:underline">{benefit.cta}</span>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

// --- SEÇÃO 4: COMO FUNCIONA / O MÉTODO ---

const HowItWorksSection: React.FC = () => {
    const steps = [
        { number: '01', title: 'Configure sua Rotina', description: 'Personalize seus hábitos e receba lembretes inteligentes com uma interface intuitiva.', icon: <ShieldIcon className="h-8 w-8 text-white" /> },
        { number: '02', title: 'Gamifique sua Jornada', description: 'Complete desafios, ganhe XP e desbloqueie recompensas divertidas a cada meta alcançada.', icon: <TargetIcon className="h-8 w-8 text-white" /> },
        { number: '03', title: 'Compartilhe e Evolua', description: 'Participe dos Esquadrões para trocar experiências e evoluir junto com uma comunidade comprometida.', icon: <UsersIcon className="h-8 w-8 text-white" /> }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Construa Hábitos em 3 Passos Simples</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Transforme sua rotina e alcance a excelência diária.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-indigo-100 dark:bg-indigo-900 -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={step.number} className="flex flex-col items-center text-center">
                           <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-none mb-6 z-10 border-4 border-white dark:border-neutral-900">
                               {step.icon}
                           </div>
                           <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{step.title}</h3>
                           <p className="text-neutral-600 dark:text-neutral-400 max-w-xs mx-auto">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SEÇÃO 5: CONTEÚDO/AUTORIDADE ---

const ContentAuthoritySection: React.FC = () => {
    const resources = [
        { title: "Guia de Hábitos Saudáveis", desc: "Descubra técnicas comprovadas para criar e manter rotinas produtivas.", cta: "Ler mais" },
        { title: "Desafios da Comunidade", desc: "Inspire-se com os desafios e vitórias dos nossos esquadrões.", cta: "Explorar" },
        { title: "Cases de Sucesso", desc: "Veja como usuários transformaram suas vidas com o HabitFlow.", cta: "Ver cases" },
        { title: "Insights da Ciência", desc: "Entenda os fundamentos científicos que tornam o hábito sustentável.", cta: "Ler mais" }
    ];

    return (
        <section className="py-16 bg-neutral-50 dark:bg-neutral-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight">Explore Mais Dicas e Estratégias</h2>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">Conteúdo exclusivo para potencializar seus hábitos e produtividade</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border-l-4 border-indigo-500 hover:translate-y-[-2px] transition-transform">
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{item.desc}</p>
                            <button className="text-teal-600 dark:text-teal-400 text-sm font-bold hover:underline">{item.cta} &rarr;</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SEÇÃO 6: CTA INTERMEDIÁRIO (MID-PAGE) ---

const MidPageCTA: React.FC = () => (
    <section className="py-20 bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto px-4 text-center">
            <p className="text-indigo-200 font-semibold tracking-widest uppercase mb-2">Pronto para transformar sua rotina?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Seu Novo Hábito Começa Agora!</h2>
            <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-transform transform hover:scale-105">
                Experimente Gratuitamente
            </button>
            <p className="mt-4 text-sm text-indigo-200">Comece sem compromisso</p>
        </div>
    </section>
);

// --- SEÇÃO 7: DIFERENCIAÇÃO/COMPARAÇÃO ---

const ComparisonSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Por que HabitFlow é Diferente?</h2>
            </div>
            <div className="overflow-hidden border rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                    <thead className="bg-neutral-50 dark:bg-neutral-800">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-neutral-500 uppercase tracking-wider">Abordagem Tradicional</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/20">HabitFlow</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-neutral-600 dark:text-neutral-300"><span className="mr-2">❌</span> Rotinas monótonas e repetitivas</td>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-neutral-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10"><span className="mr-2">✅</span> Gamificação dinâmica e recompensadora</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-neutral-600 dark:text-neutral-300"><span className="mr-2">❌</span> Falta de personalização</td>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-neutral-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10"><span className="mr-2">✅</span> Rotinas adaptadas ao seu estilo de vida</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-neutral-600 dark:text-neutral-300"><span className="mr-2">❌</span> Ausência de suporte comunitário</td>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-neutral-900 dark:text-white bg-indigo-50/30 dark:bg-indigo-900/10"><span className="mr-2">✅</span> Esquadrões com feedback e suporte real</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

// --- SEÇÃO 8: DEPOIMENTOS EM GRID ---

const TestimonialsGridSection: React.FC = () => {
    // Local data to match brief
    const testimonialsData = [
        { name: "Carlos", role: "Empreendedor", text: "Com HabitFlow, consegui transformar minha rotina e atingir metas que sempre pareceram distantes. A plataforma é intuitiva e motivadora.", result: "Rotina otimizada em 70%" },
        { name: "Ana", role: "Designer", text: "Os desafios da comunidade me deram a força que precisava para manter hábitos saudáveis e produtivos. A experiência é revolucionária!", result: "Sequência mantida por 30 dias" },
        { name: "Lucas", role: "Freelancer", text: "HabitFlow é simples, divertido e realmente eficaz. Minha produtividade melhorou significativamente em apenas um mês!", result: "Aumento de 50% na consistência" },
        { name: "Mariana", role: "Gerente", text: "Jamais imaginei que formar um novo hábito poderia ser tão agradável. Cada desafio traz uma nova motivação para continuar.", result: "Metas alcançadas consistentemente" },
        { name: "Rafael", role: "Analista", text: "A mecânica de gamificação me mantém engajado e satisfeito com pequenas vitórias do dia a dia. Recomendo a todos!", result: "Transformação da rotina em jogos" },
        { name: "Isabela", role: "Empreendedora", text: "Participar dos Esquadrões foi o diferencial que precisei para me comprometer com meus objetivos. O suporte da comunidade é fundamental.", result: "Conquista diária de metas" }
    ];

    return (
        <section id="testimonials" className="py-20 bg-neutral-50 dark:bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Histórias de Sucesso</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Experiências que inspiram a mudança real.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialsData.map((t, index) => (
                        <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md border border-neutral-100 dark:border-neutral-700">
                            <div className="flex text-yellow-400 mb-2">★★★★★</div>
                            <p className="text-neutral-600 dark:text-neutral-300 mb-4">"{t.text}"</p>
                            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                <p className="font-bold text-neutral-900 dark:text-white">{t.name}, <span className="font-normal text-sm text-neutral-500">{t.role}</span></p>
                                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1">{t.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SEÇÃO 9: FAQ ESTRATÉGICO ---

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Local FAQ Data
    const localFaq = [
        { question: "Como funciona o modelo freemium do HabitFlow?", answer: "Você tem acesso ao plano Flow Starter gratuitamente, com ferramentas essenciais para gerenciar hábitos. Os planos Flow Pro e Flow Teams oferecem integrações avançadas e recursos exclusivos." },
        { question: "Preciso estar conectado à internet para registrar meus hábitos?", answer: "Não! O HabitFlow permite o registro offline, sincronizando seus dados automaticamente quando a conexão for restabelecida." },
        { question: "Quão seguro é o HabitFlow para os meus dados pessoais?", answer: "Seguimos os mais altos padrões de segurança e criptografia, garantindo que suas informações estejam sempre protegidas." },
        { question: "Como a gamificação me auxilia na manutenção dos hábitos?", answer: "Com nosso sistema de XP, recompensas e desafios, cada ação se torna uma conquista, motivando você a continuar sua jornada sem pressões excessivas." },
        { question: "Como posso participar dos Esquadrões?", answer: "Ao se inscrever em um dos planos pagos, você pode formar um grupo com até 5 pessoas e desfrutar de desafios colaborativos e suporte mútuo." }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Dúvidas Frequentes</h2>
                </div>
                <div className="space-y-4">
                    {localFaq.map((item, index) => (
                        <div key={index} className="bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-md font-medium text-neutral-900 dark:text-white">{item.question}</span>
                                <ChevronDownIcon
                                    className={`h-5 w-5 text-indigo-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="px-5 pb-5">
                                    <p className="text-neutral-600 dark:text-neutral-300">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SEÇÃO 10: CTA FINAL (PRÉ-FOOTER) ---

const FinalCTASection: React.FC = () => (
    <section id="cta-final" className="py-24 bg-neutral-900 text-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-indigo-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-teal-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-extrabold text-white">Sua Jornada de Consistência Começa Agora</h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
                Transforme seus hábitos e sua vida com o HabitFlow – o app que une ciência, gamificação e comunidade.
            </p>
            <div className="mt-10">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-12 rounded-md text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-900/50 flex items-center justify-center mx-auto">
                    Comece Agora <span className="ml-2">→</span>
                </button>
            </div>
            
            {/* Trust Elements (Final) */}
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center">
                    <ShieldIcon className="h-5 w-5 mr-2 text-teal-500" /> Garantia de satisfação – 30 dias
                </div>
                <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-2 text-teal-500" /> Suporte dedicado 24/7
                </div>
                <div className="flex items-center">
                    <UsersIcon className="h-5 w-5 mr-2 text-teal-500" /> Comunidade ativa e engajada
                </div>
            </div>
        </div>
    </section>
);

const ProductPricingSection: React.FC = () => {
    // Plans based on briefing
    const plans = [
        { name: "Flow Starter", price: "Grátis", features: ["Até 3 Hábitos", "Streak básico", "Acesso Mobile"], featured: false },
        { name: "Flow Pro", price: "R$ 19,90", features: ["Hábitos Ilimitados", "Streak Shield", "Integração Apple/Google", "Estatísticas Avançadas"], featured: true },
        { name: "Flow Teams", price: "Sob Consulta", features: ["Esquadrões ilimitados", "Painel de gestão", "Desafios Corporativos"], featured: false }
    ];

    return (
        <section id="plans" className="py-20">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Planos e Preços</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Escolha o nível de sua jornada.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map(plan => (
                        <div key={plan.name} className={`border rounded-xl p-8 flex flex-col ${plan.featured ? 'border-indigo-500 ring-2 ring-indigo-500 relative bg-white dark:bg-neutral-800' : 'border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900'}`}>
                             {plan.featured && <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">MAIS POPULAR</span>}
                            <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                            <p className="text-3xl font-extrabold text-center my-4 text-indigo-600 dark:text-indigo-400">{plan.price}</p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map(feat => (
                                    <li key={feat} className="flex items-center text-neutral-600 dark:text-neutral-300">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full font-bold py-3 rounded-md transition-colors ${plan.featured ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600'}`}>
                                Selecionar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- FINAL PAGE COMPONENT ---

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-neutral-900 dark:text-white bg-white dark:bg-neutral-900">
      {/* Seção 1: Hero Section */}
      <HeroSection />
      
      {/* Seção 2: Social Proof Imediato */}
      <SocialProofImmediateSection />
      
      {/* Seção 3: Proposta de Valor (3 Benefícios) */}
      <BenefitsSection />
      
      {/* Seção 4: Como Funciona */}
      <HowItWorksSection />
      
      {/* Seção 5: Conteúdo/Autoridade */}
      <ContentAuthoritySection />
      
      {/* Seção 6: CTA Intermediário */}
      <MidPageCTA />
      
      {/* Seção 7: Diferenciação/Comparação */}
      <ComparisonSection />
      
      {/* Seção 8: Depoimentos em Grid */}
      <TestimonialsGridSection />

      {/* Planos (Bonus based on brief) */}
      <ProductPricingSection />
      
      {/* Seção 9: FAQ Estratégico */}
      <FAQSection />
      
      {/* Seção 10: CTA Final */}
      <FinalCTASection />
    </div>
  );
};

export default LandingPage;
import React, { useState, useRef } from 'react';

// --- MOCKED TYPES & DATA FOR HABITFLOW (Substituindo importações externas para o contexto) ---

interface Product {
    id: string;
    name: string;
    price: string;
    features: string[];
    isFeatured: boolean;
    cta: string;
}

const PRODUCTS: Product[] = [
    {
        id: 'starter',
        name: 'Flow Starter',
        price: 'R$ 0',
        features: ['Rastreamento de 3 hábitos', 'Integração básica Apple/Google', 'Acesso à Comunidade Global', 'Streak Shield (1x/mês)'],
        isFeatured: false,
        cta: 'Começar Grátis'
    },
    {
        id: 'pro',
        name: 'Flow Pro',
        price: 'R$ 29,90/mês',
        features: ['Hábitos ilimitados', 'Widgets Interativos exclusivos', 'Streak Shield Ilimitado', 'Análise de Dados Avançada', 'Jornada de Nível Personalizada'],
        isFeatured: true,
        cta: 'Assinar Flow Pro'
    },
    {
        id: 'teams',
        name: 'Flow Teams',
        price: 'Sob Consulta',
        features: ['Esquadrões Corporativos', 'Desafios de Equipe', 'Relatórios de Bem-estar', 'Gerente de Sucesso Dedicado'],
        isFeatured: false,
        cta: 'Falar com Vendas'
    }
];

const TESTIMONIALS = [
    {
        quote: "Eu sempre desistia na terceira semana. O sistema de 'Streak Shield' salvou minha motivação quando fiquei doente. Hoje estou há 120 dias focado!",
        author: "Mariana S.",
        role: "Designer & Maratonista",
        avatarUrl: "https://i.pravatar.cc/150?img=5"
    },
    {
        quote: "A gamificação transformou minha rotina chata em um RPG. Subir de nível na vida real é viciante da melhor maneira possível.",
        author: "Carlos E.",
        role: "Desenvolvedor Senior",
        avatarUrl: "https://i.pravatar.cc/150?img=11"
    },
    {
        quote: "Usamos o HabitFlow na nossa startup para desafios de saúde mental. A produtividade aumentou porque o time está mais feliz e saudável.",
        author: "Fernanda L.",
        role: "HR Manager",
        avatarUrl: "https://i.pravatar.cc/150?img=9"
    }
];

const FAQ_DATA = [
    {
        question: "O que é o Streak Shield?",
        answer: "Sabemos que a vida acontece. O Streak Shield protege sua sequência de hábitos caso você perca um dia por imprevistos, impedindo que você se desmotive e desista."
    },
    {
        question: "Funciona com meu Smartwatch?",
        answer: "Sim! Temos integração nativa bidirecional com Apple Health e Google Fit para marcar hábitos de exercício e sono automaticamente."
    },
    {
        question: "Posso criar grupos com amigos?",
        answer: "Com certeza. Os 'Esquadrões' permitem que você e seus amigos acompanhem o progresso uns dos outros, com chat exclusivo e ranking de consistência."
    },
    {
        question: "O plano gratuito tem validade?",
        answer: "Não, o Flow Starter é gratuito para sempre. Você só migra para o Pro se quiser funcionalidades avançadas de gamificação e dados."
    }
];

// --- ICONS (Mantendo a biblioteca existente, adaptando o uso) ---
// Simulando ícones simples caso a lib não carregue, mas mantendo a estrutura solicitada
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ZapIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const ShieldIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const TargetIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);
const HeartIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);

// --- SHARED COMPONENTS ---

const InlineCheckoutForm: React.FC<{ productName: string }> = ({ productName }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (email && email.includes('@')) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md">
            <div className="relative flex items-center">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email para começar..."
                    required
                    className="w-full px-6 py-4 rounded-full bg-white dark:bg-neutral-800 border-2 border-indigo-100 dark:border-neutral-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all shadow-sm pr-36"
                    disabled={status === 'loading' || status === 'success'}
                />
                <button
                    type="submit"
                    className="absolute right-2 bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 focus:outline-none shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={status === 'loading' || status === 'success'}
                >
                    {status === 'loading' ? 'Entrando...' : status === 'success' ? 'Sucesso!' : 'Vamos lá'}
                </button>
            </div>
            {status === 'success' && (
                <p className="mt-3 text-sm text-teal-600 dark:text-teal-400 font-medium text-center animate-pulse">
                    🎉 Bem-vindo ao Esquadrão HabitFlow! Verifique seu email.
                </p>
            )}
            {status === 'error' && (
                <p className="mt-3 text-sm text-red-500 text-center">Por favor, insira um email válido.</p>
            )}
        </form>
    );
};

// --- BLOCK 1: ATENÇÃO (Hero) ---

const HeroSection: React.FC = () => (
    <section id="hero" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col gap-12 items-center text-center">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 font-semibold text-sm mb-6 border border-indigo-200 dark:border-indigo-800">
                        <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                        Nova Integração com Apple Health Disponível
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                        Construa Consistência,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
                            Desbloqueie Sua Melhor Versão.
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        Deixe a ciência e a gamificação trabalharem por você. HabitFlow ajuda você a criar hábitos sustentáveis e alcançar objetivos sem o burnout.
                    </p>
                    
                    <div className="flex flex-col items-center mt-8">
                        <InlineCheckoutForm productName="HabitFlow" />
                        <p className="mt-4 text-sm text-neutral-400 dark:text-neutral-500">
                            Plano Starter Gratuito • Sem cartão de crédito • Cancelamento fácil
                        </p>
                    </div>
                </div>
                
                <div className="w-full max-w-5xl mx-auto mt-8">
                    <div className="relative rounded-2xl shadow-2xl shadow-indigo-500/20 overflow-hidden border-4 border-white dark:border-neutral-700 bg-neutral-900 aspect-[16/9] md:aspect-[21/9]">
                         {/* Placeholder visual for App Interface/Video */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-neutral-900">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 mx-auto cursor-pointer hover:bg-white/20 transition-all hover:scale-110">
                                    <svg className="w-8 h-8 text-white pl-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                </div>
                                <p className="text-indigo-200 font-medium tracking-wide uppercase text-sm">Ver Demo de 1 Minuto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 2: INTERESSE (Problema & Solução) ---

const ProblemSolutionSection: React.FC = () => (
    <section id="problem-solution" className="py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-red-50 dark:bg-red-900/10 rounded-full blur-2xl opacity-50"></div>
                        <div className="relative bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700">
                            <h3 className="text-lg font-bold text-red-500 uppercase tracking-wider mb-2">O Ciclo da Frustração</h3>
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Por que a força de vontade falha?</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                Você começa empolgado, mas na primeira falha, a culpa toma conta. O "tudo ou nada" faz você abandonar o progresso de semanas por causa de um dia ruim.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 text-xs">❌</span>
                                    <span>Motivação é passageira e instável.</span>
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 text-xs">❌</span>
                                    <span>Quebrar a sequência (streak) gera desânimo.</span>
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 text-xs">❌</span>
                                    <span>Sentimento de isolamento na jornada.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="order-1 md:order-2">
                    <h3 className="text-lg font-bold text-teal-500 uppercase tracking-wider mb-2">A Abordagem HabitFlow</h3>
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                        Transforme Disciplina em <span className="text-indigo-600 dark:text-indigo-400">Diversão</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                        Nós hackeamos o sistema de recompensa do seu cérebro. Com o HabitFlow, construir hábitos é como subir de nível em um jogo, mas os ganhos são reais.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <ShieldIcon className="w-6 h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Streak Shield</h4>
                                <p className="mt-1 text-neutral-600 dark:text-neutral-400">Perdeu um dia? Use seu escudo. Mantenha sua sequência viva e sua moral alta. Focamos na consistência, não na perfeição.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                <UsersIcon className="w-6 h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Esquadrões de Responsabilidade</h4>
                                <p className="mt-1 text-neutral-600 dark:text-neutral-400">Não vá sozinho. Crie grupos, desafie amigos e veja quem consegue manter o fluxo por mais tempo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 3: DESEJO (Benefícios & Funcionalidades) ---

const FeaturesSection: React.FC = () => (
    <section id="features" className="py-24 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase">Ecossistema Completo</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                    Tecnologia que se adapta à sua rotina
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                        <ZapIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Jornada Gamificada</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">Ganhe XP a cada check-in, desbloqueie conquistas e veja seu avatar evoluir conforme você evolui na vida real.</p>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-400">
                    <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                        <TargetIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Widgets Interativos</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">Registre seus hábitos direto da tela inicial do seu celular. Sem fricção, sem desculpas. Apenas um toque.</p>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500">
                    <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                        <HeartIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Sync de Saúde</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">Conecte Apple Health ou Google Fit. Se você caminhou ou dormiu bem, o HabitFlow marca como feito automaticamente.</p>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 4: PROVA SOCIAL & AUTORIDADE ---

const TestimonialsSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section id="testimonials" className="py-24 overflow-hidden bg-indigo-900 text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Histórias de Transformação Real</h2>
                    <p className="mt-2 text-indigo-200">Junte-se a mais de 50.000 usuários que encontraram seu fluxo.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="w-full md:w-[350px] bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                            <div className="flex items-center mb-6">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover border-2 border-teal-400" />
                                <div className="ml-4">
                                    <p className="font-bold text-white">{testimonial.author}</p>
                                    <p className="text-xs text-indigo-300 uppercase tracking-wide">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-indigo-100 italic leading-relaxed">"{testimonial.quote}"</p>
                            <div className="mt-4 flex text-teal-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FounderStorySection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm">
                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
                    <img src="https://picsum.photos/id/1005/400/400" alt="Fundador" className="w-full h-full object-cover rounded-full border-4 border-white dark:border-neutral-700 shadow-lg" />
                    <div className="absolute bottom-2 right-2 bg-teal-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow">CEO</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">De Procrastinador a Biohacker</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 italic mb-4">
                        "Eu tentei planilhas, agendas e apps complicados. Nada funcionava por muito tempo. Percebi que o segredo não era a ferramenta, mas como ela interagia com nossa psicologia. Criei o HabitFlow para ser o 'parceiro' que te dá um empurrãozinho nos dias ruins e celebra nos dias bons."
                    </p>
                    <p className="font-bold text-indigo-600 dark:text-indigo-400">– João M., Criador do HabitFlow</p>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 5: AÇÃO (Preços & How It Works) ---

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-transform transform hover:-translate-y-1 ${product.isFeatured ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 scale-105 z-10' : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white shadow-lg'}`}>
        {product.isFeatured && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-teal-400 text-indigo-900 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Mais Popular
                </span>
            </div>
        )}
        <h3 className={`text-xl font-bold ${product.isFeatured ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>{product.name}</h3>
        <div className="mt-4 flex items-baseline text-4xl font-extrabold">
            {product.price}
        </div>
        <ul className="mt-8 space-y-4 flex-1">
            {product.features.map(feature => (
                <li key={feature} className="flex items-start">
                    <CheckCircleIcon className={`h-6 w-6 flex-shrink-0 ${product.isFeatured ? 'text-teal-300' : 'text-indigo-500'}`} />
                    <span className={`ml-3 text-sm ${product.isFeatured ? 'text-indigo-100' : 'text-neutral-600 dark:text-neutral-300'}`}>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`mt-8 w-full py-4 px-6 rounded-xl font-bold transition-colors ${product.isFeatured ? 'bg-white text-indigo-600 hover:bg-neutral-100' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600'}`}>
            {product.cta}
        </button>
    </div>
);

const InvestmentSection: React.FC = () => (
    <section id="investment" className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Invista na Sua Versão 2.0</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Comece gratuitamente. Evolua no seu ritmo.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                {PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    </section>
);

// --- BLOCK 6: FECHAMENTO (Garantia, FAQ & CTA Final) ---

const GuaranteeSection: React.FC = () => (
    <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <ShieldIcon className="h-16 w-16 mx-auto text-teal-500 mb-6" />
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Garantia de Fluxo de 7 Dias</h2>
                <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                    Teste o Flow Pro sem riscos. Se você não sentir uma melhora na sua organização e consistência na primeira semana, nós devolvemos 100% do seu dinheiro. Sem letras miúdas.
                </p>
            </div>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section id="faq" className="py-24 bg-neutral-50 dark:bg-neutral-900">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-neutral-900 dark:text-white">{item.question}</span>
                                <ChevronDownIcon className={`h-5 w-5 text-neutral-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400">
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

const FinalCTASection: React.FC = () => (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Seu futuro começa com o próximo hábito.
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                Não espere pela "motivação perfeita". Construa sistemas que funcionam. Junte-se ao HabitFlow hoje.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-teal-400 hover:bg-teal-300 text-indigo-900 font-bold py-4 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                    Criar Conta Grátis
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-colors">
                    Ver Planos para Empresas
                </button>
            </div>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT ---

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 selection:bg-teal-300 selection:text-teal-900">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FounderStorySection />
      <InvestmentSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default LandingPage;

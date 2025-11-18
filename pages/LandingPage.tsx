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
                    className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Comprar Agora'}
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

// --- BLOCK 1: CAPTURA E PROPOSTA DE VALOR ---

const HeroSection: React.FC = () => (
    <section id="hero" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        A Solução <span className="text-primary dark:text-primary-light">Definitiva</span> para o Seu Negócio
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Aumente sua produtividade, otimize processos e alcance resultados incríveis com nossa plataforma inovadora.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <InlineCheckoutForm productName="Produto Principal" />
                    </div>
                    <p className="mt-3 text-xs text-neutral-500">Teste por 7 dias grátis. Cancele quando quiser.</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-3xl aspect-video rounded-lg shadow-2xl overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&playlist=LXb3EKWsInQ&controls=0&showinfo=0&rel=0"
                            title="Vídeo de demonstração do produto"
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

// --- BLOCK 2: PROBLEMATIZAÇÃO E SOLUÇÃO ---

const ProblemSolutionSection: React.FC = () => (
    <section id="problem-solution" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white dark:bg-neutral-800/50 p-8 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <h2 className="text-3xl font-bold tracking-tight text-red-600 dark:text-red-400">O Problema: Caos e Produtividade Perdida</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Tarefas se acumulam, prazos são perdidos e a comunicação da equipe é fragmentada. Você sente que está sempre "apagando incêndios" em vez de focar no que realmente importa para crescer?
                    </p>
                    <ul className="mt-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">❌</span><span>Falta de clareza sobre as prioridades.</span></li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">❌</span><span>Comunicação descentralizada em emails e chats.</span></li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">❌</span><span>Dificuldade em acompanhar o progresso dos projetos.</span></li>
                    </ul>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-lg border border-primary/20">
                    <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-light">A Solução: Clareza e Controle Total</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                        Nossa plataforma centraliza suas tarefas, projetos e comunicação, transformando o caos em um fluxo de trabalho organizado e eficiente. Tenha uma visão clara do que precisa ser feito e quem está fazendo.
                    </p>
                     <ul className="mt-6 space-y-2 text-neutral-600 dark:text-neutral-300">
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✅</span><span>Priorize tarefas com facilidade.</span></li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✅</span><span>Centralize a comunicação do seu time.</span></li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✅</span><span>Acompanhe o progresso em tempo real.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 3: QUALIFICAÇÃO E BENEFÍCIOS ---

const TargetAudienceSection: React.FC = () => (
    <section id="target-audience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Feito para Times que Buscam a Excelência</h2>
                <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Se você se encaixa em um destes perfis, esta solução foi desenhada para você.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                    <UsersIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Gerentes de Projeto</h3>
                    <p className="text-sm text-neutral-500 mt-1">Centralize projetos, delegue tarefas e monitore o progresso sem esforço.</p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                    <ZapIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Startups e PMEs</h3>
                    <p className="text-sm text-neutral-500 mt-1">Organize suas operações, alinhe sua equipe e acelere o crescimento.</p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                    <TargetIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Agências de Marketing</h3>
                    <p className="text-sm text-neutral-500 mt-1">Gerencie múltiplos clientes e campanhas em um só lugar, com total visibilidade.</p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                     <HeartIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Freelancers e Autônomos</h3>
                    <p className="text-sm text-neutral-500 mt-1">Organize seus projetos, controle seus prazos e impressione seus clientes.</p>
                </div>
            </div>
        </div>
    </section>
);

const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            icon: <ZapIcon className="h-8 w-8 text-primary" />,
            title: 'Performance Rápida',
            description: 'Nossa infraestrutura otimizada garante velocidade e responsividade incomparáveis.'
        },
        {
            icon: <ShieldIcon className="h-8 w-8 text-primary" />,
            title: 'Segurança de Ponta',
            description: 'Seus dados estão protegidos com as mais modernas tecnologias de segurança.'
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
            title: 'Fácil de Usar',
            description: 'Interface intuitiva e amigável que não requer curva de aprendizado.'
        }
    ];
    return (
        <section id="benefits" className="py-20 bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                     {benefits.map(benefit => (
                         <div key={benefit.title} className="flex items-start">
                             <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">{benefit.icon}</div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                 <p className="mt-1 text-neutral-600 dark:text-neutral-400">{benefit.description}</p>
                             </div>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

// --- BLOCK 4: PROVA SOCIAL E AUTORIDADE ---

const TestimonialsSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section id="testimonials" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">O que nossos clientes dizem</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Confiança construída com resultados.</p>
                </div>
                <div ref={scrollContainer} className="mt-12 flex space-x-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <p className="text-neutral-600 dark:text-neutral-300 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-4">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AuthoritySection: React.FC = () => (
    <section id="authority" className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-lg font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">Confiado por grandes empresas</h3>
            <div className="mt-8 flex justify-center items-center gap-x-8 sm:gap-x-12 flex-wrap">
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">EMPRESA A</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">LOGO B</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">MARCA C</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">CLIENTE D</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">PARCEIRO E</div>
            </div>
        </div>
    </section>
);

const FounderStorySection: React.FC = () => (
    <section id="founder-story" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
                <div className="md:col-span-1">
                     <img src="https://picsum.photos/id/1005/400/400" alt="Fundador da Empresa" className="rounded-full shadow-lg aspect-square object-cover mx-auto" />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold tracking-tight">Uma Solução Nascida de uma Necessidade Real</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                        "Eu era gerente de projetos e sentia na pele a frustração de usar múltiplas ferramentas que não se conversavam. Perdia horas tentando organizar o que era prioridade. Criei o ProdutoX para ser a plataforma que eu sempre quis ter: simples, integrada e focada em resultados."
                    </p>
                    <p className="mt-4 font-semibold text-neutral-800 dark:text-neutral-100">João da Silva, Fundador e CEO</p>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 5: A OFERTA DETALHADA ---

const HowItWorksSection: React.FC = () => {
    const steps = [
        { number: '01', title: 'Cadastro Rápido', description: 'Crie sua conta em menos de 60 segundos, sem complicações ou burocracia.' },
        { number: '02', title: 'Configure sua Plataforma', description: 'Personalize a ferramenta de acordo com as necessidades específicas do seu negócio.' },
        { number: '03', title: 'Comece a Crescer', description: 'Utilize nossos recursos para otimizar seu trabalho e ver resultados imediatos.' }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Como Funciona</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Três passos simples para o sucesso.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {steps.map(step => (
                        <div key={step.number} className="text-center p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-md">
                           <div className="text-5xl font-extrabold text-primary dark:text-primary-light mb-4">{step.number}</div>
                           <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                           <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={`border rounded-lg p-6 flex flex-col ${product.isFeatured ? 'border-primary dark:border-primary-light ring-2 ring-primary dark:ring-primary-light' : 'border-neutral-300 dark:border-neutral-700'}`}>
        {product.isFeatured && <div className="text-center mb-4"><span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">MAIS POPULAR</span></div>}
        <h3 className="text-2xl font-bold text-center">{product.name}</h3>
        <p className="text-4xl font-extrabold text-center my-4">{product.price}</p>
        <ul className="space-y-2 mb-6 text-neutral-600 dark:text-neutral-400">
            {product.features.map(feature => (
                <li key={feature} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`mt-auto w-full font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 ${product.isFeatured ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600'}`}>
            Comprar Agora
        </button>
    </div>
);

const InvestmentSection: React.FC = () => (
    <section id="investment" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight">Um Investimento Inteligente no Seu Crescimento</h2>
                <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Escolha o plano perfeito para você. Sem taxas escondidas.</p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    </section>
);


// --- BLOCK 6: FECHAMENTO E REVERSÃO DE RISCO ---

const GuaranteeSection: React.FC = () => (
     <section id="guarantee" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 border-2 border-dashed border-primary dark:border-primary-light rounded-lg p-8 text-center">
                <ShieldIcon className="h-16 w-16 mx-auto text-primary mb-4" />
                <h2 className="text-3xl font-bold tracking-tight">Sua Satisfação ou Seu Dinheiro de Volta</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Temos tanta confiança na nossa plataforma que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar 100% satisfeito, basta nos avisar e nós reembolsaremos seu investimento integralmente. Sem perguntas, sem burocracia. O risco é todo nosso.
                </p>
            </div>
        </div>
    </section>
);

const CTASection: React.FC = () => (
    <section id="cta" className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Pronto para Transformar Seu Negócio?</h2>
            <p className="mt-2 text-lg text-cyan-100 max-w-2xl mx-auto">Junte-se a milhares de empresas que já estão crescendo com a nossa plataforma. Comece seu teste gratuito hoje mesmo.</p>
            <a href="#hero" className="mt-8 inline-block bg-white text-primary font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105 shadow-lg">
                Começar Agora
            </a>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Ainda tem Dúvidas?</h2>
                     <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Respostas para as perguntas mais comuns.</p>
                </div>
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div key={index} className="bg-neutral-100 dark:bg-neutral-800/50 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-md font-medium text-neutral-800 dark:text-neutral-100">{item.question}</span>
                                <ChevronDownIcon
                                    className={`h-5 w-5 text-neutral-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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

// --- FINAL PAGE COMPONENT ---

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Bloco 1: Captura e Proposta de Valor */}
      <HeroSection />
      
      {/* Bloco 2: Problematização e Solução */}
      <ProblemSolutionSection />
      
      {/* Bloco 3: Qualificação e Benefícios */}
      <TargetAudienceSection />
      <BenefitsSection />
      
      {/* Bloco 4: Prova Social e Autoridade */}
      <TestimonialsSection />
      <AuthoritySection />
      <FounderStorySection />
      
      {/* Bloco 5: A Oferta Detalhada */}
      <HowItWorksSection />
      <InvestmentSection />
      
      {/* Bloco 6: Fechamento e Reversão de Risco */}
      <GuaranteeSection />
      <CTASection />
      <FAQSection />
    </>
  );
};

export default LandingPage;
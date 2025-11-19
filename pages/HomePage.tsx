import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// InlineCheckoutForm Component (Adaptado para Lead/Sign-up HabitFlow)
interface InlineCheckoutFormProps {
    ctaLabel?: string;
}
const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ ctaLabel = "Começar Jornada Grátis" }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Bem-vindo ao Esquadrão! Verifique seu email para acessar o HabitFlow.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email válido para iniciar.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="flex-grow px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-500 focus:outline-none transition-all shadow-sm text-slate-900 dark:text-white placeholder-slate-400"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Carregando...' : ctaLabel}
                </button>
            </div>
            {message && (
                <p className={`mt-4 text-center font-medium p-3 rounded-xl ${status === 'success' ? 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300' : 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="relative py-24 md:py-36 overflow-hidden bg-slate-50 dark:bg-slate-900">
        {/* Background Decorativo (Blur Gradients) */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -translate-x-1/2"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col gap-8 items-center text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/50 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-bold mb-4 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2"></span>
                    Ciência Comportamental + Gamificação
                </div>
                
                <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Construa consistência, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500">
                        desbloqueie sua melhor versão.
                    </span>
                </h1>
                
                <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Transforme tarefas em conquistas. O <strong>HabitFlow</strong> utiliza psicologia e mecânicas de jogos para tornar sua rotina viciante de forma saudável.
                </p>
                
                <div className="w-full">
                    <InlineCheckoutForm />
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        Plano <strong>Flow Starter</strong> Gratuito • Cancele quando quiser
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <ZapIcon className="h-8 w-8 text-white" />,
            title: 'Jornada de Nível',
            description: 'Ganhe XP a cada hábito concluído. Suba de nível e desbloqueie recompensas exclusivas no app.',
            color: 'bg-amber-500' // Laranja/Dourado para energia/gamificação
        },
        {
            icon: <ShieldIcon className="h-8 w-8 text-white" />,
            title: 'Streak Shield',
            description: 'Imprevistos acontecem. Use seu escudo para proteger sua sequência e manter o progresso.',
            color: 'bg-indigo-600' // Azul/Roxo para proteção/tecnologia
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-white" />,
            title: 'Esquadrões & Integração',
            description: 'Conecte-se com amigos e sincronize com Apple Health e Google Fit para uma visão completa.',
            color: 'bg-teal-500' // Verde Menta para saúde/colaboração
        }
    ];

    return (
        <section id="features" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Como Funciona</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Produtividade divertida e sustentável
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                     {features.map((feature, idx) => (
                         <div key={idx} className="group relative p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10">
                             <div className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                             <div className={`inline-flex items-center justify-center p-4 rounded-2xl shadow-lg ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                 {feature.icon}
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                             <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section id="testimonials" className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">A Comunidade HabitFlow</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Junte-se a milhares de "Flow Seekers" construindo novos estilos de vida.</p>
                </div>
                
                <div ref={scrollContainer} className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <div className="relative">
                                    <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-800" />
                                    <div className="absolute -bottom-1 -right-1 bg-teal-400 h-4 w-4 rounded-full border-2 border-white dark:border-slate-800"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
                                    <p className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection: React.FC = () => (
    <section id="cta" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Pronto para subir de nível?</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                Escolha entre o plano <strong>Starter</strong> (Gratuito), <strong>Pro</strong> ou <strong>Teams</strong>. 
                Sua jornada de consistência começa agora.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/signup" className="w-full sm:w-auto bg-teal-400 hover:bg-teal-300 text-indigo-900 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-teal-900/20">
                    Criar Conta Grátis
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto bg-transparent border-2 border-indigo-200 hover:bg-indigo-800/30 text-white font-semibold py-4 px-10 rounded-xl transition-colors">
                    Ver Planos Pro & Teams
                </Link>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 opacity-70">
                 {/* Ícones de "Confiança" ou Apps Store - placeholders visuais */}
                 <span className="text-indigo-200 text-sm font-medium tracking-widest">DISPONÍVEL EM iOS & ANDROID</span>
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 selection:bg-teal-300 selection:text-teal-900">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// InlineSignupForm Component (Adapted for Freemium Model)
interface InlineSignupFormProps {
    planName: string;
}
const InlineSignupForm: React.FC<InlineSignupFormProps> = ({ planName }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Simulate API call for signup
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Bem-vindo ao Esquadrão! Enviamos o link de acesso ao ${planName} para seu email.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email válido para iniciar sua jornada.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="flex-grow px-5 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all shadow-sm text-slate-900 dark:text-white"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Iniciando...' : 'Começar Grátis'}
                </button>
            </div>
            {message && (
                <p className={`mt-4 text-sm font-medium ${status === 'success' ? 'text-teal-600 dark:text-teal-400' : 'text-rose-500 dark:text-rose-400'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="py-24 md:py-36 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        {/* Decorative background elements reflecting the 'Mint/Lilac' palette */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-300 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-200 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col gap-10 items-center">
                <div className="text-center max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 text-xs font-bold tracking-wide mb-6 uppercase">
                        Disponível para iOS, Android & Web
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                        Construa consistência, <br className="hidden md:block" />
                        desbloqueie sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">melhor versão</span>.
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        A ciência comportamental encontra a gamificação. Desenvolva hábitos sustentáveis e alcance seus objetivos sem pressão ou culpa.
                    </p>
                    
                    <InlineSignupForm planName="Flow Starter" />
                    
                    <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
                        Plano <strong>Flow Starter</strong> é gratuito para sempre. Sem necessidade de cartão de crédito.
                    </p>
                </div>
            </div>
        </div>
    </section>
);


const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <ShieldIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
            title: 'Streak Shield',
            description: 'A vida acontece. Nosso escudo protege sua sequência se você perder um dia, eliminando a culpa e mantendo a motivação.'
        },
        {
            icon: <ZapIcon className="h-8 w-8 text-amber-500 dark:text-amber-400" />,
            title: 'Jornada Gamificada',
            description: 'Ganhe XP a cada check-in, suba de nível e desbloqueie temas visuais exclusivos. Torne seu progresso viciante.'
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-teal-500 dark:text-teal-400" />,
            title: 'Esquadrões & Saúde',
            description: 'Crie grupos de responsabilidade com amigos e integre seus dados automaticamente com Apple Health e Google Fit.'
        }
    ];
    return (
        <section id="features" className="py-24 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Ciência + Diversão = <span className="text-indigo-600">Hábito</span></h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Abandonamos a produtividade tóxica. O HabitFlow foi desenhado para celebrar o progresso, não a perfeição.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                     {features.map(feature => (
                         <div key={feature.title} className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                             <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                 {feature.icon}
                             </div>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                             <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                 {feature.description}
                             </p>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

const CommunitySection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section id="community" className="py-24 overflow-hidden bg-indigo-50/50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Histórias de quem desbloqueou sua melhor versão</h2>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Junte-se a milhares de 'Flowres' que transformaram sua rotina.</p>
                </div>
                <div ref={scrollContainer} className="mt-8 flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-6 border-t border-slate-100 dark:border-slate-700 pt-4">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-100" />
                                <div className="ml-4">
                                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
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
    <section id="cta" className="py-24 bg-gradient-to-br from-indigo-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-6">Pronto para dominar sua rotina?</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                Comece hoje com o plano Flow Starter. Sem custos, sem pegadinhas, apenas progresso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-indigo-700 font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Criar Conta Grátis
                </button>
                <Link to="/features" className="bg-indigo-700 text-white border border-indigo-500 font-bold py-4 px-10 rounded-full transition-colors hover:bg-indigo-600">
                    Ver Todas Funcionalidades
                </Link>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 dark:bg-slate-900 selection:bg-teal-200 selection:text-teal-900">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <CTASection />
    </div>
  );
};

export default HomePage;

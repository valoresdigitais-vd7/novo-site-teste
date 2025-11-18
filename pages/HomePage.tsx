import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

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
            setMessage(`Tudo certo! Você está a um passo de começar sua jornada no ${productName}.`);
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
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Comece Grátis'}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

const HeroSection: React.FC = () => (
    <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        Construa consistência, desbloqueie sua <span className="text-blue-500">melhor versão</span>.
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        O HabitFlow usa ciência comportamental e gamificação para ajudar você a criar hábitos sustentáveis — sem pressão, culpa ou burnout.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <InlineCheckoutForm productName="HabitFlow" />
                    </div>
                    <p className="mt-3 text-xs text-neutral-500">Flow Starter Gratuito. Sem cartão. Comece hoje.</p>
                </div>
            </div>
        </div>
    </section>
);

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <ShieldIcon className="h-8 w-8 text-blue-500" />,
            title: 'Streak Shield',
            description: 'Proteja sua sequência mesmo nos dias caóticos. Construir consistência é mais importante que a perfeição.',
        },
        {
            icon: <ZapIcon className="h-8 w-8 text-purple-500" />,
            title: 'Jornada de Nível',
            description: 'Ganhe XP, suba de nível e conquiste emblemas conforme evolui seus hábitos.',
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-green-400" />,
            title: 'Esquadrões',
            description: 'Crie ou entre em grupos de responsabilidade com amigos e pessoas com objetivos semelhantes.',
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-blue-400" />,
            title: 'Integração Saúde',
            description: 'Sincronize com Apple Health e Google Fit para automatizar hábitos de saúde e atividade física.',
        },
    ];

    return (
        <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Funcionalidades que impulsionam seu progresso</h2>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">Tecnologia, ciência e um toque de aventura para manter você avançando.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map(f => (
                        <div key={f.title} className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700">
                            <div className="bg-neutral-100 dark:bg-neutral-700 p-4 rounded-full inline-flex">{f.icon}</div>
                            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{f.description}</p>
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
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Histórias reais de evolução</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Uma comunidade que cresce junto.</p>
                </div>
                <div ref={scrollContainer} className="mt-12 flex space-x-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {TESTIMONIALS.map((t, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <p className="text-neutral-600 dark:text-neutral-300 italic">"{t.quote}"</p>
                            <div className="flex items-center mt-4">
                                <img src={t.avatarUrl} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-semibold">{t.author}</p>
                                    <p className="text-sm text-neutral-500">{t.role}</p>
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
    <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Pronto para começar sua jornada?</h2>
            <p className="mt-2 text-lg text-blue-100 max-w-2xl mx-auto">Junte-se ao seu Esquadrão e construa hábitos consistentes com leveza.</p>
            <Link to="/landing" className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105 shadow-lg">
                Começar Grátis
            </Link>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
};

export default HomePage;

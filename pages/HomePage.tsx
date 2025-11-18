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
                    {status === 'loading' ? 'Enviando...' : 'Começar Agora'}
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
    <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        Transforme Sua Produtividade com a <span className="text-primary dark:text-primary-light">Ferramenta Certa</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Organize tarefas, colabore com sua equipe e alcance seus objetivos mais rápido. Tudo em um só lugar.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <InlineCheckoutForm productName="Produto Principal" />
                    </div>
                    <p className="mt-3 text-xs text-neutral-500">Teste por 7 dias grátis. Cancele quando quiser.</p>
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

const CTASection: React.FC = () => (
    <section id="cta" className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Quer Conhecer Todos os Detalhes?</h2>
            <p className="mt-2 text-lg text-cyan-100 max-w-2xl mx-auto">Explore nossa página completa e descubra como podemos revolucionar seu fluxo de trabalho.</p>
            <Link to="/landing" className="mt-8 inline-block bg-white text-primary font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105 shadow-lg">
                Ver a Solução Completa
            </Link>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;

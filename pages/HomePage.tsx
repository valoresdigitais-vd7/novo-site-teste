import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Paleta HabitFlow: azul (#3B82F6), lilás (#A78BFA), menta (#34D399)
// Tipografia sugerida: Inter ou Poppins
// A estrutura usa classes Tailwind (compatível com seu projeto atual)

// --------------------------
// Formulário Inline
// --------------------------
const InlineCheckoutForm = ({ productName }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    await new Promise(r => setTimeout(r, 1200));

    if (email.includes('@')) {
      setStatus('success');
      setMessage(`Obrigado! Em breve enviaremos seu acesso ao ${productName}.`);
    } else {
      setStatus('error');
      setMessage('Digite um email válido.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-transform hover:scale-105"
        >
          {status === 'loading' ? 'Enviando...' : 'Quero Começar Agora'}
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

// --------------------------
// 1. HERO SECTION
// --------------------------
const HeroSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900">
        Construa Hábitos que Duram e Transforme Sua Vida com o HabitFlow
      </h1>

      <p className="mt-4 text-xl text-neutral-600">
        O app que une gamificação + ciência comportamental para te manter consistente todos os dias.
      </p>

      <div className="max-w-lg mx-auto">
        <InlineCheckoutForm productName="HabitFlow PRO" />
      </div>

      <img
        src="/mockup-habitflow.png"
        alt="Mockup HabitFlow"
        className="mt-12 mx-auto w-full max-w-md drop-shadow-xl"
      />
    </div>
  </section>
);

// --------------------------
// 2. O PROBLEMA
// --------------------------
const ProblemSection = () => (
  <section className="py-20 bg-neutral-100">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl font-bold">Você sabe o que precisa fazer. O difícil é manter a consistência.</h2>

      <p className="mt-4 text-neutral-600">
        A maioria das pessoas não falha por falta de vontade, mas por falta de sistema.
      </p>

      <ul className="mt-8 text-left mx-auto max-w-md space-y-3 text-neutral-700">
        <li>• Dificuldade em manter hábitos por mais de 1 semana</li>
        <li>• Falta de motivação ou clareza no dia a dia</li>
        <li>• Tentativa e erro sem progresso real</li>
        <li>• Apps complexos que não ajudam na prática</li>
      </ul>

      <img
        src="/img-problema.png"
        alt="Pessoa frustrada"
        className="mt-10 mx-auto max-w-sm opacity-90"
      />
    </div>
  </section>
);

// --------------------------
// 3. A SOLUÇÃO
// --------------------------
const SolutionSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <h2 className="text-3xl font-bold text-neutral-900">HabitFlow: Seu Sistema de Construção de Hábitos</h2>

      <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
        A combinação ideal de gamificação, neurociência e micro-hábitos para finalmente tirar seus objetivos do papel.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
        <div className="p-6 rounded-lg bg-blue-50">
          <h3 className="font-bold text-blue-700">Gamificação</h3>
          <p className="mt-2 text-neutral-600">Pontuação, streaks e recompensas que mantêm você motivado.</p>
        </div>

        <div className="p-6 rounded-lg bg-purple-50">
          <h3 className="font-bold text-purple-700">Ciência Comportamental</h3>
          <p className="mt-2 text-neutral-600">Hábitos projetados com base em modelos validados.</p>
        </div>

        <div className="p-6 rounded-lg bg-emerald-50">
          <h3 className="font-bold text-emerald-700">Consistência Sem Força de Vontade</h3>
          <p className="mt-2 text-neutral-600">Aplique micropassos simples e sustentáveis.</p>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------
// 4. O QUE VOCÊ RECEBE
// --------------------------
const ReceiveSection = () => (
  <section className="py-20 bg-neutral-100">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl font-bold">O que você vai receber</h2>

      <ul className="mt-10 space-y-4 text-left mx-auto max-w-lg text-neutral-700">
        <li>• App HabitFlow completo (web + mobile)</li>
        <li>• Biblioteca de hábitos prontos para uso</li>
        <li>• Trilha guiada para construir seu Sistema Pessoal</li>
        <li>• Templates de rotinas matinais/nocturnas</li>
        <li>• Comunidade exclusiva</li>
        <li>• Garantia incondicional de 7 dias</li>
      </ul>
    </div>
  </section>
);

// --------------------------
// 5. PROVA SOCIAL
// --------------------------
const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Laura', quote: 'Finalmente consegui manter um hábito por mais de 30 dias!' },
    { name: 'Carlos', quote: 'O HabitFlow mudou minha disciplina de forma leve e divertida.' },
    { name: 'Amanda', quote: 'Nunca imaginei que gamificação fosse funcionar tanto comigo.' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl font-bold">Resultados Reais de Pessoas Reais</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-neutral-700">"{t.quote}"</p>
              <p className="mt-4 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --------------------------
// 6. ANTES VS DEPOIS
// --------------------------
const BeforeAfterSection = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="text-3xl font-bold text-center">A transformação</h2>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-red-500 mb-4">Antes</h3>
          <ul className="space-y-2 text-neutral-700">
            <li>• Falta de clareza</li>
            <li>• Ansiedade e procrastinação</li>
            <li>• Começa e para toda hora</li>
            <li>• Falta de motivação</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-emerald-600 mb-4">Depois</h3>
          <ul className="space-y-2 text-neutral-700">
            <li>• Clareza total sobre seus hábitos</li>
            <li>• Avanço contínuo (streaks e recompensas)</li>
            <li>• Rotinas sólidas</li>
            <li>• Autonomia e constância</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------
// 7. COMO FUNCIONA
// --------------------------
const StepsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl font-bold">Como funciona na prática</h2>

      <ol className="mt-10 space-y-6 text-left mx-auto max-w-md text-neutral-700">
        <li>1. Clique no botão e faça sua inscrição</li>
        <li>2. Acesse o app HabitFlow</li>
        <li>3. Escolha seus hábitos ou use os prontos</li>
        <li>4. Siga os micropassos diários</li>
        <li>5. Acompanhe sua evolução com gamificação</li>
      </ol>
    </div>
  </section>
);

// --------------------------
// 8. QUEM INDICA
// --------------------------
const AuthorSection = () => (
  <section className="py-20 bg-neutral-100">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl font-bold">Quem Recomenda</h2>

      <img
        src="/autor.png"
        alt="Autor"
        className="mx-auto w-32 h-32 rounded-full mt-8 object-cover"
      />

      <p className="mt-6 text-neutral-700 max-w-2xl mx-auto">
        Sou especialista em produtividade há 7 anos e desenvolvi o HabitFlow
        após perceber que disciplina não depende de força de vontade,
        mas sim de comportamento, recompensas e consistência.
      </p>
    </div>
  </section>
);

// --------------------------
// 9. FAQ
// --------------------------
const FAQSection = () => {
  const faq = [
    { q: 'Preciso ter experiência?', a: 'Não, o HabitFlow funciona para iniciantes.' },
    { q: 'Preciso aparecer em vídeos?', a: 'Não, tudo é 100% privado.' },
    { q: 'Quanto tempo leva por dia?', a: 'De 5 a 10 minutos.' },
    { q: 'Tem garantia?', a: 'Sim, garantia incondicional de 7 dias.' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center">Perguntas Frequentes</h2>

        <div className="mt-10 space-y-6">
          {faq.map((f, i) => (
            <div key={i} className="p-4 bg-neutral-100 rounded-lg">
              <p className="font-bold">{f.q}</p>
              <p className="text-neutral-700 mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --------------------------
// 10. CTA FINAL
// --------------------------
const FinalCTASection = () => (
  <section className="py-24 bg-blue-600 text-center text-white">
    <h2 className="text-3xl font-extrabold">Pronto para transformar sua vida?</h2>
    <p className="mt-4 text-lg">A oferta pode sair do ar a qualquer momento.</p>

    <Link
      to="/checkout"
      className="mt-8 inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-md transition-transform hover:scale-105"
    >
      QUERO COMEÇAR AGORA
    </Link>
  </section>
);

// --------------------------
// HOME PAGE (FINAL)
// --------------------------
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ReceiveSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <StepsSection />
      <AuthorSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;

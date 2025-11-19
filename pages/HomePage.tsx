/* HabitFlowLanding.tsx */
import React, { useEffect, useState, useRef } from 'react';
import styles from './HabitFlowLanding.module.css';

// Componentes de Ícones minimalistas (SVG inline para evitar dependências externas)
const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const HabitFlowLanding: React.FC = () => {
  const [xpProgress, setXpProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  // Microinteração: Animação da barra de progresso ao carregar
  useEffect(() => {
    const timer = setTimeout(() => {
      setXpProgress(75); // Simula 75% de progresso
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.landingWrapper}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navRow}>
            <div className={styles.logo} aria-label="HabitFlow">
              HabitFlow
            </div>
            <nav className={styles.navLinks}>
              <a href="#features">Funcionalidades</a>
              <a href="#community">Comunidade</a>
              <a href="#pricing">Planos</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>
              Construa consistência,<br />
              <span className={styles.textGradient}>desbloqueie sua melhor versão.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              App de gestão de hábitos gamificado que usa ciência comportamental para transformar sua rotina em uma jornada divertida e prática.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#signup" className={styles.btnPrimary}>Comece Grátis</a>
            </div>
          </div>
        </section>

        {/* FEATURE GRID */}
        <section id="features" className={styles.features}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><ShieldIcon /></div>
                <h3>Streak Shield</h3>
                <p>Imprevistos acontecem. Congele sua sequência por até 3 dias e não perca o progresso.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><StarIcon /></div>
                <h3>Jornada de Nível</h3>
                <p>Ganhe XP, suba de nível e desbloqueie recompensas visuais a cada hábito completado.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><PhoneIcon /></div>
                <h3>Widget Interativo</h3>
                <p>Marque seus hábitos feitos diretamente da tela inicial do seu celular.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><UsersIcon /></div>
                <h3>Esquadrões</h3>
                <p>Grupos de responsabilidade de até 5 pessoas para manter a motivação em alta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GAMIFICATION / XP SECTION */}
        <section className={styles.gamification}>
          <div className={styles.container}>
            <div className={styles.xpContainer}>
              <div className={styles.xpHeader}>
                <span className={styles.levelBadge}>Nível 5</span>
                <span className={styles.xpStats}>XP: {xpProgress * 40} / 4000</span>
              </div>
              <div 
                className={styles.progressBarTrack} 
                role="progressbar" 
                aria-valuenow={xpProgress} 
                aria-valuemin={0} 
                aria-valuemax={100}
                aria-label="Progresso para o próximo nível"
              >
                <div 
                  className={styles.progressBarFill} 
                  style={{ width: `${xpProgress}%` }}
                  ref={progressRef}
                />
              </div>
              <p className={styles.xpMicrocopy}>
                Você está a apenas 3 hábitos de desbloquear a badge "Mestre da Manhã"!
              </p>
            </div>
          </div>
        </section>

        {/* STREAK SHIELD DEEP DIVE */}
        <section className={styles.streakShieldSection}>
          <div className={styles.container}>
            <div className={styles.shieldContent}>
              <div className={styles.shieldIconLarge}>🛡️</div>
              <h2>Proteja Sua Sequência</h2>
              <p>
                A vida não é linear. Use suas moedas virtuais para ativar o <strong>Streak Shield</strong> e 
                mantenha sua motivação mesmo nos dias difíceis.
              </p>
              <a href="#squad" className={styles.btnSecondary}>Junte-se ao Seu Esquadrão</a>
            </div>
          </div>
        </section>

        {/* SQUADS / COMMUNITY */}
        <section id="community" className={styles.squads}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comunidade HabitFlow</h2>
            <p className={styles.sectionSubtitle}>Você é a média das 5 pessoas com quem mais convive.</p>
            
            <div className={styles.squadGrid}>
              <div className={styles.squadCard}>
                <div className={styles.squadHeader}>Esquadrão Alpha</div>
                <p>Focado em alta performance e leitura.</p>
                <button className={styles.btnOutline}>Entrar</button>
              </div>
              <div className={styles.squadCard}>
                <div className={styles.squadHeader}>Morning Club</div>
                <p>Acordar cedo e exercícios físicos.</p>
                <button className={styles.btnOutline}>Entrar</button>
              </div>
              <div className={styles.squadCard}>
                <div className={styles.squadHeader}>Zen Masters</div>
                <p>Meditação e hábitos de mindfulness.</p>
                <button className={styles.btnOutline}>Entrar</button>
              </div>
            </div>
          </div>
        </section>

        {/* HEALTH INTEGRATION */}
        <section className={styles.integrations}>
          <div className={styles.container}>
            <div className={styles.integrationBox}>
              <div className={styles.iconRow}>
                <ActivityIcon />
              </div>
              <h3>Sincronização Automática</h3>
              <p>
                Integração perfeita com <strong>Apple Health</strong> e <strong>Google Fit</strong>. 
                Seus passos e horas de sono contam XP automaticamente.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className={styles.pricing}>
          <div className={styles.container}>
            <div className={styles.pricingCard}>
              <span className={styles.badge}>Recomendado</span>
              <h2>Flow Starter</h2>
              <p className={styles.price}>Gratuito</p>
              <ul className={styles.benefitsList}>
                <li>✅ Rastreamento ilimitado de hábitos</li>
                <li>✅ Acesso ao Streak Shield básico</li>
                <li>✅ 1 Esquadrão de responsabilidade</li>
              </ul>
              <a href="#signup" className={styles.btnPrimary}>Comece Grátis</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p>&copy; {new Date().getFullYear()} HabitFlow. Construa consistência.</p>
            <div className={styles.footerLinks}>
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <p className={styles.disclaimer}>
            *Os resultados podem variar de acordo com o comprometimento individual.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HabitFlowLanding;

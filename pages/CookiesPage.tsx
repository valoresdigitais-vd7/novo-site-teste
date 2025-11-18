import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são cookies?</h2>
                <p>Cookies são pequenos arquivos de texto enviados por um site e armazenados no navegador do usuário. Eles ajudam o site a reconhecer o dispositivo e a ajustar a navegação, a experiência e o conteúdo de acordo com suas preferências.</p>
                
                <h2>2. Como usamos os cookies?</h2>
                <p>No HabitFlow, utilizamos cookies para oferecer uma experiência de uso personalizada e otimizada. Nosso objetivo é tornar sua jornada de criação de hábitos fluida e segura, coletando apenas informações necessárias para análise de desempenho e melhorias contínuas.</p>

                <h2>3. Tipos de cookies que utilizamos</h2>
                <ul>
                    <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site e do aplicativo web. Permitem login, navegação segura e uso adequado das funcionalidades.</li>
                    <li><strong>Cookies de desempenho:</strong> Coletam informações sobre o uso do site, como páginas visitadas e possíveis erros, ajudando-nos a entender como melhorar a experiência do usuário.</li>
                    <li><strong>Cookies de funcionalidade:</strong> Armazenam suas preferências (como idioma e modo escuro) para personalizar sua navegação.</li>
                    <li><strong>Cookies de marketing:</strong> Ajudam a exibir anúncios relevantes em nossas campanhas e medir a eficácia da comunicação da marca.</li>
                </ul>

                <h2>4. Gerenciamento de cookies</h2>
                <p>Você pode ajustar as configurações de cookies diretamente no seu navegador, escolhendo recusar ou remover alguns tipos de cookies. No entanto, a desativação de alguns pode impactar o funcionamento adequado de certas seções do HabitFlow.</p>

                <h2>5. Cookies de terceiros</h2>
                <p>Usamos ferramentas de terceiros (como Google Analytics e Meta Pixel) para análises estatísticas e campanhas de marketing. Esses serviços podem usar cookies próprios para coletar informações anônimas de navegação.</p>

                <h2>6. Consentimento</h2>
                <p>Ao acessar nosso site habitflow.valoresdigitais.com, você concorda com o uso de cookies conforme esta Política. Caso não deseje consentir, utilize as opções fornecidas para ajustar suas preferências de privacidade.</p>

                <h2>7. Atualizações desta política</h2>
                <p>Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças legais, técnicas ou operacionais. Recomendamos que você a revise regularmente.</p>

                <h2>8. Contato</h2>
                <p>Se tiver dúvidas sobre esta Política de Cookies ou sobre o uso de seus dados, entre em contato pelo nosso formulário na página de <Link to="/contato" className="text-primary hover:underline">Contato</Link>.</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;

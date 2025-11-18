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
                <p>Cookies são pequenos arquivos de texto que são armazenados em seu computador ou dispositivo móvel quando você visita um site...</p>
                
                <h2>2. Como usamos os cookies?</h2>
                <p>Usamos cookies para entender como você usa nosso site e para melhorar sua experiência. Isso inclui a personalização de conteúdo e publicidade...</p>

                <h2>3. Tipos de Cookies que Usamos</h2>
                <ul>
                    <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes usam o site.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Lembram as escolhas que você faz.</li>
                </ul>
                
                <p>... (Conteúdo completo da política de cookies aqui)</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
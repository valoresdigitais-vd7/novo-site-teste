
import React from 'react';

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


const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Serviço" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e usar nosso serviço, você aceita e concorda em ficar vinculado pelos termos e disposições deste acordo...</p>
            
            <h2>2. Modificação dos Termos</h2>
            <p>Reservamo-nos o direito de alterar estes termos de tempos em tempos, a nosso exclusivo critério...</p>

            <h2>3. Contas de Usuário</h2>
            <p>Para acessar algumas funcionalidades do serviço, você deverá criar uma conta. Você é responsável por manter a confidencialidade de sua senha...</p>
            
            <p>... (Conteúdo completo dos termos de serviço aqui)</p>
        </LegalPageLayout>
    );
};

export default TermsPage;

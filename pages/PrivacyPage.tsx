
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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Coleta de Dados</h2>
            <p>Coletamos informações para fornecer e melhorar nossos serviços para todos os nossos usuários. Em conformidade com a LGPD, coletamos apenas os dados estritamente necessários...</p>
            
            <h2>2. Uso dos Dados</h2>
            <p>Utilizamos as informações que coletamos para operar, manter e fornecer a você as funcionalidades do serviço, para nos comunicarmos com você...</p>

            <h2>3. Seus Direitos</h2>
            <p>Você tem o direito de acessar, corrigir, excluir ou limitar o uso de suas informações pessoais...</p>
            
            <p>... (Conteúdo completo da política de privacidade aqui)</p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;

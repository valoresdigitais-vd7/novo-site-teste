
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

const ReturnsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Devoluções e Trocas" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Direito de Arrependimento</h2>
            <p>Para assinaturas de serviços digitais, o cliente pode cancelar a compra no prazo de 7 (sete) dias a contar da data da assinatura ou do ato de recebimento do serviço...</p>
            
            <h2>2. Condições para Devolução</h2>
            <p>O cancelamento deve ser solicitado através de nossos canais de atendimento ao cliente...</p>

            <h2>3. Reembolso</h2>
            <p>O reembolso será realizado através do mesmo método de pagamento utilizado na compra...</p>
            
            <p>... (Conteúdo completo da política de devoluções aqui)</p>
        </LegalPageLayout>
    );
};

export default ReturnsPage;

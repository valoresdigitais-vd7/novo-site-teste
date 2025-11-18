tsx
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
            <h2>1. Introdução</h2>
            <p>
                Bem-vindo ao <strong>HabitFlow</strong>. Esta Política de Privacidade tem como objetivo explicar como coletamos,
                utilizamos e protegemos suas informações pessoais durante o uso de nossos serviços. Prezamos pela transparência
                e segurança dos dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2>2. Dados que Coletamos</h2>
            <p>
                Coletamos apenas as informações necessárias para o bom funcionamento do HabitFlow:
            </p>
            <ul>
                <li><strong>Informações de conta:</strong> nome, e-mail, idioma e preferências de notificação.</li>
                <li><strong>Dados de uso:</strong> hábitos criados, frequência de marcação de atividades, estatísticas de progresso e recompensas obtidas.</li>
                <li><strong>Dados do dispositivo:</strong> tipo de dispositivo, sistema operacional e versão do aplicativo.</li>
                <li><strong>Integrações opcionais:</strong> informações de saúde e atividade física provenientes de Apple Health, Google Fit ou dispositivos conectados, mediante autorização explícita.</li>
            </ul>

            <h2>3. Como Utilizamos os Dados</h2>
            <p>
                As informações coletadas são utilizadas para:
            </p>
            <ul>
                <li>Operar e aprimorar as funcionalidades do HabitFlow;</li>
                <li>Gerar relatórios e estatísticas de progresso pessoais;</li>
                <li>Oferecer suporte ao usuário e comunicação sobre atualizações ou alertas de segurança;</li>
                <li>Personalizar sua experiência com base em seus hábitos, preferências e metas;</li>
                <li>Manter o funcionamento de recursos de gamificação e comunidade (Esquadrões).</li>
            </ul>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
                Não vendemos nem compartilhamos suas informações pessoais com terceiros para fins comerciais.
                Seus dados podem ser compartilhados apenas nas seguintes situações:
            </p>
            <ul>
                <li>Com prestadores de serviços que processam informações em nosso nome, sob confidencialidade;</li>
                <li>Com outros usuários, quando você opta por participar de Esquadrões ou desafios comunitários;</li>
                <li>Quando exigido por lei, decisão judicial ou autoridade competente.</li>
            </ul>

            <h2>5. Segurança da Informação</h2>
            <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não
                autorizado, alteração, divulgação ou destruição. A criptografia é usada para proteger dados sensíveis em trânsito
                e em repouso.
            </p>

            <h2>6. Retenção e Exclusão de Dados</h2>
            <p>
                Seus dados são armazenados enquanto sua conta estiver ativa ou conforme exigido por motivos legais.
                Você pode solicitar a exclusão completa de sua conta e dados pessoais a qualquer momento pelo e-mail
                <a href="mailto:privacidade@habitflow.valoresdigitais.com"> privacidade@habitflow.valoresdigitais.com</a>.
            </p>

            <h2>7. Direitos do Usuário</h2>
            <p>
                Você tem direito a:
            </p>
            <ul>
                <li>Acessar e revisar seus dados pessoais;</li>
                <li>Corrigir informações incorretas ou desatualizadas;</li>
                <li>Solicitar exclusão de seus dados;</li>
                <li>Revogar consentimentos concedidos anteriormente;</li>
                <li>Portar seus dados em formato estruturado, de acordo com a LGPD.</li>
            </ul>

            <h2>8. Cookies e Tecnologias Semelhantes</h2>
            <p>
                Usamos cookies e tecnologias similares para melhorar a experiência do usuário, lembrar preferências e
                compreender o uso do site. Você pode ajustar suas preferências de cookies nas configurações do navegador.
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
                Podemos atualizar esta Política periodicamente para refletir mudanças em nossos serviços ou requisitos legais.
                Sempre exibiremos a data da última atualização no início deste documento.
            </p>

            <h2>10. Contato</h2>
            <p>
                Caso tenha dúvidas, solicitações ou preocupações relacionadas à privacidade e proteção de dados, entre em
                contato através do e-mail:
                <a href="mailto:privacidade@habitflow.valoresdigitais.com"> privacidade@habitflow.valoresdigitais.com</a>.
            </p>

            <p>
                Ao utilizar o <strong>HabitFlow</strong>, você confirma ter lido e compreendido esta Política de Privacidade e
                concorda com o tratamento de dados conforme descrito.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;


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
        <LegalPageLayout title="Termos de Uso — HabitFlow" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>
                Ao utilizar o aplicativo HabitFlow, você concorda com os presentes Termos de Uso e com nossa Política de Privacidade. 
                Caso não concorde com qualquer parte destes termos, recomendamos que não continue a utilização dos nossos serviços.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>
                O HabitFlow é uma plataforma digital de gestão de hábitos e produtividade com foco em gamificação e ciência comportamental, 
                disponível para dispositivos móveis e web. Nosso objetivo é ajudar os usuários a desenvolverem hábitos sustentáveis, 
                melhorando sua consistência e bem-estar geral.
            </p>

            <h2>3. Cadastro e Conta do Usuário</h2>
            <p>
                Para acessar todas as funcionalidades do HabitFlow, é necessário criar uma conta. 
                O usuário é responsável por fornecer informações verdadeiras, manter a confidencialidade de suas credenciais e 
                notificar imediatamente o suporte sobre qualquer uso não autorizado.
            </p>

            <h2>4. Planos e Assinaturas</h2>
            <p>
                O HabitFlow opera no modelo freemium, oferecendo planos:
            </p>
            <ul>
                <li><strong>Flow Starter (Gratuito):</strong> acesso básico às principais funcionalidades;</li>
                <li><strong>Flow Pro (Individual):</strong> recursos avançados, personalização e integração com Apple Health / Google Fit;</li>
                <li><strong>Flow Teams (Empresarial):</strong> planos e relatórios voltados para equipes e empresas.</li>
            </ul>
            <p>
                A cobrança das assinaturas ocorre conforme o meio de pagamento selecionado, podendo ser renovada automaticamente até o cancelamento pelo usuário.
            </p>

            <h2>5. Direitos e Responsabilidades do Usuário</h2>
            <p>
                O usuário compromete-se a usar o HabitFlow de forma ética e segura, respeitando os direitos de outros usuários e não utilizando 
                a plataforma para fins ilícitos ou abusivos. Qualquer tentativa de explorar vulnerabilidades, modificar ou redistribuir o sistema sem autorização 
                será considerada violação dos Termos de Uso.
            </p>

            <h2>6. Propriedade Intelectual</h2>
            <p>
                Todo o conteúdo, design, código e demais elementos do HabitFlow são de propriedade da empresa Valores Digitais ou licenciados com permissão. 
                É proibida a reprodução total ou parcial sem autorização prévia.
            </p>

            <h2>7. Modificações e Atualizações do Serviço</h2>
            <p>
                O HabitFlow pode atualizar, modificar ou interromper temporariamente funcionalidades a qualquer momento, 
                visando melhorias e manutenção da plataforma. Nestes casos, os usuários serão informados antecipadamente sempre que possível.
            </p>

            <h2>8. Limitação de Responsabilidade</h2>
            <p>
                Embora nos esforcemos para oferecer um serviço estável e seguro, o HabitFlow não se responsabiliza por perdas de dados, interrupções 
                ou danos indiretos decorrentes do uso da plataforma. O usuário utiliza o serviço por sua própria conta e risco.
            </p>

            <h2>9. Comunidade e Interações</h2>
            <p>
                O HabitFlow oferece espaços de interação social, como Esquadrões e Desafios Comunitários. 
                O uso desses recursos deve seguir princípios de respeito, colaboração e bom senso. Mensagens ofensivas, discriminatórias ou abusivas 
                poderão resultar em suspensão ou exclusão da conta.
            </p>

            <h2>10. Alterações dos Termos</h2>
            <p>
                Os Termos de Uso podem ser alterados periodicamente. A versão mais atual estará sempre disponível em habitflow.valoresdigitais.com/termos. 
                O uso contínuo do sistema após alterações constitui aceitação das novas condições.
            </p>

            <h2>11. Contato</h2>
            <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato através do e-mail: suporte@valoresdigitais.com.
            </p>

            <hr className="my-8" />
            <p className="text-sm text-neutral-500">
                HabitFlow — Construa consistência, desbloqueie sua melhor versão.
            </p>
        </LegalPageLayout>
    );
};

export default TermsPage;

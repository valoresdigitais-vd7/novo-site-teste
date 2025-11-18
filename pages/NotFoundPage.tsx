import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex items-center justify-center" style={{ minHeight: 'calc(100vh - 8rem)'}}>
            <div className="max-w-md">
                <h1 className="text-6xl font-extrabold text-primary dark:text-primary-light">404</h1>
                <p className="mt-4 text-2xl font-semibold text-neutral-800 dark:text-neutral-100">Página Não Encontrada</p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Desculpe, a página que você está procurando não existe ou foi movida.
                </p>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Voltar para a Página Inicial
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
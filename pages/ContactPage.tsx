
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        // Simulate API call
        await new Promise(res => setTimeout(res, 1500));

        if(formData.name && formData.email && formData.message) {
            setStatus('success');
            setResponseMessage('Obrigado pelo seu contato! Responderemos em breve.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
            setResponseMessage('Ocorreu um erro. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
                <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Envie uma Mensagem</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Nome</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Sua Mensagem</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-opacity-50">
                                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </div>
                        </form>
                        {responseMessage && (
                             <p className={`mt-4 text-sm text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>{responseMessage}</p>
                        )}
                    </div>
                    <div className="text-neutral-700 dark:text-neutral-300">
                        <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
                        <p className="mb-2"><strong>Email:</strong> contato@produtox.com</p>
                        <p className="mb-2"><strong>Telefone:</strong> (11) 98765-4321</p>
                        <p><strong>Endereço:</strong><br/>
                            Rua Fictícia, 123<br/>
                            São Paulo, SP - 01000-000<br/>
                            Brasil
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { getPostBySlug } from '../lib/posts';
import type { FullPost } from '../lib/posts';

const PostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<FullPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) {
            setError('Slug do post não encontrado.');
            setLoading(false);
            return;
        }

        const fetchPost = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedPost = await getPostBySlug(slug);
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    setError('Post não encontrado.');
                }
            } catch (e) {
                setError('Falha ao carregar o post.');
            }
            setLoading(false);
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <p className="text-lg">Carregando post...</p>
            </div>
        );
    }
    
    if (error || !post) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="text-2xl font-bold text-red-500">{error || 'Post não encontrado.'}</h1>
                <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">
                    &larr; Voltar para o Blog
                </Link>
            </div>
        );
    }
    
    const htmlContent = marked.parse(post.content);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <article className="max-w-3xl mx-auto bg-white dark:bg-neutral-800/50 p-6 sm:p-8 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700">
                <Link to="/blog" className="text-sm text-primary dark:text-primary-light hover:underline mb-4 inline-block">
                    &larr; Voltar para o Blog
                </Link>

                {/* Tag */}
                {post.tag && (
                    <div className="mb-4">
                        <span className="inline-block bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light px-3 py-1 rounded-full text-sm font-medium">
                            {post.tag}
                        </span>
                    </div>
                )}

                {/* Título */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-4">{post.title}</h1>

                {/* Descrição */}
                {post.excerpt && (
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        {post.excerpt}
                    </p>
                )}

                {/* Data */}
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                    {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Imagem */}
                {post.image && (
                    <div className="mb-6">
                        <img
                            src={post.image}
                            alt={post.imageCaption || post.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        {/* Texto da imagem */}
                        {post.imageCaption && (
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 italic mt-2 text-center">
                                {post.imageCaption}
                            </p>
                        )}
                    </div>
                )}

                {/* Conteúdo do post */}
                <div
                    className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </article>
        </div>
    );
};

export default PostPage;

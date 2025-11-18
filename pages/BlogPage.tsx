
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';
import type { PostMeta } from '../lib/posts';

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => (
    <div className="bg-white dark:bg-neutral-800/50 p-6 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">
            <Link to={`/posts/${post.slug}`} className="hover:text-primary dark:hover:text-primary-light transition-colors">
                {post.title}
            </Link>
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
        <Link to={`/posts/${post.slug}`} className="mt-4 inline-block font-semibold text-primary dark:text-primary-light hover:underline">
            Ler mais &rarr;
        </Link>
    </div>
);

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<PostMeta[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const fetchedPosts = await getAllPosts();
            setPosts(fetchedPosts);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">Nosso Blog</h1>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                        Insights, tutoriais e novidades sobre produtividade e tecnologia.
                    </p>
                </div>

                {loading ? (
                    <p className="text-center">Carregando posts...</p>
                ) : posts.length > 0 ? (
                    <div className="space-y-8">
                        {posts.map(post => <PostCard key={post.slug} post={post} />)}
                    </div>
                ) : (
                    <p className="text-center">Nenhum post encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPage;

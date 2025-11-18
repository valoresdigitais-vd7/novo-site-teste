
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag?: string;
  image?: string;
  imageCaption?: string;
}

export interface FullPost extends PostMeta {
    content: string;
}

// A simple in-memory cache to avoid re-fetching on every navigation
let postsCache: PostMeta[] | null = null;

const parseFrontmatter = (markdown: string): { meta: Omit<PostMeta, 'slug'>, content: string } => {
    const match = /---\n([\s\S]+?)\n---/.exec(markdown);
    const frontmatter = match ? match[1] : '';
    const content = match ? markdown.slice(match[0].length).trim() : markdown;
    
    const meta: { [key: string]: string } = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            meta[key.trim()] = valueParts.join(':').trim().replace(/"/g, '');
        }
    });
    
    return {
        meta: {
            title: meta.title || 'Untitled Post',
            date: meta.date || new Date().toISOString(),
            excerpt: meta.excerpt || '',
            tag: meta.tag,
            image: meta.image,
            imageCaption: meta.imageCaption,
        },
        content
    };
};

export const getAllPosts = async (): Promise<PostMeta[]> => {
    if (postsCache) {
        return postsCache;
    }
    try {
        const manifestRes = await fetch('/posts/post-manifest.json');
        if (!manifestRes.ok) throw new Error('Failed to fetch post manifest');
        const slugs: string[] = await manifestRes.json();
        
        const postsPromises = slugs.map(async (slug) => {
            try {
                const postRes = await fetch(`/posts/${slug}.md`);
                if (!postRes.ok) return null;
                const markdown = await postRes.text();
                const { meta } = parseFrontmatter(markdown);
                return { ...meta, slug };
            } catch {
                return null;
            }
        });

        const posts = (await Promise.all(postsPromises)).filter((p): p is PostMeta => p !== null);

        const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        postsCache = sortedPosts;
        return sortedPosts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

export const getPostBySlug = async (slug: string): Promise<FullPost | null> => {
    try {
        const postRes = await fetch(`/posts/${slug}.md`);
        if (!postRes.ok) throw new Error(`Post not found: ${slug}`);
        
        const markdown = await postRes.text();
        const { meta, content } = parseFrontmatter(markdown);
        
        return { ...meta, slug, content };
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
};

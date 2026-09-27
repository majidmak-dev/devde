'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User, Clock, ChevronRight, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchImages } from '@/lib/image-api';
import { fetchBlogAssist } from '@/lib/ai-api';
import { blogPosts } from '@/lib/blog-data';

const filterCategories = [
    'All',
    'Web Development',
    'UI/UX Design',
    'SEO Growth',
    'Security',
    'PowerApps',
    'Infrastructure'
];

type BlogPostWithImage = typeof blogPosts[0] & { image?: string };

const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
    'SEO Growth': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    'UI/UX Design': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    'Web Development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    'Development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    'Security': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    'PowerApps': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'Infrastructure': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    'Cloud Solutions': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
};

function getPostImage(post: { image?: string; category: string; slug: string }): string {
    if (post.image && post.image.trim().length > 0) return post.image;
    return CATEGORY_FALLBACK_IMAGES[post.category] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800';
}

const sortByDateDesc = <T extends { date: string }>(arr: T[]): T[] => {
    return [...arr].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

function matchesCategory(postCategory: string, selected: string): boolean {
    if (selected === 'All') return true;
    if (postCategory.toLowerCase() === selected.toLowerCase()) return true;
    if (selected === 'Web Development' && (postCategory.toLowerCase().includes('development') || postCategory.toLowerCase().includes('web'))) return true;
    if (selected === 'UI/UX Design' && postCategory.toLowerCase().includes('design')) return true;
    if (selected === 'SEO Growth' && postCategory.toLowerCase().includes('seo')) return true;
    return false;
}

export default function BlogListing() {
    const [posts, setPosts] = useState<BlogPostWithImage[]>(() => {
        const sorted = sortByDateDesc(blogPosts);
        return sorted.map(post => ({
            ...post,
            image: getPostImage(post)
        }));
    });
    const [activeFilter, setActiveFilter] = useState('All');
    const [blogIdea, setBlogIdea] = useState('');
    const [aiResult, setAiResult] = useState<{ title: string, outline: string[] } | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    // Asynchronously enhance only top 8 posts without delaying initial page render
    useEffect(() => {
        let isMounted = true;
        const enhanceTopImages = async () => {
            try {
                const topPosts = posts.slice(0, 8);
                const enhancements = await Promise.allSettled(
                    topPosts.map(async (p) => {
                        if (p.image && !p.image.includes('unsplash.com')) return null;
                        const res = await fetchImages(p.query, 1);
                        return res.length > 0 ? { slug: p.slug, url: res[0].url } : null;
                    })
                );

                if (!isMounted) return;

                const imageMap = new Map<string, string>();
                enhancements.forEach(e => {
                    if (e.status === 'fulfilled' && e.value) {
                        imageMap.set(e.value.slug, e.value.url);
                    }
                });

                if (imageMap.size > 0) {
                    setPosts(prev => prev.map(post => {
                        const enhancedUrl = imageMap.get(post.slug);
                        return enhancedUrl ? { ...post, image: enhancedUrl } : post;
                    }));
                }
            } catch {
                // Fail silently, fallback images already active
            }
        };

        enhanceTopImages();
        return () => { isMounted = false; };
    }, []);

    const handleBlogAssist = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!blogIdea.trim() || isGenerating) return;
        setIsGenerating(true);
        try {
            const result = await fetchBlogAssist(blogIdea);
            setAiResult(result);
        } catch (error) {
            console.error('Blog Assist error:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const filteredPosts = posts.filter(p => matchesCategory(p.category, activeFilter));

    return (
        <div className="pt-32 pb-20">
            {/* Header */}
            <section className="container mx-auto px-4 mb-16 text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter">Insights &amp; <span className="text-primary italic">Innovation</span></h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">Expert perspectives on digital infrastructure, design, and growth strategy.</p>
            </section>

            {/* Filter Tabs */}
            <section className="container mx-auto px-4 mb-12">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {filterCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeFilter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'glass border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* AI Assistant Section */}
            <section className="container mx-auto px-4 mb-16">
                <div className="glass p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles className="w-32 h-32 text-primary" />
                    </div>
                    <div className="max-w-3xl space-y-8 relative">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-primary">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-xs font-black uppercase tracking-widest">AI Content Lab</span>
                            </div>
                            <h2 className="text-3xl font-black italic">Ghostwriter Assistant</h2>
                            <p className="text-muted-foreground italic text-sm">Need help with your next article? Let our AI suggest a title and structure.</p>
                        </div>

                        <form onSubmit={handleBlogAssist} className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                value={blogIdea}
                                onChange={(e) => setBlogIdea(e.target.value)}
                                placeholder="E.g., Scaling Next.js 15 apps with multi-tenant databases..."
                                className="flex-1 px-6 py-4 rounded-2xl bg-slate-900 border border-border focus:border-primary outline-none transition-colors"
                            />
                            <Button type="submit" disabled={isGenerating} className="h-14 px-8 rounded-2xl bg-primary text-white font-black italic">
                                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : 'GENERATE OUTLINE'}
                            </Button>
                        </form>

                        <AnimatePresence>
                            {aiResult && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-6 rounded-2xl bg-slate-900/80 border border-primary/20 space-y-4"
                                >
                                    <h3 className="text-xl font-bold text-primary italic">&ldquo;{aiResult.title}&rdquo;</h3>
                                    <div className="space-y-2">
                                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Suggested Outline:</p>
                                        <ul className="space-y-2 text-sm text-slate-300">
                                            {aiResult.outline.map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <span className="text-primary font-bold">{idx + 1}.</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, idx) => {
                            const postImg = post.image || getPostImage(post);
                            return (
                                <motion.div
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.2) }}
                                >
                                    <Link href={`/blog/${post.slug}`} className="block group">
                                        <div className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                                <div className="w-full md:w-64 aspect-video rounded-2xl flex items-center justify-center shrink-0 overflow-hidden bg-slate-800">
                                                    <img
                                                        src={postImg}
                                                        alt={post.title}
                                                        loading={idx < 4 ? "eager" : "lazy"}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = CATEGORY_FALLBACK_IMAGES[post.category] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800';
                                                        }}
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                                                        <span>{post.category}</span>
                                                        <span className="w-1 h-1 bg-primary rounded-full" />
                                                        <span className="text-muted-foreground">{post.date}</span>
                                                    </div>
                                                    <h2 className="text-2xl font-black group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
                                                    <p className="text-muted-foreground text-sm line-clamp-2 italic">{post.excerpt}</p>
                                                    <div className="flex items-center justify-between pt-2">
                                                        <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                                                            <div className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</div>
                                                            <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</div>
                                                        </div>
                                                        <span className="text-primary text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                                            Read More <ArrowRight className="w-3 h-3" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {filteredPosts.length === 0 && (
                        <div className="py-20 text-center text-muted-foreground italic">
                            No posts in this category yet.
                        </div>
                    )}
                </div>

                <div className="space-y-12">
                    <div className="glass p-8 rounded-3xl border border-white/5 space-y-8">
                        <h3 className="text-xl font-bold border-b border-primary/20 pb-4">Categories</h3>
                        <div className="space-y-4">
                            {filterCategories.filter(c => c !== 'All').map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className="flex w-full justify-between items-center group font-medium text-muted-foreground hover:text-white transition-colors"
                                >
                                    <span>{cat}</span>
                                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent">
                        <h3 className="text-xl font-bold mb-4">Subscribe to Insights</h3>
                        <p className="text-sm text-muted-foreground mb-6 italic">Weekly deep-dives into the future of digital infrastructure delivered to your inbox.</p>
                        <div className="space-y-3">
                            <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-border outline-none focus:ring-1 ring-primary" />
                            <Button className="w-full bg-primary text-white rounded-xl">Join Newsletter</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

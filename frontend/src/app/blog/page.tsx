'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User, Clock, ChevronRight, Sparkles, Loader2, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchImages } from '@/lib/image-api';
import { fetchBlogAssist } from '@/lib/ai-api';

const initialPosts = [
    {
        title: 'How Next.js 14 is Revolutionizing Digital Infrastructure',
        excerpt: 'Explore the new features of Next.js 14 and how they empower developers to build faster, more secure web applications.',
        author: 'Majid Desk',
        date: 'Feb 15, 2026',
        readTime: '8 min read',
        category: 'Development',
        query: 'nextjs development',
        image: ''
    },
    {
        title: 'The Importance of High-Performance Hosting for SEO',
        excerpt: 'Why server response times matter more than ever for your search engine rankings and user conversion rates.',
        author: 'Sarah Chen',
        date: 'Feb 12, 2026',
        readTime: '5 min read',
        category: 'Infrastructure',
        query: 'server farm infrastructure',
        image: ''
    },
    {
        title: 'UI/UX Trends That Will Dominate 2026',
        excerpt: 'From glassmorphism to bento grids—stay ahead of the curve with our comprehensive guide to modern design.',
        author: 'Alex Rivera',
        date: 'Feb 10, 2026',
        readTime: '12 min read',
        category: 'Design',
        query: 'modern ui ux design',
        image: ''
    }
];

export default function BlogListing() {
    const [posts, setPosts] = useState(initialPosts);
    const [blogIdea, setBlogIdea] = useState('');
    const [aiResult, setAiResult] = useState<{ title: string, outline: string[] } | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const loadImages = async () => {
            const updatedPosts = await Promise.all(initialPosts.map(async (post) => {
                const images = await fetchImages(post.query, 1);
                return {
                    ...post,
                    image: images.length > 0 ? images[0].url : 'bg-emerald-500/10'
                };
            }));
            setPosts(updatedPosts);
        };
        loadImages();
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

    return (
        <div className="pt-32 pb-20">
            {/* Header */}
            <section className="container mx-auto px-4 mb-20 text-center space-y-4">
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter">Insights & <span className="text-primary italic">Innovation</span></h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">Expert perspectives on digital infrastructure, design, and growth strategy.</p>
            </section>

            {/* AI Assistant Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="glass p-8 md:p-12 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden">
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
                                placeholder="Enter a topic (e.g., 'The future of Web3 hosting')..."
                                className="flex-1 bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all"
                            />
                            <Button type="submit" className="rounded-2xl h-14 px-8 bg-primary hover:bg-primary/90 font-bold" disabled={isGenerating}>
                                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Wand2 className="w-4 h-4 mr-2" /> GENERATE IDEA</>}
                            </Button>
                        </form>

                        <AnimatePresence>
                            {aiResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
                                >
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase text-primary tracking-tighter">Suggested Title</span>
                                        <h3 className="text-xl font-bold text-white">{aiResult.title}</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-black uppercase text-primary tracking-tighter">Recommended Outline</span>
                                        <ul className="space-y-2">
                                            {aiResult.outline.map((item, idx) => (
                                                <li key={idx} className="flex items-start space-x-3 text-sm text-muted-foreground italic">
                                                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary mt-0.5 shrink-0">{idx + 1}</span>
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
                <div className="lg:col-span-2 space-y-12">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 p-6 rounded-3xl transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-64 aspect-video rounded-2xl flex items-center justify-center shrink-0 overflow-hidden bg-slate-800">
                                    {post.image.startsWith('http') ? (
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    ) : (
                                        <div className={`w-full h-full flex items-center justify-center ${post.image}`}>
                                            <span className="text-primary italic font-black text-2xl opacity-20">{post.category}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 text-xs font-bold text-primary uppercase tracking-widest">
                                        <span>{post.category}</span>
                                        <span className="w-1 h-1 bg-primary rounded-full" />
                                        <span className="text-muted-foreground">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-black group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm line-clamp-2 italic">{post.excerpt}</p>
                                    <div className="flex items-center space-x-6 text-xs text-muted-foreground pt-2">
                                        <div className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</div>
                                        <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="flex justify-center pt-8">
                        <Button variant="outline" className="rounded-full px-12 h-14 border-primary/20 text-primary hover:bg-primary/10">
                            Load More Articles
                        </Button>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="glass p-8 rounded-3xl border border-white/5 space-y-8">
                        <h3 className="text-xl font-bold border-b border-primary/20 pb-4">Categories</h3>
                        <div className="space-y-4">
                            {['Infrastructure', 'Development', 'UI/UX Design', 'SaaS Growth', 'Digital Security'].map(cat => (
                                <Link key={cat} href="#" className="flex justify-between items-center group font-medium text-muted-foreground hover:text-white transition-colors">
                                    <span>{cat}</span>
                                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent">
                        <h3 className="text-xl font-bold mb-4">Subscribe to Insights</h3>
                        <p className="text-sm text-muted-foreground mb-6 italic">Weekly deep-dives into the future of digital infrastructure delivered to your inbox.</p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-border outline-none focus:ring-1 ring-primary"
                            />
                            <Button className="w-full bg-primary text-white rounded-xl">Join Newsletter</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

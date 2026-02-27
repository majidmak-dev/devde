import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog-data';
import { Sparkles, Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back button */}
                <Link href="/blog" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    BACK TO BLOG
                </Link>

                {/* Header */}
                <header className="space-y-8 mb-16">
                    <div className="flex items-center space-x-4 text-sm font-bold text-primary uppercase tracking-widest">
                        <span className="bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{post.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight italic">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-6 text-sm text-muted-foreground pt-4 border-t border-white/5">
                        <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</div>
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</div>
                    </div>
                </header>

                {/* Hero Image / Visualization block */}
                <div className="aspect-[21/9] rounded-3xl bg-slate-900 border border-white/5 overflow-hidden mb-16 relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-slate-900 opacity-50" />
                    <Sparkles className="w-20 h-20 text-primary opacity-20 absolute" />
                    <h2 className="text-4xl font-black italic text-white/5 relative z-10 tracking-widest uppercase">
                        {post.category}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8 prose prose-invert prose-lg max-w-none">
                        <p className="text-xl italic text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="space-y-6 text-white/80 leading-loose" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '<br/><br/>').replace(/## (.*)/g, '<h2 class="text-3xl font-black italic text-white mt-12 mb-6 tracking-tight">$1</h2>') }} />
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="glass p-8 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent sticky top-32">
                            <h3 className="text-2xl font-black italic mb-4">Ready to Innovate?</h3>
                            <p className="text-sm text-muted-foreground mb-8 italic leading-relaxed">
                                Don't let your digital infrastructure hold you back. Our enterprise team is ready to scale your vision.
                            </p>
                            <Link href="/contact" className="block">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-black rounded-xl h-14 shadow-lg shadow-primary/20 group">
                                    START A PROJECT
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';
import { Search, TrendingUp, BarChart3, Target, ArrowRight, ShoppingCart, Sparkles, Activity } from 'lucide-react';

const features = [
    { name: 'Technical SEO Audit', description: 'Deep-dive analysis of your digital infrastructure for optimal crawler indexing.', icon: Search, color: 'text-blue-500' },
    { name: 'Growth Analytics', description: 'Real-time data visualization and conversion rate optimization strategies.', icon: BarChart3, color: 'text-emerald-500' },
    { name: 'Market Positioning', description: 'Strategic keyword targeting and competitor landscape analysis.', icon: Target, color: 'text-purple-500' },
];

export default function SEOGrowthPage() {
    const { openModal, addToCart } = useInteraction();

    return (
        <div className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center space-y-8 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <div className="flex items-center justify-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                        <TrendingUp className="w-5 h-5" />
                        <span>Growth Ecosystem</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
                        Organic <span className="text-primary italic">Dominance</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
                        Scalable growth strategies and high-impact SEO audits for enterprise platforms.
                    </p>
                    <div className="pt-4">
                        <Button
                            size="lg"
                            onClick={() => openModal('SEO strategy consultation inquiry')}
                            className="rounded-full bg-primary h-16 px-12 text-lg font-bold hover:scale-105 transition-transform"
                        >
                            GET FREE AUDIT <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-12 rounded-[3rem] border border-white/5 space-y-6 group hover:bg-white/5 transition-colors"
                        >
                            <div className={`${feature.color} bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black italic tracking-tight">{feature.name}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed italic">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 mb-32">
                <div className="glass p-12 md:p-24 rounded-[4rem] border border-white/5 bg-gradient-to-br from-slate-900/50 to-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -mr-48 -mt-48" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tight uppercase leading-none">
                                Data-Driven <span className="text-primary">Architecture</span>
                            </h2>
                            <p className="text-xl text-muted-foreground italic leading-relaxed">
                                Our SEO methodology goes beyond keywords. We optimize your technical infrastructure, schema markup, and performance metrics to ensure maximum crawl stability and ranking authority.
                            </p>
                            <div className="space-y-4">
                                {['Core Web Vitals Optimization', 'AI-Powered Keyword Clustering', 'Semantic Entity Mapping', 'Global Edge CDN Delivery'].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 text-white/80 font-bold italic uppercase tracking-wider text-sm">
                                        <Activity className="w-4 h-4 text-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-8 rounded-3xl text-center space-y-2">
                                <div className="text-4xl font-black text-primary">250%</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Traffic Increase</div>
                            </div>
                            <div className="glass p-8 rounded-3xl text-center space-y-2">
                                <div className="text-4xl font-black text-white">Top 3</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Ranking Success</div>
                            </div>
                            <div className="glass p-8 rounded-3xl text-center space-y-2">
                                <div className="text-4xl font-black text-white">40%</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Lower CPA</div>
                            </div>
                            <div className="glass p-8 rounded-3xl text-center space-y-2">
                                <div className="text-4xl font-black text-primary">0.8s</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Load Velocity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="glass p-2 bg-white/5 rounded-full inline-flex items-center px-6 py-2 space-x-3 border border-white/10">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Growth Strategy 2026</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                        Scale without <span className="text-primary italic">Limits.</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            onClick={() => addToCart({ id: 'seo-pro', name: 'SEO Pro Strategy', price: '$999' })}
                            className="rounded-full bg-white text-black h-20 px-12 text-xl font-black hover:bg-primary hover:text-white transition-all w-full md:w-auto"
                        >
                            BUY SEO PACK <ShoppingCart className="w-6 h-6 ml-3" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => openModal('Growth strategy consultation')}
                            className="rounded-full border-2 h-20 px-12 text-xl font-black hover:bg-white/5 w-full md:w-auto uppercase italic"
                        >
                            Talk to Strategist
                        </Button>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-muted-foreground text-sm italic"
                    >
                        Join 500+ global brands dominating their market niche.
                    </motion.p>
                </div>
            </section>
        </div>
    );
}

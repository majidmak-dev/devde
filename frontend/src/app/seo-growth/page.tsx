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

    const packages = [
        { id: 'seo-audit', name: 'Comprehensive SEO Audit', price: '$1,200', icon: Activity, color: 'text-blue-500' },
        { id: 'growth-retainer', name: 'Elite Growth Retainer (Monthly)', price: '$4,500', icon: TrendingUp, color: 'text-primary' }
    ];

    return (
        <div className="pt-32 pb-20 overflow-hidden">
            <section className="container mx-auto px-4 text-center space-y-8 mb-24 relative z-10">
                <div className="orb top-0 absolute -left-20 bg-blue-500/20 w-[500px] h-[500px] blur-3xl -z-10" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black italic tracking-tighter"
                >
                    Predictable <span className="text-blue-500 italic">Growth</span>
                </motion.h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto italic opacity-80 mb-10 font-medium">
                    Dominate search rankings and scale your revenue with our data-driven SEO and growth strategies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
                    {packages.map(pkg => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/40 hover:border-blue-500/30 transition-all duration-500 group flex flex-col justify-between"
                        >
                            <div className="mb-8 space-y-4 text-center">
                                <div className="w-20 h-20 mx-auto rounded-[2rem] bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-black/20">
                                    <pkg.icon className={`w-10 h-10 ${pkg.color}`} />
                                </div>
                                <h3 className="text-3xl font-black italic tracking-tight">{pkg.name}</h3>
                                <p className="text-4xl font-black italic text-blue-500 tracking-tighter">{pkg.price}</p>
                            </div>
                            <Button
                                onClick={() => addToCart(pkg)}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl h-16 text-lg italic tracking-widest shadow-xl shadow-blue-500/20 flex items-center justify-center group-hover:-translate-y-1 transition-transform"
                            >
                                <ShoppingCart className="w-6 h-6 mr-3" /> ADD TO COMMAND CENTER
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 border-y border-white/5 relative bg-slate-900/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">The <span className="text-emerald-500">Methodology</span></h2>
                        <p className="text-muted-foreground italic max-w-2xl mx-auto">We don't guess. We analyze, execute, and dominate.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-10 rounded-[2.5rem] text-center space-y-6 border border-white/5 hover:border-emerald-500/20 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center">
                                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <h3 className="text-2xl font-black italic">{feature.name}</h3>
                                <p className="text-muted-foreground italic leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="container mx-auto px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass p-16 rounded-[4rem] border border-blue-500/20 bg-blue-500/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-colors" />
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Outrank the <span className="text-blue-500">Competition</span></h2>
                        <p className="text-xl text-muted-foreground italic leading-relaxed">Let our Lead AI Architect analyze your current market position and develop a bespoke strategy to capture your target audience.</p>
                    </div>
                    <Button
                        onClick={() => openModal("I need to outrank my competitors. Please run an initial AI analysis on current SEO growth trends for enterprise platforms.")}
                        className="bg-blue-600 hover:bg-blue-500 text-white rounded-3xl h-20 px-12 font-black italic tracking-widest text-xl shrink-0 shadow-xl shadow-blue-500/20 group-hover:scale-105 transition-transform flex items-center"
                    >
                        <Sparkles className="w-6 h-6 mr-3" /> CONSULT ARCHITECT
                    </Button>
                </motion.div>
            </section>
        </div>
    );
}

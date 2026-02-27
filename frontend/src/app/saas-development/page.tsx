'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cloud, Cog, BarChart, Shield, Rocket, ArrowRight, ShoppingCart, Sparkles, Layers } from 'lucide-react';
import { useInteraction } from '@/components/interaction-provider';

const stack = [
    { name: 'Microservices', icon: Layers },
    { name: 'Multi-tenancy', icon: Shield },
    { name: 'Auto-scaling', icon: Cloud },
    { name: 'Data Analytics', icon: BarChart },
];

export default function SaaSDevelopmentPage() {
    const { openModal, addToCart } = useInteraction();

    const packages = [
        { id: 'saas-starter', name: 'SaaS MVP Infrastructure', price: '$8,000', icon: Rocket, color: 'text-blue-500' },
        { id: 'saas-scale', name: 'Global Scale SaaS Platform', price: '$25,000', icon: Layers, color: 'text-indigo-500' }
    ];

    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-4 text-center space-y-8 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Elite <span className="text-primary italic">SaaS Development</span>
                </motion.h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic opacity-80 mb-10">
                    We architect and build multi-tenant SaaS platforms designed for global reach, high availability, and recurring revenue optimization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
                    {packages.map(pkg => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between"
                        >
                            <div className="mb-6 space-y-4 text-center">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <pkg.icon className={`w-8 h-8 ${pkg.color}`} />
                                </div>
                                <h3 className="text-2xl font-black italic">{pkg.name}</h3>
                                <p className="text-3xl font-black italic text-primary">{pkg.price}</p>
                            </div>
                            <Button
                                onClick={() => addToCart(pkg)}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-14 italic tracking-widest shadow-xl shadow-primary/20 flex items-center justify-center"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" /> ADD TO CART
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-12">
                    <Button
                        variant="outline"
                        className="rounded-full border-white/10 hover:bg-white/5 h-14 px-8 text-white font-bold italic tracking-widest"
                        onClick={() => openModal("I'm looking to build a custom SaaS platform. Can we talk about architecture and pricing?")}
                    >
                        <Sparkles className="w-5 h-5 mr-2 text-primary" /> DISCUSS SaaS ARCHITECTURE
                    </Button>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">SaaS-First Technology</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stack.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl text-center space-y-4"
                            >
                                <item.icon className="w-10 h-10 text-primary mx-auto" />
                                <h3 className="font-bold">{item.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Scalable Revenue Infrastructure</h2>
                    <p className="text-muted-foreground">Our SaaS solutions are built with a focus on long-term scalability and business logic. We handle the complex plumbing so you can focus on your product.</p>
                    <ul className="space-y-4">
                        {['Stateless Authentication', 'Subscription Management', 'Tiered Resource Allocation', 'Global Edge Deployment'].map(benefit => (
                            <li key={benefit} className="flex items-center">
                                <Shield className="w-5 h-5 text-primary mr-2" />
                                <span className="font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass aspect-video rounded-3xl bg-slate-800 border-white/5 flex items-center justify-center p-8">
                    <span className="text-primary/20 text-4xl font-mono">{'<'} SaaS Momentum {'/>'}</span>
                </div>
            </section>

            {/* CTA Box */}
            <section className="container mx-auto px-4 py-20">
                <div className="glass p-12 rounded-3xl bg-primary/5 border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Ready to Launch Your SaaS?</h2>
                        <p className="text-muted-foreground">Partner with experts who understand the nuances of SaaS architecture and scaling.</p>
                    </div>
                    <Button
                        size="lg"
                        onClick={() => openModal("I have a SaaS concept I want to bring to life. Let's discuss a technical roadmap.")}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-10 font-bold italic tracking-widest shrink-0 shadow-xl shadow-primary/20"
                    >
                        GET TECHNICAL ROADMAP <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

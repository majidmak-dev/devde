'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Globe, Zap, Database, ShieldCheck, ArrowRight, MessageSquare, Sparkles, Layers } from 'lucide-react';
import { useInteraction } from '@/components/interaction-provider';

import { useState, useEffect } from 'react';
import { fetchVideos } from '@/lib/image-api';

const stack = [
    { name: 'Next.js 14+', icon: Globe },
    { name: 'TypeScript', icon: Code },
    { name: 'Node.js/Express', icon: Zap },
    { name: 'PostgreSQL/Prisma', icon: Database },
];

export default function WebDevelopmentPage() {
    const { openModal } = useInteraction();
    const [heroVideo, setHeroVideo] = useState<string | null>(null);

    useEffect(() => {
        fetchVideos('software development coding programming', 1).then(vids => {
            if (vids.length > 0) setHeroVideo(vids[0].url);
        });
    }, []);

    const packages = [
        { id: 'web-mvp', name: 'Web App MVP Architecture', price: '$5,000', icon: Zap, color: 'text-amber-500' },
        { id: 'web-enterprise', name: 'Enterprise Platform Scaling', price: '$15,000', icon: Layers, color: 'text-emerald-500' }
    ];

    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-4 text-center space-y-8 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Scalable <span className="text-secondary">Web App</span> Solutions
                </motion.h1>
                <div className="text-xl text-muted-foreground max-w-3xl mx-auto italic opacity-80 mb-10 space-y-4 pt-4">
                    <p>
                        We build high-performance, secure, and SEO-optimized web applications using the latest industry standards and frameworks. Our development methodology revolves around delivering lightning-fast load times, exceptional user experiences, and rock-solid backend infrastructure.
                    </p>
                    <p>
                        In today's digital landscape, a website is more than just a digital brochure; it's the core engine of your business growth. We leverage next-generation technologies like React, Next.js, and scalable cloud databases to ensure that your application not only meets current market demands but is entirely future-proofed against the rapid evolution of the web.
                    </p>
                    <p>
                        Whether you are migrating from a legacy monolith or building a disruptive new platform from scratch, our elite engineering team implements rigorous testing, strict type safety, and comprehensive CI/CD pipelines. This guarantees that your final product is secure by design, highly available, and perfectly aligned with search engine algorithms to maximize your organic reach and overall digital footprint.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
                    {packages.map(pkg => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 hover:border-secondary/30 transition-all duration-500 group flex flex-col justify-between"
                        >
                            <div className="mb-6 space-y-4 text-center">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <pkg.icon className={`w-8 h-8 ${pkg.color}`} />
                                </div>
                                <h3 className="text-2xl font-black italic">{pkg.name}</h3>
                                <p className="text-3xl font-black italic text-secondary">{pkg.price}</p>
                            </div>
                            <Button
                                onClick={() => openModal(`I'm interested in the ${pkg.name} for my web application project. Let's discuss the technical roadmap.`)}
                                className="w-full bg-secondary hover:bg-secondary/90 text-white font-black rounded-2xl h-14 italic tracking-widest shadow-xl shadow-secondary/20 flex items-center justify-center"
                            >
                                <MessageSquare className="w-5 h-5 mr-2" /> CONTACT US
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-12">
                    <Button
                        variant="outline"
                        className="rounded-full border-white/10 hover:bg-white/5 h-14 px-8 text-white font-bold italic tracking-widest"
                        onClick={() => openModal("I need a custom, complex web application architecture. Can we discuss the technical specifications?")}
                    >
                        <Sparkles className="w-5 h-5 mr-2 text-secondary" /> REQUEST CUSTOM SCOPE
                    </Button>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stack.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl text-center space-y-4"
                            >
                                <item.icon className="w-10 h-10 text-secondary mx-auto" />
                                <h3 className="font-bold">{item.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Built for Performance & Scale</h2>
                    <p className="text-muted-foreground">Every line of code we write is optimized for speed and scalability. We ensure your application can handle thousands of concurrent users without breaking a sweat.</p>
                    <ul className="space-y-4">
                        {['Server-Side Rendering (SSR)', 'Incremental Static Regeneration (ISR)', 'Type-Safe Development', 'Edge Runtime Support'].map(benefit => (
                            <li key={benefit} className="flex items-center">
                                <ShieldCheck className="w-5 h-5 text-secondary mr-2" />
                                <span className="font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative glass aspect-video rounded-3xl overflow-hidden border border-white/5 bg-slate-800">
                    {heroVideo ? (
                        <video
                            src={heroVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-emerald-900/40 to-teal-900/40 animate-pulse flex items-center justify-center">
                            <span className="text-secondary/30 text-3xl font-mono">{'<'} Loading... {'/>'}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-full border border-white/10">
                        <span className="text-xs font-black italic tracking-widest uppercase text-secondary">Code Excellence</span>
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="container mx-auto px-4 py-20">
                <div className="glass p-12 rounded-3xl bg-secondary/5 border-secondary/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Ready to Build Your Platform?</h2>
                        <p className="text-muted-foreground">Let&apos;s discuss your requirements and build something extraordinary.</p>
                    </div>
                    <Button
                        size="lg"
                        onClick={() => openModal("I have specific requirements for my web platform. I&apos;d like to get an expert technical quote.")}
                        className="bg-secondary hover:bg-secondary/90 text-white rounded-full h-14 px-10 font-bold italic tracking-widest shrink-0 shadow-xl shadow-secondary/20"
                    >
                        GET EXPERT QUOTE <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

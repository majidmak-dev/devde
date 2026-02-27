'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchImages } from '@/lib/image-api';
import { useInteraction } from '@/components/interaction-provider';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
    {
        title: 'Nexus SaaS Platform',
        category: 'App Development',
        query: 'modern saas dashboard software',
        description: 'A complete enterprise resource planning tool with real-time analytics.'
    },
    {
        title: 'Velvet E-commerce',
        category: 'UI/UX Design',
        query: 'luxury fashion website design',
        description: 'Immersive shopping experience for a high-end fashion brand.'
    },
    {
        title: 'Titan Infrastructure',
        category: 'Cloud Solutions',
        query: 'server room data center technology',
        description: 'Scalable cloud architecture for a global fintech company.'
    },
    {
        title: 'Nova Mobile',
        category: 'App Development',
        query: 'modern smartphone app interface',
        description: 'Social networking app focused on professional networking.'
    },
    {
        title: 'Cyber Guard',
        category: 'Security',
        query: 'cyber security technology interface',
        description: 'Real-time threat detection and monitoring system.'
    },
    {
        title: 'Apex Marketing',
        category: 'Growth',
        query: 'marketing data analytics charts',
        description: 'Data-driven marketing automation platform.'
    }
];

const categories = ['All', 'UI/UX Design', 'App Development', 'Cloud Solutions', 'Security', 'Growth'];

export default function PortfolioPage() {
    const [projectImages, setProjectImages] = useState<Record<string, string>>({});
    const [activeFilter, setActiveFilter] = useState('All');
    const { openModal } = useInteraction();

    useEffect(() => {
        const loadImages = async () => {
            const imagesMap: Record<string, string> = {};
            await Promise.all(projects.map(async (project) => {
                const images = await fetchImages(project.query, 1);
                if (images.length > 0) {
                    imagesMap[project.title] = images[0].url;
                }
            }));
            setProjectImages(imagesMap);
        };
        loadImages();
    }, []);

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="pt-32 pb-20">
            {/* Header */}
            <section className="container mx-auto px-4 text-center space-y-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center justify-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                        <Sparkles className="w-5 h-5" />
                        <span>Our Work</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                        Digital <span className="text-primary italic">Excellence</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic mt-6">
                        Explore our curated selection of high-impact digital solutions built for industry leaders.
                    </p>
                </motion.div>
            </section>

            {/* Filter Tabs */}
            <section className="container mx-auto px-4 mb-12">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={cn(
                                'px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300',
                                activeFilter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'glass border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-white'
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.35, type: 'spring', stiffness: 80 }}
                                className="group relative"
                            >
                                <div className="glass rounded-[2rem] overflow-hidden border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-all duration-500 flex flex-col h-full hover:border-primary/20 hover:-translate-y-2">
                                    <div className="aspect-video relative overflow-hidden bg-slate-800">
                                        {projectImages[project.title] ? (
                                            <img
                                                src={projectImages[project.title]}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse" />
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button
                                                variant="secondary"
                                                onClick={() => openModal(`Case study and project breakdown for ${project.title}`)}
                                                className="rounded-full font-bold"
                                            >
                                                VIEW CASE STUDY <ExternalLink className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-8 space-y-4 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-black italic tracking-tight">{project.title}</h3>
                                        <p className="text-muted-foreground text-sm italic leading-relaxed flex-1">{project.description}</p>
                                        <div className="pt-4 border-t border-white/5">
                                            <Button
                                                variant="link"
                                                onClick={() => openModal(`Technical architecture and stack details for ${project.title}`)}
                                                className="p-0 h-auto text-primary font-bold text-xs tracking-widest uppercase italic group-hover:translate-x-2 transition-transform"
                                            >
                                                Explore Architecture <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center text-muted-foreground italic"
                    >
                        No projects in this category yet.
                    </motion.div>
                )}
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 py-32 text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">Your project could be <span className="text-primary italic">next.</span></h2>
                    <Button
                        size="lg"
                        onClick={() => openModal('Start a new project inquiry from the portfolio page')}
                        className="rounded-full bg-primary h-20 px-16 text-2xl font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        START YOUR JOURNEY <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

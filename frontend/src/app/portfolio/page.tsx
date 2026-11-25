'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchImages } from '@/lib/image-api';
import { useInteraction } from '@/components/interaction-provider';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PortfolioProject {
    title: string;
    category: string;
    query: string;
    image: string;
    description: string;
}

const projects: PortfolioProject[] = [
    {
        title: 'Noor-e-ilahi Platform',
        category: 'Web Development',
        query: 'sacred architecture modern digital interface islamic',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        description: 'Global Islamic technology ecosystem with real-time astronomical geodesy, 11 languages, and offline PWA architecture.'
    },
    {
        title: 'RateMyUX AI Suite',
        category: 'UI/UX Design',
        query: 'modern user interface design audit dashboard',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
        description: 'Neural Vision AI platform providing 11-dimension heuristic UX evaluation, visual hierarchy audits, and redesign roadmaps.'
    },
    {
        title: 'Nexus SaaS Platform',
        category: 'App Development',
        query: 'modern saas dashboard software',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        description: 'A complete enterprise resource planning tool with real-time analytics.'
    },
    {
        title: 'Velvet E-commerce',
        category: 'UI/UX Design',
        query: 'luxury fashion website design',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        description: 'Immersive shopping experience for a high-end fashion brand.'
    },
    {
        title: 'Titan Infrastructure',
        category: 'Cloud Solutions',
        query: 'server room data center technology',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        description: 'Scalable cloud architecture for a global fintech company.'
    },
    {
        title: 'Nova Mobile',
        category: 'App Development',
        query: 'modern smartphone app interface',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        description: 'Social networking app focused on professional networking.'
    },
    {
        title: 'Cyber Guard',
        category: 'Security',
        query: 'cyber security technology interface',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
        description: 'Real-time threat detection and monitoring system.'
    },
    {
        title: 'Apex Marketing',
        category: 'Growth',
        query: 'marketing data analytics charts',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        description: 'Data-driven marketing automation platform.'
    },
    {
        title: 'WeekendTravellers',
        category: 'Web Development',
        query: 'travel destination adventure landscape nature',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
        description: 'AI-powered travel discovery platform with real-time flight aggregation, LLM itinerary generation, and personalized trip recommendations for 95k monthly users.'
    },
    {
        title: 'Unqode Builder',
        category: 'App Development',
        query: 'drag drop app builder interface software',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
        description: 'Multi-tenant no-code application builder SaaS with real-time collaboration, schema-per-tenant PostgreSQL isolation, and a WebGL-accelerated canvas drag-and-drop engine.'
    },
    {
        title: 'MediConnect Pro',
        category: 'App Development',
        query: 'healthcare medical technology digital',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        description: 'HIPAA-compliant telemedicine SaaS with encrypted WebRTC video consultations, HL7 FHIR R4 EHR integrations, and sub-200ms latency across 48k active patients.'
    },
    {
        title: 'Maison Luxe AI',
        category: 'UI/UX Design',
        query: 'luxury fashion ecommerce product styling',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        description: 'AI recommendation engine for luxury fashion e-commerce using CLIP visual embeddings and collaborative filtering, achieving +41% AOV and 68% repeat purchase rate.'
    },
    {
        title: 'NestVision PropTech',
        category: 'Web Development',
        query: 'real estate property modern architecture building',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        description: 'AI-powered property platform with Three.js WebGL 3D virtual tours, real-time mortgage calculators, ML valuation models trained on 2.4M transactions, and 180k live listings.'
    },
    {
        title: 'FinServe Cloud Migration',
        category: 'Cloud Solutions',
        query: 'cloud computing server infrastructure technology network',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        description: 'Zero-downtime migration of a capital markets trading platform to Kubernetes multi-region cloud, achieving 99.999% uptime and 74% infrastructure cost reduction.'
    },
    {
        title: 'PowerFlow Enterprise',
        category: 'App Development',
        query: 'enterprise workflow automation business process',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        description: 'Microsoft Power Platform automation suite replacing legacy SAP approval workflows with Canvas Apps, Dataverse entity modeling, and Power Automate cloud flows — cutting cycle time by 92%.'
    },
    {
        title: 'LegalEdge GEO',
        category: 'Growth',
        query: 'search engine optimization data analytics digital marketing',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        description: 'Full-stack GEO and AEO campaign for a UK legal consultancy achieving primary citation status across Perplexity, ChatGPT Search, and Google AI Overviews with +312% organic traffic growth.'
    },
    {
        title: 'VaultShield Identity',
        category: 'Security',
        query: 'cyber security identity authentication biometric',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
        description: 'Enterprise zero-trust identity platform with FIDO2 WebAuthn passkeys, DPoP RFC 9449 sender-constrained tokens, and ML-KEM post-quantum cryptography for financial services.'
    },
    {
        title: 'AuraPulse Analytics',
        category: 'App Development',
        query: 'data analytics dashboard business intelligence charts',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        description: 'Real-time streaming analytics SaaS with Apache Kafka event ingestion, Clickhouse OLAP queries under 50ms, and AI-powered natural language querying for executive dashboards.'
    },
    {
        title: 'EdgeGrid CDN',
        category: 'Cloud Solutions',
        query: 'global network edge server datacenter map',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        description: 'Multi-region edge delivery infrastructure with Cloudflare Workers, LibSQL distributed SQLite, Cilium eBPF networking, and sub-30ms global TTFB for a Fortune 500 media publisher.'
    },
    {
        title: 'DesignLab DS',
        category: 'UI/UX Design',
        query: 'design system components ui library typography',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        description: 'Multi-brand enterprise design system with Figma Variables, Style Dictionary v4 CI/CD pipeline, automated token publishing to Tailwind CSS and React Storybook for 40+ brand themes.'
    },
    {
        title: 'SkyReach Mobile',
        category: 'App Development',
        query: 'mobile app smartphone interface gradient',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        description: 'Offline-first React Native mobile app with CRDT local state sync, background service workers, biometric authentication, and real-time push notification delivery to 200k+ users.'
    }
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'App Development', 'Cloud Solutions', 'Security', 'Growth'];

export default function PortfolioPage() {
    const [projectImages, setProjectImages] = useState<Record<string, string>>(() => {
        const initial: Record<string, string> = {};
        projects.forEach(p => { initial[p.title] = p.image; });
        return initial;
    });
    const [activeFilter, setActiveFilter] = useState('All');
    const { openModal } = useInteraction();

    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            try {
                const results = await Promise.allSettled(
                    projects.map(async (project) => {
                        const images = await fetchImages(project.query, 1);
                        return images.length > 0 ? { title: project.title, url: images[0].url } : null;
                    })
                );
                if (!isMounted) return;
                const imagesMap: Record<string, string> = {};
                results.forEach(res => {
                    if (res.status === 'fulfilled' && res.value) {
                        imagesMap[res.value.title] = res.value.url;
                    }
                });
                if (Object.keys(imagesMap).length > 0) {
                    setProjectImages(prev => ({ ...prev, ...imagesMap }));
                }
            } catch {
                // Keep default images
            }
        };
        loadImages();
        return () => { isMounted = false; };
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
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
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
                                        <img
                                            src={projectImages[project.title] || project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = project.image;
                                            }}
                                        />
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
                        className="rounded-full bg-primary h-14 px-8 text-lg sm:h-20 sm:px-16 sm:text-2xl font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        START YOUR JOURNEY <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

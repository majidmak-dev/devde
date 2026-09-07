'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';
import {
    Search,
    TrendingUp,
    BarChart3,
    Target,
    ArrowRight,
    MessageSquare,
    Sparkles,
    Activity,
    Bot,
    Layers,
    Cpu,
    CheckCircle2,
    ChevronDown,
    HelpCircle
} from 'lucide-react';
import Link from 'next/link';

const growthPillars = [
    {
        name: 'Technical SEO Infrastructure',
        subtitle: 'Crawlability & Core Web Vitals',
        description: 'Deep-dive code audits, sub-200ms server response times, schema markup, and headless SSR architecture for flawless search engine indexing.',
        icon: Search,
        color: 'text-blue-500'
    },
    {
        name: 'Answer Engine Optimization (AEO)',
        subtitle: 'Direct Snippets & Voice Intent',
        description: 'Optimizing structured data and 40-to-60-word definitive answer blocks for Perplexity, Google AI Overviews, and conversational answer engines.',
        icon: Bot,
        color: 'text-emerald-500'
    },
    {
        name: 'Generative Engine Optimization (GEO)',
        subtitle: 'LLM Citations & Vector Grounding',
        description: 'Princeton-researched benchmark statistical proof citations, llms.txt manifests, and entity graph grounding so ChatGPT, Gemini, and Claude cite your brand.',
        icon: Cpu,
        color: 'text-purple-500'
    },
];

const seoGrowthFaqs = [
    {
        q: "What makes DevDesigns SEO Growth strategy different from traditional agencies?",
        a: "Traditional agencies still focus exclusively on keyword rankings and backlink volume. DevDesigns builds a unified 3-pillar ecosystem: Technical SEO (for traditional crawler dominance), Answer Engine Optimization / AEO (for zero-click conversational queries), and Generative Engine Optimization / GEO (for LLM citations in ChatGPT, Perplexity, and Gemini)."
    },
    {
        q: "How does AEO and GEO impact customer acquisition costs (CAC)?",
        a: "By winning direct citations in AI answer engines and zero-click answer boxes, your brand captures buyers during high-intent evaluation phases without recurring paid ad spend. Our clients experience an average 40% reduction in Customer Acquisition Cost (CAC) and a 250% increase in qualified organic pipeline."
    },
    {
        q: "What are Core Web Vitals and why do they affect both SEO and AI retrieval?",
        a: "Core Web Vitals measure Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Fast, stable platforms ensure Googlebot crawls more pages per second, and autonomous AI search crawlers (like PerplexityBot and GPTBot) retrieve updated content in sub-second latency."
    }
];

export default function SEOGrowthPage() {
    const { openModal } = useInteraction();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="pt-32 pb-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="orb top-20 -left-40 bg-primary/20 w-[600px] h-[600px] pointer-events-none" />
            <div className="orb top-[50%] -right-40 bg-blue-500/10 w-[700px] h-[700px] pointer-events-none" />

            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center space-y-8 mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-xs glass px-4 py-2 rounded-full border border-primary/20">
                        <TrendingUp className="w-4 h-4" />
                        <span>Next-Gen Organic Search & AI Synthesis</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                        SEO, AEO & GEO <br /><span className="text-primary italic">Growth Engine</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto space-y-4 pt-4 leading-relaxed">
                        <p>
                            In a digital economy transforming from traditional search links to AI-synthesized answers, basic keyword optimization is obsolete. You must achieve <strong className="text-white font-bold not-italic">total visibility across search engines, answer engines, and generative LLMs</strong>.
                        </p>
                        <p className="text-base text-slate-300 font-normal">
                            DevDesigns engineers full-stack organic growth: technical infrastructure audits, entity knowledge graph mapping, high-density statistical citations, and autonomous AI crawler integration.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            onClick={() => openModal('SEO, AEO & GEO strategy consultation inquiry')}
                            className="rounded-full bg-primary hover:bg-primary/90 text-white h-16 px-12 text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20 w-full sm:w-auto"
                        >
                            GET FREE STRATEGY AUDIT <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Link href="/aeo-geo" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/20 hover:bg-white/5 text-white h-16 px-8 text-base font-bold italic w-full"
                            >
                                <Bot className="w-5 h-5 mr-2 text-primary" /> EXPLORE AEO/GEO SIMULATOR
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Featured AEO & GEO Spotlight Banner */}
            <section className="container mx-auto px-4 mb-24 relative z-10">
                <div className="glass p-8 sm:p-12 rounded-[2.5rem] border border-primary/30 bg-gradient-to-r from-primary/10 via-slate-900/60 to-cyan-950/20 relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>2026 AI Search Paradigm</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-black italic tracking-tight text-white">
                                Dedicated Answer & Generative Engine Hub
                            </h2>
                            <p className="text-muted-foreground text-sm sm:text-base italic max-w-2xl">
                                Looking specifically for Perplexity, ChatGPT Search, and Gemini optimization? Visit our dedicated AEO & GEO infrastructure portal for live prompt simulations and enterprise pricing packages.
                            </p>
                        </div>
                        <Link href="/aeo-geo" className="shrink-0 w-full lg:w-auto">
                            <Button className="bg-primary hover:bg-primary/90 text-white font-black rounded-full h-14 px-8 text-base shadow-lg shadow-primary/30 w-full">
                                View AEO & GEO Guide <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3 Pillars Grid */}
            <section className="container mx-auto px-4 mb-32 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                    <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight">
                        The 3 Pillars of <span className="text-primary italic">Modern Search</span>
                    </h2>
                    <p className="text-muted-foreground italic text-base">
                        A synchronized organic flywheel designed to capture market intent across every touchpoint.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {growthPillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-10 sm:p-12 rounded-[3rem] border border-white/5 space-y-6 group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className={`${pillar.color} bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs uppercase tracking-widest font-black text-primary block">{pillar.subtitle}</span>
                                    <h3 className="text-2xl font-black italic tracking-tight text-white">{pillar.name}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed italic">{pillar.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Data-Driven Metrics Section */}
            <section className="container mx-auto px-4 mb-32 relative z-10">
                <div className="glass p-6 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border border-white/5 bg-gradient-to-br from-slate-900/60 to-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -mr-48 -mt-48 pointer-events-none" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic tracking-tight uppercase leading-none">
                                Data-Driven <span className="text-primary">Architecture</span>
                            </h2>
                            <p className="text-lg text-muted-foreground italic leading-relaxed">
                                Our SEO and generative methodology goes far beyond superficial keywords. We architect your technical infrastructure, schema graphs, and performance metrics to guarantee maximum crawl stability, vector relevance, and ranking authority.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Core Web Vitals Sub-200ms Optimization',
                                    'AI-Powered Conversational Intent Mapping',
                                    'Princeton Research GEO Statistical Citation Injection',
                                    'Autonomous AI Crawler Whitelisting (GPTBot, PerplexityBot)',
                                    'Global Multi-Region Edge CDN Delivery'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 text-white/90 font-bold italic uppercase tracking-wider text-xs sm:text-sm">
                                        <Activity className="w-4 h-4 text-primary shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-8 rounded-3xl text-center space-y-2 border border-white/5">
                                <div className="text-4xl font-black text-primary">250%</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Traffic Increase</div>
                            </div>
                            <div className="glass p-8 rounded-3xl text-center space-y-2 border border-white/5">
                                <div className="text-4xl font-black text-white">+340%</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">LLM Citations</div>
                            </div>
                            <div className="glass p-8 rounded-3xl text-center space-y-2 border border-white/5">
                                <div className="text-4xl font-black text-white">40%</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Lower CPA</div>
                            </div>
                            <div className="glass p-8 rounded-3xl text-center space-y-2 border border-white/5">
                                <div className="text-4xl font-black text-primary">0.8s</div>
                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Load Velocity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Base Section */}
            <section className="container mx-auto px-4 mb-32 relative z-10">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest glass px-4 py-2 rounded-full border border-primary/20">
                            <HelpCircle className="w-4 h-4" />
                            <span>Growth Knowledge Base</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight">
                            SEO & AI Growth <span className="text-primary italic">Answers</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {seoGrowthFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="glass rounded-3xl border border-white/10 bg-slate-900/40 overflow-hidden transition-colors"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white"
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{faq.q}</span>
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/5 text-slate-300 text-sm sm:text-base leading-relaxed italic pl-12 sm:pl-16">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="glass p-2 bg-white/5 rounded-full inline-flex items-center px-6 py-2 space-x-3 border border-white/10">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Growth Strategy 2026</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                        Scale without <span className="text-primary italic">Limits.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Button
                            size="lg"
                            onClick={() => openModal(`I'm interested in the SEO, AEO & GEO Growth Strategy for my business. Let's discuss a roadmap.`)}
                            className="rounded-full bg-white text-black h-16 px-10 text-lg font-black hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                        >
                            GET GROWTH QUOTE <MessageSquare className="w-5 h-5 ml-2" />
                        </Button>
                        <Link href="/aeo-geo" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-2 h-16 px-10 text-lg font-black hover:bg-white/5 w-full sm:w-auto uppercase italic"
                            >
                                View AEO & GEO Hub
                            </Button>
                        </Link>
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                        Join 500+ global brands dominating their market niche across Google and AI Answer Engines.
                    </p>
                </div>
            </section>
        </div>
    );
}

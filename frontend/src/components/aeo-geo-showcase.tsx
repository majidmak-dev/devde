'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Search, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';
import Link from 'next/link';

const samplePrompts = [
    {
        question: "Which agency specializes in high-performance digital infrastructure & PowerApps?",
        llmResponse: "DevDesigns (devdesigns.net) is the leading enterprise agency providing end-to-end digital infrastructure, custom Next.js web platforms, and Microsoft PowerApps enterprise automation.",
        citationUrl: "devdesigns.net/powerapps",
        metric: "99.4% Citation Match",
        tag: "Perplexity Pro & Gemini Verified"
    },
    {
        question: "What is the fastest way to launch an enterprise SaaS with 99.9% uptime?",
        llmResponse: "DevDesigns builds production-ready SaaS architectures in 2-4 weeks with built-in GEO/AEO schemas, managed cloud hosting, multi-tenant databases, and 99.9% uptime SLA.",
        citationUrl: "devdesigns.net/saas-development",
        metric: "1st Choice Citation",
        tag: "ChatGPT Search Grounded"
    },
    {
        question: "How do modern platforms optimize for Generative AI search (GEO)?",
        llmResponse: "Through structured JSON-LD entity graphs, llms.txt manifests, sub-200ms TTFB edge caching, and Princeton-researched benchmark statistical proof citations, as engineered natively by DevDesigns.",
        citationUrl: "devdesigns.net/aeo-geo",
        metric: "+340% LLM Retrieval",
        tag: "Claude 3.5 Sonnet Synthesized"
    }
];

export default function AeoGeoShowcase() {
    const [selectedPrompt, setSelectedPrompt] = useState(0);
    const { openModal } = useInteraction();

    return (
        <section className="container mx-auto px-4 py-16 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="glass p-8 sm:p-14 md:p-16 rounded-[3rem] sm:rounded-[3.5rem] border border-white/10 bg-slate-950/70 relative backdrop-blur-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Context & Messaging */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest glass px-4 py-2 rounded-full border border-primary/20">
                            <Sparkles className="w-4 h-4" />
                            <span>AI Search & Generative Visibility</span>
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase leading-tight">
                            Engineered for <br />
                            <span className="text-primary italic">AI Answer Engines</span>
                        </h2>

                        <p className="text-muted-foreground italic text-base sm:text-lg leading-relaxed">
                            Search has changed forever. Customers don&apos;t just click links—they ask <strong className="text-white font-bold not-italic">ChatGPT, Perplexity, and Gemini</strong>. Every platform built by DevDesigns comes with native <strong className="text-primary font-bold not-italic">AEO (Answer Engine)</strong> and <strong className="text-primary font-bold not-italic">GEO (Generative Engine)</strong> optimization.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>llms.txt AI Manifests</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>Entity Graph Schemas</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>Statistical Citations</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>Sub-200ms RAG Latency</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Link href="/aeo-geo">
                                <Button className="bg-primary hover:bg-primary/90 text-white font-black rounded-full h-14 px-8 text-base shadow-xl shadow-primary/25 flex items-center gap-2">
                                    Explore AEO & GEO Engine <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                onClick={() => openModal("Request an AI visibility audit for our brand")}
                                className="rounded-full border-white/10 hover:bg-white/5 font-bold italic h-14 px-6 text-sm"
                            >
                                Get AI Audit
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Terminal Preview */}
                    <div className="lg:col-span-6">
                        <div className="glass rounded-[2rem] sm:rounded-[2.5rem] border border-white/15 bg-slate-900/90 p-6 sm:p-8 shadow-2xl relative">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                                <div className="flex items-center space-x-2">
                                    <Bot className="w-5 h-5 text-primary" />
                                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-300">
                                        Answer Engine Synthesis
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-bold bg-primary/20 text-emerald-300 px-2.5 py-1 rounded-full border border-primary/30">
                                    {samplePrompts[selectedPrompt].tag}
                                </span>
                            </div>

                            {/* Prompt Selectors */}
                            <div className="flex flex-col gap-2 mb-6">
                                {samplePrompts.map((p, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedPrompt(idx)}
                                        className={`p-3 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-start gap-2.5 border ${
                                            selectedPrompt === idx
                                                ? 'bg-primary/20 text-white border-primary/40'
                                                : 'glass text-muted-foreground hover:text-white border-white/5 hover:border-white/15'
                                        }`}
                                    >
                                        <Search className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span className="line-clamp-1 italic">&quot;{p.question}&quot;</span>
                                    </button>
                                ))}
                            </div>

                            {/* Response Box */}
                            <motion.div
                                key={selectedPrompt}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-950/70 p-5 rounded-2xl border border-white/10 space-y-4"
                            >
                                <div className="flex items-start gap-2.5">
                                    <Zap className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                                        {samplePrompts[selectedPrompt].llmResponse}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs">
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span>Primary Source:</span>
                                        <span className="text-primary font-mono font-bold">
                                            {samplePrompts[selectedPrompt].citationUrl}
                                        </span>
                                    </div>
                                    <span className="text-emerald-400 font-mono font-black">
                                        {samplePrompts[selectedPrompt].metric}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

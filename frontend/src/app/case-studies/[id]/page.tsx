"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { caseStudies } from "@/lib/case-studies-data";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/interaction-provider";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function CaseStudyDetail() {
    const { id } = useParams();
    const router = useRouter();
    const { openModal } = useInteraction();

    const study = caseStudies.find(s => s.id === id);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black italic">Case Study Not Found</h1>
                    <Button variant="link" className="text-primary" onClick={() => router.push('/case-studies')}>
                        Back to Case Studies
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20">
            {/* Background Orbs */}
            <div className="orb top-0 left-0 bg-primary/10 w-[1000px] h-[1000px]" />
            <div className="orb bottom-0 right-0 bg-blue-500/5 w-[800px] h-[800px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Navigation & Header */}
                <div className="py-12">
                    <Button
                        variant="ghost"
                        onClick={() => router.push('/case-studies')}
                        className="group text-muted-foreground hover:text-white mb-8 p-0"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Showcase
                    </Button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="glass px-4 py-1 rounded-full border border-primary/20 text-xs font-black uppercase tracking-widest text-primary">
                                {study.category}
                            </span>
                            <span className="text-muted-foreground italic font-medium opacity-60">Client: {study.client}</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-none">
                            {study.title}
                        </h1>
                        <p className="text-2xl text-muted-foreground italic max-w-4xl opacity-80 leading-relaxed shadow-sm">
                            {study.description}
                        </p>
                    </motion.div>
                </div>

                {/* Hero Image / Video Placeholder Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 glass shadow-2xl mb-24"
                >
                    <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                </motion.div>

                {/* Impact Metrics Grid */}
                <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {study.metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-12 rounded-[3rem] border border-white/5 flex flex-col items-center text-center group hover:border-primary/30 transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {i === 0 ? <TrendingUp className="text-primary w-8 h-8" /> : i === 1 ? <Zap className="text-primary w-8 h-8" /> : <ShieldCheck className="text-primary w-8 h-8" />}
                            </div>
                            <div className="text-5xl font-black italic tracking-tighter mb-2">{metric.value}</div>
                            <div className="text-muted-foreground font-bold italic tracking-wide uppercase opacity-60">{metric.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* Content Grid: Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
                    <motion.section
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="glass p-12 rounded-[4rem] border border-red-500/10 bg-red-500/2">
                            <h2 className="text-3xl font-black italic mb-6 text-red-400">The Challenge</h2>
                            <p className="text-xl text-muted-foreground italic leading-relaxed opacity-90">
                                {study.challenge}
                            </p>
                        </div>
                        <div className="glass p-12 rounded-[4rem] border border-primary/20 bg-primary/2">
                            <h2 className="text-3xl font-black italic mb-6 text-primary">The Solution</h2>
                            <p className="text-xl text-muted-foreground italic leading-relaxed opacity-90">
                                {study.solution}
                            </p>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl font-black italic tracking-tight">Key Deliverables</h2>
                        <ul className="space-y-6">
                            {study.results.map((result, i) => (
                                <li key={i} className="flex items-start gap-4 text-xl italic text-muted-foreground hover:text-white transition-colors">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    {result}
                                </li>
                            ))}
                        </ul>

                        <div className="p-10 rounded-[3rem] border border-primary/30 bg-primary/5 glass relative overflow-hidden group">
                            <div className="orb -top-10 -right-10 bg-primary/20 w-[200px] h-[200px]" />
                            <h3 className="text-2xl font-black italic mb-4 relative z-10">AI Architecture Audit</h3>
                            <p className="text-muted-foreground italic mb-8 relative z-10 opacity-80">
                                Want our AI to analyze the specific tech stack and modular patterns used in this project?
                            </p>
                            <Button
                                onClick={() => openModal(`Analyze the architecture of the '${study.title}' case study. Explain the technical layers, performance optimizations, and why it was successful.`)}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-14 text-lg btn-glow shadow-primary/20 relative z-10"
                            >
                                Deep Analysis
                            </Button>
                        </div>
                    </motion.section>
                </div>

                {/* Final Interactive CTA */}
                <section className="py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter">
                            Ready for <span className="text-primary italic">Transformation?</span>
                        </h2>
                        <p className="text-2xl text-muted-foreground italic opacity-70">
                            Apply the same enterprise-grade infrastructure and design to your business assets.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button
                                onClick={() => openModal(`I've just read the '${study.title}' case study and I want a similar solution for my business. Let's discuss a roadmap.`)}
                                className="bg-primary hover:bg-primary/90 text-white font-black rounded-3xl h-20 px-16 text-2xl btn-glow shadow-primary/20"
                            >
                                Replicate Success
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => router.push('/case-studies')}
                                className="border-white/10 hover:bg-white/5 rounded-3xl h-20 px-16 text-2xl font-black italic"
                            >
                                Browse More
                            </Button>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

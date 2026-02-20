"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Cpu } from "lucide-react";

export default function CaseStudies() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20">
            {/* Background Orbs */}
            <div className="orb top-20 right-[5%] bg-primary/10 w-[600px] h-[600px]" />
            <div className="orb bottom-[20%] left-[5%] bg-blue-500/5 w-[800px] h-[800px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic">
                            Success <span className="text-primary italic">Engineered.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto opacity-80 leading-relaxed">
                            A showcase of technical excellence, strategic design, and enterprise-grade results.
                        </p>
                    </motion.div>
                </section>

                {/* Grid */}
                <section className="py-12 pb-32">
                    <div className="grid grid-cols-1 gap-16">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden rounded-[3rem] border border-white/5 glass aspect-[16/10] shadow-2xl">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-8 left-8 glass px-6 py-2 rounded-full border border-white/10 shadow-xl">
                                            <span className="text-sm font-black italic tracking-widest uppercase text-primary">{study.category}</span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="space-y-8 px-4 lg:px-8">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter group-hover:text-primary transition-colors duration-300">
                                                {study.title}
                                            </h2>
                                            <p className="text-xl text-muted-foreground italic leading-relaxed opacity-80">
                                                {study.description}
                                            </p>
                                        </div>

                                        {/* Impact Metrics Snippet */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {study.metrics.map((metric, i) => (
                                                <div key={i} className="glass p-4 rounded-2xl border border-white/5 bg-white/2 overflow-hidden relative">
                                                    <div className="text-primary font-black text-xl mb-1">{metric.value}</div>
                                                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <Link href={`/case-studies/${study.id}`}>
                                                <Button className="bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-14 px-10 text-lg btn-glow shadow-primary/20">
                                                    View Full Analysis <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                            <div className="text-lg font-black italic text-primary/80">
                                                {study.impact}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* AI Bottom Banner */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass p-16 rounded-[4rem] border border-primary/20 bg-primary/5 shadow-2xl shadow-primary/10 max-w-5xl mx-auto overflow-hidden relative group"
                    >
                        <div className="orb -top-20 -left-20 bg-primary/20 w-[400px] h-[400px]" />
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Cpu className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic mb-6">
                            Want an AI Audit of your <br /><span className="text-primary italic">Architecture?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground italic mb-10 max-w-2xl mx-auto opacity-80 leading-relaxed">
                            Our DD Assistant can analyze your current infrastructure based on our successful case studies and provide a custom roadmap.
                        </p>
                        <Button
                            variant="outline"
                            className="border-primary/50 text-primary font-black rounded-2xl h-16 px-12 text-xl hover:bg-primary/5 transition-all"
                        >
                            Speak to the AI Architect
                        </Button>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Activity, RefreshCw, Eye, Zap, ShieldAlert, ShieldCheck, Database, ArrowRight, Sparkles, Terminal, AlertTriangle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/interaction-provider";

const securityFeatures = [
    {
        title: "Zero Trust Architecture",
        description: "Adaptive perimeter defense that never trusts and always verifies every request, regardless of origin.",
        icon: ShieldAlert,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "hover:border-rose-500/30"
    },
    {
        title: "End-to-End Encryption",
        description: "Military-grade AES-256 encryption at rest and in transit, ensuring data sovereignty across all nodes.",
        icon: Lock,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "hover:border-primary/30"
    },
    {
        title: "Proactive Patching",
        description: "Autonomous maintenance system that identifies and neutralized vulnerabilities before they can be exploited.",
        icon: RefreshCw,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "hover:border-blue-500/30"
    },
    {
        title: "Elite 24/7 Monitoring",
        description: "Human-AI hybrid surveillance teams providing real-time threat response and infrastructure stability.",
        icon: Eye,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "hover:border-emerald-500/30"
    }
];

export default function SecurityPage() {
    const { openModal } = useInteraction();
    const [scanTarget, setScanTarget] = useState("");

    const handleAIAudit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!scanTarget) return;
        openModal(`Perform a deep-dive Security & Maintenance audit for the following technology stack/asset: '${scanTarget}'. Analyze potential vulnerabilities, maintenance requirements, and scaling risks using 2026 OpenAI security standards.`);
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20 overflow-hidden">
            {/* Background Fortress Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8 max-w-5xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4">
                            <ShieldCheck className="w-4 h-4" /> OpenAI Protected Infrastructure
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic leading-none">
                            The <span className="text-primary italic">Fortress</span> of Digital Assets
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto opacity-80 leading-relaxed font-medium">
                            Securing enterprise sovereignty with OpenAI-driven defense protocols and proactive, predictive maintenance.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 pt-12">
                            <Button
                                onClick={() => openModal("I need a comprehensive security and maintenance plan for my enterprise project. Let's discuss high-availability and zero-trust policies.")}
                                className="bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-20 px-12 text-2xl btn-glow shadow-primary/20"
                            >
                                Start Defense Phase
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => openModal("Explain how DevDesigns uses OpenAI models to predict server maintenance and prevent downtime. What is the success rate?")}
                                className="border-white/10 hover:bg-white/5 rounded-2xl h-20 px-10 text-xl font-bold italic"
                            >
                                <Sparkles className="mr-2 w-6 h-6 text-primary" /> AI Strategy Audit
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Real-time AI Security Scanner Section */}
                <section className="py-24">
                    <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/5 relative bg-white/[0.01] overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Terminal className="w-64 h-64" />
                        </div>

                        <div className="max-w-3xl space-y-8 relative z-10 text-left">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <Sparkles className="w-8 h-8 " />
                                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter">AI Security <span className="text-white italic">Scanner</span></h2>
                                </div>
                                <p className="text-xl text-muted-foreground italic leading-relaxed">
                                    Powered by **OpenAI**, our scanner performs a simulated deep-audit of your infrastructure stack. Identify vulnerabilities before they manifest as critical failures.
                                </p>
                            </div>

                            <form onSubmit={handleAIAudit} className="relative group">
                                <div className="flex flex-col md:flex-row gap-4 p-2 glass rounded-[2.5rem] border border-white/10 focus-within:border-primary transition-all duration-500 shadow-2xl bg-black/40">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                                        <input
                                            type="text"
                                            value={scanTarget}
                                            onChange={(e) => setScanTarget(e.target.value)}
                                            placeholder="Enter tech stack (e.g. Next.js, AWS, Postgres)..."
                                            className="w-full pl-16 pr-6 py-6 bg-transparent outline-none text-xl font-bold placeholder:text-white/20"
                                        />
                                    </div>
                                    <Button type="submit" className="h-20 px-12 rounded-[2rem] bg-primary text-white text-xl font-black btn-glow">
                                        RUN AI AUDIT
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Predictive Maintenance Engine Section */}
                <section className="py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Maintenance Logs / Pulse */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass p-12 rounded-[4rem] border border-blue-500/20 bg-blue-500/5 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

                            <div className="relative z-10 space-y-12">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                        <span className="text-xs font-black uppercase tracking-widest text-blue-400">OpenAI Maintenance Engine</span>
                                    </div>
                                    <Activity className="w-6 h-6 text-blue-500/50" />
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black italic tracking-tighter">Predictive <span className="text-blue-500 italic">Protocols</span></h3>
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />
                                                <div className="text-sm font-bold italic tracking-tight">System Patching Optimization</div>
                                            </div>
                                            <span className="text-[10px] font-black text-primary px-2 py-1 rounded-md bg-primary/10 uppercase">Active</span>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <AlertTriangle className="w-5 h-5 text-amber-500" />
                                                <div className="text-sm font-bold italic tracking-tight">Latency Surge Prediction</div>
                                            </div>
                                            <span className="text-[10px] font-black text-blue-400 px-2 py-1 rounded-md bg-blue-500/10 uppercase">Monitoring</span>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <Database className="w-5 h-5 text-emerald-500" />
                                                <div className="text-sm font-bold italic tracking-tight">Auto-Scaling Trigger Logic</div>
                                            </div>
                                            <span className="text-[10px] font-black text-emerald-400 px-2 py-1 rounded-md bg-emerald-500/10 uppercase">Stable</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-[2rem] bg-black/40 border border-white/5 space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest opacity-50">
                                        <span>OpenAI Inference Log</span>
                                        <span>Confidence: 99.8%</span>
                                    </div>
                                    <div className="font-mono text-[10px] text-blue-300 overflow-hidden text-ellipsis whitespace-nowrap">
                                        ANALYSIS: PREDICTING_DOWNTIME_RISK_FOR_NODE_ZEPHYR_IN_48H... [PREVENTATIVE_PATCH_QUEUED]
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-8 text-left"
                        >
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Autonomous <span className="text-blue-500 italic">Maintenance</span></h2>
                                <p className="text-xl text-muted-foreground italic leading-relaxed">
                                    We don&apos;t wait for things to break. Our OpenAI-powered maintenance layer identifies patterns in traffic, error logs, and performance metrics to proactively optimize your environment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-8 rounded-3xl glass border border-white/5 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                        <Activity className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <h4 className="font-black italic">Predictive Uptime</h4>
                                    <p className="text-xs text-muted-foreground italic leading-relaxed">AI analysis anticipating traffic spikes and resource needs.</p>
                                </div>
                                <div className="p-8 rounded-3xl glass border border-white/5 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-black italic">Failsafe Recovery</h4>
                                    <p className="text-xs text-muted-foreground italic leading-relaxed">Automated rollbacks and recovery scripts managed by AI logic.</p>
                                </div>
                            </div>
                            <Button
                                onClick={() => openModal("Generate a maintenance schedule for a high-traffic e-commerce application using DevDesigns' predictive AI model.")}
                                className="h-16 px-10 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold italic border border-white/10"
                            >
                                View Maintenance Blueprint
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Transparency Notice */}
                <section className="py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-8 rounded-3xl glass border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center gap-8 text-left"
                    >
                        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Eye className="w-8 h-8 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black italic uppercase tracking-widest">Local Service Transparency</h3>
                            <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">
                                Our platform utilizes secure local network handshakes to facilitate high-speed communication between your browser and our OpenAI-certified diagnostic nodes. If you see a prompt for &quot;Accessing other apps and services,&quot; it is solely to verify secure authentication tokens across our microservice ecosystem. **DevDesigns does not monitor or record local device activity.**
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Infrastructure Guardians feature grid */}
                <section className="py-24 border-y border-white/5">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Infrastructure <span className="text-primary italic">Guardians</span></h2>
                        <p className="text-muted-foreground italic opacity-70 max-w-2xl mx-auto font-medium font-bold">Every layer fortified with OpenAI intelligence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {securityFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`glass p-10 rounded-[3rem] border border-white/5 space-y-8 group transition-all duration-500 ${feature.border}`}
                            >
                                <div className={`w-16 h-16 rounded-3xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black italic">{feature.title}</h3>
                                    <p className="text-muted-foreground italic opacity-70 leading-relaxed text-sm">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Final Dominance Section */}
                <section className="py-24 pb-48 text-center">
                    <div className="max-w-4xl mx-auto glass p-20 rounded-[4rem] border border-primary/20 bg-primary/5 relative overflow-hidden group shadow-2xl flex flex-col items-center">
                        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="glass p-6 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center space-y-2">
                                <Database className="w-8 h-8 text-primary/50" />
                                <div className="text-2xl font-black tracking-tighter italic">99.999%</div>
                                <div className="text-[8px] uppercase font-black opacity-40 tracking-widest">Availability</div>
                            </div>
                            <div className="glass p-6 rounded-[2.5rem] border border-white/5 flex flex-col items-center justify-center text-center space-y-2">
                                <ShieldCheck className="w-8 h-8 text-blue-500/50" />
                                <div className="text-2xl font-black tracking-tighter italic">100%</div>
                                <div className="text-[8px] uppercase font-black opacity-40 tracking-widest">Defense Rate</div>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic mb-8 relative z-10 leading-none">
                            Impenetrable <br /><span className="text-primary italic">Sovereignty</span>
                        </h2>
                        <p className="text-xl text-muted-foreground italic mb-12 max-w-2xl relative z-10 leading-relaxed font-medium">
                            Don&apos;t just survive. Dominate the digital landscape with security and maintenance protocols designed for the future, powered by **OpenAI**.
                        </p>
                        <Button
                            onClick={() => openModal("I want to discuss an elite security and maintenance strategy for my enterprise assets. Connect me with an OpenAI-certified specialist.")}
                            className="bg-primary hover:bg-primary/90 text-white font-black rounded-3xl h-20 px-16 text-2xl btn-glow shadow-primary/20 w-fit relative z-10"
                        >
                            SECURE NOW <ArrowRight className="ml-4 w-8 h-8" />
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
}

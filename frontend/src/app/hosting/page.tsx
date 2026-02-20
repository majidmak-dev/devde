'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Server, Cloud, ShieldCheck, Zap, Globe, Cpu, ArrowRight, CheckCircle, Activity, Database, Network } from 'lucide-react';
import { useInteraction } from '@/components/interaction-provider';
import { cn } from '@/lib/utils';

const plans = [
    { id: 'h-shared', name: 'Shared Hosting', price: '$9.99', features: ['10GB Storage', '100GB Bandwidth', 'Free SSL', '24/7 Support'], icon: Globe },
    { id: 'h-vps', name: 'Cloud VPS', price: '$24.99', features: ['50GB Storage', 'Unlimited Bandwidth', 'Dedicated IP', 'Automated Backups'], icon: Cloud, popular: true },
    { id: 'h-dedicated', name: 'Dedicated Server', price: '$149.99', features: ['500GB NVMe', 'Root Access', 'Managed Security', 'High Performance'], icon: Server },
];

function StatusPulse() {
    const [metrics, setMetrics] = useState({
        latency: '24ms',
        uptime: '99.998%',
        load: '12%',
        traffic: '1.2GB/s'
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics({
                latency: Math.floor(Math.random() * 5 + 20) + 'ms',
                uptime: (99.99 + Math.random() * 0.009).toFixed(3) + '%',
                load: Math.floor(Math.random() * 10 + 8) + '%',
                traffic: (Math.random() * 0.5 + 1).toFixed(1) + 'GB/s'
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass rounded-[2rem] p-8 border border-emerald-500/20 bg-slate-900/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-all" />

            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500">Live Pulse</h4>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Global Infrastructure Status</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Node Active</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {[
                    { label: 'Latency', value: metrics.latency, icon: Zap },
                    { label: 'Uptime', value: metrics.uptime, icon: ShieldCheck },
                    { label: 'CPU Load', value: metrics.load, icon: Cpu },
                    { label: 'Traffic', value: metrics.traffic, icon: Network }
                ].map((m, idx) => (
                    <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-1"
                    >
                        <div className="flex items-center space-x-2 text-muted-foreground">
                            <m.icon className="w-3 h-3" />
                            <span className="text-[9px] font-black uppercase tracking-widest">{m.label}</span>
                        </div>
                        <p className="text-xl font-black italic tracking-tighter text-white/90 font-mono">{m.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-3">
                    <span>Performance Optimization</span>
                    <span className="text-emerald-500">AI Driven</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "88%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default function HostingPage() {
    const { addToCart, openModal } = useInteraction();

    return (
        <div className="pt-32 pb-20 overflow-hidden">
            <section className="container mx-auto px-4 text-center space-y-6 mb-24 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-500 px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase border border-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                        <span>99.9% MISSION-CRITICAL UPTIME</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic">
                        Elite Digital <span className="text-emerald-500 italic block sm:inline">Fortress</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic leading-relaxed">
                        Sovereign infrastructure engineered for absolute performance, high-availability cloud scaling, and enterprise-grade security.
                    </p>
                </motion.div>
            </section>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {plans.map((plan, idx) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={cn(
                            "glass p-10 rounded-[2.5rem] flex flex-col items-center text-center space-y-8 border bg-slate-900/40 relative group transition-all duration-500",
                            plan.popular ? "border-emerald-500 ring-2 ring-emerald-500/20 scale-105 shadow-[0_0_40px_rgba(16,185,129,0.15)] bg-slate-900/60" : "border-white/5 hover:border-emerald-500/30"
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-emerald-500/40 z-10">
                                PEAK EFFICIENCY
                            </div>
                        )}

                        <div className={cn(
                            "w-20 h-20 rounded-3xl flex items-center justify-center border transition-all duration-700 group-hover:scale-110",
                            plan.popular ? "bg-emerald-500/20 border-emerald-500/20" : "bg-white/5 border-white/10"
                        )}>
                            <plan.icon className={cn("w-10 h-10", plan.popular ? "text-emerald-400" : "text-emerald-500 opacity-60")} />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-black italic tracking-tight">{plan.name}</h3>
                            <div className="text-5xl font-black italic tracking-tighter text-white/90">
                                {plan.price}<span className="text-base text-muted-foreground italic font-medium tracking-normal"> /mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 w-full text-left pt-6 border-t border-white/5">
                            {plan.features.map(f => (
                                <li key={f} className="flex items-center text-xs font-bold italic text-white/70">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3 shrink-0">
                                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                                    </div>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <Button
                            onClick={() => addToCart({ id: plan.id, name: plan.name, price: plan.price })}
                            className={cn(
                                "w-full h-14 rounded-2xl text-base font-black italic transition-all group-relative overflow-hidden",
                                plan.popular
                                    ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/20"
                                    : "bg-white/5 hover:bg-emerald-500/10 border border-emerald-500/20 text-emerald-500"
                            )}
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                PROVISION NOW <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </motion.div>
                ))}
            </div>

            <section className="py-24 bg-emerald-500/5 border-y border-emerald-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-tight">Extreme Performance <span className="text-emerald-500 italic">Sovereignty</span></h2>
                            <p className="text-lg text-muted-foreground italic max-w-xl leading-relaxed">
                                Our infrastructure is purpose-built for high-frequency digital operations, ensuring zero-latency scaling and unshakeable uptime.
                            </p>
                        </div>
                        <div className="space-y-8">
                            {[
                                { title: 'NVMe Storage Matrix', desc: 'Sustained read/write architectural optimization for mission-critical databases.', icon: Database },
                                { title: 'Global CDN Network', desc: 'Elite edge-deployment layer delivering sub-10ms content delivery globally.', icon: Globe },
                                { title: 'Neural DDoS Shield', desc: 'AI-powered security layers providing real-time threat neutralization and isolation.', icon: ShieldCheck }
                            ].map(item => (
                                <div key={item.title} className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 transition-all group-hover:bg-emerald-500/5 duration-500">
                                        <item.icon className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-black italic">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm italic font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <StatusPulse />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 pt-32">
                <div className="glass p-12 md:p-20 rounded-[3rem] border border-emerald-500/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] -z-10 group-hover:bg-emerald-500/[0.05] transition-all duration-700" />
                    <div className="space-y-6 text-center md:text-left relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Custom <span className="text-emerald-500 italic underline decoration-wavy decoration-emerald-500/20 underline-offset-8">Infrastructure?</span></h2>
                        <p className="text-xl text-muted-foreground italic font-medium max-w-lg leading-relaxed">Connect with our DD Assistant to engineer a bespoke high-availability cloud cluster.</p>
                    </div>
                    <Button
                        onClick={() => openModal("I need a custom high-availability hosting infrastructure setup for an enterprise application.")}
                        size="lg"
                        className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-full h-16 px-12 text-xl font-black italic group shadow-xl shadow-emerald-500/30 relative z-10 transition-all hover:scale-105"
                    >
                        CONSULT ARCHITECT <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </section>

            {/* Footer Background Light */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-emerald-500/[0.01] rounded-full blur-[150px] pointer-events-none -z-10" />
        </div>
    );
}

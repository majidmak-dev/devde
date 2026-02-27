'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Server, Globe, Package, CreditCard, MessageSquare, Clock, Activity, Zap, ShieldCheck, ChevronRight, TrendingUp, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';

const stats = [
    { label: 'Active Projects', value: '2', icon: LayoutDashboard, color: 'text-primary' },
    { label: 'Active Hosting', value: '1 Plan', icon: Server, color: 'text-emerald-500' },
    { label: 'Domains Registered', value: '3', icon: Globe, color: 'text-blue-500' },
    { label: 'Financial Portfolio', value: '$12,450', icon: CreditCard, color: 'text-amber-500' },
];

function LivePulse() {
    return (
        <div className="flex items-center space-x-6">
            <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Ecosystem Health</span>
                <span className="text-sm font-black italic text-emerald-500">99.98% Efficiency</span>
            </div>
            <div className="glass px-6 py-3 rounded-2xl flex items-center space-x-3 border border-emerald-500/20 bg-emerald-500/5 group hover:border-emerald-500/40 transition-all duration-500">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">OPTIMAL</span>
            </div>
        </div>
    );
}

export default function ClientDashboard() {
    const { openModal } = useInteraction();

    const projects = [
        { id: 1, name: 'DevDesigns Platform', progress: 78, status: 'Design Alpha', priority: 'High', tech: 'Next.js' },
        { id: 2, name: 'E-commerce API Integration', progress: 34, status: 'Deployment Phase', priority: 'Critical', tech: 'Node.js' }
    ];

    return (
        <div className="pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    <div className="flex items-center space-x-3 text-primary mb-2">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Command Center v2.0</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter">
                        Welcome, <span className="text-primary underline decoration-primary/20 underline-offset-8">Majid</span>
                    </h1>
                    <p className="text-muted-foreground italic font-medium leading-relaxed max-w-xl">
                        Integrated digital assets are performing at peak capacity. Strategic roadmap execution is on schedule.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <LivePulse />
                </motion.div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group glass p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-all" />
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500", stat.color)}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                        <h3 className="text-3xl font-black italic mt-1 tracking-tighter text-white/90">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Project Tracking */}
                <div className="lg:col-span-2 space-y-10">
                    <div className="glass p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/40">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-black italic flex items-center tracking-tight">
                                <Clock className="w-6 h-6 mr-3 text-primary" />
                                Mission Roadmap
                            </h2>
                            <Button variant="ghost" className="text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/10">Archive Flow <ChevronRight className="w-4 h-4 ml-1" /></Button>
                        </div>
                        <div className="space-y-10">
                            {projects.map((project, idx) => (
                                <div key={project.id} className="space-y-4 group">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black italic tracking-tight group-hover:text-primary transition-colors cursor-pointer">{project.name}</h4>
                                            <div className="flex items-center space-x-3">
                                                <span className="text-[10px] font-black uppercase bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">{project.tech}</span>
                                                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{project.status}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-sm font-black italic text-primary">{project.progress}%</span>
                                            <div className={cn(
                                                "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                                                project.priority === 'Critical' ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                            )}>
                                                {project.priority}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-[2px]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${project.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.2 }}
                                            className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Active Infrastructure */}
                    <div className="glass p-10 rounded-[2.5rem] border border-white/5">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black italic flex items-center tracking-tight">
                                <Package className="w-6 h-6 mr-3 text-emerald-500" />
                                Provisioned Infrastructure
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: 'devdesigns.net', desc: 'Secure Elite Domain', status: 'SECURE', expiry: 'Dec 2026', icon: ShieldCheck, color: 'text-emerald-500' },
                                { name: 'Cloud VPS - Genesis', desc: 'High Availability Cluster', status: 'ACTIVE', expiry: 'Renewal in 12d', icon: Zap, color: 'text-amber-500' }
                            ].map(service => (
                                <div key={service.name} className="p-6 rounded-[2rem] border border-white/5 bg-white/5 flex items-center justify-between group hover:border-emerald-500/20 transition-all duration-500">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <service.icon className={cn("w-6 h-6", service.color)} />
                                        </div>
                                        <div>
                                            <h4 className="font-black italic text-lg leading-tight">{service.name}</h4>
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">{service.desc}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={cn("text-[9px] font-black tracking-[0.2em] block mb-1", service.color)}>{service.status}</span>
                                        <p className="text-[10px] font-bold text-white/40 italic">{service.expiry}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-10">
                    <div className="glass p-10 rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-transparent flex flex-col space-y-6">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/20">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black italic tracking-tight">Strategic Intel</h3>
                            <p className="text-sm text-muted-foreground italic font-medium leading-relaxed">Need architectural adjustments or strategic scaling advice?</p>
                        </div>
                        <Button
                            onClick={() => openModal("I need architectural support for my active projects on the DevDesigns platform.")}
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black italic tracking-tight shadow-xl shadow-primary/20"
                        >
                            CONSULT ARCHITECT
                        </Button>
                    </div>

                    <div className="glass p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full blur-[2px] animate-pulse" />
                            <h3 className="text-xl font-black italic tracking-tight">Account Pulse</h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { label: 'Operational Since', value: 'FEB 2026', icon: Activity },
                                { label: 'Primary Node', value: 'STRIPE (TRUSTED)', icon: CreditCard },
                                { label: 'Identity Verification', value: 'AUTHENTICATED', icon: ShieldCheck, success: true }
                            ].map(item => (
                                <div key={item.label} className="flex items-center justify-between group">
                                    <div className="flex items-center space-x-3">
                                        <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                                    </div>
                                    <span className={cn("text-xs font-black italic tracking-tight", item.success ? "text-emerald-500" : "text-white/80")}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-8 border-t border-white/5 flex items-center justify-center">
                            <p className="text-[10px] font-black italic text-muted-foreground uppercase tracking-widest animate-pulse">
                                Next Execution Cycle: 04:52:12
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

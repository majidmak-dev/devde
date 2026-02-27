"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Globe, Bell, UserCheck } from "lucide-react";

const privacySections = [
    {
        id: "data-collection",
        title: "Data Collection & Sovereignty",
        icon: Globe,
        summary: "We only collect what's vital for your enterprise performance.",
        content: `At DevDesigns, we prioritize your digital sovereignty. We collect minimal information required to provide our elite infrastructure services. This includes account details, technical logs for performance optimization, and communication preferences. We do not engage in unauthorized tracking or data harvesting. Your data remains your asset.`
    },
    {
        id: "security-protocols",
        title: "Fortress Security Standards",
        icon: Shield,
        summary: "Military-grade encryption for all assets at rest and in transit.",
        content: `Our &quot;Fortress&quot; security architecture ensures that your data is protected by AES-256 encryption. We implement Zero Trust protocols, meaning every access request is verified. Our OpenAI-driven monitoring systems proactively identify and neutralize threats, ensuring your private information never falls into the wrong hands.`
    },
    {
        id: "ai-processing",
        title: "AI & Machine Learning Usage",
        icon: Lock,
        summary: "OpenAI models used for optimization, never for re-training.",
        content: `We utilize advanced OpenAI models to provide predictive maintenance and security auditing. Importantly, your proprietary data is never used to re-train public AI models. All AI processing is performed within our secure, sandboxed environments, maintaining total confidentiality for your codebases and strategies.`
    },
    {
        id: "third-party",
        title: "Third-Party Integrity",
        icon: UserCheck,
        summary: "Zero-selling policy. Third parties only for essential infra.",
        content: `DevDesigns follows a strict zero-selling policy. We never sell your data to advertisers or brokers. We only share information with essential infrastructure partners (e.g., global cloud providers, payment processors) under strict confidentiality agreements and for the sole purpose of delivering our services.`
    },
    {
        id: "device-interconnectivity",
        title: "App & Service Interconnectivity",
        icon: Bell,
        summary: "Local network permissions used only for secure API handshakes.",
        content: `To provide a seamless enterprise experience, our platform may request access to other apps and services on your device. This is strictly for secure local network handshakes, OpenAI service connectivity, and real-time infrastructure pulse monitoring. We do not access your personal files, other applications' data, or any non-essential device services.`
    }
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-48 overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                {/* Header Section */}
                <section className="text-left space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-[0.2em]"
                    >
                        <Lock className="w-4 h-4" /> Data Sovereignty Guaranteed
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter italic leading-none"
                    >
                        Privacy <span className="text-primary italic">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground italic font-medium max-w-2xl"
                    >
                        Your privacy is the cornerstone of your digital legacy. At DevDesigns, we don&apos;t just protect data; we defend your sovereignty.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-white/40 font-bold"
                    >
                        Last Updated: February 20, 2026
                    </motion.div>
                </section>

                {/* Policy Sections */}
                <div className="space-y-12">
                    {privacySections.map((section, idx) => (
                        <motion.section
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-10 md:p-16 rounded-[3.5rem] border border-white/5 bg-white/[0.01] hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                                <section.icon className="w-48 h-48" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-12 relative z-10">
                                <div className="md:w-1/3 space-y-6">
                                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                                        <section.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-black italic tracking-tighter leading-tight">{section.title}</h2>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-xs font-bold italic text-primary/80 leading-relaxed uppercase tracking-wider">Quick Summary:</p>
                                        <p className="text-sm font-medium italic mt-2 opacity-70">{section.summary}</p>
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-lg text-muted-foreground leading-relaxed italic font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Contact Sub-section */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-24 p-12 rounded-[3.5rem] glass border border-blue-500/20 bg-blue-500/5 text-center space-y-8"
                >
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
                        <Mail className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-4xl font-black italic tracking-tighter">Questions?</h2>
                    <p className="text-xl text-muted-foreground italic font-medium max-w-xl mx-auto leading-relaxed">
                        If you have any questions regarding our Privacy Policy or your data sovereignty, our specialized legal team is ready to assist.
                    </p>
                    <div className="text-primary font-black text-2xl italic tracking-tighter">
                        privacy@devdesigns.net
                    </div>
                </motion.section>
            </div>
        </main>
    );
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

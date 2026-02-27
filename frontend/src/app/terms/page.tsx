"use client";

import { motion } from "framer-motion";
import { Scale, Zap, ShieldCheck, Globe, Cpu } from "lucide-react";

const termsSections = [
    {
        title: "1. Acceptance of Sovereignty",
        content: `By accessing the DevDesigns platform, you enter into a professional partnership. You agree to utilize our elite digital infrastructure and design services in compliance with all international regulations and our core standards of engineering excellence.`
    },
    {
        title: "2. Service Provision & Maintenance",
        content: `DevDesigns provides world-class UI/UX, development, and hosting. We maintain a 99.999% uptime target. Scheduled maintenance is performed using OpenAI-driven predictive models to minimize impact. You acknowledge that infrastructure requires periodic optimization for peak performance.`
    },
    {
        title: "3. Intellectual Property Rights",
        content: `Your visions, once deployed, are your assets. However, all underlying framework logic, proprietary AI models, and design systems developed by DevDesigns remain the exclusive property of DevDesigns. We grant you a perpetual license to use these systems within your assets.`
    },
    {
        title: "4. User Responsibilities & Conduct",
        content: `As a partner, you are responsible for maintaining the security of your account credentials. Unauthorized attempts to breach our "Fortress" security architecture or misuse our AI infrastructure will result in immediate termination of services to protect our global network integrity.`
    },
    {
        title: "5. Limitation of Liability",
        content: `DevDesigns provides ultra-premium infrastructure, but we are not liable for external network failures, downstream data breaches caused by user negligence, or indirect market fluctuations. Our liability is strictly limited to the service fees paid in the trailing 12-month period.`
    }
];

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-48 overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                {/* Header Section */}
                <section className="text-left space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]"
                    >
                        <Scale className="w-4 h-4" /> Professional Service Agreement
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter italic leading-none"
                    >
                        Terms of <span className="text-primary italic">Service</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground italic font-medium max-w-2xl leading-relaxed"
                    >
                        Our terms are designed to foster world-class collaboration and protect the integrity of our shared digital infrastructure.
                    </motion.p>
                </section>

                {/* Terms Sections */}
                <div className="grid grid-cols-1 gap-12">
                    {termsSections.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-12 rounded-[4rem] border border-white/5 bg-white/[0.01] hover:border-primary/20 transition-all duration-500 group"
                        >
                            <div className="flex items-start gap-8">
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-black italic tracking-tighter uppercase opacity-90">{section.title}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed italic font-medium">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Final Agreement CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-32 p-20 rounded-[4rem] glass border border-primary/20 bg-primary/5 text-center relative overflow-hidden group shadow-2xl"
                >
                    <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="space-y-8 relative z-10">
                        <div className="flex justify-center gap-8 mb-4">
                            <div className="flex flex-col items-center gap-2">
                                <Globe className="w-8 h-8 text-primary/40" />
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Global</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Cpu className="w-8 h-8 text-white/20" />
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Infrastructure</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Zap className="w-8 h-8 text-amber-500/40" />
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Performance</span>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none">
                            Engineering <span className="text-primary italic">Excellence</span> Shared
                        </h2>
                        <p className="text-xl text-muted-foreground italic font-medium max-w-2xl mx-auto leading-relaxed">
                            By continuing to use our platform, you acknowledge and agree to these terms. Together, we build the future of the web.
                        </p>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}

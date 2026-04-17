"use client";

import { motion } from "framer-motion";
import { Scale, Zap, ShieldCheck, Globe, Cpu } from "lucide-react";

const termsSections = [
    {
        title: "1. Acceptance of Sovereignty and Professional Partnership",
        content: `By actively accessing, browsing, or utilizing the DevDesigns digital platform and its associated services, you enter into a binding professional partnership. You agree to utilize our elite digital infrastructure, technical capabilities, and design services in absolute compliance with all international regulations, internet standards, and our core standards of engineering excellence. Failure to abide by these fundamental principles gives DevDesigns the right to restrict or terminate access to maintain ecosystem integrity. This legally binding agreement sets the framework for a high-performance collaboration between your enterprise and our infrastructure experts.`
    },
    {
        title: "2. Service Provision, Maintenance, and Edge Network Reliability",
        content: `DevDesigns is fiercely committed to providing world-class UI/UX, software development, and edge hosting infrastructure. We rigorously maintain a 99.999% uptime target through redundant server deployments and cross-region load balancing. Scheduled maintenance is performed using cutting-edge OpenAI-driven predictive models to ensure minimal impact on live deployments. You acknowledge that world-class infrastructure requires periodic, sophisticated optimization cycles for peak performance. During these critical optimization windows, we prioritize keeping your primary application services uninterrupted.`
    },
    {
        title: "3. Intellectual Property Rights and Usage Licenses",
        content: `We fundamentally respect that your creative visions, customer data, and brand identity, once deployed, are purely your proprietary assets. However, all underlying framework logic, proprietary artificial intelligence models, automation scripts, and foundational design systems developed originally by DevDesigns remain the exclusive and protected intellectual property of DevDesigns. We grant you a perpetual, non-exclusive, multi-region license to utilize these underlying systems purely within the scope of your active assets and hosted deployments. You agree not to reverse-engineer, resell, or distribute our proprietary source infrastructure without explicit authorization.`
    },
    {
        title: "4. User Responsibilities, Security Obligations, and Platform Conduct",
        content: `As an engaged partner in this digital ecosystem, you bear the primary responsibility for maintaining the strict security and confidentiality of your administrative account credentials and API keys. Any unauthorized attempts to breach our "Fortress" security architecture, intercept internal network traffic, or misuse our AI infrastructure for scraping or brute-force attacks will result in immediate and permanent termination of services. We vigorously protect our global network integrity to ensure all our clients experience an uncompromisingly secure environment, and we enforce a zero-tolerance policy for malicious technical conduct.`
    },
    {
        title: "5. Comprehensive Limitation of Liability and Reliability Matrix",
        content: `While DevDesigns provides ultra-premium infrastructure built on battle-tested technologies, we are not legally or financially liable for catastrophic external network internet failures, downstream data breaches caused directly by user negligence and compromised passwords, or indirect market fluctuations impacting your business revenue. In the event of system errors or service interruptions, our total collective liability is strictly and contractually limited to the actual service fees paid by your entity to DevDesigns in the trailing 12-month period. We recommend maintaining your own comprehensive disaster recovery plans for total business continuity.`
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

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/interaction-provider";
import { Users, Target, Rocket, Zap, Shield, Globe, Cpu, Sparkles } from "lucide-react";

export default function AboutPage() {
    const { openModal } = useInteraction();

    const sections = [
        {
            title: "Our Mission",
            description: "To democratize elite digital infrastructure, providing every business with the tools to scale, secure, and succeed in the modern era.",
            icon: Target,
            color: "text-primary",
            prompt: "Explain the core mission of DevDesigns and how it helps businesses scale."
        },
        {
            title: "Technical Philosophy",
            description: "We build for performance, resilience, and elegance. Our stack is modern, our code is clean, and our solutions are future-proof.",
            icon: Cpu,
            color: "text-blue-400",
            prompt: "What is the technical philosophy of DevDesigns? Focus on tech stack and performance."
        },
        {
            title: "Global Reach",
            description: "Operating at scale with a worldwide perspective. We bridge the gap between complex infrastructure and intuitive user experiences.",
            icon: Globe,
            color: "text-emerald-400",
            prompt: "Tell me about DevDesigns global operations and reach."
        }
    ];

    const values = [
        { name: "Speed", icon: Zap, detail: "Lightning-fast execution in everything we do." },
        { name: "Security", icon: Shield, detail: "Enterprise-grade protection by default." },
        { name: "Innovation", icon: Sparkles, detail: "Pushing the boundaries of digital design." },
        { name: "Growth", icon: Rocket, detail: "Building tools that drive your bottom line." }
    ];

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20">
            {/* Background Orbs */}
            <div className="orb top-20 left-[10%] bg-primary/10 w-[600px] h-[600px]" />
            <div className="orb bottom-40 right-[10%] bg-blue-500/5 w-[800px] h-[800px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic">
                            Building the <span className="text-primary italic">Digital Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto opacity-80 leading-relaxed">
                            DevDesigns is an enterprise-grade agency specializing in high-performance infrastructure, stunning UI/UX, and AI-driven business solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-8">
                            <Button
                                onClick={() => openModal("Tell me the history of DevDesigns.")}
                                className="bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-14 px-10 text-lg btn-glow shadow-primary/20"
                            >
                                Our Story
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => openModal("Who is on the team at DevDesigns?")}
                                className="border-white/10 hover:bg-white/5 rounded-2xl h-14 px-10 text-lg font-bold italic"
                            >
                                Meet the Team
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Core Pillars */}
                <section className="py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-10 rounded-[3rem] border border-white/5 hover:border-primary/30 group transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-8 h-8 ${section.color}`} />
                                </div>
                                <h3 className="text-2xl font-black italic mb-4">{section.title}</h3>
                                <p className="text-muted-foreground italic mb-8 opacity-70 leading-relaxed">
                                    {section.description}
                                </p>
                                <Button
                                    variant="link"
                                    className="p-0 text-primary font-black italic hover:no-underline group-hover:translate-x-2 transition-transform"
                                    onClick={() => openModal(section.prompt)}
                                >
                                    Deep Dive →
                                </Button>
                            </motion.div>
                        );
                    })}
                </section>

                {/* Values Section */}
                <section className="py-24 border-y border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">Core <span className="text-primary italic">Values</span></h2>
                        <p className="text-muted-foreground italic opacity-70">The principles that guide every pixel we design and every line of code we write.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={v.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                                        <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="text-xl font-black italic mb-2">{v.name}</h4>
                                    <p className="text-sm text-muted-foreground italic opacity-60 px-4">{v.detail}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA / Final Section */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass p-16 rounded-[4rem] border border-primary/20 bg-primary/5 shadow-2xl shadow-primary/10 max-w-5xl mx-auto overflow-hidden relative"
                    >
                        <div className="orb -top-20 -right-20 bg-primary/20 w-[400px] h-[400px]" />
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic mb-8 relative z-10">
                            Ready to build your <br /><span className="text-primary italic">Legacy?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground italic mb-12 max-w-2xl mx-auto opacity-80 relative z-10">
                            Don't just launch a website. Build a digital empire that scales with your ambition.
                        </p>
                        <Button
                            className="bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-16 px-12 text-xl btn-glow shadow-primary/20 relative z-10"
                            onClick={() => openModal("I'm interested in starting a project. Let's discuss business strategy.")}
                        >
                            Start Project Now
                        </Button>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

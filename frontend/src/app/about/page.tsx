"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/interaction-provider";
import { Target, Rocket, Zap, Shield, Globe, Cpu, Sparkles, Layers, Code2, Lock, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchVideos } from "@/lib/image-api";

export default function AboutPage() {
    const { openModal } = useInteraction();
    const [heroVideo, setHeroVideo] = useState<string | null>(null);

    useEffect(() => {
        fetchVideos('modern technology office team collaboration', 1).then(vids => {
            if (vids.length > 0) setHeroVideo(vids[0].url);
        });
    }, []);

    const stats = [
        { label: "Enterprise Systems Shipped", value: "140+" },
        { label: "Global Edge Latency", value: "<100ms" },
        { label: "Production Uptime SLA", value: "99.99%" },
        { label: "Client Retention Rate", value: "96%" }
    ];

    const sections = [
        {
            title: "Our Mission",
            description: "To democratize elite digital infrastructure, providing every business with the tools to scale autonomously, secure user assets effectively, and dominate in an intensely competitive digital era. We bridge the gap between complex engineering concepts and intuitive, high-converting consumer experiences without the friction of technical debt.",
            icon: Target,
            color: "text-primary",
            prompt: "Explain the core mission of DevDesigns and how it helps businesses scale."
        },
        {
            title: "Technical Philosophy",
            description: "We build for uncompromising performance, multi-layered resilience, and architectural elegance. Our stack leverages Next.js 15, React 19, Rust, and distributed edge databases to guarantee sub-second speed. Every system is rigidly typed, thoroughly tested, and engineered to adopt new AI and cloud innovations seamlessly.",
            icon: Cpu,
            color: "text-blue-400",
            prompt: "What is the technical philosophy of DevDesigns? Focus on tech stack and performance."
        },
        {
            title: "Global Reach",
            description: "Operating at enterprise scale with a worldwide perspective, we deploy edge infrastructure across 300+ global points of presence. We bridge cloud orchestration and fluid end-user experiences, ensuring your platform operates with sub-100ms latency globally regardless of where your customers connect.",
            icon: Globe,
            color: "text-emerald-400",
            prompt: "Tell me about DevDesigns global operations and reach."
        }
    ];

    const team = [
        {
            name: "Majid Khan",
            role: "Founder & Head of Design",
            focus: "Design Systems, Spatial UI/UX, Figma Variables & Product Strategy",
            initials: "MK"
        },
        {
            name: "Meera Iyer",
            role: "Principal Systems Architect",
            focus: "Distributed Systems, Next.js 15 & Enterprise SaaS",
            initials: "MI"
        },
        {
            name: "Ananya Verma",
            role: "VP of Cloud & Infrastructure",
            focus: "Kubernetes, eBPF/Cilium, Edge Computing & Turso",
            initials: "AV"
        },
        {
            name: "Priya Mehta",
            role: "Head of Security & Zero Trust",
            focus: "Post-Quantum TLS, FIDO2/DPoP & HIPAA/SOC2",
            initials: "PM"
        },
        {
            name: "Rohan Kapoor",
            role: "Lead AI & Search Architect",
            focus: "GEO/AEO Citations, Hybrid RAG & LangGraph Agents",
            initials: "RK"
        },
        {
            name: "Vikram Nair",
            role: "Director of Power Platform",
            focus: "Dataverse, PowerApps CoE, Power BI & Copilot Studio",
            initials: "VN"
        }
    ];

    const capabilities = [
        {
            title: "Frontend & Edge Web",
            icon: Code2,
            items: ["Next.js 15 & React 19 (RSC / PPR)", "TypeScript & Tailwind CSS v4", "Framer Motion & Three.js WebGL", "WCAG 2.2 AA Accessibility"]
        },
        {
            title: "AI, RAG & GEO Search",
            icon: Sparkles,
            items: ["Generative Engine Optimization (GEO)", "LangGraph Multi-Agent Orchestration", "Hybrid Dense-Sparse RAG & Qdrant", "/llms.txt & Speakable JSON-LD"]
        },
        {
            title: "Cloud & Infrastructure",
            icon: Layers,
            items: ["Kubernetes, Docker & eBPF Cilium", "Cloudflare Workers & Edge Caching", "PostgreSQL, Neon & Turso LibSQL", "Apache Kafka & Debezium CDC"]
        },
        {
            title: "Security & Enterprise",
            icon: Lock,
            items: ["Zero Trust, DPoP & mTLS Binding", "Post-Quantum Cryptography (ML-KEM)", "Microsoft PowerApps & Dataverse", "HIPAA, SOC2 & GDPR Architecture"]
        }
    ];

    const values = [
        { name: "Speed", icon: Zap, detail: "Sub-100ms edge execution and rapid iteration." },
        { name: "Security", icon: Shield, detail: "Zero-trust and post-quantum protection by default." },
        { name: "Innovation", icon: Sparkles, detail: "Pioneering AI search, RAG, and modern web standards." },
        { name: "Growth", icon: Rocket, detail: "Engineering systems that measurably lift revenue." }
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
                        <div className="inline-flex items-center space-x-2 glass px-4 py-1.5 rounded-full border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-2">
                            <Award className="w-4 h-4" />
                            <span>Enterprise Digital Engineering Agency</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter italic">
                            Building the <span className="text-primary italic">Digital Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto opacity-80 leading-relaxed">
                            DevDesigns is an enterprise-grade agency specializing in high-performance infrastructure, conversion-focused UI/UX, and AI-driven business solutions.
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

                {/* Metrics Strip */}
                <section className="pb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="glass p-8 rounded-[2rem] border border-white/5 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black italic tracking-tighter text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-75">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Team/Office Visual */}
                <section className="pb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative rounded-[3rem] overflow-hidden border border-white/5 aspect-[21/9]"
                    >
                        {heroVideo ? (
                            <video
                                src={heroVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-blue-900/20 animate-pulse" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/80" />
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
                                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
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

                {/* Leadership & Specialists */}
                <section className="py-24 border-t border-white/5">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-xs mb-3">
                            <Users className="w-4 h-4" />
                            <span>Engineering & Design Leadership</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
                            Meet the <span className="text-primary italic">Architects</span>
                        </h2>
                        <p className="text-muted-foreground italic opacity-70 max-w-2xl mx-auto">
                            Senior engineers, security specialists, and design leaders behind every production deployment.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-start gap-5"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-black italic text-lg shrink-0">
                                    {member.initials}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black italic">{member.name}</h3>
                                    <div className="text-xs font-bold uppercase tracking-widest text-primary mt-1 mb-2">
                                        {member.role}
                                    </div>
                                    <p className="text-sm text-muted-foreground italic opacity-75 leading-relaxed">
                                        {member.focus}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Technical Capabilities */}
                <section className="py-24 border-t border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
                            Technology <span className="text-primary italic">Stack</span>
                        </h2>
                        <p className="text-muted-foreground italic opacity-70 max-w-2xl mx-auto">
                            Production-hardened tools and frameworks we deploy for enterprise velocity and scale.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((cap, i) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div
                                    key={cap.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-black italic mb-4">{cap.title}</h3>
                                    <ul className="space-y-2.5 text-sm text-muted-foreground italic opacity-80">
                                        {cap.items.map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
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
                        className="glass p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border border-primary/20 bg-primary/5 shadow-2xl shadow-primary/10 max-w-5xl mx-auto overflow-hidden relative"
                    >
                        <div className="orb -top-20 -right-20 bg-primary/20 w-[400px] h-[400px]" />
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic mb-8 relative z-10">
                            Ready to build your <br /><span className="text-primary italic">Legacy?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground italic mb-12 max-w-2xl mx-auto opacity-80 relative z-10">
                            Don&apos;t just launch a website. Build a digital empire that scales with your ambition.
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

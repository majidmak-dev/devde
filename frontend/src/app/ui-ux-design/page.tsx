"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/interaction-provider";
import { caseStudies } from "@/lib/case-studies-data";
import { Palette, PenTool, Layout, Layers, Sparkles, MousePointer2, Smartphone, ShoppingCart } from "lucide-react";
import Link from "next/link";

const uiuxFeatures = [
    {
        title: "User-Centric Research",
        description: "We dive deep into user behavior to create designs that resonate on a psychological level.",
        icon: Palette,
        color: "text-primary"
    },
    {
        title: "Wireframing & Prototyping",
        description: "Interactive prototypes to visualize the end product and test flows before development.",
        icon: PenTool,
        color: "text-blue-400"
    },
    {
        title: "Visual Identity",
        description: "Stunning, distinct visuals that reflect your brand's core identity and future-proof its presence.",
        icon: Layout,
        color: "text-emerald-400"
    },
    {
        title: "Elite Design Systems",
        description: "Scalable, atomic design libraries for consistent and premium experiences across all platforms.",
        icon: Layers,
        color: "text-purple-400"
    }
];

export default function UIUXDesignPage() {
    const { openModal, addToCart } = useInteraction();
    const uxCaseStudies = caseStudies.filter(s => s.category === "UI/UX Design");

    const handleAddAuditToCart = () => {
        addToCart({
            id: 'ui-ux-audit-premium',
            name: 'Premium UI/UX Audit & Strategy',
            price: '$2,500'
        });
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20">
            {/* Background Orbs */}
            <div className="orb top-20 left-[10%] bg-primary/10 w-[600px] h-[600px]" />
            <div className="orb bottom-[10%] right-[10%] bg-blue-500/5 w-[800px] h-[800px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic">
                            Elevate your <br /><span className="text-primary italic">Digital Soul</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto opacity-80 leading-relaxed font-medium">
                            We design world-class interfaces that don&apos;t just look stunning—they drive conversion, loyalty, and enterprise-grade growth.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-8">
                            <Button
                                onClick={handleAddAuditToCart}
                                className="bg-primary hover:bg-primary/90 text-white font-black rounded-2xl h-16 px-12 text-xl btn-glow shadow-primary/20 flex items-center group"
                            >
                                <ShoppingCart className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" /> Add Audit to Cart
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => openModal("Analyze the current design trends of 2026. How can DevDesigns apply these to my brand?")}
                                className="border-white/10 hover:bg-white/5 rounded-2xl h-16 px-10 text-xl font-bold italic"
                            >
                                <Sparkles className="mr-2 w-5 h-5 text-primary" /> AI Trend Audit
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section className="py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {uiuxFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass p-10 rounded-[2.5rem] border border-white/5 space-y-6 hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon className={`w-7 h-7 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-black italic">{feature.title}</h3>
                                    <p className="text-muted-foreground italic text-sm opacity-70 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* World Class Case Studies Section */}
                <section className="py-24 border-y border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">World Class <span className="text-primary italic">Success</span></h2>
                        <p className="text-muted-foreground italic opacity-70">Deep dives into our most ambitious UI/UX projects.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {uxCaseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative glass rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                                    {/* Action Icons Overlay */}
                                    <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-10 h-10 rounded-full glass bg-white/10 flex items-center justify-center border border-white/20">
                                            <MousePointer2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full glass bg-white/10 flex items-center justify-center border border-white/20">
                                            <Smartphone className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-3xl font-black italic tracking-tight">{study.title}</h3>
                                        <div className="text-primary font-black italic uppercase text-sm tracking-widest">{study.impact}</div>
                                    </div>
                                    <p className="text-muted-foreground italic opacity-80 line-clamp-2 leading-relaxed">
                                        {study.description}
                                    </p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <Link href={`/case-studies/${study.id}`} className="flex-1">
                                            <Button className="w-full bg-slate-900 border border-white/10 hover:bg-primary hover:border-primary text-white font-black rounded-2xl h-14 italic transition-all group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                                View Case Study
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="ghost"
                                            onClick={() => openModal(`Analyze the UX strategy for the '${study.title}' project. Why did it lead to ${study.impact}?`)}
                                            className="w-14 h-14 rounded-2xl border border-white/5 hover:bg-white/5 p-0 shrink-0"
                                        >
                                            <Sparkles className="w-6 h-6 text-primary" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Comparison / Stats Section */}
                <section className="py-24 text-center max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="text-5xl font-black italic tracking-tighter text-primary">94%</div>
                            <div className="text-muted-foreground font-black italic uppercase text-xs tracking-widest opacity-60">Avg. Satisfaction</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-black italic tracking-tighter text-blue-400">3.5x</div>
                            <div className="text-muted-foreground font-black italic uppercase text-xs tracking-widest opacity-60">Engagement Growth</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-black italic tracking-tighter text-emerald-400">Award</div>
                            <div className="text-muted-foreground font-black italic uppercase text-xs tracking-widest opacity-60">UX Innovation Win</div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 pb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass p-16 rounded-[4rem] border border-primary/20 bg-primary/5 shadow-2xl shadow-primary/10 text-center relative overflow-hidden group"
                    >
                        <div className="orb -top-20 -right-20 bg-primary/20 w-[400px] h-[400px]" />
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic mb-8 relative z-10">
                            Ready for a <span className="text-primary italic">Paradigm Shift?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground italic mb-12 max-w-2xl mx-auto opacity-80 relative z-10 leading-relaxed font-medium">
                            Don&apos;t settle for &quot;good&quot; design. Launch an experience that defines your category and crushes your competition.
                        </p>
                        <Button
                            className="bg-primary hover:bg-primary/90 text-white font-black rounded-3xl h-20 px-16 text-2xl btn-glow shadow-primary/20 relative z-10 group-hover:scale-105 transition-transform flex items-center mx-auto"
                            onClick={() => openModal("I'm ready for a paradigm shift in my product's UI/UX. Let's start the design transformation.")}
                        >
                            Consult Lead Architect
                        </Button>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

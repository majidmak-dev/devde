"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Shield, CheckCircle2, ArrowRight, Loader2, Sparkles, Plus, Check, Info, TrendingUp, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchDomainSuggestions } from "@/lib/ai-api";
import { useInteraction } from "@/components/interaction-provider";

const tlds = [
    { ext: ".com", price: "$12.99", old: "$14.99" },
    { ext: ".net", price: "$10.99", old: "$12.99" },
    { ext: ".org", price: "$13.99", old: "$15.99" },
    { ext: ".io", price: "$39.99", old: "$45.99" },
    { ext: ".tech", price: "$5.99", old: "$35.99" },
];

export default function DomainBooking() {
    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
    const [loadingAi, setLoadingAi] = useState(false);
    const { openModal, addToCart } = useInteraction();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query) return;
        setSearching(true);
        setLoadingAi(true);

        // Parallel search: Standard + AI
        const [aiDomainResults] = await Promise.all([
            fetchDomainSuggestions(query),
            new Promise(resolve => setTimeout(resolve, 1200)) // Strategic delay for premium feel
        ]);

        setResults([
            { name: `${query}.com`, available: true, price: "$12.99" },
            { name: `${query}.net`, available: true, price: "$10.99" },
            { name: `${query}.io`, available: false, price: "Taken" },
        ]);

        setAiSuggestions(aiDomainResults);
        setSearching(false);
        setLoadingAi(false);
    };

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20">
            {/* Background Orbs */}
            <div className="orb top-20 right-[5%] bg-primary/10 w-[600px] h-[600px]" />
            <div className="orb bottom-[20%] left-[5%] bg-blue-500/5 w-[800px] h-[800px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <section className="py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-none">
                            Claim your <br /><span className="text-primary italic text-6xl md:text-9xl">Digital Dominance</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto opacity-80 leading-relaxed font-medium">
                            Secure the foundation of your enterprise with AI-powered brand intelligence and elite infrastructure.
                        </p>

                        <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative group mt-12">
                            <div className="flex flex-col md:flex-row gap-4 p-2 glass rounded-[2.5rem] border border-white/5 focus-within:border-primary/30 transition-all duration-500 shadow-2xl">
                                <div className="relative flex-1">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Enter your enterprise name..."
                                        className="w-full pl-16 pr-6 py-6 bg-transparent outline-none text-xl font-bold placeholder:text-white/20"
                                    />
                                </div>
                                <Button type="submit" className="h-20 px-12 rounded-[2rem] bg-primary text-white text-xl font-black btn-glow shadow-primary/20">
                                    {searching ? <Loader2 className="w-6 h-6 animate-spin" /> : "SEARCH"}
                                </Button>
                            </div>
                        </form>

                        <div className="flex flex-wrap justify-center gap-8 pt-6">
                            {tlds.map(tld => (
                                <div key={tld.ext} className="flex flex-col items-center">
                                    <span className="text-lg font-black italic">{tld.ext}</span>
                                    <span className="text-primary font-bold text-sm">{tld.price}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <AnimatePresence>
                    {(results.length > 0 || aiSuggestions.length > 0) && (
                        <motion.section
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-12 pb-32 space-y-24"
                        >
                            {/* Standard Results - Direct Matches */}
                            <div className="space-y-8">
                                <div className="flex items-center space-x-4 ml-4">
                                    <div className="w-2 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                                    <h2 className="text-3xl font-black italic tracking-tighter">Direct Matches</h2>
                                </div>

                                <div className="glass rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                                    <div className="divide-y divide-white/5">
                                        {results.map((domain, idx) => (
                                            <div
                                                key={domain.name}
                                                className="p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-white/[0.02] transition-colors group"
                                            >
                                                <div className="flex items-center space-x-6">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${domain.available ? "bg-primary/10" : "bg-red-500/10"}`}>
                                                        <Globe className={domain.available ? "text-primary" : "text-rose-500"} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-black italic group-hover:text-primary transition-colors">{domain.name}</h3>
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${domain.available ? "bg-primary animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" : "bg-rose-500"}`} />
                                                            <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                                                                {domain.available ? "Ready for Acquisition" : "Acquired"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    {domain.available && (
                                                        <Button
                                                            variant="ghost"
                                                            onClick={() => openModal(`Perform an Identity Audit for '${domain.name}'. Evaluate its brand authority, SEO potential, and market position.`)}
                                                            className="w-14 h-14 rounded-2xl border border-white/5 hover:bg-white/5"
                                                        >
                                                            <Target className="w-6 h-6 text-primary" />
                                                        </Button>
                                                    )}
                                                    <div className="flex items-center gap-8">
                                                        {domain.available && <span className="text-3xl font-black italic tracking-tighter">{domain.price}</span>}
                                                        <Button
                                                            disabled={!domain.available}
                                                            onClick={() => addToCart({ id: `domain-${domain.name}`, name: domain.name, price: domain.price })}
                                                            className={domain.available ? "bg-primary text-white h-14 px-10 rounded-2xl font-black italic btn-glow" : "bg-white/5 text-white/30 h-14 px-10 rounded-2xl font-black italic cursor-not-allowed"}
                                                        >
                                                            {domain.available ? "ADD TO CART" : "TAKEN"}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* AI Brand Intelligence Suggestions */}
                            <div className="space-y-12">
                                <div className="flex items-center space-x-4 ml-4">
                                    <div className="w-2 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-3xl font-black italic tracking-tighter">AI Brand Intelligence</h2>
                                        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {aiSuggestions.map((name, idx) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass p-10 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                                        >
                                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                                            <div className="space-y-6">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-2xl font-black italic tracking-tight group-hover:text-primary transition-colors">{name}</h3>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => openModal(`Explain the branding strategy behind the name '${name}'. Why is it a strong choice for an enterprise in this niche?`)}
                                                        className="w-10 h-10 rounded-xl border border-white/5 hover:bg-white/10 p-0"
                                                    >
                                                        <Info className="w-4 h-4 text-primary" />
                                                    </Button>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">Premium Choice</div>
                                                    <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest">High SEO</div>
                                                </div>
                                            </div>

                                            <div className="mt-12 flex items-center justify-between">
                                                <span className="text-2xl font-black italic tracking-tighter text-primary">$12.99</span>
                                                <Button
                                                    onClick={() => addToCart({ id: `ai-${name}`, name, price: "$12.99" })}
                                                    className="rounded-2xl bg-white/5 hover:bg-primary text-white hover:text-white border border-white/10 h-12 px-6 font-bold italic transition-all group-hover:border-primary/50"
                                                >
                                                    <Plus className="w-5 h-5 mr-2" /> ACQUIRE
                                                </Button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* Infrastructure Standards */}
                <section className="py-24 border-t border-white/5">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter">Enterprise <span className="text-primary italic">Standards</span></h2>
                        <p className="text-muted-foreground italic opacity-70 max-w-2xl mx-auto">Every identity we secure is fortified with world-class digital infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass p-12 rounded-[3rem] border border-white/5 space-y-8 group hover:border-primary/20 transition-all"
                            onClick={() => openModal("WHOIS Privacy Details for domains")}
                        >
                            <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black italic">Identity Cloaking</h3>
                                <p className="text-muted-foreground italic opacity-70 leading-relaxed">Advanced WHOIS Privacy that shields your corporate data from global surveillance.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass p-12 rounded-[3rem] border border-white/5 space-y-8 group hover:border-blue-500/20 transition-all"
                            onClick={() => openModal("Global DNS Anycast infrastructure details")}
                        >
                            <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-blue-500" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black italic">Instant Propagation</h3>
                                <p className="text-muted-foreground italic opacity-70 leading-relaxed">Global DNS Anycast resolution across 100+ points of presence for zero latency.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass p-12 rounded-[3rem] border border-white/5 space-y-8 group hover:border-emerald-500/20 transition-all"
                            onClick={() => openModal("Auto-Renewal system and domain protection alerts")}
                        >
                            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black italic">Survival Protocol</h3>
                                <p className="text-muted-foreground italic opacity-70 leading-relaxed">Failsafe auto-renewal tracking and multiple redundancy alerts to ensure brand continuity.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Dominance Ribbon / CTA */}
                <section className="py-24 pb-48">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass p-20 rounded-[4rem] border border-primary/20 bg-primary/5 text-center relative overflow-hidden group shadow-2xl"
                    >
                        <div className="orb -top-20 -left-20 bg-primary/20 w-[400px] h-[400px]" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10 opacity-60">
                            <div>
                                <div className="text-4xl font-black italic tracking-tighter">50K+</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-primary">Identities Secured</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black italic tracking-tighter">99.99%</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-primary">DNS Uptime</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black italic tracking-tighter">12ms</div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-primary">Avg. Propagation</div>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic mb-8 relative z-10">
                            Launch your <span className="text-primary italic">Legacy</span>
                        </h2>
                        <p className="text-xl text-muted-foreground italic mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                            The internet belongs to those who claim it. Secure your digital empire today with world-class infrastructure.
                        </p>
                        <Button
                            className="bg-primary hover:bg-primary/90 text-white font-black rounded-3xl h-20 px-16 text-2xl btn-glow shadow-primary/20 relative z-10 group-hover:scale-105 transition-transform"
                            onClick={() => openModal("I want to register a premium domain and secure my digital identity. Let's discuss a brand protection strategy.")}
                        >
                            SECURE NOW <ArrowRight className="ml-4 w-8 h-8" />
                        </Button>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

'use client';

import { motion } from 'framer-motion';
import PricingPreview from '@/components/pricing-preview';
import WhyChooseUs from '@/components/why-choose-us';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';

export default function PricingPage() {
    const { openModal } = useInteraction();

    return (
        <div className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center space-y-8 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <div className="flex items-center justify-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm">
                        <Sparkles className="w-5 h-5" />
                        <span>Invest in Your Growth</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-pretty">
                        Scaling Made <span className="text-primary italic">Affordable</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
                        Elite digital infrastructure shouldn't break the bank. Choose a plan that matches your ambition.
                    </p>
                </motion.div>
            </section>

            {/* Main Pricing Section */}
            <PricingPreview />

            {/* Comparison / Extra Info */}
            <section className="container mx-auto px-4 py-20 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-bold italic">Enterprise Security</h3>
                        <p className="text-muted-foreground italic">Every plan includes DDoS protection, SSL encryption, and automated security patches.</p>
                    </div>
                    <div className="space-y-4">
                        <Zap className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-bold italic">Unrivaled Speed</h3>
                        <p className="text-muted-foreground italic">Powered by NVMe storage and Global Content Delivery Networks for instant loading.</p>
                    </div>
                    <div className="space-y-4">
                        <Globe className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-bold italic">Global Reach</h3>
                        <p className="text-muted-foreground italic">Deploy your presence across 100+ global locations with a single click.</p>
                    </div>
                </div>
            </section>

            {/* FAQ / Bottom CTA */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="glass p-12 rounded-[3.5rem] bg-slate-900/50 border border-white/5 space-y-6">
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase">Still have questions?</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto italic text-lg">
                        Our technical consultants are available 24/7 to help you choose the right infrastructure for your specific needs.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        onClick={() => openModal('Request a detailed pricing breakdown or custom enterprise quote')}
                        className="rounded-full h-16 px-12 text-xl font-black"
                    >
                        CONTACT SALES
                    </Button>
                </div>
            </section>
        </div>
    );
}

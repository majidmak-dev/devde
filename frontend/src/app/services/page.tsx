'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/services-grid';
import WhyChooseUs from '@/components/why-choose-us';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';

export default function ServicesPage() {
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
                        <span>Our Expertise</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter">
                        Enterprise <span className="text-primary italic">Digital Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
                        From world-class design to ultra-secure infrastructure, we provide the tools you need to build a dominant digital presence.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-4">
                    <Button
                        size="lg"
                        onClick={() => openModal('Request a custom service package or consultation')}
                        className="rounded-full bg-primary h-14 px-10 text-xl font-black"
                    >
                        GET A CUSTOM QUOTE <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Main Services Grid */}
            <ServicesGrid />

            {/* Value Proposition */}
            <WhyChooseUs />

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="glass p-12 rounded-[3.5rem] space-y-6 bg-gradient-to-br from-primary/5 to-transparent border border-white/5">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Ready to <span className="text-primary italic">Scale?</span></h2>
                    <p className="text-muted-foreground max-w-xl mx-auto italic text-lg">
                        Talk to our experts today and discover how DevDesigns can transform your business with cutting-edge technology.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => openModal('Book a strategy session for business scaling')}
                        className="rounded-full bg-primary h-16 px-12 text-2xl font-black shadow-xl shadow-primary/20"
                    >
                        BOOK A STRATEGY SESSION
                    </Button>
                </div>
            </section>
        </div>
    );
}

'use client';

import Hero from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import WhyChooseUs from "@/components/why-choose-us";
import PricingPreview from "@/components/pricing-preview";
import StatsBar from "@/components/stats-bar";
import { useState } from 'react';
import { useInteraction } from '@/components/interaction-provider';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { openModal } = useInteraction();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger AI welcome modal
    openModal(`Welcome new subscriber with email: ${email}. Provide a personalized introductory offer for DevDesigns services.`);

    setTimeout(() => setIsSuccess(false), 5000);
    setEmail('');
  };

  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <div className="container mx-auto px-4">
        {/* Trusted By Section (Mock) */}
        <div className="py-10 border-y border-border/50 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['GOOGLE', 'AWS', 'VERCEL', 'STRIPE', 'MICROSOFT'].map(brand => (
            <span key={brand} className="text-xl font-bold tracking-widest cursor-pointer hover:text-primary transition-colors" onClick={() => openModal(`${brand} partnership and case study details with DevDesigns`)}>{brand}</span>
          ))}
        </div>
      </div>
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <PricingPreview />

      {/* Newsletter / CTA Section */}
      <section className="container mx-auto px-4">
        <div className="glass p-12 rounded-[3.5rem] text-center space-y-8 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">Ready to Elevate Your <span className="text-primary italic">Digital Presence?</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto italic text-lg text-pretty">Join 10,000+ businesses powered by DevDesigns high-performance infrastructure.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10">
            <div className="relative group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="px-8 py-4 rounded-full border border-white/10 bg-slate-900 focus:ring-2 ring-primary outline-none min-w-[320px] text-lg font-medium transition-all group-hover:bg-slate-800"
              />
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-primary"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white h-14 px-10 rounded-full font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center"
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'GET STARTED FREE'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase opacity-50">Instant Access • No Credit Card Required • AI-Powered Onboarding</p>
        </div>
      </section>
    </div>
  );
}

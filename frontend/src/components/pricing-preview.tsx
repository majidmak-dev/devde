'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInteraction } from '@/components/interaction-provider';

const plans = [
    {
        name: 'Starter Infrastructure',
        price: '$29',
        description: 'Perfect for small businesses and startups.',
        features: ['Shared Hosting', '1 Domain Included', 'SSL Certificate', 'Standard Support'],
        cta: 'Get Started',
        popular: false
    },
    {
        name: 'Business Growth',
        price: '$99',
        description: 'Scalable solutions for growing enterprises.',
        features: ['Cloud VPS', 'Daily Backups', 'SEO Basic Audit', 'Priority Support', 'Digital Marketplace Access'],
        cta: 'Scale Now',
        popular: true
    },
    {
        name: 'Enterprise Cloud',
        price: 'Custom',
        description: 'Fully managed digital infrastructure.',
        features: ['Dedicated Servers', 'SaaS Architecture', '24/7 VIP Support', 'Custom Integrations', 'White-label Options'],
        cta: 'Contact Sales',
        popular: false
    }
];

export default function PricingPreview() {
    const { openModal } = useInteraction();

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/5 w-[800px] h-[800px]" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-4 mb-16"
                >
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic">Simple, Transparent <span className="text-primary italic">Pricing</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto italic text-lg opacity-80">Choose the plan that fits your business stage. All plans include 99.9% uptime guarantee.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-[2.5rem] border ${plan.popular ? 'border-primary/50 ring-1 ring-primary/20 relative' : 'border-white/5'} glass flex flex-col group hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}
                        >
                            {plan.popular && (
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-emerald-400 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20"
                                >
                                    Most Popular
                                </motion.span>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-black italic tracking-tight mb-2 group-hover:text-primary transition-colors">{plan.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-muted-foreground italic ml-2 font-bold opacity-60">/mo</span>}
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mb-10 italic leading-relaxed opacity-70">{plan.description}</p>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={() => openModal(`Pricing Plan Selection: ${plan.name}. Price: ${plan.price}. Features: ${plan.features.join(', ')}`)}
                                className={`w-full h-14 rounded-2xl font-black text-lg transition-all duration-300 ${plan.popular
                                        ? 'bg-primary text-white btn-glow shadow-primary/20'
                                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-primary hover:border-primary/30'
                                    }`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wrench, ShieldCheck, Activity, Clock, Heart, ArrowRight, ShoppingCart, Sparkles, LifeBuoy } from 'lucide-react';
import { useInteraction } from '@/components/interaction-provider';

const services = [
    { name: '24/7 Monitoring', icon: Activity },
    { name: 'Security Patching', icon: ShieldCheck },
    { name: 'Performance Tuning', icon: Clock },
    { name: 'Uptime Guarantee', icon: Heart },
];

export default function MaintenancePage() {
    const { openModal, addToCart } = useInteraction();

    const packages = [
        { id: 'maint-standard', name: 'Standard Infrastructure Support', price: '$499/mo', icon: Wrench, color: 'text-cyan-500' },
        { id: 'maint-premium', name: 'Premium Performance Maintenance', price: '$1,499/mo', icon: LifeBuoy, color: 'text-rose-500' }
    ];

    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-4 text-center space-y-8 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Seamless <span className="text-accent italic">Maintenance</span>
                </motion.h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic opacity-80 mb-10">
                    Keep your digital infrastructure running at peak performance with our dedicated maintenance and reliability engineering services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
                    {packages.map(pkg => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-[2.5rem] border border-white/5 bg-slate-900/40 hover:border-accent/30 transition-all duration-500 group flex flex-col justify-between"
                        >
                            <div className="mb-6 space-y-4 text-center">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <pkg.icon className={`w-8 h-8 ${pkg.color}`} />
                                </div>
                                <h3 className="text-2xl font-black italic">{pkg.name}</h3>
                                <p className="text-3xl font-black italic text-accent">{pkg.price}</p>
                            </div>
                            <Button
                                onClick={() => addToCart(pkg)}
                                className="w-full bg-accent hover:bg-accent/90 text-white font-black rounded-2xl h-14 italic tracking-widest shadow-xl shadow-accent/20 flex items-center justify-center"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" /> ADD TO CART
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-12">
                    <Button
                        variant="outline"
                        className="rounded-full border-white/10 hover:bg-white/5 h-14 px-8 text-white font-bold italic tracking-widest"
                        onClick={() => openModal("I need ongoing maintenance and support for my existing platform. Can we discuss a custom retainer?")}
                    >
                        <Sparkles className="w-5 h-5 mr-2 text-accent" /> REQUEST CUSTOM RETAINER
                    </Button>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Always On, Always Optimized</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl text-center space-y-4"
                            >
                                <service.icon className="w-10 h-10 text-accent mx-auto" />
                                <h3 className="font-bold">{service.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="container mx-auto px-4 py-20">
                <div className="glass p-12 rounded-3xl bg-accent/5 border-accent/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Never Worry About Downtime Again</h2>
                        <p className="text-muted-foreground">Our engineers manage your infrastructure so you can focus on building your business.</p>
                    </div>
                    <Button
                        size="lg"
                        onClick={() => openModal("I'm interested in the Premium Performance Maintenance package. Let's talk about the transition.")}
                        className="bg-accent hover:bg-accent/90 text-white rounded-full h-14 px-10 font-bold italic tracking-widest shrink-0 shadow-xl shadow-accent/20"
                    >
                        GET STARTED NOW <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Watch, Layout, Shield, ArrowRight, AppWindow } from 'lucide-react';

const solutions = [
    { name: 'iOS Development', icon: Smartphone, description: 'Native Swift apps for high-performance Apple ecosystem experiences.' },
    { name: 'Android Development', icon: Tablet, description: 'Modern Kotlin apps designed for the global Android market.' },
    { name: 'Cross-Platform', icon: AppWindow, description: 'React Native & Flutter apps that run on both iOS and Android.' },
    { name: 'Wearable Apps', icon: Watch, description: 'Cutting-edge solutions for smartwatches and IoT devices.' },
];

export default function AppDevelopmentPage() {
    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-4 text-center space-y-8 mb-20 text-white">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-6xl font-extrabold"
                >
                    High-Performance <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">Mobile Apps</span>
                </motion.h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    We transform your ideas into powerful mobile experiences. From consumer apps to enterprise mobility solutions.
                </p>
                <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 h-14 px-8 text-white">Consult Mobile Strategy</Button>
            </section>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((item, idx) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-8 rounded-3xl border border-accent/10 hover:border-accent/40 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                            <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            <section className="py-20 bg-accent/5 mt-20">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <h2 className="text-3xl font-bold">Why Choose DevDesigns for Mobile?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <Shield className="w-12 h-12 text-accent mx-auto" />
                            <h3 className="text-xl font-semibold">Security First</h3>
                            <p className="text-muted-foreground italic">Biometric auth, end-to-end encryption, and secure data handling represent our standard.</p>
                        </div>
                        <div className="space-y-4">
                            <Rocket className="w-12 h-12 text-accent mx-auto" />
                            <h3 className="text-xl font-semibold">Speed Optimized</h3>
                            <p className="text-muted-foreground italic">Zero-lag interfaces and lightning-fast backend response times.</p>
                        </div>
                        <div className="space-y-4">
                            <Layout className="w-12 h-12 text-accent mx-auto" />
                            <h3 className="text-xl font-semibold">Pixel Perfect</h3>
                            <p className="text-muted-foreground italic">Designs that look stunning on every screen size and resolution.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-20">
                <div className="glass p-12 rounded-3xl bg-accent bg-opacity-10 border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Launch Your App Today</h2>
                        <p className="text-muted-foreground">Expert mobile developers ready to bring your vision to life.</p>
                    </div>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full h-14 px-10">
                        Start Building <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}

import { Rocket } from 'lucide-react';

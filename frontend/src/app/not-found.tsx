'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#020617] text-white px-4">
            {/* Background Animations */}
            <div className="orb top-[-10%] left-[-10%] bg-primary/20 scale-150" />
            <div className="orb bottom-[-10%] right-[-10%] bg-accent/20 scale-150" style={{ animationDelay: '-5s' }} />

            <div className="container max-w-4xl mx-auto text-center z-10 space-y-12">
                {/* 404 Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center space-x-2 glass px-6 py-2 rounded-full border border-primary/20"
                >
                    <ShieldAlert className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">System Exception: 404</span>
                </motion.div>

                {/* Main Error Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <h1 className="text-[10rem] md:text-[18rem] font-black italic tracking-tighter leading-none opacity-10 select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase">
                        Node <span className="text-primary italic">Not Found</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto italic font-medium">
                        The requested digital coordinates do not exist within our current infrastructure matrix. Your connection has been safely re-routed.
                    </p>
                </motion.div>

                {/* Action Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                >
                    <Link href="/">
                        <Button
                            size="lg"
                            className="bg-primary text-white h-16 px-12 rounded-full font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center group overflow-hidden"
                        >
                            <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                            BACK TO HEADQUARTERS
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 px-12 rounded-full font-black text-lg border-2 hover:bg-white/5 flex items-center group uppercase italic"
                        >
                            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                            Explore Services
                        </Button>
                    </Link>
                </motion.div>

                {/* Footer Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center space-x-6 pt-12 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground"
                >
                    <div className="flex items-center space-x-2">
                        <Cpu className="w-3 h-3" />
                        <span>Real-time Sync</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span>AI Guided Recovery</span>
                    </div>
                </motion.div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>
    );
}

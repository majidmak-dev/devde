'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { TrendingUp, Globe, Zap, Clock } from 'lucide-react';

const stats = [
    { label: 'Projects Launched', value: 200, suffix: '+', icon: TrendingUp, color: 'text-primary' },
    { label: 'Uptime Guaranteed', value: 99.9, suffix: '%', decimals: 1, icon: Zap, color: 'text-emerald-400' },
    { label: 'Countries Served', value: 50, suffix: '+', icon: Globe, color: 'text-blue-400' },
    { label: 'AI Support', value: 24, suffix: '/7', icon: Clock, color: 'text-amber-400' },
];

function AnimatedCounter({ value, suffix, decimals = 0, color, isInView }: {
    value: number;
    suffix: string;
    decimals?: number;
    color: string;
    isInView: boolean;
}) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) =>
        decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()
    );
    const [displayVal, setDisplayVal] = useState('0');

    useEffect(() => {
        const unsubscribe = rounded.on('change', (v) => setDisplayVal(v));
        return unsubscribe;
    }, [rounded]);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
        return controls.stop;
    }, [isInView, count, value]);

    return (
        <span className={`text-5xl md:text-6xl font-black tracking-tighter italic ${color}`}>
            {displayVal}{suffix}
        </span>
    );
}

export default function StatsBar() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="container mx-auto px-4 py-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="glass rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 md:p-14 overflow-hidden relative"
            >
                {/* Subtle background glow */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-white/5 relative z-10">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center space-y-3 px-4"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    decimals={stat.decimals}
                                    color={stat.color}
                                    isInView={isInView}
                                />
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground opacity-60">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

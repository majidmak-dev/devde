'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Terminal, ShieldCheck, Cpu } from 'lucide-react';

const loadingStatuses = [
    { text: "INITIALIZING NEURAL NETWORKS...", icon: Cpu },
    { text: "ESTABLISHING SECURE PROTOCOLS...", icon: ShieldCheck },
    { text: "SYNTHESIZING GLASSMORPHISM UI...", icon: Terminal },
    { text: "CALIBRATING ENTERPRISE INFRASTRUCTURE...", icon: Bot }
];

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Deterministic progress simulation
        const duration = 2500; // 2.5 seconds total loading time
        const intervalTime = 30; // Update every 30ms
        const steps = duration / intervalTime;
        let stepCount = 0;

        const timer = setInterval(() => {
            stepCount++;
            const currentProgress = Math.min(100, Math.floor((stepCount / steps) * 100));
            setProgress(currentProgress);

            if (currentProgress < 30) setStatusIndex(0);
            else if (currentProgress < 60) setStatusIndex(1);
            else if (currentProgress < 90) setStatusIndex(2);
            else setStatusIndex(3);

            if (currentProgress >= 100) {
                clearInterval(timer);
                setTimeout(() => setIsComplete(true), 400); // Brief pause at 100% before firing exit animation
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    const StatusIcon = loadingStatuses[statusIndex].icon;

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Exquisite ease-in-out curve
                    className="fixed inset-0 z-[1000] bg-[#020617] flex flex-col items-center justify-center p-4 overflow-hidden"
                >
                    {/* Background Orbs */}
                    <div className="absolute top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-[80vw] h-[80vw] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700" />

                    <div className="max-w-md w-full relative z-10 glass p-10 rounded-[2.5rem] border border-white/5 space-y-8 flex flex-col items-center">
                        {/* Logo Reveal Area */}
                        <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] mb-4 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 transition-opacity" />
                            <span className="text-4xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                Dx
                            </span>
                        </div>

                        {/* Progress Number */}
                        <div className="flex flex-col items-center space-y-2">
                            <motion.span
                                key={progress}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl font-black italic tracking-tighter"
                            >
                                {progress}
                                <span className="text-primary text-4xl">%</span>
                            </motion.span>
                        </div>

                        {/* Loading Bar */}
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-[1px] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full relative"
                                style={{ width: `${progress}%` }}
                                layout
                            >
                                <div className="absolute inset-0 bg-white/20 blur-[2px] w-full h-full animate-shimmer" />
                            </motion.div>
                        </div>

                        {/* Dynamic Status Text */}
                        <div className="h-6 flex items-center justify-center space-x-2 text-muted-foreground w-full">
                            <motion.div
                                key={statusIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center space-x-2"
                            >
                                <StatusIcon className="w-4 h-4 text-primary animate-pulse" />
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase">{loadingStatuses[statusIndex].text}</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, AlertCircle, RefreshCcw, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SystemStatus() {
    const [status, setStatus] = useState<'checking' | 'healthy' | 'unhealthy' | 'error'>('checking');
    const [details, setDetails] = useState<{ target?: string, status?: number, error?: string } | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const checkSystem = async () => {
        setStatus('checking');
        setDetails(null);
        try {
            const res = await fetch('/api/health');
            const target = res.headers.get('X-Proxy-Target');
            const data = await res.json();
            
            setDetails({
                target: target || 'Unknown (Header Missing)',
                status: res.status,
                error: res.status !== 200 ? data.details || data.error : undefined
            });

            if (res.status === 200) {
                setStatus('healthy');
            } else {
                setStatus('unhealthy');
            }
        } catch (error: any) {
            console.error('Status Check Error:', error);
            setStatus('error');
            setDetails({ error: error.message });
        }
    };

    useEffect(() => {
        checkSystem();
    }, []);

    const StatusIcon = status === 'healthy' ? Wifi : status === 'unhealthy' ? WifiOff : status === 'error' ? AlertCircle : RefreshCcw;
    const StatusColor = status === 'healthy' ? 'text-emerald-400' : status === 'unhealthy' ? 'text-amber-400' : status === 'error' ? 'text-red-400' : 'text-primary';

    return (
        <div className="fixed bottom-24 left-8 z-[100]">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-72 glass p-6 rounded-3xl border border-white/10 shadow-2xl space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-black tracking-widest uppercase opacity-50">System Diagnostics</span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsExpanded(false)}>
                                <span className="text-xl">&times;</span>
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold italic opacity-60">Status</span>
                                <span className={`text-xs font-black uppercase tracking-widest ${StatusColor}`}>
                                    {status}
                                </span>
                            </div>

                            <div className="space-y-2 p-3 rounded-2xl bg-white/5 border border-white/5">
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Proxy Target (BACKEND_URL)</span>
                                <p className="text-[10px] font-mono break-all text-blue-300">
                                    {details?.target || 'Detecting...'}
                                </p>
                            </div>

                            {details?.error && (
                                <div className="space-y-2 p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Error Details</span>
                                    <p className="text-[10px] italic text-red-300 leading-relaxed">
                                        {details.error}
                                    </p>
                                </div>
                            )}

                            <Button 
                                onClick={checkSystem}
                                disabled={status === 'checking'}
                                className="w-full h-10 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition-all"
                            >
                                <RefreshCcw className={`w-3 h-3 mr-2 ${status === 'checking' ? 'animate-spin' : ''}`} />
                                Re-verify Connection
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full glass border border-white/10 shadow-xl transition-all ${isExpanded ? 'bg-primary/20 border-primary/30' : 'bg-slate-900/80'}`}
            >
                <div className={`relative flex items-center justify-center`}>
                    <div className={`absolute inset-0 bg-current opacity-20 blur-md rounded-full animate-pulse ${StatusColor}`} />
                    <StatusIcon className={`w-4 h-4 relative z-10 ${StatusColor}`} />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase italic pt-0.5">Live Connectivity Check</span>
            </motion.button>
        </div>
    );
}

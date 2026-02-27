'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Mock login for now
        setTimeout(() => {
            setLoading(false);
            router.push('/client-dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-10 rounded-3xl w-full max-w-md space-y-8 border border-white/5 shadow-2xl"
            >
                <div className="text-center space-y-2">
                    <Link href="/" className="inline-flex items-center space-x-2 text-primary">
                        <Rocket className="w-8 h-8" />
                        <span className="text-2xl font-bold">DevDesigns</span>
                    </Link>
                    <h1 className="text-3xl font-black italic mt-4">Welcome Back, <span className="text-primary italic">Ambition.</span></h1>
                    <p className="text-muted-foreground">Access your digital infrastructure dashboard.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-border focus:ring-2 ring-primary outline-none"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-border focus:ring-2 ring-primary outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border bg-slate-800 text-primary" />
                            <span className="text-muted-foreground">Remember me</span>
                        </label>
                        <Link href="#" className="text-primary hover:underline">Forgot Password?</Link>
                    </div>

                    <Button
                        disabled={loading}
                        className="w-full h-14 rounded-2xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20"
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                        {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                </form>

                <p className="text-center text-muted-foreground">
                    Don&apos;t have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Start a Project</Link>
                </p>
            </motion.div>
        </div>
    );
}

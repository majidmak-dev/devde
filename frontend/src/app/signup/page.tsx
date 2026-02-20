'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
    const [loading, setLoading] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-10 rounded-3xl w-full max-w-md space-y-8 border border-white/5"
            >
                <div className="text-center space-y-2">
                    <Link href="/" className="inline-flex items-center space-x-2 text-secondary">
                        <Rocket className="w-8 h-8" />
                        <span className="text-2xl font-bold">DevDesigns</span>
                    </Link>
                    <h1 className="text-3xl font-bold mt-4">Create Account</h1>
                    <p className="text-muted-foreground">Begin your digital transformation journey.</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-border focus:ring-2 ring-secondary outline-none"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-border focus:ring-2 ring-secondary outline-none"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-border focus:ring-2 ring-secondary outline-none"
                            />
                        </div>
                    </div>

                    <Button
                        disabled={loading}
                        className="w-full h-14 rounded-2xl bg-secondary text-white text-lg font-bold shadow-lg shadow-secondary/20"
                    >
                        {loading ? 'Creating Account...' : 'Get Started'}
                        {!loading && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                </form>

                <p className="text-center text-muted-foreground">
                    Already have an account? <Link href="/client-login" className="text-secondary font-bold hover:underline">Sign In</Link>
                </p>
            </motion.div>
        </div>
    );
}

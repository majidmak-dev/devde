'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, ArrowRight, Minus, Plus, ChevronLeft, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInteraction } from '@/components/interaction-provider';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useInteraction();

    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 pt-32 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-xl"
                >
                    <ShoppingBag className="w-16 h-16 text-primary opacity-50" />
                </motion.div>
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter">Your Digital Cart is <span className="text-primary italic">Empty</span></h1>
                    <p className="text-muted-foreground text-lg italic max-w-md mx-auto">Engineer your digital future by adding world-class infrastructure and design solutions.</p>
                </div>
                <Link href="/services">
                    <Button size="lg" className="rounded-full h-14 px-10 text-lg font-black bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                        BROWSE SOLUTIONS <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl space-y-12">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
                    <div className="space-y-2">
                        <Link href="/services" className="inline-flex items-center text-sm font-bold text-primary hover:underline transition-all">
                            <ChevronLeft className="w-4 h-4 mr-1" /> CONTINUE ACQUIRING
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter">Project <span className="text-primary italic">Manifest</span></h1>
                        <p className="text-muted-foreground text-lg italic">Review and deploy your digital infrastructure selection.</p>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={clearCart}
                        className="text-xs font-black tracking-widest uppercase text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 h-10 px-6 rounded-full border border-rose-500/20"
                    >
                        ABORT ALL ACQUISITIONS
                    </Button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        <AnimatePresence mode="popLayout">
                            {cart.map((item, idx) => (
                                <motion.div
                                    key={item.cartId || idx}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="glass rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 border border-white/5 bg-slate-900/40 relative group overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 transition-all group-hover:bg-primary/10" />

                                    <div className="w-full sm:w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform duration-500">
                                        <Zap className="w-10 h-10 text-primary opacity-50" />
                                    </div>

                                    <div className="flex-1 space-y-1 text-center sm:text-left">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="text-xl font-black italic tracking-tight">{item.name}</h3>
                                                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Deployment Tier: Enterprise</p>
                                            </div>
                                            <div className="text-2xl font-black italic text-white/90">
                                                {item.price}
                                            </div>
                                        </div>
                                        <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                                            <div className="flex items-center space-x-2 bg-white/5 rounded-xl border border-white/10 p-1">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/20 hover:text-primary"><Minus className="w-4 h-4" /></Button>
                                                <span className="w-8 text-center font-black italic">01</span>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/20 hover:text-primary"><Plus className="w-4 h-4" /></Button>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeFromCart(item.cartId)}
                                                className="h-10 px-4 rounded-xl text-xs font-bold text-muted-foreground hover:text-rose-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4 mr-2" /> REMOVE
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:sticky lg:top-32 space-y-6">
                        <div className="glass rounded-[2.5rem] p-8 border border-white/10 space-y-8 bg-gradient-to-br from-slate-900 via-slate-900 to-primary/5 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />

                            <h2 className="text-2xl font-black italic tracking-tighter">Acquisition <span className="text-primary italic">Summary</span></h2>

                            <div className="space-y-4">
                                <div className="flex justify-between text-sm italic font-medium">
                                    <span className="text-muted-foreground">Strategic Subtotal</span>
                                    <span>${subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm italic font-medium">
                                    <span className="text-muted-foreground">Compliance Fees (8%)</span>
                                    <span>${tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className="flex justify-between text-sm italic font-medium">
                                    <span className="text-muted-foreground">Priority Deployment</span>
                                    <span className="text-emerald-400 font-black">INCLUDED</span>
                                </div>
                                <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Total Valuation</p>
                                        <div className="text-4xl font-black italic tracking-tighter">
                                            ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <Button className="w-full h-14 rounded-full bg-primary text-white text-lg font-black italic group shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    DEPLOY INFRASTRUCTURE <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <div className="flex items-center justify-center space-x-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>Tier-IV Security Guarantee</span>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Box */}
                        <div className="glass rounded-3xl p-6 border border-white/5 bg-slate-900/20 space-y-3">
                            <p className="text-xs font-bold italic text-muted-foreground leading-relaxed">
                                DevDesigns digital assets are engineered for maximum sovereignty and performance. Deployment begins immediately upon authorization.
                            </p>
                            <Link href="/terms" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline block">Review Terms of Engagement</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

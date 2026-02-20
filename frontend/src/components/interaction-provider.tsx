'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Loader2, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchAiDetail, AiDetailResult } from '@/lib/ai-api';
import { FormattedContent } from './ai-formatting';

interface InteractionContextType {
    openModal: (context: string) => void;
    addToCart: (item: { id: string | number; name: string; price: string }) => void;
    removeFromCart: (itemId: string | number) => void;
    clearCart: () => void;
    cart: any[];
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export function useInteraction() {
    const context = useContext(InteractionContext);
    if (!context) throw new Error('useInteraction must be used within InteractionProvider');
    return context;
}

export function InteractionProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<AiDetailResult | null>(null);
    const [cart, setCart] = useState<any[]>([]);
    const [showCartFeedback, setShowCartFeedback] = useState(false);
    const [lastAdded, setLastAdded] = useState('');

    const openModal = async (contextText: string) => {
        setIsOpen(true);
        setLoading(true);
        setDetail(null);
        try {
            const result = await fetchAiDetail(contextText);
            setDetail(result);
        } catch (error) {
            console.error('Modal Fetch Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = (item: { id: string | number; name: string; price: string }) => {
        setCart(prev => [...prev, { ...item, cartId: Math.random().toString(36).substr(2, 9) }]);
        setLastAdded(item.name);
        setShowCartFeedback(true);
        setTimeout(() => setShowCartFeedback(false), 3000);
    };

    const removeFromCart = (cartId: string | number) => {
        setCart(prev => prev.filter(item => item.cartId !== cartId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <InteractionContext.Provider value={{ openModal, addToCart, removeFromCart, clearCart, cart }}>
            {children}

            {/* AI Interaction Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl glass rounded-[2.5rem] border border-white/10 overflow-hidden bg-slate-900 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 md:p-12 space-y-8">
                                {loading ? (
                                    <div className="py-20 flex flex-col items-center justify-center space-y-4">
                                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                                        <p className="text-primary font-bold tracking-widest uppercase text-xs animate-pulse">Engineering Strategic Deployment Roadmap...</p>
                                    </div>
                                ) : detail ? (
                                    <>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-2 text-primary">
                                                <Sparkles className="w-5 h-5" />
                                                <span className="font-bold tracking-widest uppercase text-xs">AI Insights</span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter">{detail.title}</h2>
                                        </div>

                                        <div className="max-h-[50vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 space-y-8">
                                            <FormattedContent content={detail.content} className="text-lg text-muted-foreground italic leading-relaxed" />

                                            <div className="space-y-6 pt-8 border-t border-white/5">
                                                <p className="font-bold text-xs tracking-[0.2em] uppercase opacity-40">Recommended Strategic Roadmap</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {detail.nextSteps.map((step, idx) => (
                                                        <div key={idx} className="flex items-center space-x-3 p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                                                            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                            </div>
                                                            <span className="text-sm font-bold italic text-white/80">{step}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    router.push('/contact');
                                                }}
                                                className="w-full h-14 rounded-full bg-primary text-white text-lg font-black group shadow-xl shadow-primary/20"
                                            >
                                                CONNECT WITH EXPERT <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <p className="py-20 text-center text-muted-foreground">Something went wrong. Please try again.</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Global Cart Feedback */}
            <AnimatePresence>
                {showCartFeedback && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed bottom-24 right-6 z-[100] px-6 py-4 rounded-2xl glass border border-primary/50 bg-slate-900/90 shadow-2xl flex items-center space-x-4"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">Added to Cart</p>
                            <p className="text-sm font-bold truncate max-w-[150px]">{lastAdded}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </InteractionContext.Provider>
    );
}

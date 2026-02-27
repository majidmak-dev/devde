'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendChatMessage } from '@/lib/ai-api';
import { cn } from '@/lib/utils';
import { FormattedContent } from './ai-formatting';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: "Welcome to DevDesigns. I am your DD AI Assistant. How can I assist you in engineering your digital sovereignty today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const history = messages.map(m => ({ role: m.role, content: m.content }));
            const response = await sendChatMessage(userMessage, history);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass w-[380px] h-[520px] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary flex items-center justify-between text-white">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">DD AI Assistant</h3>
                                    <div className="flex items-center space-x-1.5">
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                        <span className="text-[10px] opacity-80">AI Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/10" onClick={() => setIsMinimized(true)}>
                                    <Minus className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/10" onClick={() => setIsOpen(false)}>
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={cn(
                                        "flex",
                                        m.role === 'user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={cn(
                                        "max-w-[85%] p-4 rounded-3xl text-sm italic font-medium leading-relaxed",
                                        m.role === 'user'
                                            ? "bg-primary/20 text-white rounded-tr-none border border-primary/30 backdrop-blur-md"
                                            : "bg-white/[0.03] text-foreground rounded-tl-none border border-white/10 backdrop-blur-xl"
                                    )}>
                                        <FormattedContent
                                            content={m.content}
                                            isUser={m.role === 'user'}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/[0.03] p-4 rounded-3xl rounded-tl-none border border-white/10 backdrop-blur-xl">
                                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-white/5">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-slate-900 border border-white/10 rounded-2xl pl-4 pr-12 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 bg-primary rounded-xl"
                                    disabled={isLoading || !input.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    onClick={() => {
                        if (isOpen && !isMinimized) {
                            setIsOpen(false);
                        } else {
                            setIsOpen(true);
                            setIsMinimized(false);
                        }
                    }}
                    className={cn(
                        "h-14 w-14 rounded-full shadow-2xl transition-all duration-300",
                        isOpen && !isMinimized ? "bg-rose-500 hover:bg-rose-600" : "bg-primary hover:bg-primary/90"
                    )}
                >
                    {isOpen && !isMinimized ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <div className="relative">
                            <MessageSquare className="w-6 h-6 text-white" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-primary" />
                        </div>
                    )}
                </Button>
            </motion.div>

            {/* Minimized Bar */}
            <AnimatePresence>
                {isOpen && isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onClick={() => setIsMinimized(false)}
                        className="absolute bottom-16 right-0 bg-primary/20 backdrop-blur-xl border border-primary/30 text-white px-5 py-3 rounded-full shadow-2xl cursor-pointer flex items-center space-x-3 whitespace-nowrap group hover:bg-primary/30 transition-all"
                    >
                        <Bot className="w-5 h-5 text-primary" />
                        <span className="text-xs font-black uppercase tracking-widest">DD AI Assistant</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

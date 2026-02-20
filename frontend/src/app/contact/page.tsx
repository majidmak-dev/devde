'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useInteraction } from '@/components/interaction-provider';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { openModal } = useInteraction();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Trigger AI personalized response
        openModal(`Contact request from ${formData.name} regarding "${formData.subject}". Message: ${formData.message}. Provide a professional inquiry receipt and initial consultancy thoughts.`);

        setTimeout(() => setIsSuccess(false), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-4 mb-20 text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter">Get in <span className="text-primary italic">Touch</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">Let's discuss how we can build your next-generation digital infrastructure.</p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black italic tracking-tight uppercase">Contact Information</h2>
                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'hello@devdesigns.net', action: () => openModal('DevDesigns email support and communication protocols') },
                                { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000', action: () => openModal('Request a callback or schedule a phone consultation') },
                                { icon: MapPin, label: 'Office', value: '123 Innovation Way, Tech Valley, CA', action: () => openModal('Office visit information and headquarters details') },
                                { icon: MessageSquare, label: 'Live Chat', value: 'Available 24/7', action: () => openModal('DevDesigns 24/7 AI-powered support and human escalation features') },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={item.action}
                                    className="flex items-start space-x-6 p-6 glass rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                                        <p className="text-xl font-bold">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center space-x-2 text-primary">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Global Support</span>
                            </div>
                            <h3 className="text-2xl font-black tracking-tight italic">Enterprise-Grade Support</h3>
                            <p className="text-muted-foreground italic leading-relaxed">Our global team of engineers and designers is ready to assist you no matter where you are based.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest ml-4">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-white/5 focus:border-primary outline-none transition-all font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest ml-4">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-white/5 focus:border-primary outline-none transition-all font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest ml-4">Subject</label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-white/5 focus:border-primary outline-none transition-all font-medium"
                                placeholder="Project Consultation"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest ml-4">Message</label>
                            <textarea
                                rows={6}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-white/5 focus:border-primary outline-none transition-all font-medium resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-16 rounded-full bg-primary text-white font-black text-xl shadow-xl shadow-primary/20 group overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : isSuccess ? (
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                ) : (
                                    <>SEND MESSAGE <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </span>
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}

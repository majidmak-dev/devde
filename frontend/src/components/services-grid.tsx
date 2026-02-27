'use client';

import { motion } from 'framer-motion';
import {
    Layout,
    Code,
    Server,
    Globe,
    ShoppingBag,
    Search,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchImages } from '@/lib/image-api';
import Link from 'next/link';

const services = [
    {
        title: 'UI/UX Design',
        description: 'Breathtaking, user-centric interfaces designed to convert and captivate your audience.',
        icon: Layout,
        color: 'from-blue-500 to-indigo-600',
        query: 'modern app design interface',
        href: '/ui-ux-design'
    },
    {
        title: 'Web & App Dev',
        description: 'Scalable, high-performance applications built with the latest modern frameworks.',
        icon: Code,
        color: 'from-emerald-500 to-teal-600',
        query: 'coding software development',
        href: '/web-development'
    },
    {
        title: 'Premium Hosting',
        description: 'Enterprise-grade hosting solutions with 99.9% uptime and lightning-fast speeds.',
        icon: Server,
        color: 'from-orange-500 to-rose-600',
        query: 'datacenter server technology',
        href: '/contact'
    },
    {
        title: 'Domain Booking',
        description: 'Secure the perfect digital identity with our AI-powered domain suggestions.',
        icon: Globe,
        color: 'from-purple-500 to-pink-600',
        query: 'global network internet',
        href: '/contact'
    },
    {
        title: 'Digital Shop',
        description: 'Premium digital assets, templates, and ready-to-deploy software solutions.',
        icon: ShoppingBag,
        color: 'from-amber-500 to-orange-600',
        query: 'ecommerce digital products',
        href: '/marketplace'
    },
    {
        title: 'SEO & Growth',
        description: 'Data-driven strategies to boost your visibility and accelerate business growth.',
        icon: Search,
        color: 'from-cyan-500 to-blue-600',
        query: 'data analytics growth',
        href: '/seo-growth'
    }
];

export default function ServicesGrid() {
    const [serviceImages, setServiceImages] = useState<Record<string, string>>({});

    useEffect(() => {
        const loadImages = async () => {
            const imagesMap: Record<string, string> = {};
            await Promise.all(services.map(async (service) => {
                const images = await fetchImages(service.query, 1);
                if (images.length > 0) {
                    imagesMap[service.title] = images[0].url;
                }
            }));
            setServiceImages(imagesMap);
        };
        loadImages();
    }, []);

    return (
        <section className="container mx-auto px-4 py-20 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="orb top-0 -left-20 bg-primary/20" />
            <div className="orb bottom-0 -right-20 bg-accent/20" style={{ animationDelay: '-5s' }} />

            <div className="text-center mb-16 space-y-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-xs glass px-4 py-2 rounded-full border-primary/20"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Our Expertise</span>
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic">End-to-End <span className="text-primary italic">Solutions</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto italic text-lg opacity-80">Comprehensive digital infrastructure tailored for the next generation of businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className={`glass rounded-[2.5rem] p-10 h-full border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 group-hover:-translate-y-2 ${!serviceImages[service.title] ? 'animate-shimmer' : ''}`}>
                            {/* Background Image Preview */}
                            {serviceImages[service.title] && (
                                <img
                                    src={serviceImages[service.title]}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-1000 scale-110 group-hover:scale-100"
                                />
                            )}

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-xl shadow-black/40 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <service.icon className="w-8 h-8 text-white relative z-10" />
                            </div>

                            <div className="relative z-10 space-y-4 flex-1">
                                <h3 className="text-3xl font-black italic tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground text-sm italic leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{service.description}</p>
                            </div>

                            <div className="pt-8 mt-auto">
                                <Link
                                    href={service.href}
                                    className="text-primary font-black uppercase text-xs tracking-widest group-hover:translate-x-3 transition-all duration-300 italic flex items-center inline-flex"
                                >
                                    Explore Service <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

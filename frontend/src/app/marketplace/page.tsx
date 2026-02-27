'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star, Download, Filter, Search, Tag, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { fetchImages } from '@/lib/image-api';
import { useInteraction } from '@/components/interaction-provider';

const initialProducts = [
    {
        id: 1,
        name: 'SaaS Dashboard Pro',
        category: 'Templates',
        price: '$49',
        rating: 4.9,
        reviews: 124,
        query: 'dashboard interface',
        image: '',
        tags: ['Next.js', 'Tailwind', 'Auth']
    },
    {
        id: 2,
        name: 'E-commerce UI Kit',
        category: 'UI Kits',
        price: '$29',
        rating: 4.8,
        reviews: 89,
        query: 'ecommerce website',
        image: '',
        tags: ['Figma', 'React', 'Mobile']
    },
    {
        id: 3,
        name: 'Automation Scripts v2',
        category: 'Scripts',
        price: '$19',
        rating: 4.7,
        reviews: 56,
        query: 'coding scripts',
        image: '',
        tags: ['Python', 'Node.js', 'API']
    },
    {
        id: 4,
        name: 'Modern Portfolio Theme',
        category: 'Templates',
        price: '$35',
        rating: 5.0,
        reviews: 42,
        query: 'web design portfolio',
        image: '',
        tags: ['Next.js', 'Framer Motion']
    }
];

export default function Marketplace() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [products, setProducts] = useState(initialProducts);
    const { openModal, addToCart } = useInteraction();

    useEffect(() => {
        const loadImages = async () => {
            const updatedProducts = await Promise.all(initialProducts.map(async (product) => {
                const images = await fetchImages(product.query, 1);
                return {
                    ...product,
                    image: images.length > 0 ? images[0].url : 'bg-gradient-to-br from-blue-600 to-indigo-900'
                };
            }));
            setProducts(updatedProducts);
        };
        loadImages();
    }, []);

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="orb top-0 -right-20 bg-primary/10" />
            <div className="orb mid-y left-0 bg-accent/10" style={{ animationDelay: '-10s' }} />

            <section className="container mx-auto px-4 mb-16 text-center space-y-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">Digital <span className="text-primary italic">Marketplace</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic opacity-80">Premium templates, UI kits, and scripts to accelerate your development workflow.</p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {/* Filters Sidebar */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-8 sticky top-32">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 outline-none focus:ring-1 ring-primary/50 transition-all font-medium"
                            />
                        </div>

                        <div>
                            <h3 className="font-black italic text-sm uppercase tracking-widest mb-6 flex items-center"><Filter className="w-4 h-4 mr-2 text-primary" /> Categories</h3>
                            <div className="space-y-2">
                                {['All', 'Templates', 'UI Kits', 'Scripts', 'WordPress', 'Icons'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={cn(
                                            "flex justify-between items-center w-full px-5 py-3 rounded-xl text-sm transition-all duration-300 group",
                                            activeCategory === cat
                                                ? 'bg-primary/20 text-primary font-black border border-primary/20 shadow-lg shadow-primary/5'
                                                : 'hover:bg-white/5 border border-transparent'
                                        )}
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
                                        <span className="text-[10px] opacity-40 font-bold bg-white/10 px-2 py-0.5 rounded-full">12</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-black italic text-sm uppercase tracking-widest mb-6">Price Range</h3>
                            <div className="px-2 space-y-4">
                                <input type="range" className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                                <div className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-60">
                                    <span>$0</span>
                                    <span>$200+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 50 }}
                            className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-primary/40 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="aspect-video relative overflow-hidden bg-slate-800 cursor-pointer" onClick={() => openModal(`Technical details and preview for ${product.name} (${product.category})`)}>
                                {product.image.startsWith('http') ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                ) : (
                                    <div className={cn("w-full h-full", product.image)} />
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                                <div className="absolute top-6 left-6 bg-primary/90 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {product.category}
                                </div>
                                <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white backdrop-blur-md px-5 py-2 rounded-2xl font-black text-xl shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary border border-white/10">
                                    {product.price}
                                </div>
                            </div>
                            <div className="p-10 space-y-8 flex-1 flex flex-col">
                                <div className="space-y-3">
                                    <h3
                                        className="text-3xl font-black italic tracking-tighter cursor-pointer hover:text-primary transition-colors leading-tight"
                                        onClick={() => openModal(`Feature breakdown and use cases for ${product.name}`)}
                                    >
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center text-amber-500 text-sm font-black">
                                            <Star className="w-4 h-4 fill-amber-500 mr-1.5" />
                                            {product.rating}
                                        </div>
                                        <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-60">({product.reviews} VERIFIED reviews)</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {product.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[9px] font-black text-muted-foreground uppercase tracking-wider border border-white/5 group-hover:border-primary/20 transition-colors">{tag}</span>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/5 mt-auto flex items-center justify-between gap-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => addToCart({ id: `mp-${product.id}`, name: product.name, price: product.price })}
                                        className="h-14 w-14 rounded-2xl border border-white/5 hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                                    >
                                        <ShoppingCart className="w-6 h-6" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        onClick={() => openModal(`Checkout options and licensing for ${product.name}`)}
                                        className="flex-1 h-14 rounded-2xl bg-primary text-white font-black text-lg btn-glow shadow-primary/20 group overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            BUY NOW <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-4 py-20 mt-20 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4 cursor-pointer" onClick={() => openModal('Instant Download infrastructure and dashboard access')}>
                        <Download className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-black">Instant Download</h3>
                        <p className="text-muted-foreground text-sm italic">Get access to your files immediately after purchase via your dashboard.</p>
                    </div>
                    <div className="space-y-4 cursor-pointer" onClick={() => openModal('Support policy and regular updates for marketplace products')}>
                        <Tag className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-black">Regular Updates</h3>
                        <p className="text-muted-foreground text-sm italic">Lifetime access to updates and new features for all purchased products.</p>
                    </div>
                    <div className="space-y-3 cursor-pointer" onClick={() => openModal('Payment security protocols and processor details (Stripe/Razorpay)')}>
                        <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
                        <h3 className="text-xl font-black">Secure Payments</h3>
                        <p className="text-muted-foreground text-sm italic">Transactions processed securely via Stripe and Razorpay.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

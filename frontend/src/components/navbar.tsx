'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

const mainLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' }
];

const serviceLinks = [
    { name: 'UI/UX Design', href: '/ui-ux-design' },
    { name: 'Web & App Dev', href: '/web-development' },
    { name: 'SaaS Development', href: '/saas-development' },
    { name: 'Hosting Solutions', href: '/contact' },
    { name: 'Domain Booking', href: '/contact' },
    { name: 'Security Audits', href: '/security' },
    { name: 'SEO & Growth', href: '/seo-growth' },
    { name: 'Digital Marketplace', href: '/marketplace' },
    { name: 'Pricing', href: '/pricing' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isServicesActive = pathname.startsWith('/services') || serviceLinks.some(link => link.href === pathname);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'glass py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group shrink-0">
                    <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-black tracking-tighter">
                        DEV<span className="text-primary italic text-3xl">DESIGNS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <Link
                            href="/services"
                            className={cn(
                                "flex items-center text-sm font-semibold transition-all duration-300 py-2",
                                isServicesActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                            )}
                        >
                            Services
                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:-rotate-180" />
                            <span className={cn(
                                "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                                isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                            )} />
                        </Link>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] z-50 pointer-events-auto"
                                >
                                    <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl grid grid-cols-2 gap-x-8 gap-y-4 relative overflow-hidden">
                                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
                                        {serviceLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="group/link block p-3 rounded-xl hover:bg-white/5 transition-colors"
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                <span className={cn(
                                                    "text-sm font-bold block transition-colors",
                                                    pathname === link.href ? "text-primary italic" : "text-white group-hover/link:text-primary group-hover/link:italic"
                                                )}>
                                                    {link.name}
                                                </span>
                                            </Link>
                                        ))}
                                        <div className="col-span-2 pt-4 mt-2 border-t border-white/5">
                                            <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center justify-center">
                                                View All Services &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {mainLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href === '/blog' && pathname.startsWith('/blog/'));
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold transition-all duration-300 relative group py-2",
                                    isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-glow"
                                        className="absolute -inset-x-2 -inset-y-1 bg-primary/10 blur-md rounded-lg -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center space-x-4 shrink-0">
                    <Link href="/client-login">
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
                            <User className="w-4 h-4 mr-2" />
                            Client Login
                        </Button>
                    </Link>
                    <Link href="/contact" className="relative cursor-pointer">
                        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse group-hover:bg-primary/40 transition-all pointer-events-none" />
                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl relative z-10 btn-glow shadow-primary/20 pointer-events-none">
                            Start Project
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-b overflow-hidden"
                    >
                        <div className="p-4 space-y-4">
                            {/* Mobile Services Accordion */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className={cn(
                                        "w-full flex items-center justify-between text-lg font-bold transition-colors",
                                        isServicesActive ? "text-primary italic" : "text-foreground"
                                    )}
                                >
                                    Services
                                    <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "-rotate-180")} />
                                </button>
                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4 border-l-2 border-primary/20 space-y-3 overflow-hidden"
                                        >
                                            <div className="pt-2 pb-2 space-y-3">
                                                {serviceLinks.map(link => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={cn(
                                                            "block text-sm font-semibold",
                                                            pathname === link.href ? "text-primary italic" : "text-white/70"
                                                        )}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {mainLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href === '/blog' && pathname.startsWith('/blog/'));
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "block text-lg font-bold transition-colors",
                                            isActive ? "text-primary italic" : "text-foreground"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                                <Link href="/client-login" onClick={() => setIsOpen(false)}>
                                    <Button variant="outline" className="w-full h-12 rounded-xl">Client Login</Button>
                                </Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-primary h-12 rounded-xl font-bold">Start Project</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { useInteraction } from './interaction-provider';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Hosting', href: '/contact' },
    { name: 'Domains', href: '/contact' },
    { name: 'Security', href: '/security' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'glass py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-black tracking-tighter">
                        DEV<span className="text-primary italic text-3xl">DESIGNS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
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

                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/client-login">
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
                            <User className="w-4 h-4 mr-2" />
                            Client Login
                        </Button>
                    </Link>
                    <Link href="/contact" className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse group-hover:bg-primary/40 transition-all" />
                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl relative z-10 btn-glow shadow-primary/20">
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
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass border-b p-4 space-y-4"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
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
                    <div className="pt-4 border-t flex flex-col space-y-4">
                        <Link href="/client-login">
                            <Button variant="outline" className="w-full">Client Login</Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="w-full bg-primary">Start Project</Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

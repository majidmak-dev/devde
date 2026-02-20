'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './ui/logo';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
    {
        title: 'Company',
        links: [
            { name: 'About Us', href: '/about' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Services',
        links: [
            { name: 'UI/UX Design', href: '/ui-ux-design' },
            { name: 'Web Development', href: '/web-development' },
            { name: 'App Development', href: '/app-development' },
            { name: 'SaaS Development', href: '/saas-development' },
        ],
    },
    {
        title: 'Infrastructure',
        links: [
            { name: 'Hosting Solutions', href: '/hosting' },
            { name: 'Domain Booking', href: '/domain-booking' },
            { name: 'Maintenance', href: '/maintenance' },
            { name: 'Security', href: '/security' },
        ],
    },
];

export default function Footer() {
    const [year, setYear] = useState(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-xl font-bold">DevDesigns</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Empowering modern businesses with world-class digital infrastructure and premium experiences.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h3 className="font-semibold mb-4">{group.title}</h3>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        © {year} DevDesigns. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

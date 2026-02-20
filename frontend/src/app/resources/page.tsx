'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileCode, Search, Globe, Zap, Settings, ShieldCheck, ArrowRight } from 'lucide-react';

const tools = [
    { name: 'Meta Tag Generator', description: 'Create SEO-optimized meta tags for your website in seconds.', icon: Search, color: 'text-blue-500' },
    { name: 'Sitemap Generator', description: 'Generate XML sitemaps to help search engines crawl your site.', icon: Globe, color: 'text-emerald-500' },
    { name: 'Robots.txt Generator', description: 'Control crawler access with ease using our robots.txt tool.', icon: FileCode, color: 'text-amber-500' },
    { name: 'Speed Checker', description: 'Analyze your page performance and get optimization tips.', icon: Zap, color: 'text-primary' },
    { name: 'SEC Audit Tool', description: 'Comprehensive SEO scoring for any URL.', icon: ShieldCheck, color: 'text-accent' },
    { name: 'JSON-LD Generator', description: 'Build structured data for rich search results.', icon: Settings, color: 'text-pink-500' },
];

export default function Resources() {
    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-4 mb-20 text-center space-y-6">
                <h1 className="text-4xl md:text-7xl font-black">Free <span className="text-primary">SEO & Dev</span> Tools</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">Everything you need to optimize your digital infrastructure, for free.</p>
            </section>

            <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool, idx) => (
                    <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center space-y-6"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4">
                            <tool.icon className={`w-10 h-10 ${tool.color}`} />
                        </div>
                        <div className="space-y-2 flex-1">
                            <h3 className="text-2xl font-bold">{tool.name}</h3>
                            <p className="text-muted-foreground text-sm italic">{tool.description}</p>
                        </div>
                        <Button variant="ghost" className="w-full h-12 rounded-xl border border-white/5 hover:bg-white/5 font-bold group">
                            OPEN TOOL <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                ))}
            </section>

            <section className="container mx-auto px-4 py-20 mt-20 text-center">
                <div className="glass p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5">
                    <h2 className="text-4xl font-bold italic mb-6">Need Advanced Solutions?</h2>
                    <p className="text-muted-foreground mb-10 max-w-xl mx-auto italic">Our free tools are just the beginning. Explore our enterprise plans for full digital transformation.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="rounded-full bg-primary h-14 px-10">VIEW SERVICES</Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-10 border-primary/20">CONTACT EXPERTS</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

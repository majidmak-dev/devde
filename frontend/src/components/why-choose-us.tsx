'use client';

import { Shield, Zap, TrendingUp, Users } from 'lucide-react';

const stats = [
    { label: 'Successful Projects', value: '500+', icon: Zap },
    { label: 'Global Clients', value: '120+', icon: Users },
    { label: 'Service Uptime', value: '99.9%', icon: Shield },
    { label: 'ROI Growth', value: '45%', icon: TrendingUp },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Why Forward-Thinking <br />
                            <span className="text-primary">Businesses Choose Us</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            We don&apos;t just build websites; we build the digital backbone of your company. Our infrastructure-first approach ensures your business is always online, secure, and ready to scale.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="space-y-2">
                                    <div className="flex items-center space-x-2 text-primary">
                                        <stat.icon className="w-5 h-5" />
                                        <span className="text-3xl font-bold">{stat.value}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square glass rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                            <div className="relative h-full flex items-center justify-center">
                                <div className="p-8 text-center space-y-4">
                                    <Rocket className="w-20 h-20 text-primary mx-auto mb-4 animate-bounce" />
                                    <h3 className="text-3xl font-bold italic">&quot;DevDesigns changed our <br /> digital trajectory.&quot;</h3>
                                    <p className="text-muted-foreground">&mdash; Tech Corp CEO</p>
                                </div>
                            </div>
                        </div>
                        {/* Abstract shapes */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Rocket } from 'lucide-react';

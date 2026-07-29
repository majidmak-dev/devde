'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Database,
  Layers,
  Workflow,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const powerAppsFeatures = [
  {
    title: 'Custom Canvas & Model-Driven Apps',
    description: 'Pixel-perfect mobile & web applications connected to enterprise data sources with tailored user experiences.',
    icon: Layers,
    color: 'from-purple-500 to-indigo-600',
    stat: '3x Faster Deployment'
  },
  {
    title: 'Power Automate Workflows',
    description: 'Automate repetitive enterprise processes, approval flows, and cross-platform data synchronization seamlessly.',
    icon: Workflow,
    color: 'from-cyan-500 to-blue-600',
    stat: '85% Manual Effort Saved'
  },
  {
    title: 'Microsoft Dataverse Integration',
    description: 'Enterprise-grade relational database architecture with role-based security, auditing, and high scalability.',
    icon: Database,
    color: 'from-emerald-500 to-teal-600',
    stat: '99.9% Data Reliability'
  },
  {
    title: 'Custom Connectors & AI Builder',
    description: 'Connect PowerApps directly to custom REST APIs, Next.js backends, and pre-built Azure AI models.',
    icon: Cpu,
    color: 'from-amber-500 to-orange-600',
    stat: '100+ Pre-built API Hooks'
  }
];

export default function PowerAppsSection() {
  return (
    <section className="container mx-auto px-4 py-24 relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="orb top-1/2 -left-32 bg-purple-600/20 blur-3xl w-96 h-96 rounded-full -z-10" />
      <div className="orb bottom-0 -right-32 bg-blue-600/20 blur-3xl w-96 h-96 rounded-full -z-10" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 text-purple-400 font-bold tracking-widest uppercase text-xs glass px-5 py-2 rounded-full border border-purple-500/20 shadow-lg shadow-purple-500/5"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Enterprise Low-Code Excellence</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic text-white">
          Microsoft <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic">PowerApps & Automation</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto italic text-lg text-pretty">
          Transform business operations with custom low-code apps, automated workflows, and enterprise Dataverse architecture engineered by DevDesigns.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-16">
        {powerAppsFeatures.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 50 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="glass rounded-[2.5rem] p-8 h-full border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-500 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:-translate-y-2">
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-xl shadow-black/40 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 glass px-3 py-1 rounded-full border border-purple-500/20 inline-block mb-3">
                  {feature.stat}
                </span>

                <h3 className="text-2xl font-black italic tracking-tight text-white group-hover:text-purple-300 transition-colors mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm italic leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise Ready
                </span>
                <Zap className="w-4 h-4 text-purple-400 group-hover:animate-bounce" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Banner Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-[3rem] p-10 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-blue-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
      >
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Microsoft Certified Solution Experts</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black italic tracking-tight text-white">
            Ready to Automate Your Business Workflows with <span className="text-purple-400">PowerApps?</span>
          </h3>
          <p className="text-slate-300 max-w-xl italic text-base">
            From legacy app migration to custom Dataverse integrations and AI Builder flows, our engineers build secure, enterprise-grade solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
          <Link href="/powerapps">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full h-14 px-8 font-black text-base shadow-xl shadow-purple-600/30 flex items-center">
              Explore PowerApps <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

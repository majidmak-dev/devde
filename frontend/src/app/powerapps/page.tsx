'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Layers,
  Workflow,
  Database,
  Cpu,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Code2,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchVideos } from '@/lib/image-api';
import Link from 'next/link';

const powerAppsSolutions = [
  {
    name: 'Canvas Applications',
    icon: Layers,
    description: 'Highly customized, pixel-perfect web and mobile apps tailored precisely to your operational workflow.'
  },
  {
    name: 'Model-Driven Applications',
    icon: Code2,
    description: 'Data-first enterprise apps generated automatically from complex Microsoft Dataverse relational schemas.'
  },
  {
    name: 'Power Automate Flows',
    icon: Workflow,
    description: 'Robotic process automation (RPA) and automated multi-step triggers across Office 365, Azure, and 3rd party APIs.'
  },
  {
    name: 'Dataverse & Cloud Backend',
    icon: Database,
    description: 'Enterprise relational data store with built-in role-based access control (RBAC), auditing, and global encryption.'
  },
  {
    name: 'AI Builder Integration',
    icon: Cpu,
    description: 'Embed document processing, sentiment analysis, object detection, and form recognition directly into your apps.'
  },
  {
    name: 'Custom REST API Connectors',
    icon: Zap,
    description: 'Seamless custom connectors linking PowerApps directly to Next.js, Node.js, PostgreSQL, and custom SaaS APIs.'
  }
];

const powerAppsFaqs = [
  {
    q: 'What is Microsoft PowerApps development by DevDesigns?',
    a: 'DevDesigns builds enterprise-grade PowerApps solutions, combining Microsoft Power Platform (Canvas & Model-Driven Apps, Power Automate, Dataverse, Power BI) with custom Web APIs and Next.js frontends to automate complex business workflows up to 3x faster than traditional coding.'
  },
  {
    q: 'Can DevDesigns connect PowerApps with non-Microsoft external databases and custom APIs?',
    a: 'Yes. We build custom Power Automate connectors and REST API middleware to seamlessly integrate PowerApps with PostgreSQL, MongoDB, Next.js backends, Stripe, AWS, and proprietary enterprise software.'
  },
  {
    q: 'What security standards are enforced in DevDesigns PowerApps solutions?',
    a: 'All PowerApps solutions utilize Microsoft Dataverse role-based security, Azure Active Directory (Microsoft Entra ID) single sign-on, end-to-end encryption in transit and at rest, and full SOC2/HIPAA auditing compliance.'
  },
  {
    q: 'How fast can a custom PowerApps solution be built and deployed?',
    a: 'Custom low-code MVP solutions and workflow automations can be delivered in as little as 1 to 2 weeks, with complete enterprise deployments completed in 3 to 4 weeks.'
  }
];

export default function PowerAppsPage() {
  const [heroVideo, setHeroVideo] = useState<string | null>(null);

  useEffect(() => {
    fetchVideos('technology business software dashboard data', 1).then((vids) => {
      if (vids.length > 0) setHeroVideo(vids[0].url);
    });
  }, []);

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-8 mb-20 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center space-x-2 text-purple-400 font-bold tracking-widest uppercase text-xs glass px-5 py-2 rounded-full border border-purple-500/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>Microsoft Power Platform Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black italic tracking-tighter"
        >
          Enterprise <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic">PowerApps & Automation</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-300 max-w-4xl mx-auto space-y-6 pt-2 leading-relaxed"
        >
          <p>
            Supercharge your enterprise agility with custom Microsoft PowerApps, Power Automate flows, and Dataverse architecture. DevDesigns bridges the gap between low-code rapid deployment and custom full-stack web infrastructure.
          </p>
          <p>
            Whether you need custom Canvas mobile apps for field teams, Model-Driven operational dashboards, complex multi-system workflow automation, or custom REST API connectors linking PowerApps to your Next.js platforms, our team architects solutions built for scale and security.
          </p>
        </motion.div>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 h-14 px-10 text-white font-black text-lg shadow-xl shadow-purple-600/30">
              Consult PowerApps Strategy
            </Button>
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {powerAppsSolutions.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
              <item.icon className="w-7 h-7 text-purple-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-black italic tracking-tight text-white mb-3 group-hover:text-purple-300 transition-colors">
              {item.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed italic">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Video Banner */}
      <div className="container mx-auto px-4 py-12 mb-20">
        <div className="relative rounded-[3rem] overflow-hidden border border-purple-500/20 aspect-video max-h-[480px]">
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-slate-900 to-indigo-900/40 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-purple-950/40 to-slate-950/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 z-10 px-4">
            <span className="glass px-6 py-2 rounded-full border border-purple-500/30 text-xs font-black italic tracking-widest uppercase text-purple-300">
              High-Velocity Enterprise Automation
            </span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white">
              Low-Code Velocity. <span className="text-purple-400">Enterprise Security.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* AEO/GEO FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 text-purple-400 font-bold text-xs uppercase tracking-widest glass px-4 py-2 rounded-full border border-purple-500/20">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>PowerApps Knowledge Base</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tight text-white">
              PowerApps & Automation <span className="text-purple-400">FAQs</span>
            </h2>
          </div>

          <div className="space-y-6">
            {powerAppsFaqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border border-white/10 bg-slate-900/50 space-y-3"
              >
                <h3 className="text-xl font-bold text-white flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic pl-9">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass p-12 rounded-[3.5rem] bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black italic text-white">
              Build Your PowerApps Solution
            </h2>
            <p className="text-slate-300 max-w-xl text-lg italic">
              Connect with DevDesigns Microsoft solutions architects today for a free workflow audit and proposal.
            </p>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white font-black rounded-full h-14 px-10 text-lg shadow-xl shadow-purple-600/30 shrink-0">
              Start Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

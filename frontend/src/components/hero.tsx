'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { fetchVideos, VideoResult } from '@/lib/image-api';
import { useInteraction } from '@/components/interaction-provider';

export default function Hero() {
    const [video, setVideo] = useState<VideoResult | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const previewVideoRef = useRef<HTMLVideoElement>(null);
    const { openModal } = useInteraction();

    useEffect(() => {
        const loadVideo = async () => {
            const videos = await fetchVideos('digital technology background', 1);
            if (videos.length > 0) {
                setVideo(videos[0]);
            }
        };
        loadVideo();
    }, []);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                {video ? (
                    <>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={video.image}
                            className="w-full h-full object-cover opacity-20 transition-opacity duration-1000"
                        >
                            <source src={video.url} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-slate-950" />
                )}
            </div>

            {/* Background Orbs */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-6 glass">
                            Next-Gen Digital Solutions
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-white">
                            Digital Infrastructure for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-secondary italic">
                                Modern Businesses
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto italic"
                    >
                        DevDesigns provides scaleable, production-ready, enterprise-grade digital solutions—from stunning UI/UX to robust hosting and digital marketplace infrastructure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            onClick={() => openModal('Start a new project with DevDesigns. Options: Web App, UI/UX, SaaS.')}
                            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-xl shadow-primary/20"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            size="lg"
                            onClick={() => openModal('Book a consultation to discuss digital infrastructure and growth.')}
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5 glass"
                        >
                            Book a Consultation
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-16 relative"
                    >
                        <div className="glass rounded-[2.5rem] p-4 shadow-2xl border border-white/10 overflow-hidden bg-white/5">
                            <div
                                className="aspect-video rounded-[2rem] bg-slate-900/50 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                                onClick={() => {
                                    if (previewVideoRef.current) {
                                        if (isPlaying) {
                                            previewVideoRef.current.pause();
                                            setIsPlaying(false);
                                        } else {
                                            previewVideoRef.current.play().catch(e => console.error("Playback failed:", e));
                                            setIsPlaying(true);
                                        }
                                    }
                                }}
                            >
                                {video ? (
                                    <video
                                        ref={previewVideoRef}
                                        poster={video.image}
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                        loop
                                        muted={false}
                                        playsInline
                                    >
                                        <source src={video.url} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
                                )}

                                <AnimatePresence>
                                    {!isPlaying && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center bg-black/20"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white fill-white" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="absolute bottom-8 left-8 text-left pointer-events-none">
                                    <p className="text-white font-black text-2xl tracking-tighter drop-shadow-lg">PLATFORM PREVIEW</p>
                                    <p className="text-white/80 text-sm font-medium drop-shadow-md">Experience the DevDesigns Ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

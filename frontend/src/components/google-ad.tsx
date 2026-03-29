'use client';

import { useEffect, useState } from 'react';

interface GoogleAdProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  style?: React.CSSProperties;
}

export default function GoogleAd({ slot, format = 'auto', className = "", style = {} }: GoogleAdProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // Suppress "already have ads" - happens during hot reload
    }
  }, [mounted]);

  return (
    <div className={`ad-container w-full max-w-5xl mx-auto my-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center p-8 transition-all hover:bg-white/10 ${className}`}>
        <div className="flex items-center gap-2 mb-4 opacity-30 group">
            <div className="h-px w-8 bg-white/50 group-hover:w-12 transition-all" />
            <span className="text-[10px] text-white uppercase tracking-[0.3em] font-black">Sponsored Advertisement</span>
            <div className="h-px w-8 bg-white/50 group-hover:w-12 transition-all" />
        </div>
      
      <div className="w-full min-h-[100px] flex items-center justify-center relative">
        {mounted && (
          <>
            <ins
              className="adsbygoogle"
              style={{ display: 'block', minWidth: '250px', ...style }}
              data-ad-client="ca-pub-9460255466960810"
              data-ad-slot={slot || "auto"}
              data-ad-format={format}
              data-full-width-responsive="true"
            />
            
            {/* Placeholder for Dev Environment / Visual Feedback */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
                <span className="text-4xl font-black italic tracking-tighter">ADSBYGOOGLE</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 flex gap-4 opacity-20 text-[8px] font-bold tracking-widest uppercase">
          <span>Safe Environment</span>
          <span>•</span>
          <span>Premium Content</span>
          <span>•</span>
          <span>Powered by Google</span>
      </div>
    </div>
  );
}

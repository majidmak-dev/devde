import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
        </defs>

        <motion.path
            d="M40 40H120C153.137 40 180 66.8629 180 100C180 133.137 153.137 160 120 160H40V40Z"
            stroke="url(#logo-gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.rect
            x="65" y="65" width="40" height="70" rx="8"
            fill="url(#logo-gradient)"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />

        <motion.circle
            cx="120" cy="75" r="8" fill="#10b981"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
            cx="140" cy="100" r="8" fill="#3b82f6"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.circle
            cx="120" cy="125" r="8" fill="#10b981"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
    </svg>
);

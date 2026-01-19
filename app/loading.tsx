"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0A1628] text-white overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#356DE8]/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#00D9FF]/20 blur-[120px] rounded-full animate-pulse" />

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
            >
                <div className="w-12 h-12">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                        <defs>
                            <linearGradient id="loadingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#356DE8" />
                                <stop offset="100%" stopColor="#00D9FF" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            d="M20 2L36.66 11v18L20 38 3.34 29V11z"
                            fill="url(#loadingLogoGradient)"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">
                            H
                        </text>
                    </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight">HEVARTO</span>
            </motion.div>

            {/* Loading Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-400 mb-8"
            >
                Loading experience...
            </motion.p>

            {/* Animated Loading Bars */}
            <div className="flex gap-1.5 items-end h-10">
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 rounded-full"
                        style={{
                            background: i % 2 === 0 ? "#356DE8" : "#00D9FF",
                        }}
                        initial={{ height: 8 }}
                        animate={{ height: [8, 32, 8] }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>

            {/* Subtle Progress Ring */}
            <motion.div
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <svg className="w-48 h-48" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(53, 109, 232, 0.1)"
                        strokeWidth="2"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#loadingLogoGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}

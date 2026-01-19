"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0A1628] text-white overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#356DE8]/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-[#00D9FF]/20 blur-[120px] rounded-full" />

            <main className="flex flex-col items-center text-center z-10">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-8"
                >
                    <span className="text-[12rem] sm:text-[16rem] font-bold leading-none bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl sm:text-8xl font-bold text-white">404</span>
                    </div>
                </motion.div>

                {/* Message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-2xl sm:text-4xl font-serif text-white mb-4"
                >
                    Page Not <span className="italic text-white/60">Found</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-gray-400 max-w-md mb-10 text-lg"
                >
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <NextLink
                        href="/"
                        className="group px-8 py-4 bg-white text-[#0A1628] font-semibold rounded-full hover:bg-[#356DE8] hover:text-white transition-all flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </NextLink>

                    <button
                        onClick={() => window.history.back()}
                        className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all hover:bg-white hover:text-[#0A1628] flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="absolute bottom-8 text-sm text-gray-500">
                © {new Date().getFullYear()} Hevarto. All rights reserved.
            </footer>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#0E0E0F] text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E0E0F] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-gray-300 tracking-wide font-medium">
                        ACCEPTING NEW CLIENTS
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.9] text-white mb-8"
                >
                    Build the <br />
                    <span className="italic font-light text-white/80">Impossible.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-xl text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
                >
                    We are a digital agency crafting world-class experiences for brands
                    that dare to be different.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2">
                        Start a Project
                        <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all hover:bg-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                        Showreel
                    </button>
                </motion.div>
            </div>

            {/* Social Proof Strip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Partnering with</span>
                <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Simple Text Placeholders for Logos to avoid broken images */}
                    <span className="text-lg font-bold">ACME</span>
                    <span className="text-lg font-bold">VORTEX</span>
                    <span className="text-lg font-bold">LUMEN</span>
                    <span className="text-lg font-bold">SOLARIS</span>
                </div>
            </motion.div>
        </section>
    );
}

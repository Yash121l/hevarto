"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Play } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative w-full h-screen overflow-hidden bg-[#0A1628] text-white">
            {/* Background with Gradient */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/80 to-[#0A1628] z-10" />
                {/* Hexagonal Pattern Overlay */}
                <div className="absolute inset-0 hex-pattern opacity-30 z-[5]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169FF]/20 via-transparent to-[#6B5FFF]/20" />
            </motion.div>

            {/* Floating Gradient Orbs */}
            <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4169FF]/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D9FF]/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#6B5FFF]/15 rounded-full blur-[100px]"
                />
            </div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#4169FF]/30 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
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
                    Your Vision, <br />
                    <span className="italic font-light text-white/80">Our </span>
                    <span className="italic font-light text-gradient-blue">Solution.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-xl text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
                >
                    We transform complex problems into elegant digital solutions.
                    From websites to full-scale applications — bring us your challenge.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-[#4169FF] to-[#00D9FF] text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(65,105,255,0.4)] flex items-center gap-2 overflow-hidden">
                        <span className="relative z-10">Start Your Project</span>
                        <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#4169FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all hover:bg-white/10 hover:border-[#4169FF]/30 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4169FF] to-[#00D9FF] text-white flex items-center justify-center">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                        Our Showreel
                    </button>
                </motion.div>
            </motion.div>

            {/* Social Proof Strip */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Trusted by</span>
                <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-lg font-bold text-[#4169FF]/70">ACME</span>
                    <span className="text-lg font-bold text-[#00D9FF]/70">VORTEX</span>
                    <span className="text-lg font-bold text-[#5B7FFF]/70">LUMEN</span>
                    <span className="text-lg font-bold text-[#6B5FFF]/70">SOLARIS</span>
                </div>
            </motion.div>
        </section>
    );
}

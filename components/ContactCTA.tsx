"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function ContactCTA() {
    return (
        <section id="contact" className="bg-[#0A1628] py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4169FF]/20 via-[#6B5FFF]/10 to-transparent border border-[#4169FF]/20 p-12 md:p-20"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4169FF]/15 rounded-full blur-[150px]" />

                    {/* Hexagonal pattern */}
                    <div className="absolute inset-0 hex-pattern opacity-20" />

                    <div className="relative z-10 text-center">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl text-white font-serif mb-6">
                            Ready to <span className="italic text-gradient-blue">elevate</span>
                            <br />
                            your brand?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10">
                            Let's discuss how we can help you achieve your digital goals. No commitment, just a conversation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-[#4169FF] to-[#00D9FF] text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(65,105,255,0.4)] flex items-center gap-2">
                                Get Started
                                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all hover:bg-white/10 hover:border-[#4169FF]/30">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

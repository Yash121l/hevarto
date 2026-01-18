"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function ContactCTA() {
    return (
        <section id="contact" className="bg-[#0E0E0F] py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#B9FF3E]/20 to-transparent border border-[#B9FF3E]/20 p-12 md:p-20"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B9FF3E]/10 rounded-full blur-[150px]" />

                    <div className="relative z-10 text-center">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl text-white font-serif mb-6">
                            Ready to <span className="italic text-[#B9FF3E]">elevate</span>
                            <br />
                            your brand?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10">
                            Let's discuss how we can help you achieve your digital goals. No commitment, just a conversation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="group px-8 py-4 bg-[#B9FF3E] text-black rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2">
                                Get Started
                                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all hover:bg-white/10">
                                View Our Work
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

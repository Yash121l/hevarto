"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Discovery",
        description: "We dive deep into your business, audience, and goals to understand the full picture.",
    },
    {
        icon: Target,
        title: "Strategy",
        description: "We craft a tailored roadmap that aligns with your vision and market opportunities.",
    },
    {
        icon: Rocket,
        title: "Execution",
        description: "Our team brings the strategy to life with precision, creativity, and technical excellence.",
    },
    {
        icon: BarChart3,
        title: "Optimization",
        description: "We continuously measure, learn, and refine to maximize performance and results.",
    },
];

export default function Process() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif mb-6">
                        From <span className="italic text-white/50">Strategy</span> to{" "}
                        <span className="text-gradient-blue">Success</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Our proven process ensures every project delivers measurable results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00D9FF]/30 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            {/* Step Number */}
                            <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-[#4169FF]/10 transition-colors">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-[#4169FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#4169FF]/20 transition-colors">
                                    <step.icon className="w-7 h-7 text-[#00D9FF]" />
                                </div>
                                <h3 className="text-xl sm:text-2xl text-white font-semibold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

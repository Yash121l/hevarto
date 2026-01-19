"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Lightbulb, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Discovery",
        description: "We dive deep into your vision, understanding goals and challenges.",
    },
    {
        icon: Target,
        title: "Strategy",
        description: "Crafting a roadmap that aligns with your business objectives.",
    },
    {
        icon: Rocket,
        title: "Execution",
        description: "Bringing ideas to life with precision and creative excellence.",
    },
    {
        icon: BarChart3,
        title: "Optimization",
        description: "Continuous improvement based on data and user feedback.",
    },
];

function GlowingProcessCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 overflow-hidden"
        >
            {/* Glow Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                    background: useTransform(
                        [x, y],
                        ([latestX, latestY]) =>
                            `radial-gradient(300px circle at ${latestX}px ${latestY}px, rgba(53, 109, 232, 0.15), transparent 40%)`
                    ),
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Border Glow */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    boxShadow: isHovered
                        ? "inset 0 0 0 1px rgba(0, 217, 255, 0.3)"
                        : "inset 0 0 0 0px transparent",
                }}
            />

            {/* Step Number */}
            <div className={`absolute top-4 right-4 text-6xl font-bold transition-colors duration-300 ${isHovered ? "text-[#356DE8]/20" : "text-white/5"}`}>
                {String(index + 1).padStart(2, "0")}
            </div>

            <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${isHovered ? "bg-white" : "bg-white/5"}`}>
                    <step.icon className={`w-7 h-7 transition-colors duration-300 ${isHovered ? "text-[#0A1628]" : "text-[#00D9FF]"}`} />
                </div>
                <h3 className={`text-xl sm:text-2xl font-semibold mb-3 transition-colors duration-300 ${isHovered ? "text-white" : "text-white/90"}`}>
                    {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Process() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00D9FF]/10 rounded-full blur-[200px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif mb-6">
                        How We <span className="italic text-white/50">Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Our proven process ensures every project is delivered with excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <GlowingProcessCard key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

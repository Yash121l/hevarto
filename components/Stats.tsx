"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState, MouseEvent } from "react";

const stats = [
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepDuration);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-2">
            {count}
            <span className="text-[#00D9FF]">{suffix}</span>
        </div>
    );
}

function GlowingStatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
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
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 text-center md:text-left overflow-hidden"
        >
            {/* Glow Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                    background: useTransform(
                        [x, y],
                        ([latestX, latestY]) =>
                            `radial-gradient(300px circle at ${latestX}px ${latestY}px, rgba(53, 109, 232, 0.2), transparent 40%)`
                    ),
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Border Glow */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    boxShadow: isHovered
                        ? "inset 0 0 0 1px rgba(255, 255, 255, 0.2)"
                        : "inset 0 0 0 0px transparent",
                }}
            />

            <div className="relative z-10">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className={`text-sm sm:text-base uppercase tracking-widest transition-colors duration-300 ${isHovered ? "text-white/80" : "text-gray-400"}`}>
                    {stat.label}
                </div>
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#356DE8]/10 rounded-full blur-[200px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl md:text-7xl text-white font-serif leading-tight">
                        Building <span className="italic text-white/50">digital</span>
                        <br />
                        experiences that
                        <br />
                        <span className="text-gradient-blue">scale.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <GlowingStatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

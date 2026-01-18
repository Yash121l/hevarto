"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

export default function Stats() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4169FF]/10 rounded-full blur-[200px]" />

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
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#4169FF]/30 hover:bg-white/[0.04] transition-all duration-500 text-center md:text-left"
                        >
                            {/* Glassmorphism shine effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4169FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                <div className="text-sm sm:text-base text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

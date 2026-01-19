"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Zap, Users, Clock, HeartHandshake } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Custom Solutions",
        description: "Every project is unique. We craft tailor-made solutions that perfectly fit your business needs and goals.",
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "We understand time is money. Our agile process ensures rapid delivery without compromising quality.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Our seasoned professionals bring years of experience in design, development, and digital strategy.",
    },
    {
        icon: HeartHandshake,
        title: "Ongoing Support",
        description: "We don't just build and leave. Our partnership continues with dedicated support and maintenance.",
    },
];

function GlowingBenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            {/* Card */}
            <div className="relative h-full p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20">
                {/* Glow Effect */}
                <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    style={{
                        background: useTransform(
                            [x, y],
                            ([latestX, latestY]) =>
                                `radial-gradient(400px circle at ${latestX}px ${latestY}px, rgba(53, 109, 232, 0.15), transparent 40%)`
                        ),
                        opacity: isHovered ? 1 : 0,
                    }}
                />

                {/* Border Glow */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                        boxShadow: isHovered
                            ? "inset 0 0 0 1px rgba(53, 109, 232, 0.5)"
                            : "inset 0 0 0 0px transparent",
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Icon container */}
                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${isHovered ? "bg-white" : "bg-white/5"}`}>
                    <benefit.icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? "text-[#0A1628]" : "text-white/70"}`} />
                </div>

                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isHovered ? "text-white" : "text-white/90"}`}>
                    {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Benefits() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Floating gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#356DE8]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif mb-6">
                        Why Choose <span className="italic text-white/50">Us</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We combine creativity, technology, and strategy to deliver exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <GlowingBenefitCard key={benefit.title} benefit={benefit} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

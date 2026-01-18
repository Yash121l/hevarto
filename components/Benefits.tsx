"use client";

import { motion } from "framer-motion";
import { Zap, Users, Clock, HeartHandshake } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Custom Solutions",
        description: "Every project is unique. We craft tailor-made solutions that perfectly fit your business needs and goals.",
        gradient: "from-[#4169FF] to-[#2D4DB8]",
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "We understand time is money. Our agile process ensures rapid delivery without compromising quality.",
        gradient: "from-[#00D9FF] to-[#4169FF]",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Our seasoned professionals bring years of experience in design, development, and digital strategy.",
        gradient: "from-[#6B5FFF] to-[#4169FF]",
    },
    {
        icon: HeartHandshake,
        title: "Ongoing Support",
        description: "We don't just build and leave. Our partnership continues with dedicated support and maintenance.",
        gradient: "from-[#5B7FFF] to-[#00D9FF]",
    },
];

export default function Benefits() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Floating gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#4169FF]/10 rounded-full blur-[120px] animate-pulse" />
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
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#4169FF]/30 hover:bg-white/[0.06]">
                                {/* Gradient glow on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Icon container */}
                                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[1px] mb-6`}>
                                    <div className="w-full h-full rounded-2xl bg-[#0A1628] flex items-center justify-center">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>

                                {/* Decorative corner */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#4169FF]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

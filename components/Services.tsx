"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Globe, Palette, Megaphone, Smartphone, Lightbulb } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies for performance and scalability.",
        icon: Globe,
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive, engaging digital experiences that convert.",
        icon: Palette,
    },
    {
        id: "03",
        title: "Brand Strategy",
        description: "Strategic brand development that positions your business for growth and recognition.",
        icon: Lightbulb,
    },
    {
        id: "04",
        title: "Digital Marketing",
        description: "Data-driven marketing strategies that drive traffic, engagement, and conversions.",
        icon: Megaphone,
    },
    {
        id: "05",
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
        icon: Smartphone,
    },
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="bg-[#0E0E0F] py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[200px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif">
                        Our <span className="italic text-white/50">Expertise</span>
                    </h2>
                    <p className="text-gray-400 max-w-md text-lg">
                        We blend creativity with technology to deliver solutions that make an impact.
                    </p>
                </motion.div>

                <div className="border-t border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-white/10 py-8 md:py-10 cursor-pointer transition-colors"
                        >
                            {/* Hover background with glassmorphism */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-r from-[#B9FF3E]/5 via-white/[0.02] to-transparent backdrop-blur-sm"
                            />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 px-4">
                                {/* Service Number */}
                                <span className="text-[#B9FF3E] font-mono text-sm w-8">
                                    {service.id}
                                </span>

                                {/* Icon */}
                                <div className="hidden md:flex w-12 h-12 rounded-xl bg-white/5 items-center justify-center group-hover:bg-[#B9FF3E]/10 transition-colors">
                                    <service.icon className="w-5 h-5 text-white/50 group-hover:text-[#B9FF3E] transition-colors" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-medium flex-1 group-hover:text-[#B9FF3E] transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description - appears on hover */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{
                                        width: hoveredIndex === index ? "auto" : 0,
                                        opacity: hoveredIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="hidden lg:block overflow-hidden"
                                >
                                    <p className="text-gray-400 max-w-xs text-sm whitespace-nowrap pr-8">
                                        {service.description}
                                    </p>
                                </motion.div>

                                {/* Arrow */}
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#B9FF3E] transition-all">
                                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-black group-hover:rotate-45 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

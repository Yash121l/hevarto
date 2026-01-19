"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";
import { ArrowUpRight, Globe, Palette, Megaphone, Smartphone, Lightbulb } from "lucide-react";
import NextLink from "next/link";

const services = [
    {
        id: "web-development",
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies for performance and scalability.",
        icon: Globe,
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive, engaging digital experiences that convert.",
        icon: Palette,
    },
    {
        id: "brand-strategy",
        title: "Brand Strategy",
        description: "Strategic brand development that positions your business for growth and recognition.",
        icon: Lightbulb,
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Data-driven marketing strategies that drive traffic, engagement, and conversions.",
        icon: Megaphone,
    },
    {
        id: "mobile-apps",
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
        icon: Smartphone,
    },
];

// Glowing card with mouse tracking
function GlowingServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            <NextLink href={`/services/${service.id}`}>
                <div className="relative border-b border-white/10 py-8 md:py-10 cursor-pointer overflow-hidden">
                    {/* Glow Effect */}
                    <motion.div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: useTransform(
                                [x, y],
                                ([latestX, latestY]) =>
                                    `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(53, 109, 232, 0.15), transparent 40%)`
                            ),
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Border Glow */}
                    <motion.div
                        className="absolute inset-x-0 bottom-0 h-px"
                        style={{
                            background: isHovered
                                ? "linear-gradient(90deg, transparent, #356DE8, #00D9FF, #356DE8, transparent)"
                                : "transparent",
                        }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 px-4">
                        {/* Service Number */}
                        <span className={`font-mono text-sm w-8 transition-colors duration-300 ${isHovered ? "text-white" : "text-[#00D9FF]"}`}>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}
                        <div className={`hidden md:flex w-12 h-12 rounded-xl items-center justify-center transition-all duration-300 ${isHovered ? "bg-white" : "bg-white/5"}`}>
                            <service.icon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? "text-[#0A1628]" : "text-white/50"}`} />
                        </div>

                        {/* Title */}
                        <h3 className={`text-2xl sm:text-3xl md:text-4xl font-medium flex-1 transition-colors duration-300 ${isHovered ? "text-white" : "text-white/80"}`}>
                            {service.title}
                        </h3>

                        {/* Description - visible on hover */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: isHovered ? "auto" : 0,
                                opacity: isHovered ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="hidden lg:block overflow-hidden"
                        >
                            <p className="text-gray-400 max-w-xs text-sm whitespace-nowrap pr-8">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Arrow */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-white" : "bg-white/5"}`}>
                            <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? "text-[#0A1628] rotate-45" : "text-white/50"}`} />
                        </div>
                    </div>
                </div>
            </NextLink>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="bg-[#0A1628] py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#356DE8]/5 rounded-full blur-[200px]" />

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
                        <GlowingServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

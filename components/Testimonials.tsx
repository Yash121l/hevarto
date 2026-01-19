"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Hevarto transformed our digital presence completely. Their attention to detail and strategic thinking is unmatched.",
        name: "Sarah Chen",
        title: "CEO, TechFlow",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "Working with Hevarto was a game-changer. They delivered beyond our expectations and on time.",
        name: "Marcus Johnson",
        title: "Founder, Apex Ventures",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "The team's creativity and technical expertise helped us stand out in a competitive market.",
        name: "Elena Rodriguez",
        title: "CMO, Innovate Labs",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

function GlowingTestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
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
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all relative overflow-hidden"
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
                        ? "inset 0 0 0 1px rgba(53, 109, 232, 0.4)"
                        : "inset 0 0 0 0px transparent",
                }}
            />

            {/* Quote icon */}
            <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-white" : "bg-white/5"}`}>
                <Quote className={`w-4 h-4 transition-colors duration-300 ${isHovered ? "text-[#0A1628]" : "text-[#00D9FF]"}`} />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic relative z-10">
                &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute inset-0 rounded-full border-2 transition-colors duration-300 ${isHovered ? "border-white/50" : "border-[#356DE8]/30"}`} />
                </div>
                <div>
                    <div className={`font-medium transition-colors duration-300 ${isHovered ? "text-white" : "text-white/90"}`}>{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.title}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#6B5FFF]/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif mb-6">
                        What Our <span className="italic text-white/50">Clients</span> Say
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <GlowingTestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

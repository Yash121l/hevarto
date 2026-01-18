"use client";

import { motion } from "framer-motion";
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
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#4169FF]/30 hover:bg-white/[0.04] transition-all relative"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#4169FF]/10 flex items-center justify-center group-hover:bg-[#4169FF]/20 transition-colors">
                                <Quote className="w-4 h-4 text-[#00D9FF]" />
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-full border-2 border-[#4169FF]/30 group-hover:border-[#00D9FF]/50 transition-colors" />
                                </div>
                                <div>
                                    <div className="text-white font-medium group-hover:text-[#00D9FF] transition-colors">{testimonial.name}</div>
                                    <div className="text-gray-500 text-sm">{testimonial.title}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

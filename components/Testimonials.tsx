"use client";

import { motion } from "framer-motion";

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
        <section className="bg-[#0E0E0F] py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
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
                            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                        >
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="text-white font-medium">{testimonial.name}</div>
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

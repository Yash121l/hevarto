"use client";

import { motion } from "framer-motion";

const PROJECTS = [
    {
        id: 1,
        title: "Apex Finance",
        category: "Fintech",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Nebula Stream",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "EcoVibe",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Quantum Labs",
        category: "Research",
        image: "https://images.unsplash.com/photo-1535378437327-b71494663f80?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function ProjectGallery() {
    return (
        <section id="work" className="bg-[#0A1628] py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-fade-in-up">
                    <h2 className="text-4xl sm:text-6xl text-white font-serif">
                        Selected <span className="italic text-white/50">Work</span>
                    </h2>
                    <p className="text-gray-400 mt-4 md:mt-0 max-w-sm text-lg">
                        A showcase of our most ambitious projects, pushing the boundaries of digital design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer ${index % 2 === 1 ? "md:translate-y-24" : ""
                                }`}
                        >
                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-sm text-[#00D9FF] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.category}
                                </p>
                                <h3 className="text-3xl text-white font-medium group-hover:text-gradient-blue transition-colors">{project.title}</h3>
                            </div>

                            {/* Border glow on hover */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#356DE8]/30 transition-colors duration-500 z-30 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

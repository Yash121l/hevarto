"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Apex Finance",
        category: "Fintech",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Nebula Stream",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "EcoVibe",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Quantum Labs",
        category: "Research",
        image: "https://images.unsplash.com/photo-1535378437327-b71494663f80?q=80&w=2070&auto=format&fit=crop",
    },
];

function GlowingProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
        >
            {/* Image */}
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Glow Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: useTransform(
                        [x, y],
                        ([latestX, latestY]) =>
                            `radial-gradient(400px circle at ${latestX}px ${latestY}px, rgba(53, 109, 232, 0.3), transparent 40%)`
                    ),
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className={`text-xs uppercase tracking-widest mb-2 block transition-colors duration-300 ${isHovered ? "text-white" : "text-[#00D9FF]"}`}>
                    {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl text-white font-medium">
                    {project.title}
                </h3>
            </div>

            {/* Arrow */}
            <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${isHovered ? "bg-white" : "bg-white/10"}`}>
                <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? "text-[#0A1628] rotate-45" : "text-white"}`} />
            </div>

            {/* Border glow on hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{
                    boxShadow: isHovered
                        ? "inset 0 0 0 2px rgba(53, 109, 232, 0.5)"
                        : "inset 0 0 0 0px transparent",
                }}
            />
        </motion.div>
    );
}

export default function ProjectGallery() {
    return (
        <section className="bg-[#0A1628] py-32 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif">
                        Selected <span className="italic text-white/50">Works</span>
                    </h2>
                    <a
                        href="/projects"
                        className="group px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-[#0A1628] flex items-center gap-2"
                    >
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <GlowingProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

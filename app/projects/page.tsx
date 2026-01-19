"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import NextLink from "next/link";

const PROJECTS = [
    {
        id: 1,
        title: "Apex Finance",
        category: "Fintech",
        description: "A comprehensive fintech platform with real-time analytics and modern banking features.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Web App", "UI/UX", "API Integration"],
    },
    {
        id: 2,
        title: "Nebula Stream",
        category: "SaaS Platform",
        description: "Enterprise-grade streaming platform with advanced content management system.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        tags: ["SaaS", "Full Stack", "Cloud"],
    },
    {
        id: 3,
        title: "EcoVibe",
        category: "E-Commerce",
        description: "Sustainable e-commerce platform connecting eco-conscious consumers with green products.",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop",
        tags: ["E-Commerce", "Shopify", "Mobile"],
    },
    {
        id: 4,
        title: "Quantum Labs",
        category: "Research",
        description: "Cutting-edge research portal for quantum computing documentation and collaboration.",
        image: "https://images.unsplash.com/photo-1535378437327-b71494663f80?q=80&w=2070&auto=format&fit=crop",
        tags: ["Web App", "Documentation", "React"],
    },
    {
        id: 5,
        title: "MindSpace",
        category: "Health & Wellness",
        description: "Mental wellness app with guided meditation, mood tracking, and personalized recommendations.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Mobile App", "React Native", "AI"],
    },
    {
        id: 6,
        title: "UrbanFlow",
        category: "Real Estate",
        description: "Smart property management platform with virtual tours and tenant portals.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        tags: ["Web App", "3D", "PropTech"],
    },
];

const CATEGORIES = ["All", "Fintech", "SaaS Platform", "E-Commerce", "Research", "Health & Wellness", "Real Estate"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === activeCategory);

    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Our"
                titleHighlight="Work"
                subtitle="Explore our portfolio of successful projects across various industries. Each project represents our commitment to excellence and innovation."
                breadcrumbs={[{ label: "Projects" }]}
            />

            {/* Filters */}
            <section className="py-8 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap gap-3"
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white"
                                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <div className="aspect-[4/3] relative">
                                    {/* Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-xs text-[#00D9FF] uppercase tracking-widest mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl text-white font-medium mb-2 group-hover:text-gradient-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:bg-gradient-to-r group-hover:from-[#356DE8] group-hover:to-[#00D9FF]">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#356DE8]/30 transition-colors pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                            Ready to start your <span className="italic text-gradient-blue">project</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let&apos;s discuss how we can bring your vision to life with the same level of quality and innovation.
                        </p>
                        <NextLink
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(53,109,232,0.4)] transition-all"
                        >
                            Start Your Project
                            <ArrowUpRight className="w-5 h-5" />
                        </NextLink>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Check, ArrowRight, Code, Database, Cloud, Zap } from "lucide-react";
import NextLink from "next/link";

const features = [
    {
        icon: Code,
        title: "Modern Tech Stack",
        description: "We use the latest frameworks and technologies including React, Next.js, Node.js, and more to build fast, scalable applications.",
    },
    {
        icon: Database,
        title: "Robust Backend",
        description: "Secure, scalable backend solutions with proper database architecture, API design, and cloud infrastructure.",
    },
    {
        icon: Cloud,
        title: "Cloud-Native",
        description: "Deploy to any cloud platform with CI/CD pipelines, containerization, and auto-scaling capabilities.",
    },
    {
        icon: Zap,
        title: "Performance First",
        description: "Optimized for speed with lazy loading, code splitting, caching strategies, and Core Web Vitals optimization.",
    },
];

const deliverables = [
    "Custom web application tailored to your needs",
    "Responsive design for all devices",
    "SEO optimization and meta configuration",
    "Performance optimization and testing",
    "Admin dashboard and CMS integration",
    "API documentation",
    "Security audit and implementation",
    "Post-launch support and maintenance",
];

const technologies = [
    "React", "Next.js", "Vue.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "AWS", "Vercel", "Docker"
];

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Web"
                titleHighlight="Development"
                subtitle="Custom websites and web applications built with cutting-edge technologies for performance, scalability, and exceptional user experience."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Web Development" }
                ]}
            />

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#356DE8] to-[#00D9FF] flex items-center justify-center mb-6">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                                Build <span className="italic text-gradient-blue">powerful</span> web experiences
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                From simple landing pages to complex enterprise applications, we create web solutions that drive business growth. Our development process focuses on performance, security, and user experience.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We work with startups and enterprises alike, bringing the same level of dedication and expertise to every project. Our team stays current with the latest technologies and best practices to ensure your web presence stands out.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#356DE8]/20 to-[#00D9FF]/20 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                    alt="Web Development"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 sm:px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            What Sets Us <span className="italic text-white/50">Apart</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#356DE8]/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#356DE8]/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-[#00D9FF]" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl text-white font-serif mb-6">
                                What You&apos;ll <span className="italic text-gradient-blue">Get</span>
                            </h2>
                            <div className="space-y-4">
                                {deliverables.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#356DE8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-[#00D9FF]" />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl text-white font-serif mb-6">
                                Technologies <span className="italic text-white/50">We Use</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#356DE8]/30 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#356DE8]/20 via-transparent to-[#00D9FF]/10 border border-[#356DE8]/20 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            Ready to build your <span className="italic text-gradient-blue">web project</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let&apos;s discuss your requirements and create something amazing together.
                        </p>
                        <NextLink
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(53,109,232,0.4)] transition-all"
                        >
                            Get a Quote
                            <ArrowRight className="w-5 h-5" />
                        </NextLink>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

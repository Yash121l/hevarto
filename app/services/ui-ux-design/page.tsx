"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, Check, ArrowRight, Users, Layers, MousePointer, Eye } from "lucide-react";
import NextLink from "next/link";

const features = [
    {
        icon: Users,
        title: "User Research",
        description: "Deep understanding of your users through interviews, surveys, and behavioral analysis.",
    },
    {
        icon: Layers,
        title: "Information Architecture",
        description: "Logical structure and navigation that makes complex information accessible.",
    },
    {
        icon: MousePointer,
        title: "Interaction Design",
        description: "Intuitive interactions and micro-animations that delight users.",
    },
    {
        icon: Eye,
        title: "Visual Design",
        description: "Stunning visuals that align with your brand and engage your audience.",
    },
];

const deliverables = [
    "User personas and journey maps",
    "Wireframes and low-fidelity prototypes",
    "High-fidelity UI designs",
    "Interactive prototypes",
    "Design system and component library",
    "Responsive design specs",
    "Developer handoff documentation",
    "Usability testing reports",
];

const tools = [
    "Figma", "Adobe XD", "Sketch", "Framer", "Principle", "InVision", "Miro", "Hotjar", "Maze", "UserTesting"
];

export default function UIUXDesignPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="UI/UX"
                titleHighlight="Design"
                subtitle="User-centered design that creates intuitive, engaging digital experiences that convert visitors into customers."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "UI/UX Design" }
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
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B5FFF] to-[#356DE8] flex items-center justify-center mb-6">
                                <Palette className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                                Design that <span className="italic text-gradient-blue">converts</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Great design is invisible. It guides users effortlessly toward their goals while creating memorable experiences. We combine aesthetics with usability to create interfaces that not only look beautiful but perform exceptionally.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Our design process is rooted in user research and validated through testing. We don&apos;t just make things pretty—we solve real problems and create measurable business impact.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#6B5FFF]/20 to-[#356DE8]/20 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                                    alt="UI/UX Design"
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
                            Our Design <span className="italic text-white/50">Process</span>
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
                                <div className="w-12 h-12 rounded-xl bg-[#6B5FFF]/10 flex items-center justify-center mb-4">
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
                                        <div className="w-5 h-5 rounded-full bg-[#6B5FFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                                Tools <span className="italic text-white/50">We Use</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#6B5FFF]/30 hover:text-white transition-colors"
                                    >
                                        {tool}
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
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#6B5FFF]/20 via-transparent to-[#356DE8]/10 border border-[#6B5FFF]/20 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            Ready for a design <span className="italic text-gradient-blue">upgrade</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let&apos;s create an experience your users will love.
                        </p>
                        <NextLink
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B5FFF] to-[#356DE8] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(107,95,255,0.4)] transition-all"
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

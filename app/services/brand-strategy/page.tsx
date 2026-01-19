"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Check, ArrowRight, Target, Palette, MessageSquare, TrendingUp } from "lucide-react";
import NextLink from "next/link";

const features = [
    {
        icon: Target,
        title: "Brand Discovery",
        description: "Understanding your vision, values, and market position to define your brand's foundation.",
    },
    {
        icon: Palette,
        title: "Visual Identity",
        description: "Creating distinctive logos, color palettes, and typography that reflect your brand.",
    },
    {
        icon: MessageSquare,
        title: "Brand Voice",
        description: "Developing messaging and tone guidelines that resonate with your audience.",
    },
    {
        icon: TrendingUp,
        title: "Brand Strategy",
        description: "Positioning your brand for growth in competitive markets.",
    },
];

const deliverables = [
    "Brand strategy document",
    "Logo and logo variations",
    "Color palette and usage guidelines",
    "Typography system",
    "Brand voice and messaging guide",
    "Visual style guide",
    "Brand applications (business cards, letterhead)",
    "Social media brand kit",
];

export default function BrandStrategyPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Brand"
                titleHighlight="Strategy"
                subtitle="Strategic brand development that positions your business for growth, recognition, and lasting customer relationships."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Brand Strategy" }
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
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9FF] to-[#356DE8] flex items-center justify-center mb-6">
                                <Lightbulb className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                                Build a brand that <span className="italic text-gradient-blue">resonates</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Your brand is more than a logo—it&apos;s the promise you make to your customers and the experience you deliver. We help you define, articulate, and express that promise in ways that create lasting connections.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From startups finding their voice to established companies seeking a refresh, we bring strategic thinking and creative excellence to every branding project.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#00D9FF]/20 to-[#356DE8]/20 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=2069&auto=format&fit=crop"
                                    alt="Brand Strategy"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00D9FF]/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center mb-4">
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
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl text-white font-serif mb-8 text-center">
                            What You&apos;ll <span className="italic text-gradient-blue">Get</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {deliverables.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="w-5 h-5 rounded-full bg-[#00D9FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-[#00D9FF]" />
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
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
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#00D9FF]/20 via-transparent to-[#356DE8]/10 border border-[#00D9FF]/20 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            Ready to define your <span className="italic text-gradient-blue">brand</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let&apos;s create a brand identity that sets you apart.
                        </p>
                        <NextLink
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#356DE8] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all"
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

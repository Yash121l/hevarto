"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Megaphone, Check, ArrowRight, Search, BarChart3, Share2, Mail } from "lucide-react";
import NextLink from "next/link";

const features = [
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Technical SEO, content optimization, and link building to improve your search rankings.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Insights",
        description: "Data-driven decisions with comprehensive tracking and reporting.",
    },
    {
        icon: Share2,
        title: "Social Media",
        description: "Strategic social presence that builds community and drives engagement.",
    },
    {
        icon: Mail,
        title: "Email Marketing",
        description: "Automated campaigns that nurture leads and drive conversions.",
    },
];

const deliverables = [
    "Digital marketing strategy document",
    "SEO audit and optimization plan",
    "Content calendar and strategy",
    "Social media management",
    "PPC campaign setup and management",
    "Monthly performance reports",
    "Conversion rate optimization",
    "Marketing automation setup",
];

export default function DigitalMarketingPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Digital"
                titleHighlight="Marketing"
                subtitle="Data-driven marketing strategies that drive traffic, engagement, and conversions while maximizing your ROI."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Digital Marketing" }
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
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#356DE8] to-[#6B5FFF] flex items-center justify-center mb-6">
                                <Megaphone className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                                Marketing that <span className="italic text-gradient-blue">delivers</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                In today&apos;s digital landscape, visibility is everything. We create comprehensive marketing strategies that put your brand in front of the right audience at the right time.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From SEO and content marketing to paid advertising and social media, we take a holistic approach that drives measurable results and sustainable growth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#356DE8]/20 to-[#6B5FFF]/20 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Digital Marketing"
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
                                    <div className="w-5 h-5 rounded-full bg-[#356DE8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#356DE8]/20 via-transparent to-[#6B5FFF]/10 border border-[#356DE8]/20 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            Ready to grow your <span className="italic text-gradient-blue">audience</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let&apos;s create a marketing strategy that delivers results.
                        </p>
                        <NextLink
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#356DE8] to-[#6B5FFF] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(53,109,232,0.4)] transition-all"
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

"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, Check, ArrowRight, Layers, Cpu, Zap, Shield } from "lucide-react";
import NextLink from "next/link";

const features = [
    {
        icon: Layers,
        title: "Cross-Platform",
        description: "Build once, deploy everywhere with React Native for iOS and Android.",
    },
    {
        icon: Cpu,
        title: "Native Performance",
        description: "Smooth animations and native feel with optimized performance.",
    },
    {
        icon: Zap,
        title: "Offline Support",
        description: "Apps that work offline with intelligent data synchronization.",
    },
    {
        icon: Shield,
        title: "Security First",
        description: "Secure data handling, encryption, and authentication.",
    },
];

const deliverables = [
    "iOS and Android applications",
    "UI/UX design for mobile",
    "Backend API integration",
    "Push notification system",
    "App store optimization (ASO)",
    "App store submission",
    "Analytics and crash reporting",
    "Post-launch support and updates",
];

const technologies = [
    "React Native", "Swift", "Kotlin", "Flutter", "Firebase", "AWS Amplify", "GraphQL", "REST APIs", "Redux", "TypeScript"
];

export default function MobileAppsPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Mobile"
                titleHighlight="Apps"
                subtitle="Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Mobile Apps" }
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
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A7FF0] to-[#00D9FF] flex items-center justify-center mb-6">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                                Apps that users <span className="italic text-gradient-blue">love</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Mobile is where your users are. We build apps that not only look stunning but provide smooth, intuitive experiences that keep users coming back.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you need a native iOS or Android app, or want to maximize efficiency with cross-platform development, we have the expertise to bring your mobile vision to life.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A7FF0]/20 to-[#00D9FF]/20 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Mobile Apps"
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
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#4A7FF0]/30 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#4A7FF0]/10 flex items-center justify-center mb-4">
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
                                        <div className="w-5 h-5 rounded-full bg-[#4A7FF0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#4A7FF0]/30 hover:text-white transition-colors"
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
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#4A7FF0]/20 via-transparent to-[#00D9FF]/10 border border-[#4A7FF0]/20 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            Ready to build your <span className="italic text-gradient-blue">app</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let&apos;s create a mobile experience your users will love.
                        </p>
                        <NextLink
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4A7FF0] to-[#00D9FF] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(74,127,240,0.4)] transition-all"
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

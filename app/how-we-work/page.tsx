"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Target, Rocket, BarChart3, Check, ArrowRight } from "lucide-react";
import NextLink from "next/link";

const processSteps = [
    {
        icon: Lightbulb,
        number: "01",
        title: "Discovery",
        subtitle: "Understanding Your Vision",
        description: "We begin by diving deep into your business, understanding your goals, target audience, competitors, and unique value proposition. This phase sets the foundation for everything that follows.",
        details: [
            "Stakeholder interviews and workshops",
            "Competitive analysis and market research",
            "User persona development",
            "Project scope and requirements definition",
            "Timeline and milestone planning",
        ],
        duration: "1-2 Weeks",
    },
    {
        icon: Target,
        number: "02",
        title: "Strategy",
        subtitle: "Crafting The Roadmap",
        description: "Based on our discovery findings, we develop a comprehensive strategy that aligns your business objectives with user needs. We create wireframes, sitemaps, and define the technical architecture.",
        details: [
            "Information architecture design",
            "Wireframing and prototyping",
            "Technology stack selection",
            "Content strategy planning",
            "Resource allocation and budgeting",
        ],
        duration: "2-3 Weeks",
    },
    {
        icon: Rocket,
        number: "03",
        title: "Execution",
        subtitle: "Bringing Ideas To Life",
        description: "Our expert team transforms the strategy into reality. We follow agile methodologies with regular check-ins to ensure transparency and alignment throughout the development process.",
        details: [
            "UI/UX design implementation",
            "Frontend and backend development",
            "Quality assurance and testing",
            "Regular sprint reviews and demos",
            "Iterative refinement based on feedback",
        ],
        duration: "4-12 Weeks",
    },
    {
        icon: BarChart3,
        number: "04",
        title: "Optimization",
        subtitle: "Continuous Improvement",
        description: "Launch is just the beginning. We monitor performance, gather user feedback, and continuously optimize to ensure your digital product evolves with your business and market needs.",
        details: [
            "Performance monitoring and analytics",
            "A/B testing and conversion optimization",
            "Security updates and maintenance",
            "Scalability planning",
            "Ongoing support and enhancements",
        ],
        duration: "Ongoing",
    },
];

const principles = [
    {
        title: "Transparent Communication",
        description: "We believe in open, honest communication. You'll always know where your project stands, what's coming next, and any challenges we're addressing.",
    },
    {
        title: "Agile Methodology",
        description: "Our agile approach allows for flexibility and rapid iteration. We deliver working features regularly so you can see progress and provide feedback early.",
    },
    {
        title: "Quality First",
        description: "We never cut corners. Every line of code is reviewed, every design is polished, and every feature is thoroughly tested before delivery.",
    },
    {
        title: "Partnership Mindset",
        description: "We see ourselves as an extension of your team. Your success is our success, and we're invested in your long-term growth.",
    },
];

export default function HowWeWorkPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="How We"
                titleHighlight="Work"
                subtitle="Our proven process combines creativity, strategy, and technical excellence to deliver exceptional results. Here's how we bring your vision to life."
                breadcrumbs={[{ label: "How We Work" }]}
            />

            {/* Process Steps */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative mb-16 last:mb-0"
                        >
                            {/* Connector Line */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute left-[3.5rem] top-32 w-px h-32 bg-gradient-to-b from-[#356DE8] to-transparent" />
                            )}

                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                {/* Step Info */}
                                <div className="lg:w-1/3">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#356DE8] to-[#00D9FF] flex items-center justify-center flex-shrink-0">
                                            <step.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-[#00D9FF] font-mono text-sm">{step.number}</span>
                                            <h3 className="text-2xl sm:text-3xl text-white font-medium">{step.title}</h3>
                                            <p className="text-gray-400 text-sm">{step.subtitle}</p>
                                            <span className="inline-block mt-2 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                                                {step.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Step Details */}
                                <div className="lg:w-2/3 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                                    <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {step.details.map((detail, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#356DE8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#00D9FF]" />
                                                </div>
                                                <span className="text-gray-400 text-sm">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Principles */}
            <section className="py-20 px-4 sm:px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-5xl text-white font-serif mb-6">
                            Our <span className="italic text-white/50">Guiding</span> Principles
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            These core values shape how we approach every project and every client relationship.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#356DE8]/30 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                                <p className="text-gray-400">{principle.description}</p>
                            </motion.div>
                        ))}
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
                        className="p-12 rounded-3xl bg-gradient-to-br from-[#356DE8]/20 via-[#6B5FFF]/10 to-transparent border border-[#356DE8]/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#356DE8]/10 rounded-full blur-[150px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                                Ready to get <span className="italic text-gradient-blue">started</span>?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Let&apos;s schedule a discovery call to discuss your project and how we can help.
                            </p>
                            <NextLink
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(53,109,232,0.4)] transition-all"
                            >
                                Book a Discovery Call
                                <ArrowRight className="w-5 h-5" />
                            </NextLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

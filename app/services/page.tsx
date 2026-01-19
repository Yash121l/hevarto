"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Palette, Lightbulb, Megaphone, Smartphone, ArrowRight } from "lucide-react";
import NextLink from "next/link";

const services = [
    {
        id: "web-development",
        icon: Globe,
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies for performance and scalability.",
        features: ["Custom Web Applications", "E-commerce Solutions", "CMS Development", "API Integration"],
        gradient: "from-[#356DE8] to-[#00D9FF]",
    },
    {
        id: "ui-ux-design",
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive, engaging digital experiences that convert.",
        features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
        gradient: "from-[#6B5FFF] to-[#356DE8]",
    },
    {
        id: "brand-strategy",
        icon: Lightbulb,
        title: "Brand Strategy",
        description: "Strategic brand development that positions your business for growth and recognition.",
        features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Messaging Strategy"],
        gradient: "from-[#00D9FF] to-[#356DE8]",
    },
    {
        id: "digital-marketing",
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Data-driven marketing strategies that drive traffic, engagement, and conversions.",
        features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics & Reporting"],
        gradient: "from-[#356DE8] to-[#6B5FFF]",
    },
    {
        id: "mobile-apps",
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
        features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
        gradient: "from-[#4A7FF0] to-[#00D9FF]",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Our"
                titleHighlight="Services"
                subtitle="We offer comprehensive digital solutions tailored to your business needs. From concept to launch and beyond."
                breadcrumbs={[{ label: "Services" }]}
            />

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <NextLink href={`/services/${service.id}`}>
                                    <div className="group h-full p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#356DE8]/30 transition-all duration-500 cursor-pointer">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                                            <div className="w-full h-full rounded-xl bg-[#0A1628] flex items-center justify-center group-hover:bg-transparent transition-colors">
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6">{service.description}</p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-[#00D9FF] font-medium group-hover:gap-3 transition-all">
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </NextLink>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="py-20 px-4 sm:px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-6">
                            Wondering how we <span className="italic text-gradient-blue">deliver</span>?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Our proven 4-step process ensures every project is delivered with excellence and on time.
                        </p>
                        <NextLink
                            href="/how-we-work"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-[#356DE8]/30 transition-all"
                        >
                            See Our Process
                            <ArrowRight className="w-5 h-5" />
                        </NextLink>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

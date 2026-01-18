"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const linkColumns = [
    {
        title: "Services",
        links: ["Web Development", "UI/UX Design", "Brand Strategy", "Digital Marketing", "Mobile Apps"],
    },
    {
        title: "Company",
        links: ["About Us", "Our Work", "Careers", "Blog"],
    },
    {
        title: "Resources",
        links: ["Case Studies", "Documentation", "Support", "FAQs"],
    },
    {
        title: "Legal",
        links: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
];

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#0E0E0F] text-white overflow-hidden py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-white text-black p-8 sm:p-12 md:p-20 relative overflow-hidden">
                {/* Main Massive Text */}
                <div className="w-full flex justify-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-[12vw] sm:text-[15vw] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-amber-500 select-none"
                    >
                        hevarto
                    </motion.h1>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {linkColumns.map((column, i) => (
                        <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">
                                {column.title}
                            </h4>
                            {column.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 hover:text-orange-600 transition-colors group"
                                >
                                    <ChevronRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                                    {link}
                                </a>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Contact & Social */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-200 pt-8 mb-8">
                    <div>
                        <p className="text-sm text-gray-500 mb-2">Get in touch</p>
                        <a href="mailto:hello@hevarto.com" className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                            hello@hevarto.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-200 pt-8">
                    <div className="text-xs text-gray-500 font-medium">
                        <p>© 2026 Hevarto Inc. All Rights Reserved.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-gray-900 font-bold text-lg">Hevarto</span>
                        <span className="text-gray-400 text-sm">Digital Solutions</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

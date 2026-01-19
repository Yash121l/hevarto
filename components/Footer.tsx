"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import NextLink from "next/link";

const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Web Development", href: "/services/web-development" },
            { name: "UI/UX Design", href: "/services/ui-ux-design" },
            { name: "Brand Strategy", href: "/services/brand-strategy" },
            { name: "Digital Marketing", href: "/services/digital-marketing" },
            { name: "Mobile Apps", href: "/services/mobile-apps" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Our Work", href: "/projects" },
            { name: "How We Work", href: "/how-we-work" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Case Studies", href: "/projects" },
            { name: "Process", href: "/how-we-work" },
            { name: "FAQs", href: "/contact#faq" },
        ],
    },
];

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
];

// Flickering text effect component
function FlickeringLetter({ letter, index }: { letter: string; index: number }) {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const flickerInterval = setInterval(() => {
            // Random flicker between 0.3 and 1
            setOpacity(Math.random() > 0.7 ? 0.3 + Math.random() * 0.3 : 1);
        }, 100 + Math.random() * 200);

        return () => clearInterval(flickerInterval);
    }, []);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ duration: 0.1 }}
            className="inline-block"
            style={{
                textShadow: opacity > 0.8 ? "0 0 20px rgba(53, 109, 232, 0.5), 0 0 40px rgba(53, 109, 232, 0.3)" : "none",
                animationDelay: `${index * 50}ms`,
            }}
        >
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
    );
}

export default function Footer() {
    const brandName = "HEVARTO";

    return (
        <footer className="w-full bg-[#0A1628] text-white pt-20 pb-8 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#356DE8]/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00D9FF]/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <NextLink href="/" className="inline-flex items-center gap-3 mb-6">
                            {/* Logo */}
                            <div className="w-12 h-12">
                                <svg viewBox="0 0 40 40" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#356DE8" />
                                            <stop offset="100%" stopColor="#00D9FF" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M20 2L36.66 11v18L20 38 3.34 29V11z"
                                        fill="url(#footerLogoGradient)"
                                    />
                                    <text
                                        x="20"
                                        y="25"
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="14"
                                        fontWeight="bold"
                                        fontFamily="Inter, sans-serif"
                                    >
                                        H
                                    </text>
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">HEVARTO</span>
                        </NextLink>

                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            We transform complex problems into elegant digital solutions. From websites to full-scale applications — bring us your challenge.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                                               hover:bg-white hover:border-white transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[#0A1628] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <NextLink
                                            href={link.href}
                                            className="group text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                                            </span>
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Large Flickering Brand Text */}
                <div className="py-12 border-t border-white/10">
                    <div className="flex justify-center overflow-hidden">
                        <h2 className="text-[8vw] sm:text-[10vw] lg:text-[12vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#356DE8] via-white to-[#00D9FF] select-none leading-none">
                            {brandName.split("").map((letter, index) => (
                                <FlickeringLetter key={index} letter={letter} index={index} />
                            ))}
                        </h2>
                    </div>
                </div>

                {/* Newsletter / CTA Section */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Ready to start your project?</h3>
                            <p className="text-gray-400 text-sm">Let&apos;s discuss how we can help you achieve your goals.</p>
                        </div>
                        <NextLink
                            href="/contact"
                            className="group px-6 py-3 bg-white text-[#0A1628] font-semibold rounded-full
                                       hover:bg-[#356DE8] hover:text-white transition-all duration-300
                                       flex items-center gap-2"
                        >
                            Get in Touch
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </NextLink>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Hevarto. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
    { name: "Work", href: "/projects" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Web Development", href: "/services/web-development" },
            { name: "UI/UX Design", href: "/services/ui-ux-design" },
            { name: "Brand Strategy", href: "/services/brand-strategy" },
            { name: "Digital Marketing", href: "/services/digital-marketing" },
            { name: "Mobile Apps", href: "/services/mobile-apps" },
        ]
    },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <NextLink href="/" className="z-50 relative group flex items-center gap-2">
                    {/* Hexagonal Logo Mark */}
                    <div className="w-10 h-10 relative">
                        <svg viewBox="0 0 40 40" className="w-full h-full">
                            <defs>
                                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#356DE8" />
                                    <stop offset="100%" stopColor="#00D9FF" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M20 2L36.66 11v18L20 38 3.34 29V11z"
                                fill="url(#logoGradient)"
                                opacity="0.9"
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
                    <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
                        HEVARTO
                    </span>
                    <span className="absolute -bottom-1 left-12 w-0 h-[2px] bg-gradient-to-r from-[#356DE8] to-[#00D9FF] transition-all duration-300 group-hover:w-[calc(100%-48px)]"></span>
                </NextLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <NextLink
                                href={item.href}
                                className="relative px-5 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white group flex items-center gap-1"
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown className="w-3 h-3" />}
                                <span className="absolute inset-0 rounded-full bg-white/10 scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                            </NextLink>

                            {/* Dropdown Menu */}
                            {item.dropdown && openDropdown === item.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 mt-2 w-56 py-2 bg-[#0A1628]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
                                >
                                    {item.dropdown.map((subItem) => (
                                        <NextLink
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            {subItem.name}
                                        </NextLink>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                    <NextLink
                        href="/contact"
                        className="ml-2 px-5 py-2 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(53,109,232,0.4)] transition-all text-sm"
                    >
                        Let&apos;s Talk
                    </NextLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 mix-blend-difference"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-white origin-center"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-4 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-white origin-center"
                    />
                </button>

                {/* Mobile Menu Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 bg-[#0A1628] z-40 flex flex-col items-center justify-center gap-6 md:hidden overflow-y-auto py-20"
                >
                    {navItems.map((item) => (
                        <div key={item.name} className="flex flex-col items-center">
                            <NextLink
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-light text-white/90 hover:text-[#00D9FF] transition-colors"
                            >
                                {item.name}
                            </NextLink>
                            {item.dropdown && (
                                <div className="flex flex-col items-center mt-2 gap-1">
                                    {item.dropdown.map((subItem) => (
                                        <NextLink
                                            key={subItem.name}
                                            href={subItem.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg text-white/50 hover:text-[#00D9FF] transition-colors"
                                        >
                                            {subItem.name}
                                        </NextLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <NextLink
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-8 py-4 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(53,109,232,0.4)] transition-all"
                    >
                        Let&apos;s Talk
                    </NextLink>
                </motion.div>
            </div>
        </nav>
    );
}

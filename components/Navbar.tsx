"use client";

import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { useState, useCallback } from "react";
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

// Letter swap animation on hover
function AnimatedNavLink({ name, isActive }: { name: string; isActive?: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-flex overflow-hidden h-5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {name.split("").map((letter, index) => (
                <span
                    key={index}
                    className="relative inline-block"
                    style={{ width: letter === " " ? "0.3em" : "auto" }}
                >
                    <motion.span
                        initial={{ y: 0 }}
                        animate={{ y: isHovered ? "-100%" : 0 }}
                        transition={{
                            duration: 0.25,
                            delay: index * 0.02,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block text-white/80"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: isHovered ? 0 : "100%" }}
                        transition={{
                            duration: 0.25,
                            delay: index * 0.02,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 inline-block text-white font-medium"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

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
                    <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white group-hover:text-white transition-colors">
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
                                className="relative px-5 py-2 text-sm font-medium transition-colors group flex items-center gap-1"
                            >
                                <AnimatedNavLink name={item.name} />
                                {item.dropdown && <ChevronDown className="w-3 h-3 text-white/60" />}
                                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
                            </NextLink>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.dropdown && openDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-56 py-2 bg-[#0A1628]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                    >
                                        {item.dropdown.map((subItem, index) => (
                                            <NextLink
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="group block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
                                            >
                                                <motion.span
                                                    initial={{ x: 0 }}
                                                    whileHover={{ x: 4 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-[#356DE8] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    {subItem.name}
                                                </motion.span>
                                            </NextLink>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <NextLink
                        href="/contact"
                        className="ml-2 px-5 py-2 bg-white text-[#0A1628] font-semibold rounded-full hover:bg-[#356DE8] hover:text-white transition-all text-sm"
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
                                className="text-3xl font-light text-white/90 hover:text-white transition-colors"
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
                                            className="text-lg text-white/50 hover:text-white transition-colors"
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
                        className="mt-4 px-8 py-4 bg-white text-[#0A1628] font-semibold rounded-full hover:bg-[#356DE8] hover:text-white transition-all"
                    >
                        Let&apos;s Talk
                    </NextLink>
                </motion.div>
            </div>
        </nav>
    );
}

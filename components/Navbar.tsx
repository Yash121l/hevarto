"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";

const navItems = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <NextLink href="/" className="z-50 relative group">
                    <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white mix-blend-difference">
                        HEVARTO
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </NextLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2">
                    {navItems.map((item) => (
                        <NextLink
                            key={item.name}
                            href={item.href}
                            className="relative px-5 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white group"
                        >
                            {item.name}
                            <span className="absolute inset-0 rounded-full bg-white/10 scale-0 transition-transform duration-300 group-hover:scale-100"></span>
                        </NextLink>
                    ))}
                    <button className="ml-2 px-5 py-2 bg-[#B9FF3E] text-black font-semibold rounded-full hover:scale-105 transition-all text-sm">
                        Let's Talk
                    </button>
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
                    className="fixed inset-0 bg-[#0E0E0F] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {navItems.map((item) => (
                        <NextLink
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-light text-white/90 hover:text-white transition-colors"
                        >
                            {item.name}
                        </NextLink>
                    ))}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-8 py-4 bg-[#B9FF3E] text-black font-semibold rounded-full"
                    >
                        Let's Talk
                    </button>
                </motion.div>
            </div>
        </nav>
    );
}

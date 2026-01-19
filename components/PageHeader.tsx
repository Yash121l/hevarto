"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import NextLink from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    titleHighlight?: string;
    breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({ title, subtitle, titleHighlight, breadcrumbs }: PageHeaderProps) {
    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-[#0A1628] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 hex-pattern opacity-20" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#356DE8]/10 rounded-full blur-[200px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00D9FF]/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-sm text-gray-400 mb-8"
                    >
                        <NextLink href="/" className="hover:text-white transition-colors">
                            Home
                        </NextLink>
                        {breadcrumbs.map((item, index) => (
                            <span key={index} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4" />
                                {item.href ? (
                                    <NextLink href={item.href} className="hover:text-white transition-colors">
                                        {item.label}
                                    </NextLink>
                                ) : (
                                    <span className="text-white">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl text-white font-serif mb-6"
                >
                    {title}{" "}
                    {titleHighlight && (
                        <span className="italic text-gradient-blue">{titleHighlight}</span>
                    )}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg sm:text-xl max-w-2xl"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}

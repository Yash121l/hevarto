"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const links = [
    ["How it Works", "What's Included", "Gift Services"],
    ["Member Login", "Manifesto", "Join the Team"],
    ["For Creators", "For Partners", "For Teams"],
    ["X/Twitter", "Instagram", "LinkedIn"],
    ["Terms", "Privacy Policy", "Contact us"],
];

// Flattened for easier mapping if needed, or keeping columns
// Let's keep the column structure as per design (approx 3-5 columns)

export default function Footer() {
    return (
        <footer className="w-full bg-[#0E0E0F] text-white overflow-hidden py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-white text-black p-8 sm:p-12 md:p-20 relative overflow-hidden">

                {/* Main Massive Text */}
                <div className="w-full flex justify-center mb-20">
                    <h1 className="text-[12vw] sm:text-[15vw] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-amber-500 select-none">
                        hevarto
                    </h1>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 mb-20">
                    {links.map((column, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            {column.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-800 hover:text-orange-600 transition-colors group"
                                >
                                    <ChevronRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="flex flex-col sm:flex-row justify-between items-end border-t border-gray-200 pt-8 mt-auto">
                    <div className="space-y-1 text-xs text-gray-500 font-medium uppercase tracking-wide">
                        <p>2025 Hevarto Inc.</p>
                        <p>All Rights Reserved</p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <span className="text-gray-900 font-bold text-lg">Hevarto</span>
                        <span className="text-gray-400 text-sm">curated by Agency</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

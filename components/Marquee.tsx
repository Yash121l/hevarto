"use client";

import { cn } from "@/lib/utils";

const SERVICES = [
    "Branding",
    "Web Design",
    "Development",
    "SEO",
    "Marketing",
    "Consulting",
    "Branding",
    "Web Design",
    "Development",
    "SEO",
    "Marketing",
    "Consulting",
];

export default function Marquee() {
    return (
        <section className="py-20 bg-[#0A1628] overflow-hidden border-t border-white/5 border-b">
            <div className="relative w-full flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-24">
                    {/* Double the list to create seamless loop */}
                    {[...SERVICES, ...SERVICES].map((item, i) => (
                        <span
                            key={i}
                            className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4169FF]/30 to-[#00D9FF]/50 uppercase tracking-tighter"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

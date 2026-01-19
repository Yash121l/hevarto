"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GlowingEffectProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    borderRadius?: string;
}

export default function GlowingEffect({
    children,
    className = "",
    glowColor = "#356DE8",
    borderRadius = "1rem",
}: GlowingEffectProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const glow = glowRef.current;

        if (!container || !glow) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glow.style.opacity = "1";
            glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${glowColor}40, transparent 40%)`;
        };

        const handleMouseLeave = () => {
            glow.style.opacity = "0";
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [glowColor]);

    return (
        <motion.div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            style={{ borderRadius }}
        >
            {/* Glow Effect */}
            <div
                ref={glowRef}
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{ borderRadius }}
            />

            {/* Border Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    borderRadius,
                    background: `linear-gradient(to right, ${glowColor}00, ${glowColor}20, ${glowColor}00)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />

            {children}
        </motion.div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface LetterSwapProps {
    text: string;
    className?: string;
    staggerDelay?: number;
}

export default function LetterSwap({ text, className = "", staggerDelay = 0.03 }: LetterSwapProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <span
            className={`inline-flex overflow-hidden ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text.split("").map((letter, index) => (
                <span
                    key={index}
                    className="relative inline-block h-[1.2em]"
                    style={{ width: letter === " " ? "0.3em" : "auto" }}
                >
                    <AnimatePresence mode="popLayout">
                        {!isHovered ? (
                            <motion.span
                                key="original"
                                initial={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * staggerDelay,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0"
                            >
                                {letter}
                            </motion.span>
                        ) : (
                            <motion.span
                                key="swapped"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * staggerDelay,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 text-white"
                            >
                                {letter}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </span>
            ))}
        </span>
    );
}

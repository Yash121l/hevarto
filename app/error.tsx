"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0A1628] text-white overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#356DE8]/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#6B5FFF]/20 blur-[120px] rounded-full" />

            {/* Icon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8"
            >
                <AlertTriangle className="w-10 h-10 text-[#00D9FF]" />
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-5xl font-serif text-white text-center mb-4"
            >
                Something went <span className="italic text-white/60">wrong</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-400 text-center max-w-md mb-10"
            >
                An unexpected error occurred. Please try again, or return to the homepage.
            </motion.p>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4"
            >
                <button
                    onClick={reset}
                    className="group px-8 py-4 bg-white text-[#0A1628] font-semibold rounded-full hover:bg-[#356DE8] hover:text-white transition-all flex items-center gap-2"
                >
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                </button>

                <button
                    onClick={() => router.push("/")}
                    className="group px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-white font-medium transition-all hover:bg-white hover:text-[#0A1628] flex items-center gap-2"
                >
                    <Home className="w-4 h-4" />
                    Go Home
                </button>
            </motion.div>
        </div>
    );
}

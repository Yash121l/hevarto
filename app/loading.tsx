"use client"

import { motion } from "framer-motion"

export default function Loading() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-20 font-sans bg-gradient-to-br from-[#0E0E0F] to-[#1A1A1C] text-white overflow-hidden">

            {/* Glowing background blobs */}
            <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#B9FF3E]/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-[#FF9900]/20 blur-[120px] rounded-full animate-pulse"></div>

            {/* CodeSetu Logo/Name */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#B9FF3E] to-[#FF9900] bg-clip-text text-transparent mb-4"
            >
                Hevarto
            </motion.h1>

            <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Connecting you to the future...
            </p>

            {/* Bridge-style animation */}
            <div className="flex gap-2 items-end h-12">
                {Array.from({ length: 7 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-3 sm:w-4 rounded-full bg-[#B9FF3E]"
                        initial={{ height: 8 }}
                        animate={{ height: [8, 28, 8] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "easeInOut",
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

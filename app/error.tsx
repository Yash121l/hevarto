"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter()

    useEffect(() => {
        console.error("App Error:", error)
    }, [error])

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-20 font-sans bg-gradient-to-br from-[#0E0E0F] to-[#1A1A1C] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-500/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-orange-500/20 blur-[120px] rounded-full animate-pulse"></div>

            {/* Main content */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#FF3E3E] to-[#FF9900] bg-clip-text text-transparent mb-4"
            >
                Something went wrong
            </motion.h1>

            <p className="text-gray-400 text-center mb-8 max-w-md">
                An unexpected error occurred. Please try again, or return to the homepage.
            </p>

            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="bg-[#B9FF3E] text-black font-semibold px-6 py-2 rounded-xl hover:scale-105 transition-transform"
                >
                    Try Again
                </button>

                <button
                    onClick={() => router.push("/")}
                    className="bg-white/10 border border-white/20 text-white font-medium px-6 py-2 rounded-xl hover:bg-white/20 transition"
                >
                    Go Home
                </button>
            </div>
        </div>
    )
}

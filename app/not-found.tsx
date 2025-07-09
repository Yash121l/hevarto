"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="relative min-h-screen grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-6 sm:p-20 font-sans bg-gradient-to-br from-[#0E0E0F] to-[#1A1A1C] text-white overflow-hidden">

            {/* Glowing BG blobs */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-500/20 blur-[150px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-yellow-500/20 blur-[120px] rounded-full animate-pulse"></div>

            <main className="row-start-2 flex flex-col gap-10 items-center text-center z-10">

                {/* Error Code */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-[#FF3E3E] to-[#FF9900] bg-clip-text text-transparent drop-shadow-lg"
                >
                    404
                </motion.h1>

                {/* Error Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg sm:text-xl text-gray-300 font-medium"
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>

                {/* Return Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-block bg-[#B9FF3E] text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
                    >
                        Go Home
                    </Link>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="row-start-3 z-10 text-sm text-gray-500 mt-6 text-center">
                &copy; {new Date().getFullYear()} Hevarto. All rights reserved.
            </footer>
        </div>
    )
}

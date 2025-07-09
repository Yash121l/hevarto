"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter()

    useEffect(() => {
        console.error("Global Error:", error)
    }, [error])

    return (
        <html lang="en">
            <head>
                <title>Something went wrong – Hevarto</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <style>{`
          body {
            margin: 0;
            font-family: 'Geist Sans', sans-serif;
            background: linear-gradient(to bottom right, #0E0E0F, #1A1A1C);
            color: white;
          }
        `}</style>
            </head>
            <body>
                <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
                    {/* Glowing Blobs */}
                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-500/20 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-orange-500/20 blur-[120px] rounded-full animate-pulse"></div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#FF3E3E] to-[#FF9900] bg-clip-text text-transparent drop-shadow-lg"
                    >
                        App Crashed
                    </motion.h1>

                    <p className="text-gray-300 mt-4 max-w-md text-base sm:text-lg">
                        Something went wrong while loading the app. Please try again or return to the homepage.
                    </p>

                    <div className="flex gap-4 mt-8">
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
            </body>
        </html>
    )
}

'use client'

import { motion } from 'framer-motion'

export function Hero() {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#3EF9FF] to-[#6BFF8A] bg-clip-text text-transparent drop-shadow-lg"
            >
                Hevarto
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 font-medium"
            >
                Building the Backbone of Modern SaaS
            </motion.p>
        </>
    )
}
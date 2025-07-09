"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative min-h-screen grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-6 sm:p-20 font-sans bg-gradient-to-br from-[#0E0E0F] to-[#1A1A1C] text-white overflow-hidden">
      
      {/* Glowing BG blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <main className="row-start-2 flex flex-col gap-10 items-center text-center z-10">
        
        {/* Logo / Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#B9FF3E] to-[#FF9900] bg-clip-text text-transparent drop-shadow-lg"
        >
          Hevarto
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 font-medium"
        >
          Your Digital Bridge to the Future
        </motion.p>

        {/* Coming Soon Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/10 max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 animate-pulse">
            Coming Soon!
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            We’re building something amazing to connect you to the future of technology. Stay tuned!
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 z-10 text-sm text-gray-500 mt-6 text-center">
        &copy; {new Date().getFullYear()} Hevarto. All rights reserved.
      </footer>
    </div>
  )
}

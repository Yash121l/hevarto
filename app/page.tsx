'use client'

// import { motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { ComingSoon } from '@/components/sections/ComingSoon'
import { Footer } from '@/components/sections/Footer'
import { BackgroundBlobs } from '@/components/sections/BackgroundBlobs'

export default function Home() {
  return (
    <div className="relative min-h-screen grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-6 sm:p-20 font-sans bg-gradient-to-br from-[#0E0E0F] to-[#1A1A1C] text-white overflow-hidden">
      <BackgroundBlobs />
      <main className="row-start-2 flex flex-col gap-10 items-center text-center z-10">
        <Hero />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}
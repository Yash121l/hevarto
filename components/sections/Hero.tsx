'use client';

import { motion } from 'framer-motion';
import { MorphingText } from '@/components/magicui/morphing-text';

export function Hero() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#3EF9FF] to-[#6BFF8A] bg-clip-text text-transparent drop-shadow-lg"
            >
                Hevarto
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
                <MorphingText texts={['Dev Tools', 'SaaS Infra', 'Automations', 'Analytics']} />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 max-w-xl text-sm sm:text-base text-gray-400"
            >
                Building the Backbone of Modern SaaS — one tool at a time.
            </motion.p>
        </section>
    );
}

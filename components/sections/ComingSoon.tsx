'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function ComingSoon() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <Card className="bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl max-w-xl text-white">
                <CardContent className="p-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 animate-pulse">Coming Soon!</h2>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        We're building a powerful SaaS platform to empower developers and businesses. Stay tuned for the revolution.
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

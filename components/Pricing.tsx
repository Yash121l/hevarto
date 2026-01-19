"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Starter",
        description: "Perfect for small projects and MVPs",
        monthlyPrice: 2999,
        yearlyPrice: 29990,
        features: [
            "Single page website",
            "Mobile responsive design",
            "Basic SEO optimization",
            "2 rounds of revisions",
            "1 month support",
            "Source code delivery",
        ],
        popular: false,
    },
    {
        name: "Professional",
        description: "Ideal for growing businesses",
        monthlyPrice: 5999,
        yearlyPrice: 59990,
        features: [
            "Multi-page website (up to 10)",
            "Custom UI/UX design",
            "Advanced SEO & analytics",
            "Unlimited revisions",
            "3 months support",
            "CMS integration",
            "Performance optimization",
            "Social media integration",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        description: "Full-scale digital solutions",
        monthlyPrice: 12999,
        yearlyPrice: 129990,
        features: [
            "Unlimited pages & features",
            "Custom web application",
            "E-commerce integration",
            "API development",
            "12 months priority support",
            "Dedicated project manager",
            "Security audit & hardening",
            "Scalable architecture",
            "24/7 monitoring",
        ],
        popular: false,
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="bg-[#0A1628] py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#356DE8]/5 rounded-full blur-[200px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl text-white font-serif mb-6">
                        Simple, <span className="italic text-white/50">Transparent</span>{" "}
                        <span className="text-gradient-blue">Pricing</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
                        Choose the plan that fits your needs. All plans include our signature quality and attention to detail.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-gray-500"}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors hover:bg-white/15"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-6 h-6 rounded-full bg-gradient-to-r from-[#356DE8] to-[#00D9FF]"
                            />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-gray-500"}`}>
                            Yearly
                            <span className="ml-2 text-xs text-[#00D9FF] font-semibold">Save 17%</span>
                        </span>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`relative group rounded-3xl p-8 transition-all duration-500 ${plan.popular
                                ? "bg-gradient-to-b from-[#356DE8]/20 to-transparent border-2 border-[#356DE8]/50 scale-105 md:scale-110"
                                : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white text-xs font-bold rounded-full">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Glassmorphism overlay */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-gray-500 text-lg">$</span>
                                        <motion.span
                                            key={isYearly ? "yearly" : "monthly"}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-5xl font-bold text-white"
                                        >
                                            {isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                                        </motion.span>
                                    </div>
                                    <span className="text-gray-500 text-sm">
                                        {isYearly ? "/year" : "/project"}
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-[#356DE8]/20" : "bg-white/10"
                                                }`}>
                                                <Check className={`w-3 h-3 ${plan.popular ? "text-[#00D9FF]" : "text-white/70"}`} />
                                            </div>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.popular
                                        ? "bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(65,105,255,0.4)]"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm mt-12"
                >
                    Need a custom solution?{" "}
                    <a href="#contact" className="text-[#00D9FF] hover:underline">
                        Contact us
                    </a>{" "}
                    for a tailored quote.
                </motion.p>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const SERVICES = [
    "Web Development",
    "UI/UX Design",
    "Brand Strategy",
    "Digital Marketing",
    "Mobile Apps",
    "Other",
];

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-white/[0.03] border border-[#356DE8]/30 text-center"
            >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#356DE8] to-[#00D9FF] mx-auto mb-6 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#356DE8] focus:ring-1 focus:ring-[#356DE8] transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#356DE8] focus:ring-1 focus:ring-[#356DE8] transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#356DE8] focus:ring-1 focus:ring-[#356DE8] transition-colors"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                {/* Service Interest */}
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                    </label>
                    <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#356DE8] focus:ring-1 focus:ring-[#356DE8] transition-colors appearance-none cursor-pointer"
                    >
                        <option value="" className="bg-[#0A1628]">Select a service</option>
                        {SERVICES.map((service) => (
                            <option key={service} value={service} className="bg-[#0A1628]">
                                {service}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Budget Range */}
            <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                </label>
                <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#356DE8] focus:ring-1 focus:ring-[#356DE8] transition-colors appearance-none cursor-pointer"
                >
                    <option value="" className="bg-[#0A1628]">Select budget range</option>
                    <option value="under-5k" className="bg-[#0A1628]">Under $5,000</option>
                    <option value="5k-10k" className="bg-[#0A1628]">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-[#0A1628]">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-[#0A1628]">$25,000 - $50,000</option>
                    <option value="50k+" className="bg-[#0A1628]">$50,000+</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#356DE8] focus:ring-1 focus:ring-[#356DE8] transition-colors resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#356DE8] to-[#00D9FF] text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(53,109,232,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>

            <p className="text-center text-gray-500 text-sm">
                We&apos;ll respond within 24 hours. Your information is secure and will never be shared.
            </p>
        </form>
    );
}

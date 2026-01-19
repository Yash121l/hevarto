"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "hello@hevarto.com",
        description: "For general inquiries and project discussions",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+1 (555) 123-4567",
        description: "Mon-Fri from 9am to 6pm EST",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "123 Innovation Drive",
        description: "San Francisco, CA 94102",
    },
    {
        icon: Clock,
        title: "Business Hours",
        value: "9:00 AM - 6:00 PM",
        description: "Monday through Friday",
    },
];

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes! We offer various support packages ranging from basic maintenance to comprehensive ongoing partnerships. All our plans include some level of post-launch support.",
    },
    {
        question: "What technologies do you work with?",
        answer: "We specialize in modern web technologies including React, Next.js, Node.js, and various cloud platforms. We choose the best technology stack based on your project requirements.",
    },
    {
        question: "How do we get started?",
        answer: "Simply fill out the contact form or schedule a call. We'll discuss your project, provide a proposal, and once approved, we'll kick off with a discovery phase to align on goals and requirements.",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0A1628]">
            <Navbar />

            <PageHeader
                title="Let's Build"
                titleHighlight="Together"
                subtitle="Have a project in mind? We'd love to hear about it. Drop us a message and let's create something amazing."
                breadcrumbs={[{ label: "Contact" }]}
            />

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-[#356DE8]/10 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-[#00D9FF]" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-medium">{item.title}</h3>
                                                <p className="text-[#00D9FF]">{item.value}</p>
                                                <p className="text-gray-500 text-sm">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 p-8 rounded-3xl bg-white/[0.02] border border-white/10"
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl text-white font-serif mb-4">
                            Frequently Asked <span className="italic text-white/50">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#356DE8]/30 transition-colors"
                            >
                                <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

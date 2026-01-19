"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertOctagon } from "lucide-react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    useEffect(() => {
        console.error("Global Error:", error);
    }, [error]);

    return (
        <html lang="en">
            <head>
                <title>Something went wrong – Hevarto</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <style>{`
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: 'Inter', sans-serif;
                        background: #0A1628;
                        color: white;
                        min-height: 100vh;
                    }
                    .gradient-text {
                        background: linear-gradient(135deg, #356DE8, #00D9FF);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                `}</style>
            </head>
            <body>
                <div style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    overflow: "hidden",
                }}>
                    {/* Background Glows */}
                    <div style={{
                        position: "absolute",
                        top: "-100px",
                        left: "-100px",
                        width: "400px",
                        height: "400px",
                        background: "rgba(53, 109, 232, 0.15)",
                        filter: "blur(150px)",
                        borderRadius: "50%",
                    }} />
                    <div style={{
                        position: "absolute",
                        bottom: "-100px",
                        right: "-100px",
                        width: "350px",
                        height: "350px",
                        background: "rgba(107, 95, 255, 0.15)",
                        filter: "blur(120px)",
                        borderRadius: "50%",
                    }} />

                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "16px",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "32px",
                        }}
                    >
                        <AlertOctagon style={{ width: "40px", height: "40px", color: "#FF6B6B" }} />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontSize: "clamp(28px, 5vw, 48px)",
                            fontWeight: "600",
                            textAlign: "center",
                            marginBottom: "16px",
                        }}
                    >
                        Application <span className="gradient-text">Crashed</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        style={{
                            color: "rgba(255, 255, 255, 0.5)",
                            textAlign: "center",
                            maxWidth: "400px",
                            marginBottom: "40px",
                            lineHeight: "1.6",
                        }}
                    >
                        Something went wrong while loading the app. Please try again or return to the homepage.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}
                    >
                        <button
                            onClick={reset}
                            style={{
                                padding: "16px 32px",
                                background: "white",
                                color: "#0A1628",
                                fontWeight: "600",
                                borderRadius: "9999px",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "16px",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#356DE8";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "white";
                                e.currentTarget.style.color = "#0A1628";
                            }}
                        >
                            <RefreshCw style={{ width: "16px", height: "16px" }} />
                            Try Again
                        </button>

                        <button
                            onClick={() => router.push("/")}
                            style={{
                                padding: "16px 32px",
                                background: "rgba(255, 255, 255, 0.05)",
                                color: "white",
                                fontWeight: "500",
                                borderRadius: "9999px",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "16px",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "white";
                                e.currentTarget.style.color = "#0A1628";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                                e.currentTarget.style.color = "white";
                            }}
                        >
                            <Home style={{ width: "16px", height: "16px" }} />
                            Go Home
                        </button>
                    </motion.div>
                </div>
            </body>
        </html>
    );
}

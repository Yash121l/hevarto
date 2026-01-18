"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E0F]">
      <Navbar />
      <Hero />
      <Marquee />
      <ProjectGallery />
      <Footer />
    </main>
  );
}

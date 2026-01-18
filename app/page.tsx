"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ProjectGallery from "@/components/ProjectGallery";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Benefits />
      <ProjectGallery />
      <Pricing />
      <Process />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}

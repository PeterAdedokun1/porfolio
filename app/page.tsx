"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-surface">
      <motion.div
        aria-hidden
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-0 z-[70] bg-surface"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(200,255,0,0.12),transparent_62%)]"
        animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed -left-32 top-1/4 z-0 h-[28rem] w-[28rem] rounded-full border border-accent/10"
        animate={{ y: [0, -30, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed -right-40 bottom-10 z-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.10),transparent_65%)] blur-3xl"
        animate={{ scale: [1, 1.08, 1], x: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}

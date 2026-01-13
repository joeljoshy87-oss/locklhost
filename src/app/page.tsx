// app/page.tsx
"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Phone, MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

// --- Animation Variants (Framer Motion) ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const navVariant = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const mobileMenuVariant = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

export default function Home() {
  const headlineRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- GSAP Animation for Headline ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation effect
      gsap.from(".headline-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5, // Wait for nav to start
      });
    }, headlineRef);

    return () => ctx.revert();
  }, []);

  const menuItems = ["Our Story", "Projects", "Gallery", "Testimonial", "Contact"];

  return (
    <main className="w-full bg-black">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.gif"
            alt="Luxury Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          {/* Dark Gradient Overlay: Adjusted for better mobile text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:from-black/70 md:via-black/40" />
        </div>

        {/* --- Navbar --- */}
        <motion.nav
          variants={navVariant}
          initial="hidden"
          animate="visible"
          className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 w-full text-white"
        >
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex flex-col items-center z-50 relative">
              <img src="/logo/logo.webp" alt="Elixir Homes Logo" className="w-10 md:w-15" />
            </div>

            {/* Desktop Links  para-text text-white font-[350]! font-inter whitespace-nowrap */}
            <div className="hidden lg:flex items-center gap-10 font-inter text-sm font-light tracking-wide text-white font-[350]!">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors relative group"
                >
                  {item}
                  {item === "Projects" && <span className="ml-1 text-[10px]">▼</span>}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 border border-white/30 rounded-sm text-[10px] md:text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all">
              Ring us Now <Phone size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 border border-white/30 rounded-sm text-[10px] md:text-xs uppercase tracking-wider hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all">
              Send a Message <MessageCircle size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>

        {/* --- Mobile Menu Overlay --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 lg:hidden"
            >
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-cormorant text-3xl text-white font-medium hover:text-brand-red transition-colors"
                >
                  {item}
                </Link>
              ))}
              
              <div className="flex flex-col gap-4 mt-8 w-full px-12">
                <button className="flex justify-center items-center gap-2 px-5 py-3 border border-white/30 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all w-full">
                  Ring us Now <Phone size={16} />
                </button>
                <button className="flex justify-center items-center gap-2 px-5 py-3 border border-white/30 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all w-full">
                  Send a Message <MessageCircle size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Hero Content --- */}
        <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-[1400px]">

          {/* Headline with GSAP Target - Responsive Font Sizes */}
          <div ref={headlineRef} className="overflow-hidden mb-4 md:mb-6 mt-[-60px] md:mt-0">
            <h1 className="font-cormorant font-semibold text-[42px] sm:text-[56px] md:text-[72px] leading-[110%] md:leading-[100%] text-white tracking-tight">
              <span className="inline-block headline-word mr-3 md:mr-4">Crafting</span>
              <span className="inline-block headline-word">Spaces</span>
              <br className="hidden md:block" />
              <span className="inline-block md:hidden w-full h-0"></span> {/* Force break on mobile if needed */}
              <span className="inline-block headline-word mr-3 md:mr-4">Beyond</span>
              <span className="inline-block headline-word">Ordinary</span>
            </h1>
          </div>

          {/* Subtext with Framer Motion - Responsive Width & Size */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] mb-8 md:mb-12"
          >
            <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[28px] text-gray-200 opacity-90">
              Elixir Homes is one of the leading builders and the most trusted real estate
              developer in Thrissur, with a proven track record of delivering promises on
              time to its customers. So here comes a golden chance to be a part of Elixir!
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <button className="group flex items-center gap-4 md:gap-6 px-7 py-3 md:px-9 md:py-3 border border-white text-white font-inter text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
      <About />
      <FeaturedProjects />
      <Gallery />
      <Testimonials />
    </main>
  );
}

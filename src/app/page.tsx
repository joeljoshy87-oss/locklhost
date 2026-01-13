// app/page.tsx
"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

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

export default function Home() {
  const headlineRef = useRef(null);

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

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-v.webp"
          alt="Luxury Interior"
          className="object-cover w-full h-full opacity-90"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* --- Navbar --- */}
      <motion.nav
        variants={navVariant}
        initial="hidden"
        animate="visible"
        className="relative z-50 flex items-center justify-between px-12 py-8 w-full text-white"
      >
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-[#FF0000] flex items-center justify-center text-white font-serif font-bold text-xl rounded-sm">
            E
          </div>
          <span className="text-[10px] tracking-widest mt-1 uppercase font-inter">
            Elixir Homes
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-inter text-sm font-light tracking-wide text-gray-200">
          {["Our Story", "Projects", "Gallery", "Testimonial", "Contact"].map((item) => (
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

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-sm text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all">
            Ring us Now <Phone size={14} />
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-sm text-xs uppercase tracking-wider hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all">
            Send a Message <MessageCircle size={14} />
          </button>
        </div>
      </motion.nav>

      {/* --- Hero Content --- */}
      <div className="relative z-40 h-full flex flex-col justify-center px-12 md:px-24 max-w-[1400px]">
        
        {/* Headline with GSAP Target */}
        <div ref={headlineRef} className="overflow-hidden mb-6">
          <h1 className="font-cormorant font-semibold text-[72px] leading-[100%] text-white tracking-tight">
            <span className="inline-block headline-word mr-4">Crafting</span>
            <span className="inline-block headline-word">Spaces</span>
            <br />
            <span className="inline-block headline-word mr-4">Beyond</span>
            <span className="inline-block headline-word">Ordinary</span>
          </h1>
        </div>

        {/* Subtext with Framer Motion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }} // Delay until headline is done
          className="max-w-[600px] mb-12"
        >
          <p className="font-inter font-normal text-[18px] leading-[28px] text-gray-200 opacity-90">
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
          <button className="group flex items-center gap-6 px-9 py-3 border border-white text-white font-inter text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </main>
  );
}

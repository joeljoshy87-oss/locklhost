// app/page.tsx
"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Phone, MessageCircle, ArrowRight, Menu, X } from "lucide-react";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import { ProjectsDropdown } from "@/components/ProjectsDropdown";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import ElixirBackgroundText from "@/components/ElixirBackgroundText";
import ContactInfo from "@/components/ContactInfo";

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
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // --- Sticky Navbar Logic ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["Our Story", "Projects", "Gallery", "Testimonial", "Contact"];

  return (
    <main className="w-full bg-white">
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
          className={cn(
            "fixed top-0  w-full z-50 flex items-center justify-between px-4 md:px-[40px] py-6 md:py-6 xl:py-7 xl:pl-9 sm:pt-7 xl:px-[121px]   text-white transition-all duration-300",
            isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent",
          )}
          onMouseLeave={() => setIsProjectsOpen(false)}
        >
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex absolute  flex-col items-center z-50 relative">
              <img src="/logo/hlogo3.svg" alt="Elixir Homes Logo" className="w-[65px] mx-1  md:w-12 -my-4 xl:w-[72px]  " />
            </div>

            {/* Desktop Links  para-text text-white font-[350]! font-inter whitespace-nowrap */}
            <div className="hidden lg:flex items-center gap-10 font-inter text-sm font-light tracking-wide text-white font-[350]!">
              {menuItems.map((item) => (
                <div
                  key={item}
                  className="relative  pl-5 "
                  onMouseEnter={() => item === "Projects" && setIsProjectsOpen(true)}
                >
                  <Link
                    href="#"
                    className=" absolute flex-nowrap -mr-3 justify-around  hover:text-white transition-colors relative group flex items-center text-white font-inter text-[17px] font-light tracking-wide"
                  >
                    {item}
                    {item === "Projects" && <span className="ml-1 text-[10px]">▼</span>}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex  items-start gap-4 justify-around mr-8 -mt-1   ">
            <button className="px-0  py-3.5 lg:py-0 lg:h-10 xl:h-15 xl:p-6 xl:pl-7 xl:pr-7   xl:px-6 2xl:h-13 border border-white/80 text-white text-[13px] font-sans 2xl:text-[sm] flex items-center gap-3 hover:bg-white/10 transition whitespace-nowrap">
              Ring us Now 
              <img 
    src="https://elixir-live-woxdevops.vercel.app/call.svg" 
    alt="WhatsApp" 
    className="w-4 h-4 object-contain" 
  />
            </button>
            <button className="px-0 py-3.5 lg:py-0  lg:h-10 xl:h-11 xl:px-6 xl:p-6 xl:pl-7 xl:pr-7 2xl:h-13 border border-white/80 text-white text-[13px] font-sans 2xl:text-sm flex items-center gap-3 hover:bg-white/10 transition whitespace-nowrap group">
  Send a Message 
  <img 
    src="https://elixir-live-woxdevops.vercel.app/whatsapp.svg" 
    alt="WhatsApp" 
    className="w-4 h-4 object-contain" 
  />
</button>
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>

        {/* --- Projects Dropdown --- */}
        <AnimatePresence>
          {isProjectsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 w-full z-40"
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <ProjectsDropdown />
            </motion.div>
          )}
        </AnimatePresence>

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

        {/* --- Hero Content - CONVERTED TO GRID SYSTEM --- */}
        <div className="absolute bottom-10 z-30 -mx-1   min-h-fit max-w-[1400px] xl:mx-[10px] w-full px-6 md:px-8 lg:px-24">
          <div className="grid grid-rows-[auto_auto_auto]  sm:px-4 sm:-mr-2 ml-1  gap-6 ">
            {/* Headline with GSAP Target - Responsive Font Sizes */}
            <div ref={headlineRef} className=" relative py-1 -mb-2 w-full overflow-hidden ">
              <h1 className="   flex-wrap leading-[49px] sm:leading-[50px]  font-cormorant justify-between  headline-word xl:mb-[16px] xl:mt-[16px] xl:leading-[100%] xl:text-[70px] font-semibold text-[42px] sm:text-[42px] md:text-[58px] leading-[100%]  md:leading-[100%] text-white  ">
              Crafting  Spaces  <span className="xl:block xl:mt-5"> Beyond 
            
              Ordinary
                </span>
              </h1>
            </div>

            {/* Subtext with Framer Motion - Responsive Width & Size */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="w-full max-w-auto  lg:max-w-[600px] lg:max-w-[600px]  justify-start"
            >
              <p className=" sm:text-justify xl:text-left justify-content xl:mb-4 sm:-mb-1   md:mb-1 sm:line-clamp-3 md:line-clamp-3  xl:line-clamp-none leading-[153%] xl:text-[20px]   font-inter tracking-wide text-[15px]  md:text-[15px]   md:leading-[23px] sm:tracking-[0px]  text-white opacity-80 text-left ">
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
              className="flex flex-nowrap mb-[40px] md:mb-10   sm:mb-11  "
            >
              <button className="md:justify-around md:pl-[4%] md:pr-[4%] xl:justify-center xl:w-[28%]  xl:gap-5 xl:p-4  sm:leading-[300%] p-[2px] flex sm:pl-5 items-center justify-between gap-15  w-full px-5 pr-5 sm:pr-5  lg:w-1/3 sm:w-full  md:w-[32%] md:p-[14px] leading-[44px] border border-white text-white font-sans text-[13px] xl:text-[16px]  md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                View Projects
                <ArrowRight className="flex items-center  h-4 w-4  group-hover:transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <About />
      <FeaturedProjects />
      <Gallery />
      <Testimonials />
      <Insights />
    
      <Footer /> 
      <ElixirBackgroundText />
      <ContactInfo />
    </main>
  );
}
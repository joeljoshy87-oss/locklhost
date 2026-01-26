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
  
  // FIX: Use a Ref to hold the timeout ID so we can clear it from anywhere
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- GSAP Animation for Headline ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".headline-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- FIX: Unified Hover Logic ---
  const handleMouseEnter = () => {
    // If there is a pending close request, cancel it
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    // Wait 200ms before closing. If user re-enters (nav or dropdown),
    // handleMouseEnter will run and cancel this timeout.
    closeTimeoutRef.current = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 200);
  };

  const menuItems = ["Our Story", "Projects", "Gallery", "Testimonial", "Contact"];

  return (
    <main className="w-full bg-white">
      <div className="relative w-full xl:pl-[0%] lg:pl-[0%] h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.gif"
            alt="Luxury Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:from-black/70 md:via-black/40" />
        </div>

        {/* --- Navbar --- */}
        <motion.nav
          variants={navVariant}
          initial="hidden"
          animate="visible"
          className={cn(
            "fixed top-0 w-full xl:h-[100px] lg:h-[80px] z-50 flex items-center justify-between xl:justify-between lg:justify-between px-6 sm:px-8 md:px-9  lg:py-3  py-4 md:py-4 xl:py-2 text-white transition-all duration-300  ",
            // If scrolled AND menu is closed, show dark bg. Otherwise (top or menu open), transparent.
(isScrolled && !isMenuOpen) ? "bg-[#2C2C2C] backdrop-blur-sm shadow-lg" : "bg-transparent",
          )}
        >
          <div className="flex items-center gap-8 pt-2 "> 
            {/* Logo */}
            <div className=" z-50 lg:ml-4 xl:w-[72px] xl:h-[72px] lg:w-[48px] lg:h-[48px] flex items-center justify-center">
              <Link href="/">
                <img src="/logo/hlogo3.svg" alt="Elixir Homes Logo" className="w-full h-full object-cover " />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex lg:ml-8 xl:ml-10  items-center xl:gap-12 lg:gap-7 font-poiret lg:justify-center xl:justify-evenly " style={{ fontWeight: 100 }}>
              {menuItems.map((item) => (
                <div
                  key={item}  
                  className="relative"
                  // FIX: Apply the unified handlers here
                  onMouseEnter={() => item === "Projects" ? handleMouseEnter() : null}
                  onMouseLeave={() => item === "Projects" ? handleMouseLeave() : null}
                >
                  <Link
                    href={item === "Our Story" ? "/about" : item === "Projects" ? "/projects" : item === "Gallery" ? "/gallery" : item === "Testimonial" ? "/testimonials" : "/contact"}
                    className="relative group flex items-start text-white font-inter -mt-1 text-sm md:text-base lg:text-[15px] lg:text-nowrap font-light tracking-wide hover:text-white transition-colors"
                  >
                    {item}
                   {item === "Projects" && (
                    <svg
                      className={cn(
                        "ml-1 w-5 h-5 mt-1 transition-transform duration-300",
                        isProjectsOpen && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}

                    <span className="absolute -bottom-2  left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          {/* Added conditional rendering to hide when menu is open */}
<div className={cn(
  "hidden md:flex items-center gap-4 xl:justify-between mx-5 xl:mx-[5.2%] lg:ml-9 transition-opacity duration-300",
  isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
)}>
            <button className=" px-9 py-4 lg:px-5 lg:py-2 xl:px-9 xl:py-4 justify-center border border-white/80 text-white text-xs md:text-sm font-inter flex items-center gap-2 hover:bg-white/10 transition-colors text-nowrap ">
              Ring us Now 
              <img src="https://elixir-live-woxdevops.vercel.app/call.svg" alt="Call" className="w-3 h-3 md:w-4 md:h-4 object-contain" />
            </button>
            <button className="px-6 py-4 lg:px-5 lg:py-2 xl:px-9 xl:py-4   justify-center border border-white/80 text-white text-xs md:text-sm font-inter flex items-center gap-2 hover:bg-white/10 transition-colors text-nowrap  ">
              Send a Message 
              <img src="https://elixir-live-woxdevops.vercel.app/whatsapp.svg" alt="WhatsApp" className="w-3 h-3 md:w-4 md:h-4 object-contain" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="md:hidden"> 
              <button className="p-2 border border-white/80 rounded-sm hover:bg-white/10 transition-colors">
                <img src="https://elixir-live-woxdevops.vercel.app/call.svg" alt="Call" className="w-4 h-4 object-contain" />
              </button>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-sm transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed top-0 justify-start left-20 w-2/1 xl:w-full xl:left-0 z-40"
              // FIX: Apply the exact same unified handlers to the dropdown
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
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

        {/* --- Hero Content --- */}
        <div className="absolute  bottom-10 z-30 w-full px-4 sm:px-6 md:px-8 lg:px-[5%] max-w-full mx-auto">
          <div className="flex flex-col w-[90%] gap-6">
            <div ref={headlineRef} className="relative py-1 -mb-1 w-full overflow-visible">
              <h1 className="font-cormorant font-semibold text-white text-[36px] sm:text-[42px] md:text-[52px] lg:text-[68px] xl:text-[70px] leading-[1.1] sm:leading-[1.05] md:leading-[0.95] xl:leading-[0.9]">
                Crafting Spaces <span className="block sm:inline lg:block lg:mt-5 xl:block xl:mt-5">Beyond Ordinary</span>
              </h1>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="w-full  lg:w-[660px] xl:max-w-[750px]"
            >/{/* md:w-[70%] */}
              <p className=" font-comfortaa text-nowrap md:text-wrap mt-5 sm:text-[16px] md:text-[14px] lg:text-[15px] lg:mt-3 xl:text-[19px]  xl:leading-[1.4] overflow-visible  mb-2 sm:leading-[1.6]  tracking-wide text-white opacity-80 " style={{ fontFeatureSettings: '"liga" 1, "kern" 1', // Ligatures and kerning
  fontVariant: 'normal', }}>
                Elixir Homes is one of the leading builders and the most trusted real estate
                developer <br className="hidden md:block 3xl:hiden 2xl:hidden" />in <br className="hidden md:hidden 3xl:hiden 2xl:hidden" />Thrissur, with a proven track record of delivering promises on
                time to its customers. So <br className="hidden xl:block 3xl:block 2xl:hidden" /> here <br className="hidden lg:block xl:hidden 2xl:hidden" />comes a golden chance to be a part of Elixir!
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
              className="w-full sm:w-auto"
            >
              <button 
                className="flex items-center justify-evenly w-full sm:w-[320px] md:w-[1/2] xl:w-[325px] px-8 py-4 
                
                lg:mb-10 lg:text-[14px] lg:h-[47px] lg:w-[300px] lg:px-12
                
                xl:mb-10 border border-white text-white font-inter text-[13px] sm:text-[14px] md:text-[15px]  xl:text-[16px] uppercase font-light hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="h-4 w-4   transition-transform group-hover:translate-x-2" />
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
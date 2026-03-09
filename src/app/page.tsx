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
  <div className="relative w-full h-screen overflow-hidden ">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/hero.gif"
        alt="Luxury Interior"
        className="w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
    </div>

 {/* --- Navbar --- */}
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 z-50 flex items-center justify-between w-full transition-all duration-300 lg:h-20 xl:h-[100px] max-lg:pt-4  max-md:h-[90px]",
        (isScrolled && !isMenuOpen) ? "bg-[#2C2C2C] backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      {/* Target HTML's Width Container */}
      <div className="relative w-[90%] sm:w-[90%] xl:w-[86.9%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-full flex justify-between items-center gap-7 xl:gap-0 2xl:gap-16">
            
            {/* --- LEFT / CENTER SECTION: Logo & Desktop Links --- */}
            <div className="flex font-sans justify-center items-center gap-16">
              
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="w-16 h-16 md:w-12 md:h-12 xl:w-[72px] xl:h-[70px] relative block">
                  <img src="/logo/hlogo3.svg" alt="Elixir Homes Logo" className="object-contain w-full h-full" />
                </Link>
              </div>

              {/* Desktop Links (Hidden on Mobile) */}
              <nav className="hidden lg:flex gap-9 xl:gap-0 xl:space-x-12 xl:mr-20 2xl:mr-0">
                {menuItems.map((item) => (
                  <div
                    key={item}
                    className="group relative flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => item === "Projects" ? handleMouseEnter() : null}
                    onMouseLeave={() => item === "Projects" ? handleMouseLeave() : null}
                  >
                    <Link
                      href={item === "Our Story" ? "/about" : item === "Projects" ? "/projects" : item === "Gallery" ? "/gallery" : item === "Testimonial" ? "/testimonials" : "/contact"}
                      className="para-text text-white font-inter whitespace-nowrap transition-colors"
                    >
                      {item}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                    </Link>
                    
                    {/* Projects Dropdown Arrow */}
                    {item === "Projects" && (
                      <svg
                        className={cn("w-5 h-5 text-white mt-0.5 transition-transform duration-300", isProjectsOpen && "rotate-180")}
                        fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* --- RIGHT SECTION: Target Desktop Action Buttons --- */}
            <div
              className={cn(
                "hidden lg:flex items-center gap-3 xl:gap-4 transition-opacity duration-300",
                isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <a href="tel:+919048733355" className="xl:px-6 px-4 xl:h-11 lg:h-10 lg:py-0 2xl:h-13 py-3.5 border border-white/80 text-white text-[13px] font-sans 2xl:text-sm flex items-center gap-3 hover:bg-white/10 transition whitespace-nowrap" aria-label="Call +91 9048733355">
                <span>Ring us Now</span>
                <div className="relative size-4 2xl:w-5 2xl:h-5">
                  <img src="\phone.svg" alt="Call" className="object-contain w-full h-full" />
                </div>
              </a>
              
              <a href="https://wa.me/919048733355" target="_blank" rel="noopener noreferrer" className="xl:px-6 px-4 xl:h-11 lg:h-10 lg:py-0 2xl:h-13 py-3 border border-white/80 text-white text-[13px] font-sans 2xl:text-sm flex items-center gap-3 hover:bg-white/10 transition whitespace-nowrap" aria-label="WhatsApp">
                <span>Send a Message</span>
                <div className="relative size-5 2xl:w-6 2xl:h-6">
                  <img src="\message.svg" alt="WhatsApp" className="object-contain w-full h-full" />
                </div>
              </a>
            </div>

            {/* --- MOBILE SECTION: Your Existing Mobile Menu Toggle --- */}
            <div className="flex lg:hidden items-center gap-3 lg:gap-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white p-2 hover:bg-white/10 rounded-sm transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <img src="/menu.svg" alt="Menu" className="w-6 h-6 object-contain" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </motion.nav>

    {/* --- Projects Dropdown (Unchanged) --- */}
    {/* ... Keep your AnimatePresence Dropdown code here ... */}

    {/* --- Mobile Menu Overlay (Unchanged) --- */}
    {/* ... Keep your AnimatePresence Mobile Menu Overlay here ... */}

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
      className="fixed inset-0 pt-16 z-40 bg-[#1E1E1E] text-white lg:hidden overflow-y-auto"
    >
      <div className="px-6 py-8 flex flex-col gap-8">

       

        {/* Hero Text */}
        <h2 className="font-cormorant text-3xl mt-7 leading-tight  ">
          “Crafting Spaces <br/> Beyond Ordinary”
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
  <button className="flex-1 py-4 text-sm bg-[#3A3A3A] uppercase tracking-widest text-center">
    Ring us Now
  </button>

  <button className="flex-1 py-4 text-sm bg-[#3A3A3A] uppercase tracking-widest flex items-center justify-center gap-2">
    Send a Message
    <MessageCircle size={16} />
  </button>
</div>

        <div className="border-t border-white/10"></div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 mt-5 text-lg">
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link href="/insights" onClick={() => setIsMenuOpen(false)}>Insights</Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-6 mt-4">

          <h3 className="text-xl font-semibold">Our Projects</h3>

          {/* Project 1 */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img
                src="\buildings\1.jpg"
                className="w-16 h-16 object-cover"
              />

              <div>
                <h4 className="text-white">Elixir Anfield</h4>
                <p className="text-green-400 text-sm">
                  Ongoing Apartment Project
                </p>
                <p className="text-xs text-white/60">
                  Near Hill Gardens Colony & HiLite Mall
                </p>
              </div>
            </div>

            <ArrowRight size={18} />
          </div>

          {/* Project 2 */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img
                src="public\buildings\2.jpg"
                className="w-16 h-16 object-cover"
              />

              <div>
                <h4 className="text-white">Elixir Akkara Gardens</h4>
                <p className="text-red-400 text-sm">
                  Completed Villa Project
                </p>
                <p className="text-xs text-white/60">
                  Near Regency Club, Kuttanellur
                </p>
              </div>
            </div>

            <ArrowRight size={18} />
          </div>
           <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img
                src="\buildings\3.jpg"
                className="w-16 h-16 object-cover"
              />

              <div>
                <h4 className="text-white">Elixir Anfield</h4>
                <p className="text-green-400 text-sm">
                  Ongoing Apartment Project
                </p>
                <p className="text-xs text-white/60">
                  Near Hill Gardens Colony & HiLite Mall
                </p>
              </div>
            </div>

            <ArrowRight size={18} />
          </div>

           <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img
                src="\buildings\4.jpg"
                className="w-16 h-16 object-cover"
              />

              <div>
                <h4 className="text-white">Elixir Anfield</h4>
                <p className="text-green-400 text-sm">
                  Ongoing Apartment Project
                </p>
                <p className="text-xs text-white/60">
                  Near Hill Gardens Colony & HiLite Mall
                </p>
              </div>
            </div>

            <ArrowRight size={18} />
          </div>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>

       {/* --- Hero Content --- */}
<div className="absolute z-30 w-full max-w-full bottom-14 max-lg:bottom-20 left-24 max-sm:left-5  max-lg:left-10  max-xl:left-16 xl:left-32 max-xl:bottom-20 ">
  <div className="flex flex-col w-[90%] gap-1">
    <div ref={headlineRef} className="relative w-full overflow-visible">
    <h1 
  className="font-cormorant font-semibold text-white xl:text-[70px] mb-10 max-sm:text-[40px] max-lg:text-[58px] max-xl:text-[60px] max-lg:mb-2 max-xl:mb-2"
  style={{ fontFeatureSettings: '"liga" 1, "kern" 1', fontVariant: 'normal' }}
>
  Crafting Spaces{' '}
  {/* Breaks on mobile, hides on tablet (md), breaks again on desktop (lg) */}
  <br className="block md:hidden lg:block" /> 
  <span>Beyond Ordinary</span>
</h1>
    </div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.2 }}
      className="xl:max-w-[750px]"
    >
 <p 
  className="font-Inter text-white/95 mx-auto opacity-80 xl:text-[19px] xl:leading-[1.8] max-w-[800px] sm:max-w-none  sm:text-left "
  style={{ fontFeatureSettings: '"liga" 1, "kern" 1', fontVariant: 'normal' }}
>
  {/* Desktop line 1 */}
  <span className="hidden sm:inline">
   Elixir Homes is one of the leading builders and the most trusted real estate developer in <br className="hidden xl:hidden lg:block" />  Thrissur, with a proven track record of delivering promises on time to its customers. So here <br className="hidden xl:hidden lg:block" />comes a golden chance to be a part of Elixir!
  </span>

  {/* Mobile lines */}
  <span className="block sm:hidden">Elixir Homes is one of the leading</span>
  <span className="block sm:hidden">builders and the most trusted real estate</span>
  <span className="block sm:hidden">developer in Thrissur, with a proven track</span>
  <span className="block sm:hidden">record of delivering promises on time to</span>
  <span className="block sm:hidden">its customers. So here comes a golden</span>
  <span className="block sm:hidden">chance to be a part of Elixir!</span>
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
  className="flex items-center justify-center gap-2 xl:w-[325px] xl:h-[60px] mt-8 max-lg:mt-5
             xl:text-[16px] xl:tracking-widest uppercase font-inter 
             border border-white text-white 
             hover:bg-white hover:text-black transition-all duration-500 group
             
             max-sm:w-full max-sm:px-0 max-sm:py-3 max-sm:text-[14px]

               max-lg:w-[40%] max-lg:px-5 max-lg:py-3 max-lg:text-[15px]

               max-xl:w-[31.8%] max-xl:px-5 max-xl:py-3
             "
>
  <span>VIEW PROJECTS</span>
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
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
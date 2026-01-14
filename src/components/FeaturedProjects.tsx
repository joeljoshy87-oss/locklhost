"use client";

import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Near Hill Gardens Colony & HiLite Mall, Thrissur - Kuttanellur Main Road",
    description: "Elixir Anfield is set in one of Thrissur's finest residential localities, surrounded by well-known colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, and Silent Valley.",
    image: "/buildings/flat.jpg",
    status: "Ongoing Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    description: "A testament to modern design, offering unparalleled comfort and style in the heart of the city.",
    image: "/buildings/2.webp",
    status: "Completed Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    description: "Experience tranquility and luxury in our exclusive villa community, designed for sustainable living.",
    image: "/buildings/3.webp",
    status: "Completed Villa Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    description: "Cutting-edge apartments designed for the future of urban living with smart home features.",
    image: "/buildings/4.webp",
    status: "Ongoing Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (projects.length - 1));
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeIndex]);

  const scrollToProject = (index) => {
    const scrollAmount = (index / (projects.length - 1)) * (projects.length * window.innerHeight);
    const startPos = stickyRef.current.offsetTop;
    window.scrollTo({
      top: startPos + scrollAmount,
      behavior: "smooth"
    });
  };

  const currentProject = projects[activeIndex];

  return (
    <div ref={containerRef} className="bg-[#1B1A1F] text-white w-full">
      {/* --- Section Header (Scrolls Naturally) --- */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-3 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 lg:gap-20">
          <div className="max-w-3xl">
            <span className="font-inter text-ls uppercase tracking-[0.3em] text-[#8b8e72] mb-6 block font-medium">
              FEATURED PROJECTS
            </span>
            <h2 className="font-cormorant font-semibold text-4xl md:text-7xl lg:text-[80px] leading-[0.9] text-white">
              Shaping Skylines with Distinction
            </h2>
            <p className="text-gray-500 font-inter text-base md:text-lg leading-relaxed mt-8">
              Our portfolio features elegant completed and ongoing projects across Thrissur, driven by our values of trust and innovation. 
              From smart 2 BHK homes to luxurious 5 BHK residences, every Elixir home is thoughtfully crafted for modern lifestyles.
            </p>
          </div>
          <div className="flex-shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-[#E31E24] text-white px-8 py-4 flex items-center gap-4 text-sm uppercase tracking-widest font-inter"
            >
              View All Projects <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* --- Sticky Project Display --- */}
      <div ref={stickyRef} className="h-screen w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={currentProject.image} 
                alt={currentProject.title} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
            </div>

            {/* Content Overlay - Exact 252px left offset on large screens */}
            <div className="
              relative z-10 
              h-full 
              flex flex-col 
              justify-center
              items-start
              pl-6 sm:pl-10 md:pl-16               /* gradual on smaller screens */
              lg:pl-[252px]                         /* exactly 252px from left on lg+ */
              xl:pl-[252px] 
              2xl:pl-[252px]
            ">
              {/* Title */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h3 className="
                  font-cormorant 
                  font-semibold 
                  text-5xl 
                  sm:text-6xl 
                  md:text-7xl 
                  lg:text-[5.8rem] 
                  xl:text-[6.2rem] 
                  leading-[0.82] 
                  tracking-[-0.02em]
                  text-white
                ">
                  {currentProject.title}
                </h3>
              </div>

              {/* Data Row */}
              <div className="
                w-full 
                max-w-[1200px]
                border-t border-b border-white/40 
                py-5 sm:py-6 lg:py-7 
                flex flex-col sm:flex-row 
                justify-between 
                items-center 
                gap-6 lg:gap-10
              ">
                <span className="font-inter text-sm sm:text-base lg:text-lg text-white/90 uppercase tracking-wider font-medium">
                  {currentProject.status}
                </span>

                <span className="font-inter text-sm sm:text-base lg:text-lg text-white/70 text-center">
                  {currentProject.location}
                </span>

                <span className="font-inter text-sm sm:text-base lg:text-lg text-white/80 tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              {/* Bottom Section */}
              <div className="
                mt-12 sm:mt-16 lg:mt-20 
                w-full 
                max-w-[1200px]
                flex flex-col lg:flex-row 
                justify-between 
                items-start lg:items-end 
                gap-12 lg:gap-20
              ">
                {/* Description + Button */}
                <div className="max-w-2xl">
                  <p className="
                    font-inter 
                    text-sm sm:text-base lg:text-lg 
                    text-gray-200 
                    leading-relaxed lg:leading-8
                  ">
                    {currentProject.description}
                  </p>

                  <button className="
                    mt-8 lg:mt-10
                    group inline-flex items-center gap-3
                    text-white uppercase text-sm lg:text-base 
                    tracking-[0.2em] font-medium
                    border-b border-white/40 pb-2
                    hover:border-white transition-colors duration-300
                  ">
                    VIEW PROJECT
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="
                  flex items-end gap-3 sm:gap-4 lg:gap-5 
                  overflow-x-auto lg:overflow-visible 
                  pb-6 lg:pb-0
                  scrollbar-thin scrollbar-thumb-white/30
                ">
                  {projects.map((thumb, tIndex) => (
                    <div
                      key={tIndex}
                      className="relative group cursor-pointer flex-shrink-0"
                      onClick={() => scrollToProject(tIndex)}
                    >
                      <div className={`
                        relative 
                        w-20 h-14 
                        sm:w-24 sm:h-16 
                        md:w-28 md:h-20 
                        lg:w-32 lg:h-22 
                        xl:w-36 xl:h-24 
                        overflow-hidden 
                        rounded 
                        transition-all duration-500
                        ${activeIndex === tIndex
                          ? 'border-2 border-white scale-110 shadow-xl'
                          : 'opacity-50 grayscale hover:opacity-90 hover:grayscale-0 border border-white/30'
                        }
                      `}>
                        <Image
                          src={thumb.image}
                          alt={`Project thumbnail ${tIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <span className={`
                        absolute -bottom-6 left-0
                        text-xs lg:text-sm 
                        font-mono
                        ${activeIndex === tIndex ? 'text-white' : 'text-white/50'}
                      `}>
                        {String(tIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Spacer */}
      <div className="h-[100vh]" />
    </div>
  );
}
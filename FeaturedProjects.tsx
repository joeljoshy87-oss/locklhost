"use client";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    title: "The Orchid",
    location: "Kuttanellur, Thrissur, Kerala",
    description: "“The Orchid” is one of our signature projects, created with a strong focus on luxury and comfort. Located in the heart of Kuttanellur, it stands in one of Thrissur's finest residential areas.",
    image: "/buildings/2.webp",
    status: "Completed Apartment Project | Sold Out",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "03",
    title: "Elixir Akkara Gardens",
    location: "Kuttanellur | Thrissur",
    description: "Akkara Gardens is a luxury villa Project at Kuttanellur, Thrissur. Spread across 1.20 acres with 12 exclusive units, it offers privacy, sustainability, and refined living.",
    image: "/buildings/3.webp",
    status: "Completed Villa Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "04",
    title: "Elixir Manavath Heights",
    location: "Vadakkenchery, near Alathur in Palakkad",
    description: "Elixir Manavath Heights was a 4-acre land development project at Vadakkenchery, near Alathur in Palakkad.",
    image: "/buildings/4.webp",
    status: "Ongoing Apartment Project",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.webp"],
  },
  {
    id: "05",
    title: "Elixir Super Luxury Villas",
    location: "Moscow Road, Anchery, Thrissur",
    description: "Elixir Super Luxury Villas is an exclusive, fully customisable villa community in Anchery, Thrissur, offering 16 premium homes that blend privacy, sustainability, and refined living.",
    image: "/buildings/5.jpg",
    status: "Completed Villa Project | Sold Out",
    thumbnails: ["/buildings/flat.jpg", "/buildings/2.webp", "/buildings/3.webp", "/buildings/4.webp", "/buildings/5.jpg"],
  },
];

export default function FeaturedProjects() {
  const component = useRef(null);
  const slider = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (isLargeScreen) {
        let panels = gsap.utils.toArray(".project-panel");

        // Initial state
        gsap.set(panels, { opacity: 0, visibility: "hidden", pointerEvents: "none" });
        gsap.set(panels[0], { opacity: 1, visibility: "visible", pointerEvents: "all" });

        let currentIndex = 0;

        ScrollTrigger.create({
          trigger: slider.current,
          // CHANGE 1: Anchor top of slider to top of viewport
          start: "top top", 
          // CHANGE 2: Define duration logic (adjust 3000 to preference)
          end: "+=3000", 
          pin: true,
          // anticipatePin helps reduce flicker on some browsers
          anticipatePin: 1, 
          onUpdate: (self) => {
            const newIndex = Math.round(self.progress * (panels.length - 1));

            if (newIndex !== currentIndex) {
              gsap.to(panels[currentIndex], {
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
                duration: 1.5,
                ease: "power2.inOut"
              });

              gsap.to(panels[newIndex], {
                opacity: 1,
                visibility: "visible",
                pointerEvents: "all",
                duration: 1.5,
                ease: "power2.out",
                overwrite: true
              });

              currentIndex = newIndex;
            }
          }
        });
      }
    }, component);
    return () => ctx.revert();
  }, [isLargeScreen]);

  // Handle thumbnail clicks on mobile
  const handleThumbnailClick = (index) => {
    setCurrentProjectIndex(index);
  };

  return (
    <div ref={component} className="bg-[#1B1A1F] text-white w-full">
      {/* Header Section */}
      <div className="w-full sm:w-[90%] xl:w-[1251px] lg:h-[563px] 2xl:w-[74%] max-w-full mx-auto pt-20 pb-12 md:pt-24 md:pb-14 lg:pt-20 xl:pt-40 lg:pb-20">
        <div className="flex flex-col md:flex-row justify-between lg:justify-start items-start md:items-end gap-12 lg:gap-20 xl:mb-5">
          <div className="max-w-full h-full">
            <span className="font-inter text-[15px] uppercase xl:text-[18px] lg:text-[16px] text-[#8B8E72] mb-6 block font-medium">
              FEATURED PROJECTS
            </span>
            <h2 className="lg:leading-[1.2] lg:max-h-full lg:w-full xl:w-full xl:h-full font-cormorant mb-8 font-semibold text-5xl md:text-6xl xl:text-[64px] lg:text-[65px] text-white">
              Shaping <br className="hidden lg:block" /> Skylines with <br className="hidden lg:block" /> Distinction
            </h2>
            <p className="w-[415px] text-gray-500 font-comfortaa text-base text-pretty md:text-[16px] xl:text-[18px] lg:text-[16px] -tracking-wide leading-[150%]">
              Our portfolio features elegant completed and ongoing projects across Thrissur, driven <br className="hidden lg:hidden xl:block" />by our values of trust and innovation. From smart 2 BHK homes to luxurious 5 BHK <br className="hidden lg:hidden xl:block" />residences, every Elixir home is thoughtfully crafted for modern lifestyles.
            </p>
          </div>

          <div className="w-full md:w-auto flex items-center lg:ml-[16%] mb-0 lg:mt-0 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#E31E24] text-white justify-stretch w-full md:w-[250px] lg:text-[15px] lg:w-full gap-10 py-4 lg:py-[14px] items-center text-nowrap px-8 lg:px-[40px] flex flex-row text-sm uppercase font-inter hover:bg-[#d0181d] transition-colors"
            >
              View All Projects <ArrowRight size={23} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Desktop Slider Section - Only visible on large screens */}
      <div 
        ref={slider} 
        // CHANGE 3: Use h-screen (or h-[100dvh]) instead of min-h in rem.
        // This forces the pinned container to fill the window exactly.
        className="hidden lg:block relative w-full h-screen overflow-hidden"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-panel absolute inset-0 w-full h-full flex items-center justify-center bg-[#1B1A1F]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute mb-5 inset-0 bg-black/60 md:bg-black/50" />
            </div>

            {/* Content Overlay */}
            {/* CHANGE 4: Removed mt-[X%] and used 'flex justify-center' (via parent) and proper spacing 
                to ensure content is centered vertically regardless of screen height. */}
            <div className="relative z-10 w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto h-full flex flex-col justify-center">
              
              <div className="mb-0">
                <h3 className="font-cormorant font-semibold text-5xl md:text-7xl lg:text-[64px] xl:text-[64px] xl:mt-3 text-white">
                  {project.title}
                </h3>
              </div>

              <div className="flex w-full justify-around lg:justify-start items-center border-y-[0.5px] border-white/50 mb-8 md:mb-10 lg:mb-10 h-12 md:h-14 mt-4 lg:mt-2 xl:mt-5 lg:h-[61px] lg:px-0 px-2.5">
                <div className="w-1/2 flex justify-items-start items-center">
                  <span className="font-comfortaa lg:text-[15px] xl:text-[18px] pl-3 text-sm md:text-base text-white/90 tracking-wide">
                    {project.status}
                  </span>
                </div>
                <div className="w-1/2 flex justify-between items-center">
                  <span className="font-comfortaa xl:text-[18px] text-sm md:text-[15px] lg:text-[15px] text-white/70 lg:-ml-36 2xl:-ml-32 whitespace-nowrap">
                    {project.location}
                  </span>
                  <span className="w-1/2 font-inter lg:ml-4 xl:text-[18px] text-sm lg:text-[15px] lg:text-right xl:text-right md:text-base text-white/90 tabular-nums">
                    {String(index + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="flex mt-[2%] flex-col w-full xl:w-full md:flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
                <div className="lg:max-w-3xl xl:w-[37.5%]">
                  <p className="font-comfortaa xl:leading-snug xl:text-[18px] text-sm md:text-[15px] lg:flex-row text-gray-300 mb-8">
                    {project.description}
                  </p>
                  <button className="flex items-end gap-2 group text-white uppercase text-sm tracking-[0.2em] border-b border-white/30 pb-2 hover:border-white transition-all">
                    VIEW PROJECT <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                <div className="flex flex-row place-items-end justify-end gap-2 md:gap-3 xl:gap-5 lg:gap-1 xl:-mb-16 scrollbar-hide">
                  {project.thumbnails.map((thumb, tIndex) => {
                    const isActive = thumb === project.image;
                    return (
                      <div key={tIndex} className="relative group shrink-0 cursor-pointer">
                        <div 
                          className={`
                            relative w-20 h-14 md:w-32 md:h-20 xl:w-[100px] xl:h-[60px]
                            overflow-hidden transition-all duration-300
                            ${isActive 
                              ? 'opacity-100 border-2 border-white' 
                              : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
                            }
                          `}
                        >
                          <Image src={thumb} alt={`Thumbnail ${tIndex + 1}`} fill className="object-cover" />
                        </div>
                        <span className="absolute -top-6 left-0 text-[14px] font-mono text-white/40">
                          {String(tIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Project View - Only visible on small screens */}
      {/* Kept largely the same, but ensure images are closed properly */}
      <div className="relative lg:hidden w-full min-h-[840px]">
        <div className="absolute inset-0 z-20 bg-black/60"></div>
        <div className="absolute z-10 inset-0">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full absolute z-20 top-10 right-0">
          <div className="flex justify-end w-[95%] sm:w-[90%] mx-auto">
            <div className="flex flex-col gap-y-5">
              {projects.map((project, index) => {
                const isActive = currentProjectIndex === index;
                return (
                  <div 
                    key={index} 
                    className="cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <div className={`w-[100px] h-[60px] relative ${isActive ? '' : 'opacity-50 grayscale'}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {isActive && <span className="w-[75%] absolute -bottom-2.5 h-px bg-white"></span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex absolute bottom-12 z-20">
          <div className="w-[95%] sm:w-[90%] mx-auto">
            <p className="font-inter text-white/80 text-sm mb-3">0{currentProjectIndex + 1} of 0{projects.length}</p>
            <h2 className="font-cormorant font-semibold text-3xl md:text-4xl text-white">{currentProject.title}</h2>
            <div className="flex flex-col w-full border-t-[0.5px] border-white/50 mt-6 pt-3">
              <div className="flex justify-between">
                <p className="font-inter text-white/90 text-sm">{currentProject.status}</p>
              </div>
              <p className="font-inter text-white text-sm mt-2">{currentProject.location}</p>
            </div>
            <p className="font-inter text-white mt-10 mb-6 max-w-[660px]">
              {currentProject.description}
            </p>
            <a href={`/${currentProject.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <button className="border-b border-white w-full sm:w-fit flex text-white items-center justify-between gap-7.75 px-5 py-2.5">
                <p className="font-inter font-normal uppercase text-sm tracking-widest">VIEW PROJECTS</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="size-6.25">
                  <path d="M7 7h10v10"></path>
                  <path d="M5 19 17 7"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
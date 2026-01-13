"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Elixir Anfield",
    location: "Near Hill Gardens Colony & HiLite Mall, Thrissur - Kuttanellur Main Road",
    status: "Ongoing Apartment Project",
    image: "/buildings/flat.jpg",
    description: "Elixir Anfield is set in one of Thrissur's finest residential localities, surrounded by well-known colonies such as Hill Gardens, Lesona Enclave, Garden Enclave, Green Valley, and Silent Valley."
  },
  {
    id: "02",
    title: "Elixir Highbury",
    location: "Ayyanthole | Thrissur",
    status: "Completed Apartment Project",
    image: "/buildings/2.webp",
    description: "A landmark of luxury in Ayyanthole, Elixir Highbury offers residents a blend of modern amenities and serene living, setting a new standard for apartment projects in Thrissur."
  },
  {
    id: "03",
    title: "Elixir Greens",
    location: "Puranattukara | Thrissur",
    status: "Completed Villa Project",
    image: "/buildings/3.webp",
    description: "Nestled in the calm of Puranattukara, Elixir Greens is a completed villa project that offers a harmonious balance of nature and contemporary architecture for a peaceful lifestyle."
  },
  {
    id: "04",
    title: "Elixir Avalon",
    location: "Kuttanellur | Thrissur",
    status: "Ongoing Apartment Project",
    image: "/buildings/4.webp",
    description: "Elixir Avalon in Kuttanellur is an architectural marvel, an ongoing apartment project designed for those who seek elegance and comfort in a prime Thrissur location."
  },
];

const Thumb = ({ selected, onClick, imgSrc, number }) => (
  <div
    className={`relative w-full h-full cursor-pointer transition-opacity duration-300 ${
      selected ? "opacity-100" : "opacity-50 hover:opacity-75"
    }`}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-black/30 z-10"></div>
    <Image
      src={imgSrc}
      alt={`Thumbnail ${number}`}
      fill
      className="object-cover"
    />
    <span
      className={`absolute top-2 left-2 z-20 font-inter text-[10px] transition-colors duration-300 ${
        selected ? "text-white" : "text-gray-300"
      }`}
    >
      {number}
    </span>
  </div>
);


export default function FeaturedProjects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainApi, setMainApi] = useState(null);
  const [thumbApi, setThumbApi] = useState(null);

  const [mainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, emblaThumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback((index) => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(index);
  }, [emblaMainApi]);

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaMainApi.selectedScrollSnap());
      emblaThumbApi.scrollTo(emblaMainApi.selectedScrollSnap());
    };

    emblaMainApi.on("select", onSelect);
    onSelect(); // Set initial state

    return () => emblaMainApi.off("select", onSelect);
  }, [emblaMainApi, emblaThumbApi]);

  const currentProject = projects[selectedIndex];
  
  return (
    <div className="bg-[#1B1A1F] w-full py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <span className="font-inter text-[#FF0000] text-sm uppercase tracking-widest mb-4">
              Featured Projects
            </span>
            <h2 className="font-cormorant font-semibold text-4xl md:text-[56px] leading-[1.1] text-white">
              Shaping Skylines with <br /> Distinction
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-4 bg-[#E31E24] text-white flex items-center justify-center gap-4 shrink-0 transition-colors hover:bg-red-700"
          >
            <span className="font-inter text-sm md:text-[16px] uppercase">
              View All Projects
            </span>
            <ArrowUpRight size={20} />
          </motion.button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Image Viewer */}
          <div className="overflow-hidden" ref={mainRef}>
            <div className="flex">
              {projects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-full relative aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Text Content Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white z-10"
            >
              <h3 className="font-cormorant text-4xl md:text-6xl font-bold mb-3">{currentProject.title}</h3>
              <p className="font-inter text-sm md:text-base uppercase tracking-widest text-gray-300 mb-6">{currentProject.status}</p>
              
              <div className="border-t border-white/20 pt-4 flex justify-between items-center text-sm">
                <span className="text-gray-400">{currentProject.location}</span>
                <span className="font-mono">{currentProject.id} of 0{projects.length}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description & Thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-1">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={currentProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="font-inter text-gray-400 leading-relaxed pr-8"
                    >
                        {currentProject.description}
                    </motion.p>
                </AnimatePresence>
                <button className="group flex items-center gap-3 mt-8 text-white font-inter text-sm tracking-widest uppercase hover:text-[#FF0000] transition-colors">
                    View Project
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
            <div className="lg:col-span-2">
                <div className="overflow-hidden" ref={thumbRef}>
                    <div className="grid grid-cols-4 gap-4 h-28 md:h-32">
                        {projects.map((project, index) => (
                        <Thumb
                            key={project.id}
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                            imgSrc={project.image}
                            number={project.id}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

// Dummy AnimatePresence component if not installed
const AnimatePresence = ({ children }) => <>{children}</>;

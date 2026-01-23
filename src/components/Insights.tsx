"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "How space and light define modern luxury living",
    image: "/buildings/1.jpg",
    alt: "Modern interior with warm lighting",
  },
  {
    id: 2,
    title: "Luxury living redefined: what modern homebuyers desire most",
    image: "/buildings/1.jpg",
    alt: "Luxury villa with a pool at sunset",
  },
  {
    id: 3,
    title: "The art of minimalist luxury design",
    image:   "/buildings/1.jpg",
    alt: "Minimalist luxury interior",
  },
  {
    id: 4,
    title: "The art of minimalist luxury design",
    image:   "/buildings/1.jpg",
    alt: "Minimalist luxury interior",
  },
];


export default function Insights() {

  const sliderRef = useRef(null);

  const [isDown, setIsDown] = useState(false);

  const [startX, setStartX] = useState(0);

  const [scrollLeft, setScrollLeft] = useState(0);



  // --- Simple Mouse Drag Logic ---

  const handleMouseDown = (e) => {

    setIsDown(true);

    setStartX(e.pageX - sliderRef.current.offsetLeft);

    setScrollLeft(sliderRef.current.scrollLeft);

  };



  const handleMouseLeave = () => setIsDown(false);

  const handleMouseUp = () => setIsDown(false);



  const handleMouseMove = (e) => {

    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;

    const walk = (x - startX) * 2; // Scroll speed multiplier

    sliderRef.current.scrollLeft = scrollLeft - walk;

  };



  return (
    <section className="bg-white w-full xl:mt-[5%] py-32 px-6 md:px-12 overflow-hidden ">
      <div className="w-[95%] sm:w-[90%] xl:w-[93%] max-w-[1400px] mx-auto flex flex-col xl:flex-row items-start gap-12 xl:gap-14 ">
        
        {/* --- Left Side: Header Content --- */}
        <div className="w-full xl:w-1/3 z-10 bg-white">
          <span className="text-[#c20505] font-inter text-lg  md:text-[15px] lg:text-[17px] font-medium uppercase tracking-wide mb-4 block">
            INSIGHTS & BLOGS
          </span>
          <h2 className="pt-4 lg:pt-[8px]  pb-7 lg:pb-2 font-cormorant font-semibold text-5xl md:text-[64px]  leading-[100%] lg:leading-[1.2] text-[#1A1A1A] mb-8">
            Stories That <br className="hidden xl:block "/> Inspire Spaces
          </h2>
          <p className=" font-light tracking-wide lg:text-[1px] text-left  text-lg md:text-[16px]  xl:text-[19px] text-[#6b6b6b] md:text-left ">
           Welcome to our blog, where homes,<br className="hidden lg:hidden xl:block" /> lifestyles, and inspiration meet. Explore <br className="hidden lg:hidden xl:block" />stories, ideas, and insights that shape <br className="hidden lg:hidden xl:block" />better living. Let every read bring you <br className="hidden lg:hidden xl:block" />closer to your dream home
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#E31E24] mt-16  text-white px-8 py-4 gap-5 font-inter  text-lg uppercase tracking-widest flex items-center transition-all"
          >
            View All <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* --- Right Side: Mouse Slider --- */}
        <div 
          className="flex-2  hidden xl:block w-full pl-10 lg:w-2/3  "
        >
          {/* THE REF AND EVENTS MUST BE ON THE SCROLLING DIV */}
          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex  flex-nowrap  overflow-x-auto cursor-grab active:cursor-grabbing select-none mb-32 -mr-96 scrollbar-hide"
            style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' 
            }}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="-ml-10 mt-5 container w-fit flex cursor-pointer flex-col   group">
                <div className="w-[315px] xl:w-[450px] h-[500px] xl:h-[560px] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <h3 className="font-cormorant font-normal justify-center text-[22px] md:text-[24px] lg:text-[24px] xl:text-[28px] leading-[117%] text-[#1A1A1A] mt-4 lg:mt-4 xl:mt-5 group-hover:text-[#FF0000] transition-colors">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* --- Mobile/Tablet/LG Version --- */}
        <div className="block xl:hidden w-full mt-5" style={{ opacity: 1 }}>
          <div className="flex gap-8 xl:gap-10 overflow-x-auto no-scrollbar cursor-grab h-full w-full pr-10" style={{ scrollbarWidth: 'none' }}>
            {blogPosts.map((post) => (
              <a key={post.id} href="#" className="w-fit cursor-pointer">
                <div className="w-[320px] md:w-[330px] lg:w-[315px] h-[400px] md:h-[460px] lg:h-[500px] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="w-full h-full object-contain"
                    sizes="100vw"
                  />
                </div>
                <p className="font-cormorant mt-4 text-[24px] lg:text-[24px] lg:font-medium xl:font-normal xl:text-[28px] leading-[117%] text-[#1B1A1F]">
                  {post.title}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
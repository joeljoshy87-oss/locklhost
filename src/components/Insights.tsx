"use client";

import React, { useRef, useState } from "react";
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
    image: "/buildings/1.jpg",
    alt: "Minimalist luxury interior",
  },
  {
    id: 4,
    title: "The art of minimalist luxury design",
    image: "/buildings/1.jpg",
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
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Wrapper matching target HTML exactly */}
      <div className="w-[95%] mt-[4%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto pt-20 pb-16 md:pb-12 lg:pt-20 lg:pb-10 xl:pt-[120px] xl:pb-[140px] flex flex-col xl:flex-row items-start gap-10 xl:gap-0">
        
        {/* --- Left Side: Header Content (Matched to Target HTML) --- */}
        <div className="w-full h-auto xl:w-[39rem] flex-shrink-0 mb-10 xl:mb-0">
          <h5 className="font-inter text-[#EE3E25] text-sm uppercase font-medium tracking-wide xl:mt-0.5">
            INSIGHTS & BLOGS
          </h5>
          
          <h2 className="pt-4 lg:pt-[8px]  pb-7 lg:pb-2 font-cormorant font-semibold text-5xl md:text-[64px]  leading-[100%] lg:leading-[1.2] text-[#1A1A1A] mb-8">
            Stories That <br className="hidden xl:block "/> Inspire Spaces
          </h2>
          
          <p className="font-inter text-[#7B7B7B]  lg:text-[14px] leading-relaxed mt-8 mb-8 lg:mt-7 lg:mb-8 xl:max-w-[36rem] xl:mt-10 xl:mb-16">
            Welcome to our blog, where homes, lifestyles, and inspiration meet. Explore stories, ideas, and insights that shape better living. Let every read bring you closer to your dream home
          </p>
          
          {/* Exact Button from Target HTML */}
          <a href="/insights" className="block w-full sm:w-fit">
            <div className="relative overflow-hidden group hover:ring-1 hover:ring-[#EE3E25] hover:ring-inset transition-colors duration-500 gap-10 sm:gap-7 lg:gap-6 w-full justify-between sm:w-fit sm:justify-center flex text-white bg-[#EE3E25] items-center backdrop-blur-sm px-6 py-[1.1rem] lg:py-3 lg:px-9 xl:py-4 xl:px-8">
              <span className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] border border-transparent group-hover:border-[#EE3E25] transition-colors duration-300"></span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full z-0 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-[40] transition-all duration-700 ease-in-out"></span>
              <p className="relative z-10 font-inter text-sm uppercase tracking-widest font-medium group-hover:text-[#EE3E25] transition-colors duration-300">
                VIEW ALL
              </p>
              <ArrowRight className="relative z-10 size-6 group-hover:text-[#EE3E25] transition-colors duration-300" />
            </div>
          </a>
        </div>

        {/* --- Right Side: Desktop Mouse Slider --- */}
        <div className="hidden xl:block w-full pl-2">
          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Controlled gap spacing. No more negative margins.
            className="flex flex-nowrap gap-8 overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide -mr-[50vw] pr-[50vw]"
            style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
            }}
          >
            {blogPosts.map((post) => (
              // FIX: Forced width here prevents text from creating phantom gaps
              <div key={post.id} className="w-[450px] flex-shrink-0 flex cursor-pointer flex-col group">
                <div className="w-full h-[560px] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    sizes="450px"
                  />
                </div>
                <h3 className="font-cormorant font-normal text-[28px] leading-[1.2] text-[#1A1A1A] mt-5 group-hover:text-[#EE3E25] transition-colors">
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- Mobile/Tablet Version --- */}
      <div className="block xl:hidden w-full mt-5 mb-10 pl-[5%] sm:pl-[5%]">
        <div className="flex gap-6 overflow-x-auto cursor-grab h-full w-full pr-10 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {blogPosts.map((post) => (
            <a key={post.id} href="#" className="w-[320px] md:w-[330px] lg:w-[315px] flex-shrink-0 cursor-pointer group">
              <div className="w-full h-[400px] md:h-[460px] lg:h-[500px] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  sizes="(max-width: 1024px) 330px"
                />
              </div>
              <p className="font-cormorant mt-4 text-[24px] lg:text-[24px] lg:font-medium leading-[1.2] text-[#1B1A1F] group-hover:text-[#EE3E25] transition-colors">
                {post.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
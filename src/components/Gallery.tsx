"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const galleryItems = [
    { id: 1, src: "/buildings/flat.jpg", alt: "Elixir Anfield" },
    { id: 2, src: "/buildings/2.webp", alt: "Elixir Highbury" },
    { id: 3, src: "/buildings/3.webp", alt: "Elixir Greens" },
    { id: 4, src: "/buildings/4.webp", alt: "Elixir Avalon" },
    { id: 5, src: "/buildings/5.webp", alt: "The Orchid" },
];

export default function Gallery() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [centeredImage, setCenteredImage] = useState(1); // Start with first image centered

  // --- Mouse Drag Logic ---
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
    sliderRef.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
      sliderRef.current.style.userSelect = 'auto';
      updateCenteredImage();
    }
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
      sliderRef.current.style.userSelect = 'auto';
      updateCenteredImage();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Update centered image when scrolling stops
  const updateCenteredImage = () => {
    if (!sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderCenter = sliderRect.left + sliderRect.width / 2;
    
    let closestDistance = Infinity;
    let closestIndex = 0;
    
    sliderRef.current.querySelectorAll('.gallery-item').forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(itemCenter - sliderCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    setCenteredImage(closestIndex);
  };

  // Debounced scroll handler
  useEffect(() => {
    if (!sliderRef.current) return;
    
    let animationFrameId;
    const handleScroll = () => {
      if (isDown) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateCenteredImage);
    };
    
    sliderRef.current.addEventListener('scroll', handleScroll);
    return () => {
      sliderRef.current.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDown]);

  return (
    <section className="w-full bg-white">
      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px]  mx-auto pt-20 lg:pt-[8%] pb-0  lg:pb-10 xl:pt-[210px] xl:pb-[77px]">
        <div className="w-full h-fit flex justify-start md:mb-20 lg:mb-0">
          {/* Left Side: Header Content */}
          <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-[740px] mb-10 md:mb-0">
            <span className="text-[#be0909]  font-inter lg:text-[16px] md:text-[14px] xl:text-[17px] uppercase tracking-wide text-lg font-medium mb-4 block">
              gallery
            </span>
            <h2 className="font-cormorant lg:leading-[1.3] font-semibold text-5xl md:text-[64px] leading-[100%] text-[#1A1A1A] mt-4 lg:mt-[23px] xl:mt-[23px]">
              A Glimpse Into<br className="hidden xl:block lg:block mt-5 3xl:block 2xl:hidden" /> Elegance
            </h2>
            <p className="font-comfortaa  sm:text-[15px] lg:text-[15.5px] xl:text-[19px] text-[#7B7B7B] text-[13px] mt-8 lg:mt-7 xl:mt-[47px]">
              Step into the world of Elixir Homes through our gallery, <br className="hidden  lg:block xl:hidden 2xl:hidden" />where every image reflects our commitment to quality and fine living. From architectural brilliance to crafted interiors, each frame showcases excellence. Explore the spaces <br className="hidden  lg:block xl:hidden 2xl:hidden" />where your dream home begins.
            </p>
          </div>
          
          {/* Right Side: Button - Only visible on md and above */}
          <div className="hidden md:block">
            <div className="relative md:flex items-end justify-start min-h-full md:w-[48%] lg:w-full lg:ml-[105%] xl:w-[418.5px]">
              <a href="/gallery" className="block">
                <div className="
                  relative overflow-hidden group hover:ring-1 hover:ring-[#EE3E25] hover:ring-inset
                  transition-colors duration-500
                  w-full justify-start sm:w-fit
                  flex text-white bg-[#E31E24] items-center backdrop-blur-sm 
                  px-6 py-[1.1rem] lg:py-4.5 lg:px-[26px] xl:py-4 xl:px-8.25
                ">  
                  <span className="pointer-events-none absolute inset-0 z-1  border border-transparent group-hover:border-[#EE3E25] transition-colors duration-300"></span>
                  <span className="absolute bg-white rounded-full z-0 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-[40] transition-all duration-700 ease-in-out"></span>
                  <p className="relative lg:text-wrap justify-start z-10 font-inter px-0 xl:text-[16px] lg:text-[16px] lg:px-5 text-sm uppercase tracking-widest group-hover:text-[#EE3E25] transition-colors duration-300">
                    VIEW<br/> GALLERY
                  </p>
                  <ArrowRight className="relative z-10 size-4  group-hover:text-[#EE3E25] transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Slider */}
      <div className="container w-[99%] h-[95%] lg:w-full xl:w-full md:w-full flex items-center justify-center mt-2 pb-28 lg:pb-20 xl:pb-[197px]">
        <div className="w-full">
          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex items-center gap-4 overflow-x-auto justify-center lg:justify-normal scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory xl:h-[600px]"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {galleryItems.map((item, index) => {
              const isActive = index === centeredImage;
              const scale = isActive ? 1 : 0.85;
              const opacity = isActive ? 1 : 0.7;
              
              return (
                <div 
                  key={item.id} 
                  className="gallery-item shrink-0 justify-center transition-all duration-500 ease-out snap-center flex-shrink-0"
                  style={{ 
                    width: '550px', 
                    height: '550px',
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <div className="relative overflow-hidden w-full h-full group">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="w-1/2 h-1/2 object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="100vw"
                      draggable="false"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 text-white font-inter text-lg font-medium">
                          {item.alt}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ElixirBackgroundText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      
      gsap.fromTo(textRef.current, 
        // Reduced movement range for mobile to prevent "dead space" 
        { y: isMobile ? '-2%' : '-15%' }, 
        {
          y: isMobile ? '2%' : '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom', 
            end: 'bottom top',   
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      /**
       * Fixed the "Big Space":
       * - py-6 on mobile vs py-16 on desktop reduces vertical padding
       * - min-h-fit ensures the container only takes as much space as the text needs
       */
      className="w-full overflow-hidden select-none pointer-events-none flex justify-center items-center bg-black py-6 md:py-16 min-h-fit"
    >
      <h1 
        ref={textRef}
        /**
         * Mobile Optimization:
         * - text-[22vw] prevents the text from being too tall on narrow screens
         * - leading-[0.7] removes the massive default top/bottom gaps found in display fonts
         */
        className="font-cormorant font-bold text-[22vw] md:text-[423.16px] leading-[0.7] md:leading-[1] text-[#171717] uppercase tracking-tighter md:tracking-normal text-center whitespace-nowrap"
      >
        ELIXIR
      </h1>
    </div>
  );
};

export default ElixirBackgroundText;
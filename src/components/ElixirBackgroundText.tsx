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
      gsap.fromTo(textRef.current, 
        { y: '-5%' }, 
        {
          y: '5%',
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
      /* 1. Added negative margin-bottom and responsive widths to match target */
      className="relative overflow-hidden -mb-16 mx-auto border-t border-white/30 sm:border-t-0 select-none pointer-events-none bg-black"
    >
      <div className="text-center mt-5">
        <h2 
          ref={textRef}
          /* 2. Exact pixel-based font sizes from your target HTML */
          className="text-[110px] sm:text-[220px] lg:text-[290px] xl:text-[395px] 2xl:text-[430px] font-bold font-cormorant tracking-wide leading-none text-white/10 uppercase"
        >
          ELIXIR
        </h2>
      </div>
    </div>
  );
};

export default ElixirBackgroundText;
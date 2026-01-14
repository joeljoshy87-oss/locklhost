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
      // Set up a simple parallax effect
      gsap.fromTo(textRef.current, 
        { y: '-20%' }, // Start slightly up
        {
          y: '20%', // End slightly down
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom', // When the top of the container hits the bottom of the viewport
            end: 'bottom top',   // When the bottom of the container hits the top of the viewport
            scrub: true,         // Smoothly scrub the animation as the user scrolls
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden select-none pointer-events-none flex justify-center items-center bg-black py-16"
    >
      <h1 
        ref={textRef}
        className="font-cormorant font-bold text-[30vw] md:text-[423.16px] leading-[1] text-[#171717] uppercase tracking-normal text-center"
      >
        ELIXIR
      </h1>
    </div>
  );
};

export default ElixirBackgroundText;

"use client";
import React from 'react';

export default function ContactInfo() {
  return (
    <div className="bg-black pb-20 px-6 md:px-0">
      {/* 1. Updated width container to match target's w-[95%] and xl:w-[90%] */}
      <div className="w-[95%] sm:w-[95%] xl:w-[90%] max-w-[1400px] mx-auto py-20">
        
        {/* 2. Changed to flex-col for mobile and sm:flex-row for desktop */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
          
          {/* 3. Primary Copyright Text */}
          <p className="text-[15px] md:text-[16px] font-inter text-white/60">
            © {new Date().getFullYear()} Elixir Villas & Apartments Pvt.Ltd. | All Rights Reserved.
          </p>

          {/* 4. Credit Text with specific white/60 opacity */}
          <p className="text-[15px] md:text-[16px] font-inter text-white/60 font-extralight">
            Crafted With ♥ by Woxro
          </p>
          
        </div>
      </div>
    </div>
  );
}
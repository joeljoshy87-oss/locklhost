"use client";

import React, { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";



const testimonialData = [

  {

    id: 1,

    name: "Joby Payyappilly",

    role: "Film Director & Musician",

    quote: " We had many choices when we looked for affordable flats with the required amenities. But we stumbled at Elixir Homes because of its ideal layout and utilities. the wiring duct and drainage system were all just perfect. Moreover, the dealings were super perfect. I didn’t have to worry about a thing because Elixir Homes is an Ethical Builder. ",

    image: "/testimonials.webp"

  },

  {

    id: 2,

    name: "Joby Payyappilly",

    role: "Film Director & Musician",

    quote: " We own a 3BHK apartment at “The Orchid” of Elixir in Thrissur. I wanted to buy a property in Kuttanellur, Thrissur road. In search of renowned home builders and developers, for affordable yet elegant apartments, most of them showed me expensive properties. Sometimes, locations were not as per my requirement. Later on, my friend suggested Elixir. Because of that precise decision, I bought my dream home which was handed over to us in 2014. Today I feel much happy & satisfied with my decision of taking a flat in Elixir Apartment. It’s the quality of their work, professionalism and delivery on the exact time makes them stand out from other builders.  ",

    image: "/testimonials.webp"

  },

   {

    id: 3,

    name: "Joby Payyappilly",

    role: "Film Director & Musician",

    quote: "  We own a 3BHK apartment at “The Orchid” of Elixir in Thrissur. I wanted to buy a property in Kuttanellur, Thrissur road. In search of renowned home builders and developers, for affordable yet elegant apartments, most of them showed me expensive properties. Sometimes, locations were not as per my requirement. Later on, my friend suggested Elixir. Because of that precise decision, I bought my dream home which was handed over to us in 2014. Today I feel much happy & satisfied with my decision of taking a flat in Elixir Apartment. It’s the quality of their work, professionalism and delivery on the exact time makes them stand out from other builders. ",

    image: "/testimonials.webp"

  },

   {

    id: 4,

    name: "Joby Payyappilly",

    role: "Film Director & Musician",

    quote: " We had a great experience with the Elixir team- very prompt, professional, and committed to excellent quality. Their flats and villas are spacious, with well-designed common areas and great amenities. Highly recommended for anyone looking for a perfect home!   ",

    image: "/testimonials.webp"

  },

  // Add more testimonials as needed

];





export default function Testimonials() {

  const [index, setIndex] = useState(0);

  const current = testimonialData[index];

  const sliderRef = useRef(null);

  const [isDown, setIsDown] = useState(false);

  const [startX, setStartX] = useState(0);

  const [scrollLeft, setScrollLeft] = useState(0);

  const [autoPlay, setAutoPlay] = useState(true);



  // Auto-rotate testimonials

  useEffect(() => {

    if (!autoPlay) return;

   

    const timer = setInterval(() => {

      setIndex((prev) => (prev + 1) % testimonialData.length);

    }, 5000);

   

    return () => clearInterval(timer);

  }, [autoPlay]);



  // Mouse drag logic for testimonials

  const handleMouseDown = (e) => {

    if (!sliderRef.current) return;

    setIsDown(true);

    setStartX(e.pageX - sliderRef.current.offsetLeft);

    setScrollLeft(sliderRef.current.scrollLeft);

    setAutoPlay(false);

  };



  const handleMouseLeave = () => setIsDown(false);

  const handleMouseUp = () => setIsDown(false);



  const handleMouseMove = (e) => {

    if (!isDown || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;

    const walk = (x - startX) * 2;

    sliderRef.current.scrollLeft = scrollLeft - walk;

    setAutoPlay(false);

  };



  // Handle arrow button clicks

  const handleNext = () => {

    setIndex((prev) => (prev + 1) % testimonialData.length);

    setAutoPlay(false);

  };



  const handlePrevious = () => {

    setIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);

    setAutoPlay(false);

  };

  return (

    <section className="bg-[#1A1A1A] w-full overflow-hidden">

      <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto pt-[9.9%] pb-7.5 lg:pt-[8.4%]  lg:pb-7 xl:mt-[2.5%] xl:pb-19.25 l">

        <div className="flex flex-col  lg:flex-row justify-between items-start lg:items-end gap-10">

          {/* Left Column: Text */}

          <div className="w-full lg:w-[47%] xl:w-full mb-10 lg:mb-0
          md:mb-2.5
          ">

            <h5 className="text-[#8B8E72] font-inter uppercase  text-[13px] text-lg md:text-[min(10vw,15.5px)] font-medium mb-4 lg:mb-6 xl:text-[18px]
            md:mb-3
            ">

              testimonials

            </h5>

            <h2 className=" font-cormorant text-white  text-5xl md:text-6xl md:text-left lg:text-[65px] font-semibold mt-4  xl:mt-8 xl:w-full !leading-[1.2] 
            md:mt-0 md:text-[min(10vw,55.9px)]
            ">

              Trusted by<br className="hidden md:block lg:hidden xl:hidden sm:hidden" /> Those Who <br className="hidden md:block lg:hidden xl:block  sm:hidden" /> Call  It Home

            </h2>{/*<br className="hidden lg:block xl:hidden" />*/}

            <p className="font-comfortaa  text-[#7B7B7B] mt-8 mb-5  leading-[1.6]  md:leading-[1.6] md:max-w-lg md:text-[min(10vw,15px)] xl:text-[17px] lg:text-[15px] xl:mt-16 xl:text-nowrap lg:text-wrap md:text-nowrap md:mt-8.5 md:tracking-wide">

             The true measure of our success is the<br className="hidden md:block lg:hidden xl:hidden" /> happiness of the families who live in our <br className="hidden md:block lg:hidden xl:hidden" /> homes.<br className="hidden lg:hidden xl:block" /> Their words reflect the trust, comfort, <br className="hidden md:block lg:hidden xl:hidden" />and confidence they've placed in Elixir Homes.<br className="hidden md:block lg:hidden xl:block" /> Read their stories and experiences...

            </p>

          </div>



          {/* Right Column: Slider Controls - Only visible on lg and above */}

          <div className="hidden ml-8 lg:flex items-end mb-7 justify-end min-h-full lg:w-[50%] w-[50%] xl:w-[418.5px] ">

            <div className="flex gap-6">

             <button

              onClick={handlePrevious}

              disabled={index === 0}

              className={`transition ${index === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:opacity-60'}`}

            >

              <ChevronLeft className="size-10 text-white/50 stroke-[0.7] -mr-3" />

            </button>

            <button

              onClick={handleNext}

              disabled={index === testimonialData.length - 1}

              className={`transition ${index === testimonialData.length - 1 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:opacity-60'}`}

            >

              <ChevronRight className="size-10 text-white stroke-[0.7]" />

            </button>

            </div>

          </div>

        </div>

      </div>

      {/* Main Content Split - Removed fixed md:h-[60vw] */}
<div className="w-full mx-auto flex flex-col lg:flex-row bg-[#373833] xl:mt-24 lg:h-auto xl:h-[800px] items-stretch">
  {/* Left Side: Image - Now fills the container height exactly */}
  {/* Left Side: Image - Now stretches to match text container height */}
<div className="relative w-full lg:w-1/2 h-[500px] lg:h-auto overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={current.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={current.image}
          alt="Testimonial Background"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </AnimatePresence>
  </div>
  {/* Right Side: Quote Content - This "drives" the height of the container */}
{/* Right Side: Quote Content */}
<div className="w-full lg:w-1/2 py-8 md:min-h-full flex items-start lg:justify-center px-6 lg:px-0 md:px-12">
  <div className="flex flex-col lg:pt-28 xl:pt-0 w-full max-w-[400px]">
    
    {/* Quote Icon */}
    <div className="relative w-12 h-9 md:w-[79px]  md:h-[58px] ">
      <Image 
        src="/QuoteIcon.webp" 
        alt="Quote Icon" 
        fill 
        className="object-contain object-left" 
        sizes="80px"
      />
    </div>

    {/* Quote Text & Profile */}
    <AnimatePresence mode="wait">
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        {/* Quote Text */}
        <p className="font-cormorant italic text-white/80   text-[18px] md:text-[24px] leading-6 md:leading-[34px] mt-8 xl:mt-14 lg:mt-[139px] max-w-[400px]">
          &ldquo;{current.quote}&rdquo;
        </p>

        {/* Profile Section */}
        <div className="flex items-center mt-8 lg:mt-[125px] mb-8 md:mb-16 lg:mb-0 xl:mb-0 xl:mt-5">
          <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image 
              src="/Testimonials.jpg" 
              alt={current.name} 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col ml-3 md:ml-4">
            <p className="text-white font-normal text-[15px] md:text-[18px] leading-7">
              {current.name}
            </p>
            <p className="font-inter text-[#CACACA] text-sm md:text-base">
              {current.role}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

  </div>
</div>

        {/* Right Side: Quote Content - Full width on mobile, half on lg */}
        
      </div>

     {/* Mobile Dots Navigation - Only visible below lg */}
      <div className="flex justify-center gap-3 py-10 lg:hidden bg-[#373833]">
        {testimonialData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-black scale-125' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
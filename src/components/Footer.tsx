"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const quickLinks1 = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Gallery' },
  { href: '#', label: 'Testimonial' },
];

const quickLinks2 = [
  { href: '#', label: 'Insights' },
  { href: '#', label: 'FAQ' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Legal And Privacy' },
];

const projectLinks = [
  { href: '#', label: 'Elixir Anfield (Ongoing)' },
  { href: '#', label: 'The Orchid (Completed)' },
  { href: '#', label: 'Elixir Akkara Gardens (Completed)' },
  { href: '#', label: 'Elixir Manavath Heights (Completed)' },
  { href: '#', label: 'Elixir Super Luxury Villas (Completed)' },
];

export default function Footer() {
  return (
    <footer className="bg-black  text-gray-300 font-inter pt-16 pb-12 px-0    relative overflow-hidden
        xl:px-0
       lg:px-0
      md:pt-15 md:px-0
    sm:px-0">
      <div className="w-[95%] sm:w-[95%] xl:w-[90%] max-w-350 mx-auto py-12 sm:py-16 lg:pt-0">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-5 lg:mt-[3.8%]   md:mt-0 lg:items-center lg:pb-0  ">
          <div className="w-full lg:w-2/3 lg:pl-0 mb-8 lg:mb-0 ">
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl md:text-5xl lg:-tracking-[0.3] lg:text-[65px] lg:leading-[79.2px] xl:text-[64px] text-white leading-[110%] sm:leading-[100%] md:text-[min(10vw,55px)]  md:leading-[125%] md:tracking-[0.5] ">
              Let's Discuss<br className="block  sm:hidden md:block lg:block xl:block" /> Your Vision With<br className="block sm:hidden  md:hidden lg:block xl:hidden" />  Us
            </h2>
            <p className="font-comfortaa text-base lg:text-[15px] xl:text-lg text-[#707070] xl:mt-12 leading-relaxed mt-4 md:mt-6 max-w-lg  md:text-[min(10vw,14.5px)]  md:text-nowrap">
              Elixir Homes stands as a symbol of refined architecture and  <br className="block  sm:hidden md:hidden lg:block xl:hidden" />  uncompromised <br className="block  sm:hidden md:block lg:hidden xl:hidden" /> quality.
            </p>
          </div>
          <div className="w-full lg:w-auto mt-6 md:mt-0 lg:mt-20  flex xl:mt-20 justify-start md:justify-start   ">
            <Button 
              className="bg-[#E31E24] md:text-[min(10vw,16px)] rounded-none text-white w-full h-12 px-6 py-3 flex items-center xl:mt-24   justify-between gap-2  uppercase  font-comfortaa hover:bg-red-700 transition-all
              text-sm
              md:h-11 md:py-6 md:gap-7  md:mb-[6.5%]
              lg:mt-[43%]
              sm:px-8  sm:py-4 sm:gap-3  sm:h-14

              "
            >
              Book a Visit<ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
        </div>

       {/* Middle Section: Links and Info */}

<div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-y-16 border-t-[0.5px] border-[white] pt-16 md:pt-[6.3rem] mt-16">
  
  {/* Column 1: Quick Links */}
  <div className="md:w-1/2 lg:w-[22%]" style={{ opacity: 1 }}>
    <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
      Quick Links
    </h3>
    <ul className="space-y-5">
      {quickLinks1.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-white para-text font-inter">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 2: Quick Links 2 */}
  <div className="md:w-1/2 lg:w-[22%]" style={{ opacity: 1 }}>
    <h3 className="hidden md:block text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
      Quick Links
    </h3>
    <ul className="space-y-5 mt-[3.4rem] md:mt-0">
      {quickLinks2.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-white para-text font-inter">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 3: Projects */}
  <div className="md:w-1/2 lg:w-[23%] 2xl:w-[20%]" style={{ opacity: 1 }}>
    <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
      Projects
    </h3>
    <ul className="space-y-5">
      {projectLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-white para-text font-inter">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 4: Get In Touch */}
  <div className="hidden md:block w-[60%] md:w-[50%] lg:w-[25%]" style={{ opacity: 1 }}>
    <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
      Get in Touch
    </h3>
    <div className="space-y-5">
      {/* Address Row */}
      <div className="flex items-start gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" height="20" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" 
          className="lucide lucide-map-pin text-white size-17 md:size-12 lg:size-15 xl:size-14 -mt-5 md:-mt-2 lg:-mt-4 xl:-mt-3" 
          aria-hidden="true"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p className="text-white para-text font-inter">
          Elixir Villas & Apartments Pvt.Ltd Ground Floor (Below SBI Kuttanellur Branch) Kuttanellur P.O, Thrissur, Kerala - 680014
        </p>
      </div>

      {/* Phone Row */}
      <div className="flex items-center gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" height="18" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" 
          className="lucide lucide-phone text-white" 
          aria-label="Phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
        </svg>
        <Link href="tel:+919048733355" className="text-white para-text font-inter">
          +91 9048733355
        </Link>
      </div>

      {/* Email Row */}
      <div className="flex items-center gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" height="18" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" 
          className="lucide lucide-mail text-white" 
          aria-label="Email"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </svg>
        <Link href="mailto:sales@elixirhomes.com" className="text-white para-text font-inter">
          sales@elixirhomes.com
        </Link>
      </div>
    </div>
  </div>
</div>
       

       
        
      </div>
    </footer>
  );
}
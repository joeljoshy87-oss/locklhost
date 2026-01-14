"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const quickLinks1 = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Gallery' },
];

const quickLinks2 = [
  { href: '#', label: 'Testimonial' },
  { href: '#', label: 'Insights' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Legal & Privacy' },
];

const projectLinks = [
    { href: '#', label: 'Ongoing' },
    { href: '#', label: 'Completed' },
    { href: '#', label: 'Upcoming' },
    { href: '#', label: 'All Projects' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 font-inter pt-24 lg:pt-36 pb-8 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 mb-16 border-b border-gray-700/50">
          <div className="lg:w-2/3">
            <h2 className="font-cormorant font-semibold text-[48px] md:text-[64px] text-white leading-[100%]">
              Let’s Discuss <br /> Your Vision With Us
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-400 leading-relaxed mt-6 max-w-lg">
              Elixir Homes stands as a symbol of refined architecture and uncompromised quality of refined architecture and quality.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Button 
              className="bg-[#E31E24] text-white h-14 px-8 py-4 flex items-center gap-3 text-sm uppercase tracking-widest font-inter hover:bg-red-700 transition-all group"
            >
              Book a Visit <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Middle Section: Links and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-white font-inter font-medium text-xs uppercase tracking-[0.2em] border-b border-gray-700 pb-3 mb-6 inline-block">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks1.map(link => (
                <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors text-base">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links 2 */}
           <div>
            <h3 className="text-white font-inter font-medium text-xs uppercase tracking-[0.2em] border-b border-gray-700 pb-3 mb-6 inline-block">Quick Links</h3>
            <ul className="space-y-4">
               {quickLinks2.map(link => (
                <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors text-base">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h3 className="text-white font-inter font-medium text-xs uppercase tracking-[0.2em] border-b border-gray-700 pb-3 mb-6 inline-block">Projects</h3>
            <ul className="space-y-4">
              {projectLinks.map(link => (
                 <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors text-base">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-white font-inter font-medium text-xs uppercase tracking-[0.2em] border-b border-gray-700 pb-3 mb-6 inline-block">Get In Touch</h3>
            <address className="not-italic text-base leading-relaxed">
              Elixir Villas & Apartments Pvt. Ltd. 123, <br/>
              Thrissur, Kerala, India Elixir Villas & <br/>
              Apartments Pvt. Ltd. Thrissur, Kerala, India
            </address>
            <div className='mt-4'>
                <Link href="tel:+918946759810" className="block hover:text-white transition-colors text-base">+91-8946759810</Link>
                <Link href="mailto:info@elixirhomes.com" className="block hover:text-white transition-colors text-base">info@elixirhomes.com</Link>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-xs text-gray-500 pt-8 mt-24">
          <p>&copy; {new Date().getFullYear()} Elixir Vilas & Apartments Pvt. Ltd. | All Rights Reserved.</p>
          <p className="mt-2">Crafted With ♥ by Woxro</p>
        </div>

      </div>

      {/* Background Giant Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 flex items-end justify-center z-0 pointer-events-none">
          <span className="font-cormorant font-bold text-white/5 text-[20vw] md:text-[25vw] lg:text-[200px] leading-none select-none">
              ELIXIR
          </span>
      </div>
    </footer>
  );
}

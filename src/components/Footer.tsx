"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Facebook size={20} />, href: '#' },
  { icon: <Twitter size={20} />, href: '#' },
  { icon: <Instagram size={20} />, href: '#' },
  { icon: <Linkedin size={20} />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300 font-inter pt-24 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1512px] mx-auto">
        
        {/* Top Section: Newsletter Signup */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-16 mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-semibold text-center lg:text-left mb-8 lg:mb-0">
            Subscribe to Our Newsletter
          </h2>
          <form className="w-full max-w-lg flex items-center">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border border-gray-600 text-white rounded-l-sm rounded-r-none h-14 flex-grow focus:ring-brand-red focus:border-brand-red" 
            />
            <Button 
              type="submit" 
              className="bg-[#FF0000] text-white h-14 px-6 rounded-r-sm rounded-l-none hover:bg-red-700"
            >
              <ArrowRight size={20} />
            </Button>
          </form>
        </div>

        {/* Middle Section: Links and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
             <div className="flex flex-col items-center z-50 relative mb-4">
              <img src="/logo/hlogo3.svg" alt="Elixir Homes Logo" className="w-15 md:w-17" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting spaces beyond the ordinary, Elixir Homes is your trusted partner in building the future of luxury living.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2">A:</span> 
                <span>Elixir Homes, 2nd Floor, Hi-Life Building, Kuttanellur, Thrissur - 680014</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2">P:</span>
                <Link href="tel:+919876543210" className="hover:text-white transition-colors">+91 987 654 3210</Link>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2">E:</span>
                <Link href="mailto:info@elixirhomes.com" className="hover:text-white transition-colors">info@elixirhomes.com</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-cormorant text-xl font-semibold text-white mb-6">Follow Us</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full text-gray-400 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Elixir Homes. All Rights Reserved. Designed with love.</p>
        </div>

      </div>
    </footer>
  );
}

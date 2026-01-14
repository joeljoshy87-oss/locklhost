"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="bg-black text-gray-300 font-inter pb-24 px-6 md:px-12 lg:px-24">
        <div  className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {/* This empty div is for spacing, to push the contact info to the end */}
                <div className="lg:col-span-3"></div>
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
             <div className="border-t border-gray-800 mt-24 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Elixir Homes. All Rights Reserved. Designed by Doth.</p>
            </div>
        </div>
    </div>
  );
}

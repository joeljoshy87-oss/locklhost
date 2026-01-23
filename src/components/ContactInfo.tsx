"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="bg-black text-gray-300 font-inter pb-20 px-6 md:px-12 lg:px-23">
        <div  className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
                 {/* This empty div is for spacing, to push the contact info to the end */}
                
            </div>
             <div className=" border-gray-800 text-left text-gray-500 text-lg ">
                <p>&copy; {new Date().getFullYear()} Elixir Homes. All Rights Reserved. Designed by Doth.</p>
                 <p>Crafted With 🤍 by Woxro</p>
        
            </div>
        </div>
    </div>
  );
}

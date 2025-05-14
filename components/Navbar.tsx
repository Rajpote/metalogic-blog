"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => setIsOpen(!isOpen);

   return (
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 relative">
               {/* Left: Logo */}
               <Link href="/" className="text-2xl font-bold">
                  <span className="text-red-600">Meta</span>
                  <span className="text-gray-800 dark:text-white">Logic</span>
               </Link>

               {/* Center: Navigation (hidden on mobile) */}
               <nav className="hidden md:flex space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
                  <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
                     Home
                  </Link>
                  <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
                     Services
                  </Link>
                  <Link href="/career" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
                     Career
                  </Link>
                  <Link href="/blogs" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
                     Blogs
                  </Link>
                  <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
                     About Us
                  </Link>
               </nav>

               {/* Right: Get in Touch */}
               <div className="hidden md:flex items-center space-x-4">
                  <Link href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
                     Get in Touch
                  </Link>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden flex items-center">
                  <button onClick={toggleMenu} aria-label="Toggle Menu">
                     <svg className="h-6 w-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                     </svg>
                  </button>
               </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
               <div className="md:hidden pb-4 space-y-2">
                  {["Home", "Services", "Career", "Blogs", "About Us"].map((item) => (
                     <Link key={item} href={`/${item.toLowerCase().replace(/\s/g, "")}`} className="block text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400">
                        {item}
                     </Link>
                  ))}
                  <Link href="/contact" className="block text-center mt-2 bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700 transition">
                     Get in Touch
                  </Link>
               </div>
            )}
         </div>
      </header>
   );
};

export default Navbar;

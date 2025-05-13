import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogCardProps } from "./type";

const Hero = ({ title, description, date, slug, image }: BlogCardProps) => {
   return (
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 md:px-20 py-20 text-center transition-colors duration-300">
         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-red-600 dark:text-red-400">Metalogic</span> Blog
         </h1>
         <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 dark:opacity-90">Stay updated with the latest insights and articles on tech, development, and more!</p>

         <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">📌 Featured Blog</h2>

            <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto text-left transition-transform duration-300 hover:scale-[1.01]">
               {image && <Image src={image} alt="Featured Blog" width={800} height={400} className="w-full h-64 object-cover" priority />}
               <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">{title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">📅 Published on {date}</p>
                  <Link href={`/blog/${slug}`} className="inline-block mt-2 text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
                     Read More →
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;

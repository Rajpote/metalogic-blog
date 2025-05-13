"use client";

import React, { useState } from "react";

const Newsletter = () => {
   const [email, setEmail] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Subscribed email:", email);
      setEmail("");
      alert("Thanks for subscribing!");
   };

   return (
      <section className="bg-gray-100 dark:bg-gray-800 px-6 md:px-20 py-16 text-center transition-colors duration-300">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Subscribe to our Newsletters</h2>
         <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
         <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
               type="email"
               required
               placeholder="Please Enter Your Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition bg-red-600 dark:bg-red-500 dark:hover:bg-red-400">
               Subscribe
            </button>
         </form>
      </section>
   );
};

export default Newsletter;

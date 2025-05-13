"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="bg-gray-900 text-gray-200 pt-12 pb-8 px-6 md:px-12">
         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
               <h3 className="text-xl font-bold mb-2">
                  <span className="text-red-600">Meta</span>Logic
               </h3>
               <p>Software Private Limited</p>
               <p>Saptakhel, Lalitpur (Head Office)</p>
               <p className="mt-2">📞 +977 9851353599</p>
               <p>📧 info@metalogic.com.np</p>
            </div>

            {/* Company Links */}
            <div>
               <h4 className="text-lg font-semibold mb-2">Company</h4>
               <ul className="space-y-1">
                  <li>
                     <a href="#" className="hover:text-white">
                        Feedback
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Partnership
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Terms & Conditions
                     </a>
                  </li>
               </ul>
            </div>

            {/* Services */}
            <div>
               <h4 className="text-lg font-semibold mb-2">Services</h4>
               <ul className="space-y-1">
                  <li>
                     <a href="#" className="hover:text-white">
                        Custom Software Development
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Web Development
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Mobile App Development
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Cloud Computing Services
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Quality Assurance & Testing
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        UI/UX Designing
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Maintenance & Support
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        DevOps
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Blockchain Solutions
                     </a>
                  </li>
               </ul>
            </div>

            {/* Join */}
            <div>
               <h4 className="text-lg font-semibold mb-2">Join</h4>
               <ul className="space-y-1">
                  <li>
                     <a href="#" className="hover:text-white">
                        Careers at MetaLogic
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:text-white">
                        Internships
                     </a>
                  </li>
               </ul>
               <h4 className="text-lg font-semibold mt-4 mb-2">Follow Us</h4>
               <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook">
                     <FaFacebook className="hover:text-white" />
                  </a>
                  <a href="#" aria-label="Twitter">
                     <FaTwitter className="hover:text-white" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                     <FaLinkedin className="hover:text-white" />
                  </a>
                  <a href="#" aria-label="Instagram">
                     <FaInstagram className="hover:text-white" />
                  </a>
               </div>
            </div>
         </div>

         <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">© Copyright 2024 MetaLogic. All rights reserved.</div>
      </footer>
   );
}

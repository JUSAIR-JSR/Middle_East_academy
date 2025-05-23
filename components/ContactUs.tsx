"use client"; // Required for client-side rendering

import { MdContactPhone, MdMarkEmailRead } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 sm:px-6 py-12">
      
      {/* Title */}
      <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Contact Us</h2>
        <MdContactPhone className="text-4xl sm:text-5xl text-red-500" />
      </div>

      {/* Contact Box */}
      <div className="bg-black/40 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg shadow-red-500 p-4 sm:p-6 w-full max-w-2xl">
        
        {/* Subtitle */}
        <h2 className="text-red-500 text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
          Get in Touch Today
        </h2>
        <p className="flex justify-center items-center text-sm sm:text-lg text-gray-300 mb-4 sm:mb-6 text-center">
          Have questions or ready to enroll? We’re here to help
          <FaExclamation className="text-red-500 text-2xl sm:text-3xl ml-1 sm:ml-2" />
        </p>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg">
          <div className="flex items-center gap-3 sm:gap-4">
            <RiHomeOfficeLine className="text-2xl sm:text-3xl text-red-500 min-w-[1.8rem]" />
            <p>
              <span className="font-bold text-red-500">Address:</span> Middle East Academy, Manjeri, Kerala, India
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <IoMdCall className="text-2xl sm:text-3xl text-red-500 min-w-[1.8rem]" />
            <p>
              <span className="font-bold text-red-500">Phone:</span>
              <a href="tel:+919605566023" className="hover:text-red-400 transition duration-300 ml-1">
              +91 960 5566 023
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <MdMarkEmailRead className="text-2xl sm:text-3xl text-red-500 min-w-[1.8rem]" />
            <p>
              <span className="font-bold text-red-500">Email:</span>
              <a 
                href="mailto:middleeastacademyinfo@gmail.com"
                className="hover:text-red-400 transition duration-300 ml-1 break-all"
              >
                middleeastacademyinfo@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-5 sm:gap-6 mt-4 sm:mt-6">
            <a href="https://www.instagram.com/middle_east_academy/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <BsInstagram className="text-3xl sm:text-4xl text-red-500 hover:text-red-400 transition duration-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <AiFillFacebook className="text-3xl sm:text-4xl text-red-500 hover:text-red-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

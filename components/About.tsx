"use client";

import { Info } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-gradient-to-b from-black to-gray-900 text-white px-4 sm:px-6">
      {/* Title with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-12"
      >
        <Info className="text-red-500 w-8 h-8" />
        <h2 className="text-4xl font-bold">About Us</h2>
      </motion.div>

      {/* Content Box */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-center">
        {/* Properly configured image with local fallback */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2  border-red-500/30 shadow-xl">
            <Image
              src="/images/About us.jpg" // Local fallback image
              alt="Students learning together"
              fill
              className="object-cover "
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-2xl lg:text-3xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
            Empowering Careers Through Skill-Based Education
          </h2>

          <div className="max-h-96 overflow-y-auto pr-3 scrollbar-thin custom-scrollbar">
            <p className="text-base lg:text-lg mb-4 text-gray-300">
              At Middle East Academy, we are committed to bridging the gap between learning and career success. 
              As a leading education startup, we provide a wide range of industry-focused certificate courses 
              designed to equip students with practical skills and real-world knowledge. Our goal is to create 
              an empowered workforce, ready to take on professional challenges in various industries.
            </p>
            <p className="text-base lg:text-lg text-gray-300">
              One of our flagship programs is in Fire and Safety Education. We believe that safety is not just 
              a skill—it's a responsibility. Our certified professionals bring years of experience and a passion 
              for teaching, ensuring that every student gains the expertise, confidence, and preparedness needed 
              to handle real-world emergencies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
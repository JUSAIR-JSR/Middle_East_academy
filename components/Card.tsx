"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Course } from "../app/data/courses";

type CardProps = {
  course: Course;
};

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-4 sm:p-6 min-h-[80vh]"
    >
      {/* Card Container */}
      <div className="flex flex-col md:flex-row items-stretch rounded-2xl border border-gray-700 shadow-lg shadow-red-500/20 bg-gray-900/50 backdrop-blur-sm w-full max-w-6xl overflow-hidden transition-all duration-300 hover:shadow-red-500/40 hover:border-red-500/50">
        
        {/* Image Section */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative w-full md:w-1/2 min-h-[300px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8"
        >
          <Image
            className="rounded-xl object-cover shadow-xl"
            src={course.image}
            alt={course.title}
            fill
            quality={100}
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </motion.div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <h2 className="font-bold text-2xl md:text-3xl mb-4 text-red-400">
            {course.title}
          </h2>

          {/* Scrollable Paragraph */}
          <div className="flex-1 text-base md:text-lg text-gray-300 leading-relaxed overflow-y-auto pr-2 scrollbar-thin custom-scrollbar">
            <p>{course.shot_description}</p>
          </div>

          {/* Read More Button */}
          <div className="mt-6">
            <Link href={`/courses/${course.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-medium shadow-lg hover:shadow-red-500/30 transition-all duration-300"
              >
                Read More
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
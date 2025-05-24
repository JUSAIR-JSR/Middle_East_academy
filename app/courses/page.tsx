"use client";

import { courses } from "../data/courses";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Courses</span>
        </motion.h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-red-900/20 bg-gray-900/50 transition-all duration-300 group-hover:shadow-red-900/40 group-hover:border-red-900/50">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {course.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow hover:shadow-lg hover:shadow-red-900/30"
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { courses } from "../../data/courses";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

type CourseDetailProps = {
  params: { id: string };
};

export default function CourseDetail({ params }: CourseDetailProps) {
  const { id } = params;
  const course = courses.find((c) => c.id === decodeURIComponent(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/courses"
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
            Back to Courses
          </Link>
        </motion.div>

        {/* Course Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-8 xl:gap-12"
        >
          {/* Course Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl border border-gray-700"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={800}
              height={500}
              quality={100}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Course Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
            >
              {course.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-invert max-w-none text-gray-300"
            >
              <p>{course.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold text-red-400 mb-4">Syllabus</h2>
              <ul className="space-y-2">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                <h3 className="text-red-400 font-medium">Certification</h3>
                <p className="text-gray-300">{course.certification}</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                <h3 className="text-red-400 font-medium">Duration</h3>
                <p className="text-gray-300">{course.duration}</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                <h3 className="text-red-400 font-medium">Internship</h3>
                <p className="text-gray-300">{course.internship}</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                <h3 className="text-red-400 font-medium">Mode</h3>
                <p className="text-gray-300">{course.mode} available</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-red-400 mb-6 text-center">
            Contact Us For More Details
          </h2>
          
          <div className="flex justify-center items-center gap-8">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/919605566023"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Contact via WhatsApp"
            >
              <div className="bg-green-600 p-4 rounded-full group-hover:bg-green-700 transition">
                <FaWhatsapp className="text-white text-3xl" />
              </div>
            </motion.a>

            {/* Phone Call */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="tel:+919605566023"
              className="group"
              aria-label="Call us"
            >
              <div className="bg-red-600 p-4 rounded-full group-hover:bg-red-700 transition">
                <FaPhone className="text-white text-3xl" />
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/middle_east_academy__"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on Instagram"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full group-hover:from-purple-600 group-hover:to-pink-600 transition">
                <BsInstagram className="text-white text-3xl" />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Course } from "../data/courses"; // Import Course type

type CardProps = {
  course: Course;
};

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-black min-h-screen">
      {/* Title */}
     

      {/* Card Container */}
      <div className="flex flex-col md:flex-row items-center justify-center rounded-2xl border border-gray-700 shadow-lg shadow-red-500 bg-black/30 backdrop-blur-lg w-full md:w-[70rem] overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full md:w-[30rem] flex justify-center bg-gray-800/50 p-4">
          <Image
            className="w-full max-w-xs md:max-w-sm rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            src={course.image}
            alt={course.title}
            width={400} 
            height={300} 
            quality={100}
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[40rem] p-6 text-white">
          <h2 className="font-bold text-2xl mb-4  text-red-500">{course.title}</h2>

          {/* Scrollable Paragraph */}
          <div className="text-lg text-gray-300 leading-relaxed max-h-56 overflow-y-auto pr-2 custom-scrollbar">
            <p>{course.shot_description}</p>
          </div>

          {/* Read More Button */}
          <Link href={`/courses/${course.id}`}>
            <button className="mt-5 px-4 py-2 rounded-lg text-md text-white border border-red-500 hover:bg-red-600 transition duration-300 shadow-md">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

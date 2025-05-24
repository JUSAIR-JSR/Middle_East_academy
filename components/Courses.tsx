"use client";

import Card from "./Card";
import { courses } from "../app/data/courses";
import Link from "next/link";
import { motion } from "framer-motion";

const Courses: React.FC = () => {
  const displayedCourses = courses.slice(0, 3);

  return (
    <div className="bg-gray-950">
      {/* Only changed this headline - kept everything else identical */}
        <h1 className="font-extrabold text-center text-4xl mb-3 py-6 bg-gradient-to-r from-red-400 to-red-800 bg-clip-text text-transparent">
        Discover Our Professional Courses
      </h1>
      
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {displayedCourses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>

      {/* Show 'All Courses' button only if more than 3 courses exist */}
      {courses.length > 3 && (
        <div className="flex justify-center">
          <Link href="/courses">
            <button className="mt-6 px-4 py-2 rounded-lg text-md text-white border border-red-500 hover:bg-red-600 transition duration-300">
              All Courses
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Courses;
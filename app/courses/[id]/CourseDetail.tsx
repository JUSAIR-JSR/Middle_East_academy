"use client"; // ✅ Required for Client Components

import Image from "next/image";
import Link from "next/link";
import { courses } from "../../data/courses";

type CourseDetailProps = {
  params: { id: string }; // ✅ Fix: params is a normal object, NOT a Promise
};

export default function CourseDetail({ params }: CourseDetailProps) {
  const { id } = params; // ✅ Fix: Use params directly (NO `use()` NEEDED)
  const course = courses.find((c) => c.id === decodeURIComponent(id));

  if (!course) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Course not found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
       
      <div className="flex flex-col items-center p-6 mt-[3rem]">
      {/* ✅ Course Detail Section */}
        <h1 className="font-extrabold text-4xl mb-6">{course.title}</h1>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {/* ✅ Course Image */}
          <Image
            className="rounded-xl object-cover"
            src={course.image}
            alt={course.title}
            width={500}
            height={350}
            quality={100}
          />

          {/* ✅ Course Details */}
          <div className="text-lg bg-black/40 backdrop-blur-lg border border-gray-700 p-4 rounded-xl">
            <p className="mb-4 text-gray-300">{course.description}</p>
            <h1 className="text-red-600 text-2xl">Syllabus</h1>
            <ul className="list-disc list-inside mb-4">
              {course.syllabus.map((item, index) => (
                <li key={index} className="text-gray-300">{item}</li>
              ))}
            </ul>
            <p className="flex gap-3 mb-2"><strong className="text-red-600 ">Certification:</strong> {course.certification} </p>
            <p className="flex gap-3 mb-3"><strong className="text-red-600 ">Duration:</strong> {course.duration}</p>
            <p className="flex gap-3 mb-2"><strong className="text-red-600 ">Internship:</strong> {course.internship}</p>
            <p className="flex gap-3 mb-2"><strong className="text-red-600 ">Mode:</strong> {course.mode} are avalible</p>
          </div>
        </div>

        {/* ✅ Back Button */}

      </div>
    </div>
  );
}

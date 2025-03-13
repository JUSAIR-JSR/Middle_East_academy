import { courses } from "../data/courses"; // ✅ Ensure the correct import
import Link from "next/link";
import Image from "next/image";

export default function CoursesPage() { // ✅ Ensure a valid React component export
  return (
    <div className="bg-black min-h-screen text-white">
        <Link href="/" className="text-red-500 text-lg font-bold hover:underline">
          ← Home
        </Link>
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <h1 className="font-extrabold text-4xl mb-8 text-center">Our Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-700 rounded-lg shadow-lg shadow-red-500 bg-black/30 p-6 text-center"
            >
              {/* Course Image */}
              <Image
                className="w-full rounded-lg object-cover"
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                quality={100}
              />

              {/* Course Title */}
              <h2 className="text-red-500 text-xl font-bold mt-4">{course.title}</h2>

              {/* Course Description */}
              <p className="text-gray-300 mt-2 text-sm">{course.description.substring(0, 100)}...</p>

              {/* Read More Button */}
              <Link href={`/courses/${course.id}`}>
                <button className="mt-4 px-4 py-2 rounded-lg text-md text-white border border-red-500 hover:bg-red-600 transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

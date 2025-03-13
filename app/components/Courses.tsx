import Card from "./Card";
import { courses } from "../data/courses"; // Import courses array
import Link from "next/link";

const Courses: React.FC = () => {
  const displayedCourses = courses.slice(0, 3); // Show first 3 courses

  return (
    <div className="">
       <h1 className="font-extrabold text-center text-4xl mb-8 text-white">
        Our Courses
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

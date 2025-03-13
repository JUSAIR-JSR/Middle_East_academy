import { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "../../data/courses";
import CourseDetail from "./CourseDetail";

type CourseDetailProps = {
  params: Promise<{ id: string }>; // ✅ Fix: params is now a Promise
};

// ✅ **Fix: Make `generateMetadata` async**
export async function generateMetadata({ params }: CourseDetailProps): Promise<Metadata> {
  const { id } = await params; // ✅ Fix: Await params before accessing properties
  const course = courses.find((c) => c.id === decodeURIComponent(id));

  if (!course) {
    return {
      title: "Course Not Found - Middle East Academy",
      description: "The course you're looking for does not exist.",
    };
  }

  return {
    title: `${course.title} - Middle East Academy`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [{ url: course.image }],
    },
  };
}

export default async function CoursePage({ params }: CourseDetailProps) {
  const resolvedParams = await params; // ✅ Fix: Await params before passing it to the client component
  return <CourseDetail params={resolvedParams} />;
}

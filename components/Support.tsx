"use client"; // Required for client-side rendering

import { Users, Wrench, Award, BookOpen, Briefcase } from "lucide-react";

const Support: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-10 min-h-screen px-6 text-lg text-white">
      <div className="max-w-2xl">
        <h2 className="text-red-500 text-3xl mb-6 font-bold text-center">
          Why Choose Us?
        </h2>
        <h3 className="text-2xl mb-6 text-center">
          Where Excellence Meets Expertise
        </h3>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <Users className="text-red-500 size-[70px] lg:size-[50px]" />
            <span>
              <strong className="text-red-500">Experienced Trainers:</strong> Learn from industry veterans with hands-on expertise and real-world experience.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Wrench className="text-red-500 size-[70px] lg:size-[50px]" />
            <span>
              <strong className="text-red-500">Hands-On Training:</strong> Get practical exposure in state-of-the-art facilities equipped with the latest tools and technology.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Award className="text-red-500 size-[70px] lg:size-[50px]" />
            <span>
              <strong className="text-red-500"> Certification:</strong> Boost your career with industry-standard certifications that open new opportunities.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <BookOpen className="text-red-500 size-[70px] lg:size-[50px]" />
            <span>
              <strong className="text-red-500">Future-Ready Courses:</strong> Stay ahead with our constantly evolving curriculum designed to meet industry demands.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Briefcase className="text-red-500 size-[70px] lg:size-[50px]" />
            <span>
              <strong className="text-red-500">100% Placement Assurance:</strong> We provide dedicated support to help you secure top job opportunities.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;

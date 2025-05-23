"use client"; // Required for client-side rendering

import { Info } from "lucide-react"; // ✅ Import an About-related icon

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-5 bg-black text-white px-6 py-16">
      {/* ✅ Title with Icon */}
      <div className="flex items-center gap-3 mb-8">
        <Info className="text-red-500 w-8 h-8" /> {/* Small icon */}
        <h2 className="text-center text-4xl font-bold">About Us</h2>
      </div>

      {/* Content Box */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Image Section (Optional - Remove if not needed) */}
        <div className="flex justify-center items-center">
          <img
            className="rounded-full object-cover border border-gray-700 shadow-lg"
            src="/images/AboutUs.jpeg"
            alt="About Us"
            width={384} // 96rem (lg)
            height={384} // 96rem (lg)
            style={{ aspectRatio: "1 / 1" }} // Ensures perfect circle
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-5 w-full">
          <h2 className="font-bold text-2xl lg:text-3xl text-red-500">
            Empowering Careers Through Skill-Based Education
          </h2>

          {/* Scrollable Paragraph with Visible Scrollbar */}
          <div className="max-h-80 overflow-y-auto p-2 pr-3 custom-scrollbar">
            <p className="text-base lg:text-lg mb-4">
              At Middle East Academy, we are committed to bridging the gap between learning and career success. 
              As a leading education startup, we provide a wide range of industry-focused certificate courses 
              designed to equip students with practical skills and real-world knowledge. Our goal is to create 
              an empowered workforce, ready to take on professional challenges in various industries.
            </p>
            <p className="text-base lg:text-lg">
              One of our flagship programs is in Fire and Safety Education. We believe that safety is not just 
              a skill—it’s a responsibility. Our certified professionals bring years of experience and a passion 
              for teaching, ensuring that every student gains the expertise, confidence, and preparedness needed 
              to handle real-world emergencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

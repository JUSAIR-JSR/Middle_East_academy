"use client";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="mt-20 min-h-screen mb-56 flex flex-col lg:flex-row items-center justify-center px-6 flex-wrap">
      {/* Left Content */}
      <div className="max-w-3xl text-center lg:text-left">
        <h2 className="font-bold text-4xl lg:text-5xl text-red-600 mb-6">
          Master new skills with hands-on courses at{" "}
          <strong className="text-white text-3xl font-thin">Middle East Academy,</strong>
          <strong className="text-lg ">Manjeri.</strong>
        </h2>
        <div className="lg:text-end text-center mr-3">
          <button
            className="rounded-xl px-6 py-2 border border-red-600 hover:bg-red-600 text-white transition"
            aria-label="Learn more about Middle East Academy"
          >
            Learn More...
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-12 lg:mt-0 flex flex-wrap gap-6 lg:gap-8 justify-cente">
        <Image
          className="object-cover max-w-full w-[8rem] lg:w-[11rem] h-[24rem] lg:h-[30rem] rounded-full bg-red-400"
          src="/images/study01.webp"
          alt="Student studying"
          width={176}
          height={480}
          quality={100} 
          priority
        />
        <Image
          className="object-cover max-w-full w-[9rem] lg:w-[11rem] h-[24rem] lg:h-[30rem] rounded-full bg-red-400 mt-20 lg:mt-52"
          src="/images/interview_person.webp"
          alt="Student attending an interview"
          width={176}
          height={480}
          quality={100} 
          priority
        />
      </div>
    </div>
  );
};

export default Hero;

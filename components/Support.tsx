"use client";

import { Users, Wrench, Award, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Support: React.FC = () => {
  const features = [
    {
      icon: <Users className="text-red-500 size-12" />,
      title: "Experienced Trainers",
      description: "Learn from industry veterans with hands-on expertise and real-world experience."
    },
    {
      icon: <Wrench className="text-red-500 size-12" />,
      title: "Hands-On Training",
      description: "Get practical exposure in state-of-the-art facilities equipped with the latest tools and technology."
    },
    {
      icon: <Award className="text-red-500 size-12" />,
      title: "Certification",
      description: "Boost your career with industry-standard certifications that open new opportunities."
    },
    {
      icon: <BookOpen className="text-red-500 size-12" />,
      title: "Future-Ready Courses",
      description: "Stay ahead with our constantly evolving curriculum designed to meet industry demands."
    },
    {
      icon: <Briefcase className="text-red-500 size-12" />,
      title: "100% Placement Assurance",
      description: "We provide dedicated support to help you secure top job opportunities."
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            Why Choose Us?
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-300">
            Where Excellence Meets Expertise
          </h3>
        </motion.div>

        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="space-y-8"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ x: 5 }}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <div className="flex-shrink-0 flex justify-center">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-400 mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Support;
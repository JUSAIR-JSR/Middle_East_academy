"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posters = [
  { id: 1, imageUrl: "/images/MEA_ADDVER.jpeg" },
  { id: 2, imageUrl: "/images/poster01.jpeg" },
  { id: 3, imageUrl: "/images/poster02.jpeg" },
];

const Posters: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-4">
            Latest Announcements
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our current offers and upcoming programs
          </p>
        </motion.div>

        {/* Posters Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posters.map((poster) => (
            <motion.div
              key={poster.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)"
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              className="relative group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-2"
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]">
                <Image
                  src={poster.imageUrl}
                  alt="Middle East Academy promotional material"
                  fill
                  className="object-contain  transition-transform duration-500 group-hover:scale-105"
                  quality={100}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Posters;

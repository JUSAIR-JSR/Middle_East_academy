"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Locations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title with Icon and Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-red-500 w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Location
            </h2>
          </div>
          <p className="text-gray-400 text-center max-w-2xl">
            Visit us at our conveniently located academy in Manjeri
          </p>
        </motion.div>

        {/* Google Map Container with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-700"
        >
          <iframe
            title="Middle East Academy Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.149504829424!2d76.11621137492988!3d11.120141852835194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba640aa8e5e4b23%3A0x4e5e3e2b1e5b3f12!2sMiddle%20East%20Academy!5e0!3m2!1sen!2sin!4v1709645682589"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Middle East Academy Location on Google Maps"
          />
        </motion.div>

        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            Middle East Academy
          </h3>
          <p className="text-gray-300">Manjeri, Kerala, India</p>
          <p className="text-gray-400 mt-2">
            Open: Monday to Saturday, 9:00 AM - 6:00 PM
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Locations;
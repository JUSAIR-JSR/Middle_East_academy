"use client";

import { MdContactPhone, MdMarkEmailRead } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center"
              whileHover={{ scale: 1.02 }}
            >
              Contact Us
            </motion.h2>
            <MdContactPhone className="text-4xl md:text-5xl text-red-500" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center max-w-2xl"
          >
            Reach out to start your learning journey today
          </motion.p>
        </motion.div>

        {/* Contact Box with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-2">
                Get in Touch Today
              </h2>
              <div className="flex items-center justify-center">
                <p className="text-gray-300 mr-2">
                  Have questions or ready to enroll? We're here to help
                </p>
                <FaExclamation className="text-red-500 text-xl" />
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-5 md:space-y-6">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <RiHomeOfficeLine className="text-2xl md:text-3xl text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-400">Address</h3>
                  <p className="text-gray-300">
                    Middle East Academy, Manjeri, Kerala, India
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <IoMdCall className="text-2xl md:text-3xl text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-400">Phone</h3>
                  <a 
                    href="tel:+919605566023" 
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    +91 960 5566 023
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <MdMarkEmailRead className="text-2xl md:text-3xl text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-400">Email</h3>
                  <a 
                    href="mailto:middleeastacademyinfo@gmail.com"
                    className="text-gray-300 hover:text-red-400 transition-colors break-all"
                  >
                    middleeastacademyinfo@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <h3 className="font-semibold text-red-400 mb-3 text-center">
                  Connect With Us
                </h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://www.instagram.com/middle_east_academy__/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:scale-110 transition-transform"
                  >
                    <BsInstagram className="text-3xl text-red-500 hover:text-red-400" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:scale-110 transition-transform"
                  >
                    <AiFillFacebook className="text-3xl text-red-500 hover:text-red-400" />
                  </a>
                  <a 
                    href="https://wa.me/919605566023" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="hover:scale-110 transition-transform"
                  >
                    <BsWhatsapp className="text-3xl text-red-500 hover:text-red-400" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
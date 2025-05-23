"use client"; // Required for client-side rendering

import React from "react";

const Locations: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-16">
      
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-8">Our Location</h2>

      {/* Google Map */}
      <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Middle East Academy Location"
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.149504829424!2d76.11621137492988!3d11.120141852835194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba640aa8e5e4b23%3A0x4e5e3e2b1e5b3f12!2sMiddle%20East%20Academy!5e0!3m2!1sen!2sin!4v1709645682589"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Middle East Academy Location on Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Locations;

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden mt-[40px]" // leave space for navbar
      style={{
        backgroundImage: `url("/Contact.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }} // Start slightly down & invisible
        animate={{ opacity: 1, y: 0 }} // Animate to visible and correct position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth easing
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold mb-5">
          Elevate Your Business with{" "}
          <span className="text-red-400">Pioneershub</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Expert IT consulting, data analytics, and professional training
          solutions to help your business grow and stay ahead in the digital
          world.
        </p>

        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Get Consultation
        </motion.a>
      </motion.div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

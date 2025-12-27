import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center px-6 sm:px-10 py-16 sm:py-24">
        {/* Left Side - Text */}
        <motion.div
          className="sm:w-1/2 p-5 sm:p-10 text-center sm:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-gray-500 dark:text-gray-400 border-b-2 border-red-500 uppercase text-sm tracking-wider">
            About Us
          </span>

          <h1 className="mt-4 mb-6 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-red-600">Pioneer's Hub</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We are a modern IT company specializing in data cleaning, analytics,
            software development, and digital transformation solutions to help
            businesses grow and scale efficiently.
          </p>

          <Link
            to="/about"
            className="inline-block px-8 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-red-400 via-red-500 to-red-800
                       hover:scale-105 transition-transform duration-300"
          >
            Get a Free Consultation
          </Link>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="sm:w-1/2 flex justify-center mb-10 sm:mb-0"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dqnd97zne/image/upload/v1766829459/undefined_-_Imgur_q4hnsg.png"
            alt="About Our Company"
            className="w-full max-w-md object-contain
                       hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

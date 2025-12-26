import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-slate-800 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/cta-image.png')", // Place your image in the public folder
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-gray-50/90 dark:bg-slate-800/90">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-5"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Ready to Unlock Your Data’s True Potential?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg sm:text-xl">
            At <strong>PioneersHub</strong>, we help businesses leverage
            data-driven insights to optimize performance, increase efficiency,
            and make smarter decisions. Let’s collaborate and transform your
            business together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-red-400 via-red-500 to-red-800
                         hover:scale-105 transition-transform duration-300"
            >
              Request a Consultation
            </Link>
            <Link
              to="/services"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-red-600
                         bg-white dark:bg-gray-900 border border-red-500
                         hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;

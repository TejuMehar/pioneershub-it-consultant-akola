import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Data Experts",
      description:
        "Experienced professionals delivering reliable data cleaning and analytics solutions.",
    },
    {
      number: "02",
      title: "Accurate Data Cleaning",
      description:
        "We eliminate duplicates, errors, and inconsistencies for trustworthy data.",
    },
    {
      number: "03",
      title: "Advanced Analytics",
      description:
        "Transform raw data into meaningful insights that drive decisions.",
    },
    {
      number: "04",
      title: "Hands-on Coaching",
      description:
        "Practical training programs focused on real-world applications.",
    },
    {
      number: "05",
      title: "Business-Oriented Approach",
      description:
        "Solutions aligned with your business objectives for maximum impact.",
    },
    {
      number: "06",
      title: "Reliable Support",
      description: "Continuous guidance even after project completion.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose PioneersHub?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What makes us a trusted data partner
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl
                         shadow-lg border border-gray-200 dark:border-slate-700
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Red Number */}
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-xl
                           bg-gradient-to-br from-red-400 via-red-500 to-red-800
                           flex items-center justify-center shadow-md"
              >
                <span className="text-white text-xl font-extrabold">
                  {reason.number}
                </span>
              </div>

              <h3 className="text-xl text-center font-bold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-400 text-center leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

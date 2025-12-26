import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

/* Feature Data */
const features = [
  {
    title: "Accurate Data Cleaning",
    description:
      "We remove inconsistencies, duplicates, and errors from your data to ensure it's reliable and actionable for decision-making.",
  },
  {
    title: "Insightful Data Analytics",
    description:
      "Our analytics services transform your raw data into actionable insights that help drive business growth.",
  },
  {
    title: "Actionable Business Insights",
    description:
      "We provide clear recommendations based on data analysis to help your business make informed decisions.",
  },
  {
    title: "Customized Solutions for Your Needs",
    description:
      "Every business is unique. We tailor our data cleaning and analytics services to fit your specific requirements.",
  },
];

/* Animation Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-snug">
            Why Choose Pioneers Hub?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Pinees Hub provides top-notch data cleaning and analytics services
            to help your business make smarter decisions and unlock actionable
            insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  onClick={() => toggleFeature(index)}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-full
  bg-gradient-to-r from-red-400 via-red-500 to-red-800
  text-white shadow-md shadow-red-600/35"
                    >
                      <Check className="w-6 h-6" />
                    </span>

                    <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                      {feature.title}
                    </span>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-md leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Highlight Card */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-800
    text-white p-8 rounded-2xl
    shadow-xl shadow-red-600/35"
            >
              <h3 className="text-3xl font-bold mb-4">
                Transform Your Data Into Insights
              </h3>
              <p className="text-lg leading-relaxed">
                With Pioneershub, your business gets clean, structured data and
                actionable analytics that drive smarter decisions and measurable
                growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

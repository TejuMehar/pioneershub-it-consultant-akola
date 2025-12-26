import React, { useState } from "react";
import { motion } from "framer-motion";

/* ================== Animation Variants ================== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const FAQ = () => {
  const faqs = [
    {
      question: "Who can benefit from Pioneers Hub services?",
      answer:
        "Our services are ideal for business owners, startups, working professionals, and students who want reliable data cleaning, insightful data analytics, or practical IT and Excel coaching.",
    },
    {
      question: "Do you provide customized IT consulting solutions?",
      answer:
        "Yes. We analyze your business requirements and offer fully customized data cleaning, Excel automation, and analytics solutions tailored to your goals.",
    },
    {
      question: "What tools and technologies do you use?",
      answer:
        "We work with Excel (advanced formulas & automation), Power BI, SQL, and industry-standard analytics tools to deliver accurate and actionable insights.",
    },
    {
      question: "Is your coaching practical or theoretical?",
      answer:
        "Our coaching is 100% practical and project-based. Learners work on real-world datasets to gain hands-on experience that is directly applicable to jobs and business use cases.",
    },
    {
      question: "Do you offer one-on-one coaching or corporate training?",
      answer:
        "Yes. We provide one-on-one coaching, group sessions, and corporate training programs tailored to teams and organizations.",
    },
    {
      question: "How do I get started with a consultation?",
      answer:
        "Simply contact us through our website. We offer an initial discussion to understand your needs and recommend the best solution or coaching plan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* ================== Heading ================== */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-gray-900 dark:text-white">
              Frequently Asked
            </span>{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-800 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our IT consulting & coaching
            services
          </p>
        </div>

        {/* ================== Content ================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ================== LEFT – FAQ ================== */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="divide-y divide-gray-300 dark:divide-gray-700"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="group w-full text-left py-6 font-medium flex items-center transition"
                  >
                    {/* Question */}
                    <span
                      className={`mr-4 transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-red-400 via-red-500 to-red-800 bg-clip-text text-transparent"
                          : "text-slate-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-red-500 group-hover:to-red-800 group-hover:bg-clip-text group-hover:text-transparent"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Plus Icon */}
                    <svg
                      className={`w-4 h-4 ml-auto transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 text-red-600"
                          : "text-slate-600 dark:text-gray-400 group-hover:text-red-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                      <path d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z" />
                    </svg>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-6 text-[15px] text-slate-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* ================== RIGHT – IMAGE ================== */}
          <motion.div
            variants={fadeRight}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/FAQ.webp"
              alt="FAQ Illustration"
              className="max-w-md w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;

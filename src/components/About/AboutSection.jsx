import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

/* ---------------- Counter Component ---------------- */
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 16;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}+</span>;
};

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ---------------- About Section ---------------- */
const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-5 md:mb-6">
              Empowering Businesses with{" "}
              <span className="text-red-600">Data-Driven Solutions</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              At <strong>PioneersHub</strong>, we specialize in data cleaning,
              data analytics, and IT consulting services that help organizations
              unlock the true value of their data.
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              We also provide hands-on coaching and training programs to upskill
              teams and professionals, enabling smarter decisions with
              confidence.
            </p>

            <Link
              to="/about"
              className="inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5
                         text-sm sm:text-base rounded-xl font-semibold text-white
                         bg-gradient-to-r from-red-400 via-red-500 to-red-800
                         shadow-lg shadow-red-500/30 hover:shadow-xl
                         hover:shadow-red-500/40 hover:-translate-y-1
                         transition-all duration-300"
            >
              Explore PioneersHub
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 order-1 lg:order-2"
          >
            {[
              { value: 50, label: "Data Projects Delivered" },
              { value: 25, label: "Business Clients" },
              { value: 6, label: "Years of Industry Experience" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-slate-900 p-6 sm:p-7 md:p-8 rounded-2xl
                           shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-3xl sm:text-4xl text-center font-bold text-red-600 mb-2">
                  <Counter value={item.value} />
                </h3>
                <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

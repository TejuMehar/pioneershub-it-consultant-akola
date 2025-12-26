import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-r from-black via-slate-900 to-black py-28 overflow-hidden">
      {/* Red Accent Blurs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-800/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-5 px-5 py-1.5 text-sm font-semibold 
          text-red-400 bg-white/5 border border-white/10 rounded-full"
        >
          Pioneers Hub Services
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
        >
          Smart{" "}
          <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-800 bg-clip-text text-transparent">
            Digital Solutions
          </span>
          <br className="hidden sm:block" />
          That{" "}
          <span className="text-gray-300">Empower Businesses & Careers</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-14"
        >
          Pioneers Hub delivers expert-led{" "}
          <span className="text-white font-medium">IT consulting</span>,{" "}
          <span className="text-white font-medium">
            web & application development
          </span>
          ,{" "}
          <span className="text-white font-medium">
            data cleaning & analytics
          </span>
          , and{" "}
          <span className="text-white font-medium">
            industry-focused coaching
          </span>{" "}
          to help businesses scale and professionals build future-ready skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          {/* Primary CTA */}
          <a
            href="#services"
            className="px-9 py-4 rounded-xl text-lg font-semibold text-white
            bg-gradient-to-r from-red-400 via-red-500 to-red-800
            hover:-translate-y-1 hover:shadow-xl hover:shadow-red-800/40
            transition-all duration-300"
          >
            View Our Services
          </a>

          {/* Secondary CTA */}
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            href="/contact"
            className="px-9 py-4 rounded-xl text-lg font-semibold
            border border-white/20 text-gray-300
            hover:border-red-500 hover:text-red-400 hover:bg-red-900/20
            transition-all duration-300"
          >
            Talk to an Expert
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[2px]
        bg-gradient-to-r from-transparent via-red-500/40 to-transparent origin-center"
      />
    </section>
  );
}

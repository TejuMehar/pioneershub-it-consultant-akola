import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Repeat,
  Code2,
  FileText,
  Linkedin,
  Cpu,
  Mail,
  Image,
} from "lucide-react";

// Map for Tailwind-safe colors
const colorMap = {
  red: "bg-red-100 dark:bg-red-900/30",
  blue: "bg-blue-100 dark:bg-blue-900/30",
  green: "bg-green-100 dark:bg-green-900/30",
  yellow: "bg-yellow-100 dark:bg-yellow-900/30",
  purple: "bg-purple-100 dark:bg-purple-900/30",
  indigo: "bg-indigo-100 dark:bg-indigo-900/30",
  pink: "bg-pink-100 dark:bg-pink-900/30",
};

// Services data
const services = [
  {
    title: "Data Cleaning",
    description:
      "Remove errors, duplicates, and inconsistencies to ensure clean, actionable data.",
    icon: <Database className="w-8 h-8 text-red-500 transition" />,
    color: "red",
  },
  {
    title: "Data Visualization",
    description:
      "Convert complex data into interactive dashboards and visual insights.",
    icon: <BarChart3 className="w-8 h-8 text-blue-500 transition" />,
    color: "blue",
  },
  {
    title: "Data Automation",
    description:
      "Automate repetitive data tasks to save time and reduce errors.",
    icon: <Repeat className="w-8 h-8 text-green-500 transition" />,
    color: "green",
  },
  {
    title: "Website & App Development",
    description:
      "Custom websites and apps built with modern technologies for performance and scalability.",
    icon: <Code2 className="w-8 h-8 text-red-500 transition" />,
    color: "red",
  },
  {
    title: "Excel Sheets",
    description:
      "Advanced Excel solutions for reporting, analysis, and automation.",
    icon: <FileText className="w-8 h-8 text-yellow-500 transition" />,
    color: "yellow",
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Optimize your LinkedIn profile for visibility, branding, and networking growth.",
    icon: <Linkedin className="w-8 h-8 text-blue-700 transition" />,
    color: "blue",
  },
  {
    title: "Gen AI",
    description:
      "Leverage AI tools to generate content, automate processes, and enhance decision-making.",
    icon: <Cpu className="w-8 h-8 text-purple-500 transition" />,
    color: "purple",
  },
  {
    title: "Business Email Solutions",
    description:
      "Professional email setup, management, and optimization for your business communications.",
    icon: <Mail className="w-8 h-8 text-indigo-500 transition" />,
    color: "indigo",
  },
  {
    title: "Graphics Designing",
    description:
      "Creative design services for logos, banners, social media, and marketing visuals.",
    icon: <Image className="w-8 h-8 text-pink-500 transition" />,
    color: "pink",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 dark:text-gray-400"
          >
            Smart digital solutions designed to empower businesses and build
            future-ready careers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition cursor-pointer`}
            >
              <div
                className={`flex items-center justify-center w-16 h-16 mb-6 rounded-full ${
                  colorMap[service.color]
                }`}
              >
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

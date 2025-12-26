import React from "react";
import { Link } from "react-router-dom";
const services = [
  {
    image: "/service1.webp",
    title: "Data Cleaning",
    description:
      "We clean, validate, and structure your data to ensure accuracy, consistency, and reliability.",
  },
  {
    image: "/service2.webp",
    title: "Data Visualization",
    description:
      "Turn complex data into clear, interactive dashboards and visual insights.",
  },
  {
    image: "/service3.webp",
    title: "Data Automation",
    description:
      "Automate data workflows and reporting to save time and reduce manual effort.",
  },
];
const ServicesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Section Header */}{" "}
        <div className="text-center mb-12">
          {" "}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            {" "}
            Our Services{" "}
          </h2>{" "}
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {" "}
            High-quality solutions for data cleaning, analytics, and automation{" "}
          </p>{" "}
        </div>{" "}
        {/* Service Cards */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              style={{ height: "300px" }}
            >
              {" "}
              {/* Background Image */}{" "}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />{" "}
              {/* Overlay */}{" "}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                {" "}
                <h3 className="text-white text-2xl font-bold mb-2">
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
                <p className="text-white text-sm sm:text-base">
                  {" "}
                  {service.description}{" "}
                </p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* View More Services Button */}{" "}
        <div className="text-center mt-12">
          {" "}
          <Link
            to="/services"
            className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-400 via-red-500 to-red-800 hover:scale-105 transition-transform duration-300"
          >
            {" "}
            View More Services{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ServicesSection;

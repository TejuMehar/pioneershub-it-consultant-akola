import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-black via-slate-900 to-black py-20"
    >
      {/* Decorative Red Blurs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-800/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Take the Next Step?
        </h2>

        {/* Sub Text */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
          Get expert IT consulting and practical training tailored to your
          goals. Start with a free consultation and gain clarity before you
          invest your time or money.
        </p>

        {/* Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {[
            "Industry-expert mentors",
            "Real-world projects",
            "Career & business guidance",
            "Online & Burhanpur support",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-gray-200"
            >
              <CheckCircle className="w-5 h-5 text-red-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Audience */}
        <p className="text-gray-400 mb-6">
          Perfect for{" "}
          <span className="text-red-400 font-semibold">students</span>,{" "}
          <span className="text-red-400 font-semibold">
            working professionals
          </span>{" "}
          & <span className="text-red-400 font-semibold">business owners</span>
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl
          text-lg font-semibold text-white
          bg-gradient-to-r from-red-400 via-red-500 to-red-800
          hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/40
          transition-all duration-300 mb-8"
        >
          Book Free Consultation
        </Link>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[140px]"
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,30
              C200,140 400,0 600,80
              C800,160 1000,40 1200,90
              L1200,140
              L0,140
              Z
            "
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ServiceCTA;

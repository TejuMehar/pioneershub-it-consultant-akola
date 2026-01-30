import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-900 to-gray-900"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-red-600/20 rounded-full blur-2xl animate-float-delay-1"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float-delay-2"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <BookOpen className="h-4 w-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">Knowledge Hub</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
          Insights & 
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Discover the latest trends in data analytics, IT consulting, and technology from Akola's leading experts
        </p>
        
        {/* CTA Button */}
        <div className="max-w-2xl mx-auto">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white/90 text-red-700 font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 text-lg"
          >
            Start Your Data Journey
          </Link>
        </div>
        
        {/* Popular tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Data Analytics Akola", "Python Training", "Excel Consulting", "Business Intelligence", "IT Services Akola"].map((tag, index) => (
            <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white dark:fill-slate-900">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default BlogHero;
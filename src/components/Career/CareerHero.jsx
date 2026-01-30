import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
          alt="Modern office team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-800/70 to-gray-600/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float-delay-1"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float-delay-2"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">We're Hiring</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
          Shape the Future of
          <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Data & Technology
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join a team of innovators, data scientists, and tech enthusiasts building the next generation of business solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="#openings"
            className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-white/25 hover:scale-105"
          >
            View Open Positions
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Send Your Resume
          </Link>
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

export default CareerHero;
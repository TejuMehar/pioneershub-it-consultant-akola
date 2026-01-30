import React from "react";
import { Link } from "react-router-dom";
import { Send, Mail, ArrowRight, Sparkles } from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-800/85 to-gray-800/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float-delay-1"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float-delay-2"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">Join Our Mission</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Shape the
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Future Together?
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Don't see the perfect role? We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-white/25 hover:scale-105 text-lg"
            >
              <Send className="h-6 w-6" />
              Send Your Resume
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="mailto:info@pioneershub.in"
              className="group px-10 py-5 border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 hover:scale-105 text-lg"
            >
              <Mail className="h-6 w-6" />
              Email Us Directly
            </a>
          </div>
          
          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@pioneershub.in</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Akola, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white dark:fill-slate-900">
          <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CareerCTA;
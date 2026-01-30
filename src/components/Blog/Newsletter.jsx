import React from "react";
import { Mail, Send, Bell, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Newsletter background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/85 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-float-delay-1"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float-delay-2"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
          <Bell className="h-4 w-4 text-yellow-300" />
          <span className="text-white text-sm font-medium">Stay Updated</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Never Miss an
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
            Insight
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get the latest articles, tutorials, and industry insights delivered straight to your inbox every week
        </p>
        
        {/* Newsletter form */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-md rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500"
              />
            </div>
            <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg">
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-300 text-sm mt-4">
            Join 5,000+ professionals. No spam, unsubscribe anytime.
          </p>
        </div>
        
        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Sparkles className="h-6 w-6" />, text: "Weekly Insights" },
            { icon: <Mail className="h-6 w-6" />, text: "Exclusive Content" },
            { icon: <Bell className="h-6 w-6" />, text: "Early Access" }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                {benefit.icon}
              </div>
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
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

export default Newsletter;
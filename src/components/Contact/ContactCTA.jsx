import React from "react";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const ContactCTA = () => {
  const achievements = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "10+",
      label: "Happy Clients"
    },
    {
      icon: <Star className="h-6 w-6" />,
      number: "100%",
      label: "Satisfaction Rate"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "5+",
      label: "Projects Completed"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Contact us background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/85 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-400/20 rounded-full blur-2xl animate-float-delay-1"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Transform
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
            Your Business?
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join businesses in Akola who are already benefiting from our data analytics and IT consulting services. Let's discuss your project today!
        </p>
        
        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mx-auto mb-3">
                {achievement.icon}
              </div>
              <div className="text-3xl font-black text-white mb-1">
                {achievement.number}
              </div>
              <div className="text-gray-300 text-sm">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:+919343771276"
            className="group px-10 py-5 bg-white text-red-600 font-black rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-white/25 hover:scale-105 text-lg"
          >
            Call Now: +91 9343771276
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://wa.me/919343771276"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-lg"
          >
            WhatsApp Chat
          </a>
        </div>
        
        {/* Contact info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>info@pioneershub.in</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Akola, Maharashtra</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <span>⏰</span>
            <span>Mon-Sat: 9 AM - 6 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
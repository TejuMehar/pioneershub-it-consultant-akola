import React from "react";
import { Check, Users, TrendingUp, Award, Zap, Heart, Globe } from "lucide-react";

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with 6+ years of experience",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Accelerate your career in data analytics and IT consulting",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Real Projects",
      description: "Work on live client projects and build practical skills",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation First",
      description: "Work with cutting-edge tools and latest technologies",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options for better balance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Make a difference working with clients worldwide",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <Heart className="h-4 w-4 text-red-600" />
            <span className="text-red-600 dark:text-red-400 font-medium text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            More Than Just a
            <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Workplace
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a culture of innovation, growth, and meaningful impact where your career thrives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:-translate-y-2">
                {/* Background image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={benefit.image} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Team Members" },
            { number: "10+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
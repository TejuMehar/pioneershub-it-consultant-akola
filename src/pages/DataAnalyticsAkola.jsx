import React, { useEffect } from "react";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const DataAnalyticsAkola = () => {
  useEffect(() => {
    document.title = "Best Data Analytics Services in Akola 2025 | Pioneershub";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Jan 15, 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              8 min read
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full">Data Analytics Akola</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Best Data Analytics Services in Akola: Complete Guide 2024
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Discover why Akola businesses are choosing professional data analytics services to drive growth and make better decisions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
            alt="Data Analytics Services in Akola"
            className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-8"
          />
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Akola Businesses Need Data Analytics</h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Since launching in August 2025, Pioneershub has quickly become Akola's go-to destination for professional data analytics services. 
            Our innovative approach and cutting-edge solutions are helping local businesses transform their operations through data-driven insights.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Data Analytics Services in Akola</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "Data Cleaning & Preparation",
              "Business Intelligence Dashboards", 
              "Predictive Analytics",
              "Excel Automation & Reporting",
              "SQL Database Analysis",
              "Python Data Processing"
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-slate-800 rounded-xl">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{service}</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Success Stories from Akola</h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            We've helped 10+ businesses in Akola and surrounding areas transform their operations through data analytics since our launch. 
            From retail inventory optimization to manufacturing quality control, our solutions have delivered measurable results 
            for companies across various industries in Maharashtra.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl mb-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Business?</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join the growing number of Akola businesses using data analytics to drive growth and efficiency.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsAkola;
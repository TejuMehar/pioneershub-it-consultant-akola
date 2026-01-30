import React, { useEffect } from "react";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ExcelTrainingAkola = () => {
  useEffect(() => {
    document.title = "Excel Training in Akola - Beginner to Advanced Course | Pioneershub";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Jan 12, 2025
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full">Excel Training Akola</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Excel Training in Akola: From Beginner to Advanced
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Complete Excel training program available in Akola. Learn advanced formulas, automation, and data analysis techniques.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
            alt="Excel Training in Akola"
            className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-8"
          />
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Excel Skills Matter in Akola's Job Market</h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Since launching in August 2025, we've quickly established ourselves as Akola's newest destination for Excel training. 
            Our fresh approach and modern curriculum are designed for today's business needs in Maharashtra.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Excel Training Curriculum</h3>
          
          <div className="space-y-4 mb-8">
            {[
              { level: "Beginner", topics: ["Basic formulas and functions", "Data entry and formatting", "Charts and graphs"] },
              { level: "Intermediate", topics: ["VLOOKUP and XLOOKUP", "Pivot tables and analysis", "Conditional formatting"] },
              { level: "Advanced", topics: ["Macros and VBA", "Power Query and Power Pivot", "Dashboard creation"] }
            ].map((course, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{course.level} Level</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-600 dark:text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Training Options in Akola</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">In-Person Classes</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Hands-on training at our Akola center with personalized attention.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Weekend batches available</li>
                <li>• Small class sizes (max 10 students)</li>
                <li>• Practice with real datasets</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Online Training</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Flexible online sessions for working professionals in Maharashtra.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Evening batch options</li>
                <li>• Recorded sessions for review</li>
                <li>• One-on-one doubt clearing</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl mb-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Master Excel?</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join professionals in Akola who are discovering our innovative Excel training program since our launch in August 2025.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelTrainingAkola;
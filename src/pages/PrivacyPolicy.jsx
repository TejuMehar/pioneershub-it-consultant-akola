import React, { useEffect } from "react";
import { Shield, Eye, Lock, Users, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Pioneershub IT Consulting Akola";
  }, []);
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number)",
        "Usage data and analytics from our website",
        "Communication records and support interactions",
        "Professional information for training and consulting services"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide IT consulting and data analytics services",
        "Deliver training programs and educational content",
        "Communicate about our services and updates",
        "Improve our website and service offerings"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Protection",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers and regular security audits",
        "Limited access to authorized personnel only",
        "Regular data backups and disaster recovery plans"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections or updates to your data",
        "Delete your account and associated data",
        "Opt-out of marketing communications anytime"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-r from-red-800 via-red-900 to-gray-900 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-400/20 rounded-full blur-2xl animate-float-delay-1"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-2 text-white/80 text-sm mb-6">
            <Calendar className="h-4 w-4" />
            Last updated: August 15, 2025
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Your privacy is important to us. This policy explains how Pioneershub collects, uses, and protects your personal information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <Shield className="h-4 w-4 text-red-600" />
            <span className="text-red-600 dark:text-red-400 font-medium text-sm">Your Data is Safe</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Committed to Your Privacy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            At Pioneershub, we believe in transparency and protecting your personal information with the highest standards of security.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:info@pioneershub.in"
              className="px-6 py-3 border-2 border-red-500 text-red-600 dark:text-red-400 font-semibold rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              Email: info@pioneershub.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
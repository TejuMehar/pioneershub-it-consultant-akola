import React, { useEffect } from "react";
import { FileText, AlertCircle, CheckCircle, Scale, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Pioneershub IT Consulting Akola";
  }, []);
  const terms = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Service Agreement",
      content: [
        "IT consulting and data analytics services as described",
        "Training programs and educational content delivery",
        "Professional coaching and mentorship sessions",
        "Custom solutions based on client requirements"
      ]
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate information for service delivery",
        "Respect intellectual property and confidentiality",
        "Use services for legitimate business purposes only",
        "Comply with applicable laws and regulations"
      ]
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Limitations",
      content: [
        "Services provided 'as is' without warranties",
        "No guarantee of specific business outcomes",
        "Limited liability for indirect or consequential damages",
        "Force majeure events beyond our reasonable control"
      ]
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Intellectual Property",
      content: [
        "All training materials and methodologies remain our property",
        "Client data and custom solutions belong to the client",
        "Mutual respect for confidential information",
        "Proper attribution for shared knowledge and resources"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-r from-red-800 via-red-900 to-gray-900 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-red-400/20 rounded-full blur-2xl animate-float-delay-1"></div>
        
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
            Terms of Service
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            These terms govern your use of Pioneershub services. Please read them carefully before engaging with our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <Scale className="h-4 w-4 text-blue-600" />
            <span className="text-red-600 dark:text-red-400 font-medium text-sm">Legal Agreement</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Clear Terms, Fair Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Our terms are designed to protect both parties while ensuring the best possible service delivery and professional relationship.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {terms.map((term, index) => (
            <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                  {term.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {term.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {term.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Terms */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Terms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Payment Terms</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Payment due as per agreed schedule</li>
                <li>• Late payment may incur additional charges</li>
                <li>• Refunds subject to service agreement</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Termination</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Either party may terminate with notice</li>
                <li>• Immediate termination for breach of terms</li>
                <li>• Data return and confidentiality survive termination</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions About These Terms?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service or need clarification on any points, please contact us.
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

export default TermsOfService;
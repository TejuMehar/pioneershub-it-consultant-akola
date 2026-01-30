import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What's the best way to get a quick response?",
      answer: "For urgent queries, WhatsApp (+91 9343771276) is the fastest way to reach us. We typically respond within 2-4 hours during business hours. For detailed project discussions, email works best."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We provide a complimentary 30-minute consultation to understand your requirements and suggest the best solutions. This helps us create a tailored proposal for your specific needs."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "Please share your business type, current challenges, project timeline, and budget range. The more details you provide, the better we can assist you with a customized solution."
    },
    {
      question: "Do you provide services outside Akola?",
      answer: "Absolutely! While we're based in Akola, we serve clients across Maharashtra and India through remote consultations, online training, and on-site visits when needed."
    },
    {
      question: "How quickly can you start a project?",
      answer: "For most projects, we can begin within 1-2 weeks after finalizing requirements. Urgent projects can be accommodated with faster turnaround times based on our current capacity."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with 50% advance and 50% on completion for smaller projects. For larger engagements, we can discuss milestone-based payments that work for both parties."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <HelpCircle className="h-4 w-4 text-red-600" />
            <span className="text-red-600 dark:text-red-400 font-medium text-sm">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Quick answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help with any specific questions about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919343771276"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                Call Now
              </a>
              <a
                href="mailto:info@pioneershub.in"
                className="px-6 py-3 border-2 border-red-500 text-red-600 dark:text-red-400 font-semibold rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
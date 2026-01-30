import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91 9343771276",
      action: "tel:+919343771276",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Send us your requirements",
      contact: "info@pioneershub.in",
      action: "mailto:info@pioneershub.in",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      description: "Quick chat for instant support",
      contact: "+91 9343771276",
      action: "https://wa.me/919343771276",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      contact: "Free 30-min consultation",
      action: "mailto:info@pioneershub.in?subject=Schedule Meeting",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Choose the most convenient way to connect with our team in Akola
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                {method.description}
              </p>
              
              <p className="text-red-600 dark:text-red-400 font-semibold">
                {method.contact}
              </p>
            </a>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Business Hours</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Weekdays</h4>
              <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Weekends</h4>
              <p className="text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
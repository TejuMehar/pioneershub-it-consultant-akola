import React from "react";
import { MapPin, Navigation, Users, Building } from "lucide-react";

const ContactLocation = () => {
  const serviceAreas = [
    "Akola City",
    "Akot",
    "Washim",
    "Amravati",
    "Buldhana",
    "Yavatmal"
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Location & Service Areas
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Based in Akola, serving businesses across Maharashtra
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Head Office
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">Akola, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Navigation className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Service Model</p>
                    <p className="text-gray-600 dark:text-gray-300">On-site visits & Remote consultations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Team Size</p>
                    <p className="text-gray-600 dark:text-gray-300">10+ IT & Data Professionals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Service Areas in Maharashtra
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                * Remote services available across India
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Akola, Maharashtra
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Strategic location serving Central Maharashtra
                  </p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                  <p className="text-2xl font-bold text-red-600">50km</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Service Radius</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                  <p className="text-2xl font-bold text-red-600">24/7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Remote Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
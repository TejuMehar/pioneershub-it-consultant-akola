import React from "react";

const ContactForm = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Enquire About Our <span className="text-red-600">Programs</span>
        </h1>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pioneershub helps you build future-ready skills in IT, Data, and
          Technology. Fill out the form and our experts will connect with you.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Left Side */}
          <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Why Choose Pioneershub?
              </h2>
              <ul className="space-y-4">
                {[
                  "Industry-oriented IT & Data training",
                  "Mentorship from experienced professionals",
                  "Hands-on projects & real-world case studies",
                  "Career guidance & placement support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-200 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">
                Need immediate assistance?
              </h3>
              <p className="text-red-100 mb-2">Call us at +91 9343771276</p>
              <p className="text-sm text-red-200">
                Our team is available 10AM - 6PM, Monday to Saturday
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-2/3 p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="pioneershub"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="info@pioneershub.in"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="+91 xxxxxxxxxx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program Interested In
                  </label>
                  <select
                    name="programs"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-white"
                  >
                    <option value="">Select a Program</option>
                    <option>Data Analytics</option>
                    <option>Data Cleaning & Processing</option>
                    <option>Web Development</option>
                    <option>IT Consulting</option>
                    <option>Career Coaching</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your goals or queries..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-red-600 text-white font-medium rounded-lg shadow-sm hover:bg-red-700 transition duration-300"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

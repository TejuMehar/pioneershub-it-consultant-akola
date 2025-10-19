import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-slate-900 dark:to-slate-800 text-white pt-12 sm:pt-16 md:pt-20 mt-16 sm:mt-20 md:mt-24 relative border-t border-gray-700 dark:border-slate-700">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-4 sm:mb-5 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              <span className="font-extrabold">Web</span>
              <span className="font-semibold">Cultivate</span>
            </h3>
            <p className="text-gray-300 dark:text-slate-400 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              Modern web solutions for growing brands. We specialize in crafting powerful, 
              user-friendly websites tailored to your business objectives.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.linkedin.com/company/webcultivate/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 sm:mb-5 font-semibold text-base sm:text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li><Link to="/" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Home</Link></li>
              <li><Link to="/about" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">About</Link></li>
              <li><Link to="/work-process" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Work Process</Link></li>
              <li><Link to="/pricing" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 sm:mb-5 font-semibold text-base sm:text-lg">Services</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Website Designing</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Website Development</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Graphic Designing</a></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Get Started</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 sm:mb-5 font-semibold text-base sm:text-lg">Contact Info</h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-primary mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-300 dark:text-slate-400 break-all">webcultivate01@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-primary mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-300 dark:text-slate-400">
                  <span className="block sm:inline">+91 7447746247</span>
                  <span className="hidden sm:inline"> || </span>
                  <span className="block sm:inline">+91 7887472660</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-300 dark:text-slate-400">Pune • Amravati • Nagpur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-5 sm:py-6 border-t border-gray-700 dark:border-slate-700 gap-3">
          <p className="text-sm sm:text-base text-gray-400 dark:text-slate-500 text-center md:text-left">&copy; {currentYear} WebCultivate. All rights reserved.</p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <a href="#privacy" className="text-sm sm:text-base text-gray-400 dark:text-slate-500 hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#terms" className="text-sm sm:text-base text-gray-400 dark:text-slate-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

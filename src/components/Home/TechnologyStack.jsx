import React from 'react';

const technologies = [
  {
    name: 'React.js',
    description: 'Building dynamic and interactive web applications.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Next.js',
    description: 'Optimized performance with server-side rendering and SEO.',
    icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp',
  },
  {
    name: 'Tailwind CSS',
    description: 'Modern, utility-first CSS framework for responsive designs.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'Node.js',
    description: 'Scalable and high-performance backend solutions.',
    icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  },
  {
    name: 'React Native',
    description: 'Build mobile apps using React for both iOS and Android.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Java',
    description: 'Robust, object-oriented programming language for backend and Android.',
    icon: 'https://cdn.worldvectorlogo.com/logos/java.svg',
  },
  {
    name: 'Python',
    description: 'Versatile language for backend, data science, and automation.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for fast and flexible data storage.',
    icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  },
  {
    name: 'MySQL',
    description: 'Reliable relational database for structured data management.',
    icon: 'https://cdn.worldvectorlogo.com/logos/mysql-3.svg',
  },
  {
    name: 'Express.js',
    description: 'Minimal and flexible Node.js web application framework.',
    icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
  },
  {
    name: 'Firebase',
    description: 'Platform by Google for building serverless web and mobile apps.',
    icon: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
  },
  {
    name: 'Flutter',
    description: 'Build beautiful native apps with one codebase for iOS and Android.',
    icon: 'https://cdn.worldvectorlogo.com/logos/flutter.svg',
  },
];

const TechnologyStack = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            We leverage cutting-edge technologies to build robust, scalable, and modern solutions
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                 <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-3 sm:mb-4 flex items-center justify-center bg-white dark:bg-slate-700/50 rounded-full border-2 border-blue-500">
                   <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-3/4 h-3/4 object-contain filter grayscale group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                  {tech.name}
                </h3>
                
                {/* Description - Hidden on mobile, visible on larger screens */}
                <p className="hidden sm:block text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

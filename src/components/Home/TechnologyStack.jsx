import React from "react";

const technologies = [
  {
    name: "Excel (Advanced)",
    description: "Data cleaning, automation & analysis with formulas & macros.",
    icon: "/msexcel.webp",
  },
  {
    name: "Python",
    description: "Data processing, analysis & automation using Pandas, NumPy.",
    icon: "/python.webp",
  },
  {
    name: "SQL",
    description: "Query and manage structured data for insights and reporting.",
    icon: "/sql.webp",
  },
  {
    name: "Power BI",
    description: "Visualize and analyze data with interactive dashboards.",
    icon: "/powerbi.webp",
  },
  {
    name: "Tableau",
    description: "Create advanced visual analytics and dashboards.",
    icon: "/tabalu.webp",
  },
  {
    name: "Google Sheets",
    description: "Collaborative spreadsheets with formulas and automation.",
    icon: "/gsheet.webp",
  },
];

const TechnologyStack = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
            <span className="text-gray-900 dark:text-white">Tools &</span>{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-800 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
            We leverage modern tools and technologies to clean, analyze, and
            visualize your data efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6
                         shadow-md hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 border border-gray-200 dark:border-slate-700"
            >
              {/* Icon Wrapper */}
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full
                           flex items-center justify-center shadow-lg"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain
                             group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                {tech.name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

import React from "react";

const WorkProcessPreview = () => {
  const workProcess = [
    {
      step: "01",
      title: "Data Collection",
      description:
        "Gather raw data from multiple sources including databases, spreadsheets, and APIs to ensure completeness.",
    },
    {
      step: "02",
      title: "Data Cleaning",
      description:
        "Remove duplicates, correct inconsistencies, and standardize formats to ensure accurate and reliable datasets.",
    },
    {
      step: "03",
      title: "Data Transformation",
      description:
        "Convert cleaned data into structured formats suitable for analysis, reporting, and visualization.",
    },
    {
      step: "04",
      title: "Data Analysis",
      description:
        "Perform statistical analysis and generate insights using advanced analytics tools and Excel automation.",
    },
    {
      step: "05",
      title: "Visualization & Reporting",
      description:
        "Create clear and interactive dashboards to help stakeholders understand trends, patterns, and actionable insights.",
    },
    {
      step: "06",
      title: "Automation & Delivery",
      description:
        "Automate repetitive tasks and workflows, deliver final outputs, and provide ongoing support for your data-driven solutions.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Work Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A structured approach to data cleaning, analysis, and delivery to
            ensure accurate insights and reliable results.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {workProcess.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-slate-700
              rounded-xl p-8
              hover:border-red-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-red-600 font-bold text-lg">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessPreview;

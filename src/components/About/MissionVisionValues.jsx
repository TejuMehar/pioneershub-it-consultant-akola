import React from "react";

const MissionVisionValues = () => {
  const cards = [
    {
      title: "Our Mission",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        "To help businesses unlock the true value of their data through accurate data cleaning, reliable analytics, and expert IT consulting that drives confident decision-making.",
    },
    {
      title: "Our Vision",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      description:
        "To become a trusted data and analytics partner for growing businesses, recognized for precision, transparency, and long-term impact.",
    },
    {
      title: "Our Values",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      description:
        "Accuracy, integrity, continuous learning, and client success guide everything we do at PioneersHub.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            What Drives <span className="text-red-600">PioneersHub</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Our mission, vision, and values define how we work, think, and
            deliver data-driven solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-10 rounded-2xl
                         shadow-lg border border-gray-200 dark:border-slate-700
                         text-center transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1
                         hover:border-red-500"
            >
              <div className="flex items-center justify-center text-red-600 mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const CompanyOverview = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once
        }
      },
      {
        threshold: 0.3, // trigger when 30% visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
              About Pioneershub
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Empowering businesses through IT consulting, data analytics, and
              professional coaching.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ease-out delay-150 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Driving Growth with Technology & Data
              </h3>

              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Pioneershub delivers reliable data cleaning, analytics
                solutions, and IT consulting that help businesses make confident
                decisions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We also provide hands-on coaching for individuals to build
                real-world technology skills.
              </p>
            </div>

            {/* Feature List */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="space-y-4">
                {[
                  "Data Cleaning & Analytics",
                  "IT Consulting Services",
                  "Professional Tech Coaching",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full 
  bg-gradient-to-r from-red-400 via-red-500 to-red-800"
                    >
                      <Check className="h-4 w-4 text-white" />
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 ease-out delay-500 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Pioneershub Team"
                className="h-96 w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur dark:bg-gray-800/90">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { value: "6+", label: "Years" },
                      { value: "50+", label: "Projects" },
                      { value: "25+", label: "Clients" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

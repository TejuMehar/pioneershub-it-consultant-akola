import React, { useEffect } from "react";
import CareerHero from "../components/Career/CareerHero";
import JobOpenings from "../components/Career/JobOpenings";
import WhyJoinUs from "../components/Career/WhyJoinUs";
import CareerCTA from "../components/Career/CareerCTA";

const Career = () => {
  useEffect(() => {
    document.title = "Careers - Join Pioneershub IT Team in Akola | Internship Opportunities";
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <CareerHero />
      <WhyJoinUs />
      <JobOpenings />
      <CareerCTA />
    </div>
  );
};

export default Career;
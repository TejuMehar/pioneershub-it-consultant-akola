import React from "react";
import { PageHeader } from "../components/shared";
import {
  AboutSection,
  MissionVisionValues,
  WhyChooseUs,
} from "../components/About";
// import TrustedClient from "../components/About/TrustedClient";
import Hero from "../components/About/Hero";
import AboutCTA from "../components/About/CTA";

const About = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Hero />
      <AboutSection />
      <MissionVisionValues />
      {/* <TrustedClient /> */}
      <WhyChooseUs />
      <AboutCTA />
    </div>
  );
};

export default About;

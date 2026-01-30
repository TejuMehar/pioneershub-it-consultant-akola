import React, { useEffect } from "react";
import {
  HeroSection,
  ServicesSection,
  GrowthSection,
  ProjectsSection,
  WorkProcessPreview,
  CTASection,
  TechnologyStack,
  // Expertise,
} from "../components/Home";

import Expertise from "../components/Home/Expertise";
import FAQ from "../components/Home/HomeFAQ";
import CompanyOverview from "../components/Home/CompnayView";

const Home = () => {
  useEffect(() => {
    document.title = "Pioneershub - IT Consulting & Data Analytics Services in Akola";
  }, []);

  return (
    //  classname="pt-10"
    <div>
      <HeroSection />
      <CompanyOverview />
      <Expertise />
      <GrowthSection />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <TechnologyStack />
      <WorkProcessPreview />
      <CTASection />
      <FAQ />
    </div>
  );
};

export default Home;

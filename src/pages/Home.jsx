import React from 'react';
import {
  HeroSection,
  ServicesSection,
  GrowthSection,
  ProjectsSection,
  WorkProcessPreview,
  CTASection
} from '../components/Home';

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesSection />
      <GrowthSection />
      <ProjectsSection />
      <WorkProcessPreview />
      <CTASection />
    </div>
  );
};

export default Home;


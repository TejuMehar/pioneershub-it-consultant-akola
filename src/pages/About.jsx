import React from 'react';
import { PageHeader } from '../components/shared';
import { AboutSection, MissionVisionValues, WhyChooseUs } from '../components/About';
import TrustedClient from '../components/About/TrustedClient';

const About = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="About WebCultivate"
        subtitle="Your Trusted Partner in Digital Transformation"
      />
      <AboutSection />
      <MissionVisionValues />
      <TrustedClient/>
      <WhyChooseUs />
    </div>
  );
};

export default About;


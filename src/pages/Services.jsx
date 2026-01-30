import React, { useEffect } from "react";
import Hero from "../components/services/Hero";
import OurServices from "../components/services/OurServices";
import ServiceCTA from "../components/services/ServicesCTA";

export default function Services() {
  useEffect(() => {
    document.title = "Services - Data Analytics & IT Consulting Akola | Pioneershub";
  }, []);

  return (
    <div>
      <Hero />
      <OurServices />
      <ServiceCTA />
    </div>
  );
}

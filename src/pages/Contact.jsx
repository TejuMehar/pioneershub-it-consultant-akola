import React, { useEffect } from "react";
import { PageHeader } from "../components/shared";
import { ContactInfo, ContactForm } from "../components/Contact";
import ContactHero from "../components/Contact/ContactHero";
import ContactMethods from "../components/Contact/ContactMethods";
import ContactFAQ from "../components/Contact/ContactFAQ";
import ContactLocation from "../components/Contact/ContactLocation";
import ContactCTA from "../components/Contact/ContactCTA";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Get IT Consulting Services in Akola | Pioneershub";
  }, []);

  return (
    <div>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactLocation />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default Contact;

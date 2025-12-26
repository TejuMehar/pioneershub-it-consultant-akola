import React from "react";
import { PageHeader } from "../components/shared";
import { ContactInfo, ContactForm } from "../components/Contact";
import ContactHero from "../components/Contact/ContactHero";
const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default Contact;

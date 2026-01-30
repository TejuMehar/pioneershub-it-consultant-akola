import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkProcess from "./pages/WorkProcess";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import DataAnalyticsAkola from "./pages/DataAnalyticsAkola";
import ExcelTrainingAkola from "./pages/ExcelTrainingAkola";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Loader from "./components/Loader";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Show loader for 2 seconds (you can adjust)
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader />; // 👈 Show loader first
  // }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="work-process" element={<WorkProcess />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="pricing" element={<Pricing />} />
          {/* <Route path="team" element={<Team />} /> */}
          <Route path="career" element={<Career />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/data-analytics-akola" element={<DataAnalyticsAkola />} />
          <Route path="blog/excel-training-akola" element={<ExcelTrainingAkola />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

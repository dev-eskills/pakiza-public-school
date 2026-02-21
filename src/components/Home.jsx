import React from "react";
import Hero from "./homepage/HeroBanner";
import About from "./homepage/About";
import FacilitiesSection from "./homepage/FacilitiesSection";
import WhyChoose from "./homepage/WhyChoose";
import NewsSection from "./homepage/NewsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FacilitiesSection />
      <WhyChoose/>
      <NewsSection/>
    </>
  );
};

export default Home;

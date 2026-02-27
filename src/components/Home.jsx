import React from "react";
import Hero from "./homepage/HeroBanner";
import About from "./homepage/About";
import FacilitiesSection from "./homepage/FacilitiesSection";
import WhyChoose from "./homepage/WhyChoose";
import NewsSection from "./homepage/NewsSection";
import ReviewsSection from "./homepage/ReviewSection";
import FooterImages from "./ui/FooterImages";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FacilitiesSection />
      <WhyChoose />
      <NewsSection />
      <ReviewsSection />
    <FooterImages/>
    </>
  );
};

export default Home;

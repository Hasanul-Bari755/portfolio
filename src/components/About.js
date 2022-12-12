import React from "react";
import AboutContent from "../childComponents/AboutContent";
import Footer from "../childComponents/Footer";
import HeroImage2 from "../childComponents/HeroImage2";
import Navbar from "../childComponents/Navbar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="ABOUT" text="This is text"></HeroImage2>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  );
};

export default About;

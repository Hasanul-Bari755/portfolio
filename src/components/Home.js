import React from "react";
import Footer from "../childComponents/Footer";
import HeroImage from "../childComponents/HeroImage";
import Navbar from "../childComponents/Navbar";
import WorkAll from "../childComponents/WorkAll";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <WorkAll></WorkAll>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../childComponents/Footer";
import HeroImage2 from "../childComponents/HeroImage2";
import Navbar from "../childComponents/Navbar";
import Work from "../childComponents/Work";
import WorkAll from "../childComponents/WorkAll";

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="PROJECTS" text="This is text"></HeroImage2>
      <WorkAll></WorkAll>
      <Footer></Footer>
    </div>
  );
};

export default Project;

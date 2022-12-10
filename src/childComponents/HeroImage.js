import React from "react";
import "./HeroImage.css";
import IntroImg from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p>Hi,I'M MD. HASANUL BARI</p>
        <h1>Web Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
import React1 from "../assests/react1.jpg";
import React2 from "../assests/react2.webp";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          This is Md. Hasanul Bari. I am adapt with Full Stack web Developing. I
          am working with Front-End by HTML,CSS, Tailwind, Bootstrap,
          Javascript,React.js. Back-End by Node.js, Express.js, MongoDb,
          Firebase. I love problem solving. I am hard working ,love to code
          person .I am a quick learner and love to learn new technology. I take
          pride in producing high-quality work and keeping effective
          communication.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

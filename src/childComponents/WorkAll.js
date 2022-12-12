import React from "react";
import "./WorkCard.css";
import pro1 from "../assests/project1.png";
import { NavLink } from "react-router-dom";
import datas from "./WortkData";
import Work from "./Work";
const WorkAll = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {datas.map((data, i) => (
          <Work data={data} key={i}></Work>
        ))}
      </div>
    </div>
  );
};

export default WorkAll;

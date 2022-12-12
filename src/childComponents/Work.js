import React from "react";
import "./WorkCard.css";
import pro1 from "../assests/project1.png";
import { NavLink } from "react-router-dom";
const Work = ({ data }) => {
  const { img, title, text, live, server, client } = data;
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <a href={live} target="_blank" className="btn">
            Live
          </a>
          <a href={client} target="_blank" className="btn">
            Client
          </a>
          <a href={server} target="_blank" className="btn">
            Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;

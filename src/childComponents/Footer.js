import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaHome>
            <div>
              <p>265/2,west shewrapara,Mirpur,Dhaka</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaPhone>
            </h4>
            <div>
              <p>+8801745360747</p>
            </div>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaMailBulk>
            </h4>
            <div>
              <p>hasanulbari8@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            atque aperiam maiores tempore nihil ullam, illum fuga animi impedit.
            Iste?
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaFacebook>
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaTwitter>
            <FaInstagram
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

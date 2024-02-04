import React from "react";
import "./footer.css";
import logo from "../images/logo.png";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import map from "../images/map.png";

const Footer = () => {
  return (
    <div className="main_con">
      <div className="logo">
        <img src={logo}></img>
        <h2>Zenith</h2>
      </div>
      <div className="middle">
        <ul className="ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Event</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
        <button>View Brochure</button>
        <div className="social">
          <ul className="ulsocila">
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Mail />
              </a>
            </li>
            <li>
              <a href="#">
                <Phone />
              </a>
            </li>
            <li>
              <a href="#">
                <MapPin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="map">
        <img src={map}></img>
      </div>
      
    </div>
  );
};

export default Footer;

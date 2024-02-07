import React, { useState } from "react";
import "./navbar.css";
// import menu from "../../Images/menu.png";
// import close from "../../Images/closeMenu.png";
// import logo from "../../Images/logo.png";

export default function Navbar() {
  const [c, setC] = useState(0);
  const [imgSrc, setImgSrc] = useState("../../Images/menu.png");

  const handleMenu = () => {
    if (c === 0) {
      document.getElementById("menu-ul").style.display = "flex";
      setImgSrc("../../Images/menu.png");
      setC(1);
    } else {
      document.getElementById("menu-ul").style.display = "none";
      setImgSrc("../../Images/menu.png");
      setC(0);
    }
  };

  return (
    <div className="navbar-main-div">
      <div className="logo-black-div">
        <div className="logo-black-inner-div">
          <img src="../../Images/menu.png" alt="logo" />
          <h3>ZENITH</h3>
        </div>
      </div>
      <div className="navbar-inner-div">
        <ul id="menu-ul">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/">OUR TEAM</a>
          </li>

          <a className="middle2">Register</a>

          <a className="middle2">Brochure</a>
        </ul>
        <img onClick={handleMenu} id="menu-logo" src={imgSrc} alt="animage" />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./heropage.css";
import player from "../../Images/player.png";
import ball from "../../Images/ball.png";
import logo from "../../Images/logo.png";
import Atropos from "atropos/react";
import Timer from "../timer/timer";
import zenithLogo from "../../Images/zenith_logo.png";

export default function Heropage() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setIsScrollingDown(currentScrollPosition > prevScrollPosition);
    setPrevScrollPosition(currentScrollPosition);
    if (isScrollingDown) {
      document.getElementById("zenith-logo-nav").style.top = "-160px";
    }
    else {
      document.getElementById("zenith-logo-nav").style.top = "0px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, handleScroll]);
  return (
    <div className="heropage-main-div">
      <div id="zenith-logo-nav" className="logo-black-div">
        <div className="logo-black-inner-div">
          <img src={logo} alt="logo" />
          <h3>ZENITH</h3>
        </div>
      </div>
      <div className="head-heading">
        <img src={zenithLogo} alt="zenithlogo" />
      </div>
      <Atropos>
        <img data-atropos-offset="-8" id="player" src={player} alt="player"></img>
        <img data-atropos-offset="20" id="ball" src={ball} alt="ball"></img>
      </Atropos>
      <div className="countdown">
        <Timer date="March 14 2024" />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import "./navbar.css";
import menu from "../../Images/menu.png";
import close from "../../Images/closeMenu.png";

export default function Navbar() {

  const [ c, setC ] = useState(0);
  const [ imgSrc, setImgSrc ] = useState(menu);

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setIsScrollingDown(currentScrollPosition > prevScrollPosition);
    setPrevScrollPosition(currentScrollPosition);
    if (isScrollingDown) {
      document.getElementById("navbar").style.top = "-80px";
    }
    else {
      document.getElementById("navbar").style.top = "0px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, handleScroll]);
 
  const handleMenu = () => {
    if (c === 0 ){
      document.getElementById("menu-ul").style.display = "flex";
      setImgSrc(close);
      setC(1);
    }
    else {
      document.getElementById("menu-ul").style.display = "none";
      setImgSrc(menu);
      setC(0);
    }
  }

  return (
    <div id='navbar' className='navbar-main-div'>
      <div className='navbar-inner-div'>
        <ul id='menu-ul'>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#events'>EVENTS</a></li>
          <li><a href='#our_team'>OUR TEAM</a></li>
          <li><a className="nav-but" href='#register'>REGISTER</a></li>
          <li><a className="nav-but" href='#rbrochure'>BROCHURE</a></li>
        </ul>
        <img onClick={handleMenu} id='menu-logo' src={imgSrc} alt='animage' />
      </div>
    </div>
  )
}

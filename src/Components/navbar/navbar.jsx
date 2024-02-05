import React, { useState } from 'react';
import "./navbar.css";
import menu from "../../Images/menu.png";

export default function Navbar() {

  const [ c, setC ] = useState(0);
 
  const handleMenu = () => {
    if (c === 0 ){
      document.getElementById("menu-ul").style.display = "flex";
      setC(1);
    }
    else {
      document.getElementById("menu-ul").style.display = "none";
      setC(0);
    }
  }

  return (
    <div className='navbar-main-div'>
      <div className='navbar-inner-div'>
        <ul id='menu-ul'>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#events'>EVENTS</a></li>
          <li><a href='#our_team'>OUR TEAM</a></li>
          <li><a className="nav-but" href='#register'>REGISTER</a></li>
          <li><a className="nav-but" href='#rbrochure'>BROCHURE</a></li>
        </ul>
        <img onClick={handleMenu} id='menu-logo' src={menu} alt='animage' />
      </div>
    </div>
  )
}

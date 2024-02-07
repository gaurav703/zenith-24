import React from 'react';
import Heropage from '../heropage/heropage';
import About from '../about/about';
import Navbar from "../navbar/navbar.jsx";

export default function Homepage() {
  return (
    <div>
        <Navbar />
        <Heropage />
        <About />
    </div>
  )
}

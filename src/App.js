import logo from "./logo.svg";
import "./App.css";
import Heropage from "./Components/heropage/heropage";
import About from "./Components/about/about";
import Mentor from "./Components/MentorsPage/mentor.js";
import React from 'react';
import Footer from "./Components/footer/Footer.jsx"


const App = () => {
  return (
    <div className="App">
      <Heropage />
      <About />
      <Mentor />
       <Footer/>
    <div>
  
  )
}

export default App
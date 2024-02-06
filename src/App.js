import logo from "./logo.svg";
import "./App.css";
import Heropage from "./Components/heropage/heropage";
import About from "./Components/about/about";
import Mentor from "./Components/MentorsPage/mentor.js";
import Footer from "./Components/footer/Footer.jsx";
import Loader from "./Components/loader/loader";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Homepage from "./Components/homepage/homepage";
// import Footer from "./Components/footer/Footer.jsx";
import Event from "./Components/Event/Event.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Homepage />}></Route>
      </Routes>
      <Mentor />
      <Footer />
      {/* <Event /> */}
    </div>
  );
}

export default App;

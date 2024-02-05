import logo from "./logo.svg";
import "./App.css";
import Heropage from "./Components/heropage/heropage";
import About from "./Components/about/about";
import Navbar from "./Components/navbar/navbar";
import Loader from "./Components/loader/loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Heropage />
      <About />
    </div>
  );
}

export default App;

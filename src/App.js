// import logo from "./logo.svg";
import "./App.css";
import Loader from "./Components/loader/loader";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Homepage from "./Components/homepage/homepage";

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
        <Route path="/" element={loading ? <Loader /> : <Homepage /> } ></Route>
      </Routes>
    </div>
  );
}

export default App;

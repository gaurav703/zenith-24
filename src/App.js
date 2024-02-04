import logo from "./logo.svg";
import "./App.css";
import Heropage from "./Components/heropage/heropage";
import About from "./Components/about/about";
import Mentor from "./Components/MentorsPage/mentor.js";

function App() {
  return (
    <div className="App">
      <Heropage />
      <About />
      <Mentor />
    </div>
  );
}

export default App;

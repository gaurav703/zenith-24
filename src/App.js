import logo from './logo.svg';
import './App.css';
import Heropage from './Components/heropage/heropage';
import About from './Components/about/about';
import Navbar from './Components/navbar/navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Heropage />
    <About />
    </div>
  );
}

export default App;

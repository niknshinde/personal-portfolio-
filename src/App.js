import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Portfolio/>
    </div>
  );
}

export default App;

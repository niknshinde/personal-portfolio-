import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className="app_outer">
       <Home/>
       <About/>
       <Skills/>
       <Portfolio/>
       <Contact />
       </div>
 
      <Footer/>
    </div>
  );
}

export default App;

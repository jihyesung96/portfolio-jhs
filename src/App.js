import { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Aboutme from './page/Aboutme';
import Contact from './page/Contact';
import FAQ from './page/FAQ';
import Introduction from './page/Introduction';
import Project from './page/Project';
import Share from './page/Share';
import Title from './page/Title';

function App() {
  function scroll (e){
    console.log(window.scrollY)
  }
  return (
    <div className="App" onMouseMove={()=>scroll()}>
      <Headers/>
      <Title/>
      <Introduction />
      <Aboutme />
      <Share/>
      <Project />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

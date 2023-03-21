import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Main from './page/Main';

function App() {
  const [scrollnum, setScrollNum ] = useState(0)
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }
  const handleScroll = () => {
    console.log("scrolling");
    console.log(window.scrollY)
    
    if (window.scrollY >= 0 && window.scrollY < 301) {
      setScrollNum(1);
    }else if(window.scrollY >= 301 && window.scrollY < 800){
      setScrollNum(2);
    }else if(window.scrollY >= 800 && window.scrollY < 1045){
      setScrollNum(3);
    }else if(window.scrollY >= 1045 && window.scrollY < 1300){
      setScrollNum(4);
    }else if(window.scrollY >= 1300 && window.scrollY < 1545){
      setScrollNum(5);
    }else if(window.scrollY >= 1545 && window.scrollY < 2300){
      setScrollNum(6);
    }else if(window.scrollY >= 2300 && window.scrollY < 2460){
      setScrollNum(7);
    }else if(window.scrollY >= 2460 && window.scrollY < 2800){
      setScrollNum(8);
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Headers scrollToTop={scrollToTop}/>
      <Routes>
        <Route path='/' element={<Main scrollnum={scrollnum} scrollToTop={scrollToTop}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

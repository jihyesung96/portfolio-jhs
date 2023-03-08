import { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Main from './page/Main';
import Detailjava from './page/project/Detailjava';
import Detailphp from './page/project/Detailphp';
import Detailreact from './page/project/Detailreact';

function App() {
  const [scrollnum, setScrollNum ] = useState(0)
  function scroll (e){
    console.log(window.scrollY)
  }
  const targetRef = useRef(null);  
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
    }else if(window.scrollY >= 1545 && window.scrollY < 2045){
      setScrollNum(6);
    }else if(window.scrollY >= 2045 && window.scrollY < 2200){
      setScrollNum(7);
    }else if(window.scrollY >= 2200 && window.scrollY < 2400){
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
      <Headers/>
      <Routes>
        <Route path='/' element={<Main scrollnum={scrollnum}/>}/>
        <Route path='/detailJava' element={<Detailjava/>}/>
        <Route path='/detailPhp' element={<Detailphp/>}/>
        <Route path='/detailReact' element={<Detailreact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
